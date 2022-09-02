//  export let createproject  =
//  {
//     "title": "string",
//     "creationDate": "2022-08-28T22:20:21.115Z",
//     "userID": 0,
//     "appTypeID": 0,
//     "targetFrameworkID": 0,
//     "generatedAppPath": "string",
//     "widgets": "string",
//     "description": "string"
//   }
//   function getprojectdata(projectdata)
//   {
  
//       const api_url ="http://www.lcnc.somee.com/api/Project/InsertProject";
  
  
//   fetch(api_url,
//       {
//           method: 'POST',
//           body:projectdata,
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//           }
//           })
//       .then((response) => response.json())
//       .then((data) => show(data));
  
//       // console.log("json:   "+userdata);
//   }