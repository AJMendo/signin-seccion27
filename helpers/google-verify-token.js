const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '493879753332-2a1os38o004bhaegdpvpnvto3s1sl5l5.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async ( token ) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: [
            CLIENT_ID,
            '493879753332-j5lp86pk8oh3rqe74jj0m4vbs06npo5m.apps.googleusercontent.com',
        ],  
        // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    //const userid = payload['sub'];
    console.log(payload);
    // If the request specified a Google Workspace domain:
    // const domain = payload['hd'];
    return {}
}

module.exports = {
    validarGoogleIdToken
}
