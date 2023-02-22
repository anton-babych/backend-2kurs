package Services.Armor;

import Entities.ArmorEntity;
import Entities.Entity;
import Services.EntityService;

public class ArmorService extends EntityService {
    public ArmorService() {
        assignData(ArmorData.armors);
    }
}
