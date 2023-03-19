package Servlets;

import Crud.ICrud;
import Services.Armor.ArmorFileService;
import Services.Armor.ArmorService;
import Services.Helmet.HelmetFileService;

public class FileServletConfig extends ServletConfig{
    @Override
    public ICrud generateConfig(EntityType type) {
        crud = switch (type){
            case Helmet -> new HelmetFileService();
            case Armor -> new ArmorFileService();
        };

        return crud;
    }
}
