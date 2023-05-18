package servlets;

import com.google.gson.Gson;
import dao.HelmetJdbcDao;
import enitities.Helmet;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

@WebServlet("*/api/helmets/")
public class HelmetServlet extends HttpServlet {
    private HelmetJdbcDao helmetDao;
    private Gson gson;

    @Override
    public void init() throws ServletException {
        super.init();
        helmetDao = new HelmetJdbcDao();
        gson = new Gson();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        List<Helmet> helmets = helmetDao.getAllHelmets();
        String json = gson.toJson(helmets);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("name");
        String description = request.getParameter("description");
        String imageUrl = request.getParameter("image_url");
        int price = Integer.parseInt(request.getParameter("price"));

        Helmet newHelmet = new Helmet();
        newHelmet.setName(name);
        newHelmet.setDescription(description);
        newHelmet.setImage_url(imageUrl);
        newHelmet.setPrice(price);

        helmetDao.saveHelmet(newHelmet);

        response.setStatus(HttpServletResponse.SC_OK);
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Integer id = Integer.parseInt(request.getParameter("id"));
        String name = request.getParameter("name");
        String description = request.getParameter("description");
        String imageUrl = request.getParameter("image_url");
        int price = Integer.parseInt(request.getParameter("price"));

        Helmet existingHelmet = new Helmet();
        existingHelmet.setId(id);
        existingHelmet.setName(name);
        existingHelmet.setDescription(description);
        existingHelmet.setImage_url(imageUrl);
        existingHelmet.setPrice(price);

        helmetDao.updateHelmet(existingHelmet);

        response.setStatus(HttpServletResponse.SC_OK);
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Long id = Long.parseLong(request.getParameter("id"));
        helmetDao.deleteHelmet(id);

        response.setStatus(HttpServletResponse.SC_OK);
    }
}