package Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "helmets")
public class Helmet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private int price;
    private String image_url;
    private String description;
    public Helmet(){}

    public Helmet(Integer id, String name, int price, String image_url, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image_url = image_url;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
