var Firebase = require('firebase')

export const firebaseRef = new Firebase('https://movtin.firebaseio.com')


export const getAuth = firebaseRef.getAuth()

export const facebookLoginPopUp = () => {
  firebaseRef.authWithOAuthPopup('facebook', (error, authData) => {
    if (error) {
      console.log('Login Failed!', error)
    } else {
      firebaseRef.child('users').child(authData.uid).set({
        provider: authData.provider,
        name: authData.facebook.displayName
      })
    }
  })
}
export const saveMovieData = (title, popularity, overview, poster_path, id) => {
  
}
