
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC0zer2obvU5MQrJ2Pe-8_MMCzuwbB-ItU",
  authDomain: "tutoria-electron.firebaseapp.com",
  projectId: "tutoria-electron",
  storageBucket: "tutoria-electron.appspot.com",
  messagingSenderId: "933581286361",
  appId: "1:933581286361:web:bbfe963bc60d1a770fc7c8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();




//cursos

//guardar carga academica como curso
const saveCurso = (
  codigo_carga,
  carrera,
  curso,
  cred,
  tipo,
  gpo,
  ht,
  hp,
  dia,
  hr_inicio,
  hr_fin,
  aula,
  docente
) =>
  db.collection("cursos").doc().set({
    codigo_carga,
    carrera,
    curso,
    cred,
    tipo,
    gpo,
    ht,
    hp,
    dia,
    hr_inicio,
    hr_fin,
    aula,
    docente
  });