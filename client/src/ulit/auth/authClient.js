
// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthClient {

    login(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
        // go to home page
        window.location.assign('/home');
      }
}

export default new AuthClient()