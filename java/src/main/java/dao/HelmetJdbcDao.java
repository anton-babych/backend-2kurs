package dao;


import enitities.Helmet;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class HelmetJdbcDao {
    private static final String JDBC_URL = "jdbc:postgresql://localhost:5432/helmets";
    private static final String JDBC_USERNAME = "anton";
    private static final String JDBC_PASSWORD = "0000";

    public List<Helmet> getAllHelmets() {
        List<Helmet> helmets = new ArrayList<>();

        try (Connection connection = DriverManager.getConnection(JDBC_URL, JDBC_USERNAME, JDBC_PASSWORD);
             Statement statement = connection.createStatement()) {
            String query = "SELECT * FROM helmets";
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String description = resultSet.getString("description");
                String imageUrl = resultSet.getString("image_url");
                int price = resultSet.getInt("price");

                Helmet helmet = new Helmet(id, name, description, imageUrl, price);
                helmets.add(helmet);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return helmets;
    }

    public void saveHelmet(Helmet helmet) {
        try (Connection connection = DriverManager.getConnection(JDBC_URL, JDBC_USERNAME, JDBC_PASSWORD);
             PreparedStatement statement = connection.prepareStatement(
                     "INSERT INTO helmets (name, description, image_url, price) VALUES (?, ?, ?, ?)")) {
            statement.setString(1, helmet.getName());
            statement.setString(2, helmet.getDescription());
            statement.setString(3, helmet.getImage_url());
            statement.setInt(4, helmet.getPrice());

            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void updateHelmet(Helmet helmet) {
        try (Connection connection = DriverManager.getConnection(JDBC_URL, JDBC_USERNAME, JDBC_PASSWORD);
             PreparedStatement statement = connection.prepareStatement(
                     "UPDATE helmets SET name = ?, description = ?, image_url = ?, price = ? WHERE id = ?")) {
            statement.setString(1, helmet.getName());
            statement.setString(2, helmet.getDescription());
            statement.setString(3, helmet.getImage_url());
            statement.setInt(4, helmet.getPrice());
            statement.setLong(5, helmet.getId());

            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteHelmet(long id) {
        try (Connection connection = DriverManager.getConnection(JDBC_URL, JDBC_USERNAME, JDBC_PASSWORD);
             PreparedStatement statement = connection.prepareStatement(
                     "DELETE FROM helmets WHERE id = ?")) {
            statement.setLong(1, id);

            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}