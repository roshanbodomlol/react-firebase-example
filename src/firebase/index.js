import app from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDhUcW_nUrAdpP6JXn7UR6Cjw4MiEAVPbg',
  authDomain: 'jetcake-project-c3989.firebaseapp.com',
  databaseURL: 'https://jetcake-project-c3989.firebaseio.com',
  projectId: 'jetcake-project-c3989',
  storageBucket: 'jetcake-project-c3989.appspot.com',
  messagingSenderId: '631495086827',
  appId: '1:631495086827:web:e0f7d74cb4e41f094564ae',
  measurementId: 'G-6VL2BQSKZH'
};

export default app.initializeApp(firebaseConfig);

export const rrConfig = {
  userProfile: 'users'
};
