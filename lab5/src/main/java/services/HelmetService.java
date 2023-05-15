package services;

import Entities.Helmet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.HelmetRepository;

import java.util.List;

@Service
public class HelmetService {
    @Autowired
    private HelmetRepository repository;

    public List<Helmet> read(){
        return repository.findAll();
    }

    public Helmet get(Long id){
        return repository.findById(id).get();
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    public void create(Helmet helmet) {
        repository.save(helmet);
    }
}