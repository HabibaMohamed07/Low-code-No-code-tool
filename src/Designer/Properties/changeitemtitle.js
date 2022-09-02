import { data } from "../DnD/Data";
import { objectprop } from "./objectprop";

export function changeitemtitle(text, id) {
  console.log("changing title of :" + id + "into " + text);
  for (let i = 0; i < data.length; i++) {
    if (objectprop.at(0).id == data.at(i).id) {
      for (let y = 0; y < data.at(i).nesteditems.length; y++)
        if (data.at(i).nesteditems.at(y).id == id)
          data.at(i).nesteditems.at(y).text = text;

    }

  }


}