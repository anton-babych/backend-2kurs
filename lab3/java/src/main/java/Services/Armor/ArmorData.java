package Services.Armor;

import Entities.ArmorEntity;
import Entities.Entity;
import Entities.HelmetEntity;

import java.util.Arrays;
import java.util.List;

public class ArmorData {

    public static List<Entity> armors = Arrays.asList(new ArmorEntity[]
    {
        new ArmorEntity("armor 1", 200, "https://ukrainianarmor.com/wp-content/uploads/2022/08/img_9185_edit-1024x1024-1-1.png"),
        new ArmorEntity("armor 2", 20015, "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_8931.png"),
        new ArmorEntity("armor 3", 215, "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_1317_lab-1024x1024-1.png"),
        new ArmorEntity("armor 4", 15, "https://ukrainianarmor.com/wp-content/uploads/2022/07/2-2-1024x1024-1.png"),
        new ArmorEntity("armor 5", 15, "https://ukrainianarmor.com/wp-content/uploads/2022/06/uarm_2020_new7165.png")
    });
}
