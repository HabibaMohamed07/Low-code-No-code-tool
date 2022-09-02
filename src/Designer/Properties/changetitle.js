import { data } from "../DnD/Data";
import { objectprop } from "./objectprop";

export function changetitle(text) {
    for (let i = 0; i < data.length; i++) {
        if (objectprop.at(0).id == data.at(i).id) {
            data.at(i).title = text;
            objectprop.at(0).title = text;
          document.getElementById(objectprop.at(0).id).innerHTML=text;
        }

    }


}