package Services.Helmet;

import Entities.Entity;
import Entities.HelmetEntity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class HelmetData {
    public static List<Entity> helmets = Arrays.asList(new HelmetEntity[]
            {
                new HelmetEntity("helmet 1", 200, "https://ukrainianarmor.com/wp-content/uploads/2023/01/pasgt-feature.png"),
                new HelmetEntity("helmet 2", 20015, "https://ukrainianarmor.com/wp-content/uploads/2022/12/img_5752.jpg"),
                new HelmetEntity("helmet 3", 124, "https://ukrainianarmor.com/wp-content/uploads/2022/04/sholom-2.jpg"),
                new HelmetEntity("helmet 4", 215134, "https://ukrainianarmor.com/wp-content/uploads/2022/04/sholom.jpg")
            });


}

