//var wsbroker = "192.168.0.3";  //mqtt websocket enabled broker
//var wsbroker = "localhost";
var wsbroker = "broker.hivemq.com";

//var wsport = 8083 // port for above
var wsport = 1883; // port for above

var client = new Paho.MQTT.Client(
	wsbroker,
	Number(8000),
	"myclientid_" + parseInt(Math.random() * 100, 10)
);

client.onConnectionLost = function (responseObject) {
	console.log("connection lost: " + responseObject.errorMessage);
};

/*################################################################################################*/
/*####################################### LLEGA EL MENSAJE########################################*/
/*################################################################################################
let dataCache =  esto lo almaceno en un etiqueta laben, o como mdoificar un equiqueta input con js y el uso del api
*/

client.onMessageArrived = function (message) {
	let destination = message.destinationName;
	if (destination === "pruebatopicoT") {
		
		let response = JSON.parse(message.payloadString);
		dataFormat = response;
		
		let dataCPU = dataFormat.CPU;
		let dataAlmc = dataFormat.Alc;
		let dataTpt = dataFormat.Tpt;
		let dataCache = dataFormat.Cache;		
		let dataSist = dataFormat.Sist;
		let dataPross = dataFormat.Pross;
		let dataRamT = dataFormat.RamT;
		let dataDiscoT = dataFormat.DiscoT;
		let dataNucle = dataFormat.Nucle;
		let dataArqM = dataFormat.ArqM;
		let dataUsr = dataFormat.Usr;

		let dataID=dataFormat.bateria_id;
		let dataPorcentaje=dataFormat.bateria_porcentaje;
		let dataEstado=dataFormat.estado_bateria;
		let dataVoltaje=dataFormat.voltaje;
		
		addData(
			CPU,
			parseFloat(dataCPU),
		);
		addDataAlmc(
			Almacen,
			parseFloat(dataAlmc),
		);
		addDataTemp(
			Tempera,
			parseFloat(dataTpt),
		); 

		//Envio de valores estaticos
		//CPU
		let dateCPU = dataCPU + ' %';
        document.getElementById('cpuValue').innerText = dateCPU;
		//RAM
		let dateAlmc = dataAlmc.toLocaleString() + ' %';
		document.getElementById('almcValue').innerText = dateAlmc;
		//Dico en uso
		let dateTpt = dataTpt + ' GB';
		document.getElementById('tptValue').innerText = dateTpt;
		//Cache
		let dateCache = dataCache.toLocaleString() + ' %';
		document.getElementById('cacheValue').innerText = dateCache;

		//Especificaiones del computador
		//Disco Duro Total
		let dateDiscoT = dataDiscoT.toLocaleString() + ' GB';
		document.getElementById('CDValue').innerText = dateDiscoT;
		//Memoria Ram Total
		let dateRamT = dataRamT.toLocaleString() + ' GB';
		document.getElementById('RamTValue').innerText = dateRamT;
		//Nucleos
		document.getElementById('nucleValue').innerText = dataNucle;
		//Sistema Operativo
		let dateSist = dataSist.toLocaleString();
		document.getElementById('sistValue').innerText = dateSist;
		//Arquitectura del computador
		let dateArqM= dataArqM.toLocaleString();
		document.getElementById('arqmValue').innerText = dateArqM;
		//Procesador
		let datePross = dataPross.toLocaleString();
		document.getElementById('prossValue').innerText = datePross;
		//Usuario
		let dateUsr = dataUsr.toLocaleString();
		document.getElementById('usrValue').innerText = dateUsr;
		//Datos de la bateria
		let dateID = dataID.toLocaleString();
        document.getElementById('IDValue').innerText = dateID;

		let datePorcentaje = dataPorcentaje.toLocaleString() + ' %';
        document.getElementById('porcentajeValue').innerText = datePorcentaje;

		let dateEstado = dataEstado.toLocaleString();
        document.getElementById('estadoValue').innerText = dateEstado;

		let dateVoltaje = dataVoltaje.toLocaleString() + ' V';
        document.getElementById('voltValue').innerText = dateVoltaje;

		//NOTIFICACION POPUP
		const cpuValueElement = document.getElementById("cpuValue");
		const cpuValue = parseFloat(cpuValueElement.textContent);
		if (cpuValue > 90) {
		// Mostrar la notificación popup
			Swal.fire({
				icon: " !! PELIGRO !! ",
				title: "USO DE CPU DEMASIADO ALTO",
				text: `El porcentaje de uso de la CPU ha excedido el 90% (${cpuValue}%).`,
				confirmButtonText: "Cerrar",
			});
		}

	}

};

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("pruebatopicoT", { qos: 1 });
	},
	onFailure: function (message) {
		console.log("Connection failed: " + message.errorMessage);
	},
};


function testMqtt(){
	console.log("hi");
}
function initMqtt() {
	client.connect(options);
}