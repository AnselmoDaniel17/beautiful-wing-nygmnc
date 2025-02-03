// Importa los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBg-778a2V_zXWbU7g1j1-LxARd-Empzho",
  authDomain: "formulario-autos2.firebaseapp.com",
  projectId: "formulario-autos2",
  storageBucket: "formulario-autos2.firebasestorage.app",
  messagingSenderId: "1052485852128",
  appId: "1:1052485852128:web:2f7994535745df020be985",
  measurementId: "G-KGF7L2WHXY",
};

// Inicializa Firebase si no ha sido inicializado previamente
const app = initializeApp(firebaseConfig);

// Obtén la instancia de Firestore
const db = getFirestore(app);

export { db };
