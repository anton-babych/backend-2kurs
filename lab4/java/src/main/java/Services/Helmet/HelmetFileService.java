package Services.Helmet;

import Entities.Entity;
import Services.FileEntityService;

public class HelmetFileService extends FileEntityService {
    public HelmetFileService() {
        initFileWorker("helmets.txt", HelmetData.helmets);
    }
}
