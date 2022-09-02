import { data } from "../DnD/Data";
import { changecolor } from "./changecolor";
import { objectprop } from "./objectprop";

export function ChangeStyle(style)
{

data.at(objectprop.at(0).id).style=style;


}