import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDx69IBeqfte9GaScXXCGJHpePegjCkcfY",
	authDomain: "classroom-clone-c6460.firebaseapp.com",
	projectId: "classroom-clone-c6460",
	storageBucket: "classroom-clone-c6460.appspot.com",
	messagingSenderId: "947596062008",
	appId: "1:947596062008:web:53fcb8daae6b43ad6e65cd",
	measurementId: "G-CFHC3LBP77"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
