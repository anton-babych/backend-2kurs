import {ShortItemModel} from "./shortItemModel";

export interface BaseItemModel extends ShortItemModel{
  material: string,
  weight: number,
  model: string,
  description?: string
}
