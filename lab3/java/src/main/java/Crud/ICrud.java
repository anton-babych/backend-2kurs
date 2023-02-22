package Crud;

import Entities.Entity;

import java.util.List;

public interface ICrud {
    List<Entity> read();
    void update(Entity entity);
    void create(Entity entity);
    void delete(Entity entity);
}
