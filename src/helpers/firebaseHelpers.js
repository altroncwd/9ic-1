var Firebase = require('firebase')

export const firebaseRef = new Firebase('https://movtin.firebaseio.com')

export const facebookLoginPopUp = firebaseRef.authWithOAuthPopup('facebook', (error, authData) => {
  if (error) {
    console.log('Login Failed!', error)
  } else {
    console.log('Authenticated successfully with payload:', authData)
  }
})
