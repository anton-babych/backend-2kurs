package Services;

import Crud.ICrud;
import Entities.Entity;
import FileIO.FileWorker;
import FileIO.IFileWorker;

import java.util.Arrays;
import java.util.List;

public abstract class FileEntityService implements ICrud {
    protected String fileName;
    private IFileWorker fileWorker;

    protected void initFileWorker(String fileName, List<Entity> preloadedData){
        this.fileName = fileName;
        fileWorker = new FileWorker(fileName, preloadedData.toArray());
    }

    @Override
    public List<Entity> read() {
        var l = (Entity[]) fileWorker.load();
        return Arrays.stream(l).toList();
    }

    @Override
    public void update(Entity entity) {
        List<Entity> data = read();

        for (int i = 0; i< data.size(); i++){
            if (data.get(i).getId().equals(entity.getId())){
                data.set(i, entity);
                return;
            }
        }

        fileWorker.save(data);

        System.out.println("updated");
    }

    @Override
    public void create(Entity entity) {
        List<Entity> data = read();

        data.add(entity);

        fileWorker.save(data);

        System.out.println("created");
    }

    @Override
    public void delete(Entity entity) {
        List<Entity> data = read();

        for (int i = 0; i< data.size(); i++){
            if (data.get(i).getId().equals(entity.getId())){
                data.remove(i);
                return;
            }
        }

        fileWorker.save(data);
        System.out.println("deleted");
    }
}
