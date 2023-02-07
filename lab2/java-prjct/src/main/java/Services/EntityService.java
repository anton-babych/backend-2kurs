package Services;

import Crud.ICrud;
import Entities.Entity;

public abstract class EntityService implements ICrud {
    private Entity[] entities;

    protected void assignData(Entity[] data) {
        entities = data;
    }

    @Override
    public Entity[] read() {
        return entities;
    }

    @Override
    public void update(Entity entity) {
        for (int i = 0; i< entities.length; i++){
            if (entities[i].getId().equals(entity.getId())){
                entities[i] = entity;
                return;
            }
        }
    }
}
