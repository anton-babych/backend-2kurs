package repositories;


import entities.Helmet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "helmets", path = "helmets")
public interface HelmetRepository extends JpaRepository<Helmet, Integer> {
}
