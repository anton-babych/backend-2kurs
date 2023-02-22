package Services;

import Crud.ICrud;
import Entities.Entity;
import FileIO.FileWorker;
import FileIO.IFileWorker;

public abstract class FileEntityService implements ICrud {
    protected String fileName;
    private IFileWorker fileWorker;

    protected void initFileWorker(String fileName, Object[] preloadedData){
        this.fileName = fileName;
        fileWorker = new FileWorker(fileName, preloadedData);
    }

    @Override
    public Entity[] read() {
        return (Entity[]) fileWorker.load();
    }

    @Override
    public void update(Entity entity) {
        Entity[] data = read();

        for (int i = 0; i < data.length; i++){
            if(data[i].getId().equals(entity.getId())){
                data[i] = entity;
            }
        }

        fileWorker.save(data);
    }
}
