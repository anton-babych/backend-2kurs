package Entities;

public class ArmorEntity extends Entity{
    public ArmorEntity(String name, float price, String imagePath) {
        super(name, price, imagePath);
    }
    public ArmorEntity(String id, String name, float price, String imagePath) {
        super(id, name, price, imagePath);
    }
}
