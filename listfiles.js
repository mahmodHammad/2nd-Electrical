/* 
for any request 
   gapi.client.request(path , method=get , params{key:value} ,headers ,body{for post,put})
*/

//XXXXXXXXXXXXXXXXXXXXXX listfiles is the entry function that i can access gapi throught it XXXXXXXXXXXXXXXXXXXXXX
async function listFiles() {
  listchindrens("1yxrZOSGLu6kagK0OlgFrjnYpYmRjK3_f");
}

function listchindrens(folderID) {
  let q = transformFolderID(folderID);
  gapi.client.drive.files
    .list({q}).then((e, f) => {
        console.log("holy shit", e);
        renderFiles(e.result.files);
    });
}

// to make it    "1DQNrFndwdH1_D_026miRfwM7nA1duKVF" in parents
function transformFolderID(folderID) {
  let parent = "in parents";
  let s1 = "";
  let s2 = s1.concat('"' + folderID + '" ' + parent);
  return s2;
}

const container = document.getElementById("container");

function renderFiles(f) {
  const files = document.createElement("ul");
  container.appendChild(files);
  f.map(e => {
    let file = document.createElement('li');
    file.innerText= e.name;
    files.appendChild(file)
  });
}
