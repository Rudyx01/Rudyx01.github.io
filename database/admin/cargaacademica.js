
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



  const inputfileAcademica = document.getElementById('inputfile-Academica')
  
  const formCargaAcademica = document.getElementById("formCargaAcademica");

//guardar carga academica
const saveCarga = (
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
    docente,
    semestre
  ) =>
    db.collection("carga").doc().set({
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
      docente,
      semestre
    });
    const getCarga = (id) => db.collection("carga").doc(id).get();
  
    
  //boton cargar carga academica
  formCargaAcademica.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    try {
      readXlsxFile(inputfileAcademica.files[0]).then((data) => {
        var cod = ""
        data.forEach(row => {
          if(cod != row[0]){
            cod = row[0]
            saveCarga(
              row[0],
              row[1],
              row[2],
              row[3],
              row[4],
              row[5],
              row[6],
              row[7],
              row[8],
              row[9],
              row[10],
              row[11],
              row[13],
              "2021-II"
            );
          }
        });
      })
      formCargaAcademica.reset();
    } catch (error) {
      console.log(error);
    }
  });
  
  
  inputfileAcademica.addEventListener('change', () => {
    readXlsxFile(inputfileAcademica.files[0]).then((data) => {
      
      var cod = ""
      data.forEach(row => {
        if(cod != row[0]){
          cod = row[0]
          console.log(
            row[0],
            row[1],
            row[2],
            row[3],
            row[4],
            row[5],
            row[6],
            row[7],
            row[8],
            row[9],
            row[10],
            row[11],
            row[13]
            )
        }
      });
      // `rows` is an array of rows
      // each row being an array of cells.
    })
  });
  