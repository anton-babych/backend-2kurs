package controller;

import Entities.Helmet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import services.HelmetService;

import java.util.List;

@Controller
public class HelmetController {
    @Autowired
    private HelmetService service;

    @GetMapping("/")
    public String HomePage(Model model){
        List<Helmet> helmets = service.read();
        model.addAttribute("helmets", helmets);
        return "index";
    }
    @GetMapping("/create")
    public String Create(Model model){
        Helmet helmet = new Helmet();
        model.addAttribute("helmet", helmet);
        return "create";
    }
    @PostMapping("/create")
    public String Save(@ModelAttribute("helmet") Helmet helmet) {
        service.create(helmet);
        return "redirect:/";
    }
    @GetMapping("/update/{id}")
    public ModelAndView Update(@PathVariable(name = "id") long id){
        ModelAndView mav = new ModelAndView("update");
        Helmet helmet = service.get(id);
        mav.addObject("helmet", helmet);
        return mav;
    }

    @GetMapping("/delete/{id}")
    public String Delete(@PathVariable(name = "id") long id){
        service.delete(id);
        return "redirect:/";
    }
}