package Entities;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Random;
import java.util.UUID;

public class BaseEntity {
    public String id;
    public String name;
    public int price;
    public String imagePath;

    public BaseEntity(String name, int price, String imagePath) {
        this.id = generateId();
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
    }

    private String generateId() {
        return UUID.randomUUID().toString();
    }

}
