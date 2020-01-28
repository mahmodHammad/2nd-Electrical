# 2nd-Electrical
#### Please consider following this project's author [mahmodhammad](https://github.com/mahmodHammad) , starring the project to show your ❤️ and support.



gapi.client.drive.drives =>>>> is for shared drives  

 gapi.client.drive.drives.get({driveId :"1msnQzI1k14QNgCTbDCITJntx_W4fqjC8"}).then((e,f)=>{
    if(!f){
      console.log(e)
    }
    console.log("error" , f)
  })

  -----------------------------------------
  
gapi.client.drive.drives =>>>> data about user

    gapi.client.drive.about.get({fields:"*"}).then((e,f)=>{
    if (f){console.log("failed !!!" , f)}
    else {console.log('done !!!' , e.result.user.displayName)}
  })




for files we must have : 
kind: "drive#file"
id: "0B_gNZnbzz11ReFNYd1FIQ1laLU0"
name: "20160721_164811.jpg"
mimeType: "image/jpeg"




fucken isuuse here ::
 gapi.client.drive.files
    .list({
      corpora: "drive",
      supportsAllDrives: true,
      driveId: "1msnQzI1k14QNgCTbDCITJntx_W4fqjC8",
      includeItemsFromAllDrives: true
      
    })
    .then((e, f) => {
      if (f) {
        console.log("failed !!!", f);
      } else {
        console.log("done !!!", e);
      }
    });

    keeps getting me shared drive is not found





    //generate id  XXXXXXXX
    return 10 ids in array 
  gapi.client.request("https://www.googleapis.com/drive/v3/files/generateIds").then(e=>console.log("the id is " ,e))












    "permissionId": "03430102057513877043",


   "id": "1dgjMC-kwkpWJ24lOmwDwe8VsUjtdYp6o4alkJeUyQqQ",
   "name": "asu",










   holdy shit getting children from google drive shitty api works : 
     gapi.client.drive.files
    .list({
      q:"'1DQNrFndwdH1_D_026miRfwM7nA1duKVF' in parents"
      // q:'trashed=false and starred=true',
      // parents:'[1yxrZOSGLu6kagK0OlgFrjnYpYmRjK3_f]' 

    })
    .then((e, f) => {
      if (f) console.log(f);
      else console.log("holy shit",e);
    });











    