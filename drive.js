//******************** ********************/
//******************** GLOBAL VARIABLES ********************/

var CLIENT_ID       = "534902264735-kqorq3i2c7hl2tg2s8h40kbhgmde9fo3.apps.googleusercontent.com";
var API_KEY         = "AIzaSyBaYqW1LaG3Oua5aT40u6AqmaasNVPkwe0";
var DISCOVERY_DOCS  = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES          = "https://www.googleapis.com/auth/drive.metadata.readonly";
var authorizeButton = document.getElementById("authorize_button");
var signoutButton = document.getElementById("signout_button");

//******************** END OF GLOBAL VARIABLES ********************/

function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
//**************************************************************************************
function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    .then(
      function() {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
      },
      function(error) {
        appendPre(JSON.stringify(error, null, 2));
      }
    );
}
//end of initializing **************************************************************************************

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */

//user signed in *************************************************

function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.color = "none";
    signoutButton.style.display = "block";

    listFiles();
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById("content");
  var textContent = document.createTextNode(message + "\n");
  pre.appendChild(textContent);
}
