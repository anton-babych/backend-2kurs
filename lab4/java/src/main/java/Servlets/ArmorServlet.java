package Servlets;

import Crud.ICrud;
import Entities.ArmorEntity;
import Entities.Entity;
import Services.SqlService;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/api/armors")
public class ArmorServlet extends HttpServlet {
    ICrud service;

    public void destroy() {
        try {
            ((SqlService) service).getConnection().close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public ArmorServlet() {
        super();

        service = new SqlService();
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        List<Entity> data = service.read();

        PrintWriter out = response.getWriter();
        String someJson = new Gson().toJson(data.toArray());

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.addHeader("Access-Control-Allow-Origin", "*");

        out.print(someJson);
        out.flush();
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        String json = request.getReader().lines().reduce("",String::concat);
        Gson gson = new Gson();

        ArmorEntity entity = gson.fromJson(json, ArmorEntity.class);
        service.update(entity);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String json = req.getReader().lines().reduce("",String::concat);
        Gson gson = new Gson();

        ArmorEntity entity = gson.fromJson(json, ArmorEntity.class);
        service.create(entity);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String json = req.getReader().lines().reduce("",String::concat);
        Gson gson = new Gson();

        ArmorEntity entity = gson.fromJson(json, ArmorEntity.class);
        service.delete(entity);
    }
}
