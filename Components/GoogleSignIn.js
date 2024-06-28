import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


#import <Firebase.h>

const _signInWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        offlineAccess: false,
        webClientId:
          'YOUR_WEB_CLIENT_ID',
        scopes: ['profile', 'email'],
     })
}}

async function onGoogleButtonPress() {
  try {
    // Get the user's ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation sign in is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available
    } else {
      // some other error
    }
  }
}