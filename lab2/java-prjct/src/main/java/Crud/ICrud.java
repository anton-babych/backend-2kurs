package Crud;

import Entities.Entity;

public interface ICrud {

    Entity[] read();
    void update(Entity entity);
}
