import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: 'AIzaSyD03EO22Za3dprVU1bGjsklfKWhh94KUnw',
  authDomain: 'mixellence-5b0ae.firebaseapp.com',
  projectId: 'mixellence-5b0ae',
  storageBucket: 'mixellence-5b0ae.appspot.com',
  messagingSenderId: '130145580098',
  appId: '1:130145580098:web:24dfc17229f04e724929db',
  measurementId: 'G-ZVHN173L22',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)

export const storage = getStorage(app)
