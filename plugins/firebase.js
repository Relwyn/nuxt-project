import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDP1FE3c4XfxgQF428VtivJeUoq7tZAWHo',
    authDomain: 'nuxt-project-61699.firebaseapp.com',
    databaseURL: 'https://nuxt-project-61699.firebaseio.com',
    projectId: 'nuxt-project-61699',
    storageBucket: '',
    messagingSenderId: '917893948883'
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
