
import { user } from "./user";

export function checklogin()
    {
        
        const api_url ="http://www.lcnc.somee.com/api/User/Login?_Email="+user.email+"&password="+user.password;


		fetch(api_url,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
        .then((response) => response.json())
        .then((data) => userlogindata(data));

    }


    function userlogindata(userlogin) 
	{
        
        if(userlogin.id==null)
        {
            alert("Username or Password is Incorrect");
        }
        else{
            user.id=userlogin.id;
            user.username=userlogin.fullName;
            console.log("userid:   "+user.id);
        console.log("useremail:   "+user.email);
        console.log("userpassword:   "+user.password);
        console.log("username:   "+user.username);
		    // console.log(userlogin);
            // navigate("/Projects");
            user.valid=true;
        }
	}