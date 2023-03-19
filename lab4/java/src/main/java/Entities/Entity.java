package Entities;

import java.io.Serializable;
import java.util.UUID;

public class Entity implements Serializable {
    private final String id;
    private final String name;
    private final String imagePath;
    private final float price;

    public String getId() {
        return id;
    }

    public Entity(String name, float price, String imagePath) {
        this.id = generateId();
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
    }

    public Entity(String id, String name, float price, String imagePath) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
    }


    public String generateId() {
        return UUID.randomUUID().toString();
    }

    public String getName() {
        return name;
    }

    public String getUrl() {
        return imagePath;
    }

    public int getPrice() {
        return (int)price;
    }
}
