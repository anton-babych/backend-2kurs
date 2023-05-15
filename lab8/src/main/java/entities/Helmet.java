package entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="Helmet")
public class Helmet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private int price;
    private String image_url;
}