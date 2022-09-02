import { data } from "../DnD/Data"
import { boxes, Container } from "../DnD/Container"
import { Properties } from "../Properties/properties";
export default function changeData(object) {
    data.push({ id: object.index, top: object.top, left: object.left, title: object.title, color: object.color, type: object.type, widgetID: object.id, classname: object.type + object.index, start: object.start, nesteditems: [], isnestable: object.isnestable, parentid: object.parentid, isdeleted: object.isdeleted,propertyisset:false ,properties:[{value:""}] });

}