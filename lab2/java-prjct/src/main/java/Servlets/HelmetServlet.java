package Servlets;

import Crud.ICrud;
import Entities.Entity;
import Entities.HelmetEntity;
import Services.Helmet.HelmetService;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/api/helmets")
public class HelmetServlet extends HttpServlet {

    private final IServletConfig config;
    ICrud service;

    public HelmetServlet() {
        config = new FileServletConfig();
        this.service = config.generateConfig(ServletConfig.EntityType.Helmet);
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Entity[] data = service.read();

        PrintWriter out = response.getWriter();
        String someJson = new Gson().toJson(data);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.addHeader("Access-Control-Allow-Origin", "*");

        out.print(someJson);
        out.flush();
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String json = request.getReader().lines().reduce("",String::concat);
        Gson gson = new Gson();

        HelmetEntity entity = gson.fromJson(json, HelmetEntity.class);
        service.update(entity);
    }
}
