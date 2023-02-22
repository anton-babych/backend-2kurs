package Services.Helmet;

import Services.FileEntityService;

public class HelmetFileService extends FileEntityService {
    public HelmetFileService() {
        initFileWorker("helmets.txt", HelmetData.helmets);
    }
}
