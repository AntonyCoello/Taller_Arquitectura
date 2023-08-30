/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyAxYU8hzLD6-CLs58rHv8M8llDDHbIhXyQ",
	authDomain: "arquitectura-grupo5.firebaseapp.com",
	databaseURL: "https://arquitectura-grupo5-default-rtdb.firebaseio.com",
	projectId: "arquitectura-grupo5",
	storageBucket: "arquitectura-grupo5.appspot.com",
	messagingSenderId: "1002647152080",
	appId: "1:1002647152080:web:74fc318cd9fe4c6a57c5d5"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();
const pcDataRef = db.ref("pc_data");

var table = $("#tablaDatos").DataTable({
    paging: true,
    pageLength: 5,
    lengthMenu: [5, 10, 20, -1],
    data: [],
    columns: [
        { title: "Componente" },
        { title: "Uso (%)"},
        { title: "Temperatura (°C)"},
        { title: "Estado"}
    ],

});


pcDataRef.on("child_added", (snapshot) => {
    var data = snapshot.val();

    // Calcula el estado en función del valor de uso
    var estado = "";
    if (data.cpu_usage > 80 || data.memory_usage > 80 || data.disk_usage > 80) {
        estado = "Alto";
    } else if (data.cpu_usage > 50 || data.memory_usage > 50 || data.disk_usage > 50) {
        estado = "Moderado";
    } else {
        estado = "Normal";
    }


    dataSet.push([
        snapshot.key,
        data.cpu_usage + "%",
        data.memory_usage + "%",
        data.disk_usage + "%",
        estado
    ]);

    table.clear().rows.add(dataSet).draw();
});
