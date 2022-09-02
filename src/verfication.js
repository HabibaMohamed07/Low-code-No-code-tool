import { confirm } from "./confirmcode";

export default function getverificationcode(email) {
    let widgetid = 1;
    let code = 0;
    // const api_url ="http://www.lcnc.somee.com/api/WidgetCodeSnippet/GetWidgetCodeSnippet?id="+widgetid;
    // let email="habiba.salem3100@gmail.com";
    const api_url = "http://www.lcnc.somee.com/api/VerifyMail/VerifyEmail?email=" + email;



    fetch(api_url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => show(data));

}

export function show(data) {
    let tab = data;
    console.log("Code:  " + tab);
    confirm.value = data;
}
