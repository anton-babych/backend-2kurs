import {ShortBaseItemModel} from "./shortBaseItem.model";

export interface BaseItemModel extends ShortBaseItemModel{
  material: string,
  weight: number,
  model: string,
  description?: string
}
