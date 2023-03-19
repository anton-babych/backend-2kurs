package Services.Helmet;

import Entities.Entity;
import Entities.HelmetEntity;
import Services.EntityService;

import java.util.Arrays;

public class HelmetService extends EntityService {
    public HelmetService() {
        assignData(HelmetData.helmets);
    }
}
