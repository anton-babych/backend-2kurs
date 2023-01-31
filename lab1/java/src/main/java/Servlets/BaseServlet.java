//package Servlets;
//
//import Entities.BaseEntity;
//import com.google.gson.Gson;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.annotation.WebServlet;
//import jakarta.servlet.http.HttpServlet;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//import java.io.IOException;
//import java.io.PrintWriter;
//
//import static java.lang.System.out;
//
//public abstract class BaseServlet extends HttpServlet {
//    protected BaseEntity[] data;
//    @Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        PrintWriter out = response.getWriter();
//
////        for (BaseEntity entity : data) {
////            String someJson = new Gson().toJson(entity);
////            out.print(someJson);
////        }
//
//        String someJson = new Gson().toJson(data[0]);
//        out.print(someJson);
//
//        response.setContentType("application/json");
//        response.setCharacterEncoding("UTF-8");
//        response.addHeader("Access-Control-Allow-Origin", "*");
//
//        out.flush();
//    }
//
//    @Override
//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//
//    }
//}
