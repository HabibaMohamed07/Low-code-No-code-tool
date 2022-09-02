import { data } from "./Data";

export function changingdata(object) {
    console.log("this is :" + JSON.stringify(object));
    for (let i = 0; i < data.length; i++) {
        object.map(item => {
            if (item.id == data.at(i).id) {
                data.at(i).left = item.left;
                data.at(i).top = item.top;

            }
        })
    }
}