package Services.Armor;

import Services.FileEntityService;

public class ArmorFileService extends FileEntityService {
    public ArmorFileService() {
        initFileWorker("armors.txt", ArmorData.armors);
    }
}
