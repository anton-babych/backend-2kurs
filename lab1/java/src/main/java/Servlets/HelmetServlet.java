package Servlets;

import Entities.BaseEntity;
import com.google.gson.Gson;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/api/helmets")
public class HelmetServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        BaseEntity[] data = {
                new BaseEntity("helmet 1", 200, "https://ukrainianarmor.com/wp-content/uploads/2023/01/pasgt-feature.png"),
                new BaseEntity("helmet 2", 20015, "https://ukrainianarmor.com/wp-content/uploads/2022/12/img_5752.jpg"),
                new BaseEntity("helmet 3", 124, "https://ukrainianarmor.com/wp-content/uploads/2022/04/sholom-2.jpg"),
                new BaseEntity("helmet 4", 215134, "https://ukrainianarmor.com/wp-content/uploads/2022/04/sholom.jpg"),
        };

        PrintWriter out = response.getWriter();

        String someJson = new Gson().toJson(data);
        out.print(someJson);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.addHeader("Access-Control-Allow-Origin", "*");

        out.flush();
    }
}
