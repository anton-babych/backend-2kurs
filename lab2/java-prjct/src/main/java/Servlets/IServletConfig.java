package Servlets;

import Crud.ICrud;

public interface IServletConfig {
    ICrud generateConfig(ServletConfig.EntityType type);

    ICrud readConfig();
}
