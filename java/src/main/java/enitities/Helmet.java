package enitities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "helmets")
public class Helmet {
    @Id
    private int id;

    private String name;
    private String description;
    private String image_url;
    private Integer price;

    public Helmet(int id, String name, String description, String image_url, Integer price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image_url = image_url;
        this.price = price;
    }

    public Helmet() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}