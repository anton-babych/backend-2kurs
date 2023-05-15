package controller;


import entities.Helmet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;
import repository.HelmetRepository;

import java.util.List;

@RestController
@RequestMapping("api/helmets")
@CrossOrigin(origins = "*")
public class HelmetController {

    @Autowired
    HelmetRepository repository;

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Helmet create(@RequestBody Helmet helmet){
        return repository.save(helmet);
    }

    @GetMapping("/read")
    public List<Helmet> read(){
        return repository.findAll();
    }

    @PutMapping ("/update/{id}")
    public Helmet update(@PathVariable(name = "id") long id, @RequestBody Helmet UpdateThisItem){
        Helmet helmet = repository.findById(id)
                .orElseThrow(()->new ResourceAccessException("not found id: " + id));

        helmet.setName(UpdateThisItem.getName());
        helmet.setDescription(UpdateThisItem.getDescription());
        helmet.setPrice(UpdateThisItem.getPrice());
        helmet.setImage_url(UpdateThisItem.getImage_url());

        return repository.save(helmet);
    }

    @DeleteMapping("/delete/{id}")
    public void Delete(@PathVariable(name = "id") long id){
        repository.deleteById(id);
    }
}
