package repository;

import Entities.Helmet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HelmetRepository extends JpaRepository<Helmet, Long> {

}