import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADxFsUddCqNBZxSwfl2m01PrRLN3tNPTE",
  authDomain: "coderhouse-60030-29805.firebaseapp.com",
  projectId: "coderhouse-60030-29805",
  storageBucket: "coderhouse-60030-29805.appspot.com",
  messagingSenderId: "684548856322",
  appId: "1:684548856322:web:de34abe3f3320e36b0e51b"
};

// Initialize el servicio Firebase
const app = initializeApp(firebaseConfig);

//inicializamos la base de datos
export const db = getFirestore(app);