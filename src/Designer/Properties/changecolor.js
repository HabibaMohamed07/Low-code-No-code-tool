import { data } from "../DnD/Data"
import { objectprop } from "./objectprop"
import { coloring } from "./color";
export function changecolor(colors) {

    for (let i = 0; i < data.length; i++) {
        if (data.at(i).id == objectprop.at(0).id) {
            data.at(i).color = colors 
            
        }

    }
    coloring.colors = colors;
    console.log(coloring.colors);
}