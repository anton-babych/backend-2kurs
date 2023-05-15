package controllers;


import entities.Helmet;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;
import repositories.HelmetRepository;

import java.util.List;

@RestController
@RequestMapping("/api/helmet")
@Slf4j
public class HelmetController {

    @Autowired
    HelmetRepository repository;

    @GetMapping("/read")
    public List<Helmet> read(){
        List<Helmet> helmetList = repository.findAll();
        log.info("[HelmetController] GET -> helmetList size: {} ", helmetList.size());
        return helmetList;
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Helmet create(@RequestBody Helmet helmet){
        log.info("[HelmetController] POST {} ", helmet);
        return repository.save(helmet);
    }

    @PutMapping("/update/{id}")
    public Helmet update(@PathVariable long id, @RequestBody Helmet helmet){
        Helmet updatedEntity = repository.findById(id)
                .orElseThrow(()-> new ResourceAccessException("Not found Entity with id: "+id));

        log.info("[HelmetController] PUT -> before: {} ", updatedEntity);

        updatedEntity.setName(helmet.getName());
        updatedEntity.setDescription(helmet.getDescription());
        updatedEntity.setPrice(helmet.getPrice());
        updatedEntity.setImage_url(helmet.getImage_url());

        log.info("[HelmetController] PUT -> after: {} ", updatedEntity);
        return repository.save(updatedEntity);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        Helmet helmet = repository.findById(id)
                .orElseThrow(()-> new ResourceAccessException("no such id:" + id));
        repository.deleteById(id);

        log.info("[HelmetController] DELETED helmet {} ", helmet);
    }
}
