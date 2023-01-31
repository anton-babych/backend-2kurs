package Servlets;

import Entities.BaseEntity;
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
        BaseEntity[] data = {
                new BaseEntity("armor 1", 200, "https://ukrainianarmor.com/wp-content/uploads/2022/08/img_9185_edit-1024x1024-1-1.png"),
                new BaseEntity("armor 2", 20015, "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_8931.png"),
                new BaseEntity("armor 3", 215, "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_1317_lab-1024x1024-1.png"),
                new BaseEntity("armor 4", 15, "https://ukrainianarmor.com/wp-content/uploads/2022/07/2-2-1024x1024-1.png"),
                new BaseEntity("armor 5", 15, "https://ukrainianarmor.com/wp-content/uploads/2022/06/uarm_2020_new7165.png")
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

//@WebServlet(urlPatterns = {"/armors-test"})
//public class ArmorServlet extends BaseServlet {
//    BaseEntity[] startData = {
//            new BaseEntity("name1", 2000, "img"),
//            new BaseEntity("name2", 2020, "img"),
//            new BaseEntity("name3", 22410, "img"),
//            new BaseEntity("name4", 200, "img"),
//            new BaseEntity("name5", 20250, "img")
//    };
//    ArmorServlet(){
//       this.data = startData;
//    }
//}


