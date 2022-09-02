import { objectprop } from "./objectprop";
import { data } from "../DnD/Data";
let object;
export function changeprop(id) {
        object = data.find(item => item.id == id);
        objectprop.at(0).top = object.top;
        objectprop.at(0).left = object.left;
        objectprop.at(0).title = object.title;
        objectprop.at(0).id = object.id;
        console.log(JSON.stringify(objectprop));
}
