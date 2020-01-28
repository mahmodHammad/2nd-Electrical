/******************** GLOBAL VARIABLES ********************/
var SCOPES = ['https://www.googleapis.com/auth/drive','profile'];
var CLIENT_ID = 'ENTER YOUR CLIENT ID HERE';
var FOLDER_NAME = "";
var FOLDER_ID = "root";
var FOLDER_PERMISSION = true;
var FOLDER_LEVEL = 0;
var NO_OF_FILES = 1000;
var DRIVE_FILES = [];
var FILE_COUNTER = 0;
var FOLDER_ARRAY = [];

/******************** AUTHENTICATION ********************/
function checkAuth() {
    gapi.auth.authorize({
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
    }, handleAuthResult);
}

//authorize apps
function handleAuthClick(event) {
    gapi.auth.authorize(
          { client_id: CLIENT_ID, scope: SCOPES, immediate: false },
          handleAuthResult);
    return false;
}

//check the return authentication of the login is successful, we display the drive box and hide the login box.
function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        $("#drive-box").css("display", "inline-block");
        $("#login-box").hide();
        $("#drive-box").removeClass("hide");
        showLoading();
        getDriveFiles();
    } else {
        $("#login-box").show();
        $("#drive-box").hide();
        $("#login-box").removeClass("hide");
    }
}
/******************** END AUTHENTICATION ********************/