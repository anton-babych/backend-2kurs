package Servlets;

import Crud.ICrud;
import Services.Armor.ArmorService;
import Services.FileEntityService;
import Services.Helmet.HelmetService;

public class ServletConfig implements IServletConfig{
    protected ICrud crud;
    public enum EntityType{ Helmet, Armor }

    public ICrud generateConfig(EntityType type) {
        crud = switch (type){
            case Helmet -> new HelmetService();
            case Armor -> new ArmorService();
        };

        return crud;
    }

    public ICrud readConfig() {
        return crud;
    }
}
