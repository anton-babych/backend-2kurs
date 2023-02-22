package FileIO;

import java.io.*;

public class FileWorker implements IFileWorker{
    private String fileName;

    public FileWorker(String fileName, Object[] preloadedData) {
        this.fileName = fileName;
        boolean findFile = tryFindFile();
        System.out.println(findFile);

        if(!findFile){
            createFile(preloadedData);
        }
    }

    private void createFile(Object[] preloadedData) {
        save(preloadedData);
    }

    private boolean tryFindFile() {
        Object result = null;

        try {
            FileInputStream fileInputStream = new FileInputStream(fileName);
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
            result = objectInputStream.readObject();
            objectInputStream.close();
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
            return false;
        }

        return result != null;
    }

    @Override
    public void save(Object object) {
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(fileName);
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
            objectOutputStream.writeObject(object);
            objectOutputStream.close();

        }catch (IOException exception){
            exception.printStackTrace();
        }
    }

    @Override
    public Object load() {
        Object result = null;
        try {
            FileInputStream fileInputStream = new FileInputStream(fileName);
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
            result = objectInputStream.readObject();
            objectInputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }


        return result;
    }
}
