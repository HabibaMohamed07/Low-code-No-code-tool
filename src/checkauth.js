import { auth } from "./authorization";
export async function checkauth()
{ 

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

let TokenResponseStatus=400;
await fetch("http://www.lcnc.somee.com/api/User/CheckUserToken",
            {
                method: 'get',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `bearer `  + getCookie("token")
            }
            })
            .then(response => {
                if(response.status == 200 || response.status == 204) 
                        TokenResponseStatus = 200;
             return response.json()
            })
            .then(data =>{
                if(TokenResponseStatus==200)
                auth.at(0).token=true;
                else
                auth.at(0).token=false;
            console.log("Token now is = "+ auth.at(0).token)
            console.log("data= "+JSON.stringify(data))
        
            })
           


}