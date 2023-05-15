package repositories;

import entities.Helmet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "helmet", path = "helmet")
public interface HelmetRepository extends JpaRepository<Helmet, Long> {

}
