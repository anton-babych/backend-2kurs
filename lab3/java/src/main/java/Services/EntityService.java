package Services;

import Crud.ICrud;
import Entities.Entity;

import java.util.ArrayList;
import java.util.List;

public abstract class EntityService implements ICrud {
    private List<Entity> entities = new ArrayList<>();

    protected void assignData(List<Entity> data) {
        entities = data;
    }

    @Override
    public List<Entity> read() {
        return entities;
    }

    @Override
    public void update(Entity entity) {
        for (int i = 0; i< entities.size(); i++){
            if (entities.get(i).getId().equals(entity.getId())){
                entities.set(i, entity);
                return;
            }
        }
    }

    @Override
    public void create(Entity entity) {
        entities.add(entity);
    }

    @Override
    public void delete(Entity entity) {
        for (int i = 0; i< entities.size(); i++){
            if (entities.get(i).getId().equals(entity.getId())){
                entities.remove(i);
                return;
            }
        }
    }
}
