package Services.Helmet;

import Entities.HelmetEntity;
import Services.EntityService;

public class HelmetService extends EntityService {
    public HelmetService() {
        assignData(HelmetData.helmets);
    }
}
