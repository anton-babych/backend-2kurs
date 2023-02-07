package Servlets;

import Entities.Entity;
import com.google.gson.Gson;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/api/armors")
public class ArmorServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Entity[] data = {
                new Entity("armor 1", 200, "https://ukrainianarmor.com/wp-content/uploads/2022/08/img_9185_edit-1024x1024-1-1.png"),
                new Entity("armor 2", 20015, "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_8931.png"),
                new Entity("armor 3", 215, "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_1317_lab-1024x1024-1.png"),
                new Entity("armor 4", 15, "https://ukrainianarmor.com/wp-content/uploads/2022/07/2-2-1024x1024-1.png"),
                new Entity("armor 5", 15, "https://ukrainianarmor.com/wp-content/uploads/2022/06/uarm_2020_new7165.png")
        };

        PrintWriter out = response.getWriter();
        String someJson = new Gson().toJson(data);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.addHeader("Access-Control-Allow-Origin", "*");

        out.print(someJson);
        out.flush();
    }
}
