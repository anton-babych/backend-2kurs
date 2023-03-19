package Services;

import Crud.ICrud;
import Entities.Entity;
import jdbc.Connect;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SqlService implements ICrud {
    Connection connection;
    List<Entity> list = new ArrayList<>();

    public SqlService() {

        this.connection = new Connect().getCon();
        System.out.println(connection);
    }

    public Connection getConnection() {
        return connection;
    }

    public void setConnection(Connection connection) {
        this.connection = connection;
    }

    @Override
    public List<Entity> read() {
        try (Statement st = connection.createStatement(); ResultSet rs = st.executeQuery("SELECT * FROM entity;");) {
            while (rs.next()) {
                list.add(new Entity(rs.getString(1), rs.getInt(3),rs.getString(2)));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public void update(Entity entity) {
        try (PreparedStatement st = connection
                .prepareStatement("UPDATE entity " + "SET \"name\"=?, \"url\"=?, \"price\"=? WHERE id=?;")) {
            st.setString(1, entity.getName());
            st.setString(2, entity.getUrl());
            st.setInt(3, entity.getPrice());
            st.setString(4, entity.getId());
            st.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @Override
    public void create(Entity entity) {
        try (PreparedStatement st = connection.prepareStatement("INSERT INTO entity (name, url, price) " + "VALUES (?,?,?)")) {
            st.setString(1, entity.getName());
            st.setString(2, entity.getUrl());
            st.setInt(3, entity.getPrice());
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(Entity entity) {
        try (PreparedStatement st = connection
                .prepareStatement("DELETE FROM entity WHERE id=?;")) {
            st.setString(1, entity.getId());
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
