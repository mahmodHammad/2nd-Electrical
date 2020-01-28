
//take  folderID
//get   folder's childrens ids
async function getfolder(folderID) {
    // folderChildren contains the ID of each file inside it
    const folderChildren = await gapi.client.request(
      `https://www.googleapis.com/drive/v2/files/${folderID}/children`
    );
    batching(folderChildren);
  }
  
  function batching(folderChildren) {
    let batch = gapi.client.newBatch();
  
    folderChildren.result.items.map((e, n) => {
      batch.add(
        gapi.client.drive.files.get(
          {
            fileId: e.id
          },
          { id: n }
        )
      );
    });
  
    batch.then(e => console.log(e.result));
  }
  
  function withoutbatch(f) {
    f.map((e, n) => {
      console.log(`request id is  ${e.id}`);
      gapi.client.drive.files
        .get({
          fileId: e.id
        })
        .then(j => console.log(`${j.result.id} is response id `));
    });
  }
  
  async function getfile(id, n) {
    const file = await gapi.client.drive.files.get({
      fileId: id
    });
  
    console.log(`file NO ${n} is : ${file.result.name}`, file);
  }
  function listfiles() {
    gapi.client.drive.files
      .list({
        pageSize: 50,
        fields: "nextPageToken, files(id, name)"
      })
      .then(response => {
        console.log("list files : ", response.result);
      });
  }




  gapi.client.drive.files
  .list({
    corpora: "drive",
    supportsAllDrives: true,
    includeItemsFromAllDrives: true
  })
  .then((e, f) => {
    if (f) {
      console.log("failed !!!", f);
    } else {
      console.log("done !!!", e);
    }
  });

  /* 
gapi.clent.Batch 
  it's a collectins of requestes combined in one http request
  gapi.client.request.add(reqest)


  1- var batch = gapi.client.newBatch();
  2- batch.add(request)
  
  execution : 
    gapi.client.batch.then
*/


// var metadata = {
//   'name': 'sampleName', // Filename at Google Drive
//   'mimeType': 'text/plain', // mimeType at Google Drive
//   'parents': ['### folder ID ###'], // Folder ID at Google Drive
// };



async function generateID() {
  const ID = await gapi.client.request(
    "https://www.googleapis.com/drive/v3/files/generateIds"
  );
  const uniqeID = ID.result.ids[0];
  return uniqeID;
}


  