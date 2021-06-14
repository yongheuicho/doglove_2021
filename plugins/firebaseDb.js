import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDnYKt7OHJQ5mGQePLN2NE2h36rclihGak',
	authDomain: 'withdog-33e0b.firebaseapp.com',
	databaseURL:
		'https://withdog-33e0b-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'withdog-33e0b',
	storageBucket: 'withdog-33e0b.appspot.com',
	messagingSenderId: '995554371552',
	appId: '1:995554371552:web:28081b3ea662098598ad85',
	measurementId: 'G-5BRX54SJH5',
};

if (firebase.apps.length == 0) firebase.initializeApp(firebaseConfig);
export default firebase.database();
