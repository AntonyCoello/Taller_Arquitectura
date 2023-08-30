const ctx = document.getElementById("Grafica1").getContext("2d");

let labels_n = [];
let data_n =   [];
let data_n2 =  [];
let Grafica1 = new Chart(ctx, {
	type: "line",
	data: {
        labels: labels_n,
        datasets: [{
                label: "CPU",
                data: data_n,
                backgroundColor: "rgba(139, 0, 0, 0.2)",
				borderColor: "rgb(139, 0, 0)",
                borderWidth: 1,
            },

            {
                label: "Base Line",
                data: data_n2,
                backgroundColor: ["rgba(0, 0, 255, 0.2)"],
                borderColor: ["rgba(0, 0, 255,1)"],
                borderWidth: 1, // Hacer la línea más gruesa (puedes ajustar el valor según tus preferencias)
            },
        ],
    },
	options: {
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					drawBorder: false,
					color: 'rgba(255, 255, 255, .2)'
				},
				ticks: {
					display: true,
					color: '#f8f9fa',
					padding: 10,
					font: {
						size: 14,
						weight: 300,
						family: "Roboto",
						style: 'normal',
						lineHeight: 2
					},
				}
			},
			x: {
				grid: {
					drawBorder: false,
					display: false,
					drawOnChartArea: false,
					drawTicks: false,
					borderDash: [5, 5]
				},
				ticks: {
					display: true,
					color: '#f8f9fa',
					padding: 10,
					font: {
						size: 14,
						weight: 300,
						family: "Roboto",
						style: 'normal',
						lineHeight: 2
					},
				}
			},
		},
	},
});

function addData(chart, dataS) {
	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	// Limit the number of data points to 6
	if (chart.data.labels.length >= 6) {
		chart.data.labels.shift();
		chart.data.datasets[0].data.shift();
	}

	// Add new data point
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(dataS);
	chart.update();
}

const ctz = document.getElementById("Grafica2").getContext("2d");

let labels_n_memory = [];
let data_n_memory   =   [];
let data_n2_memory=  [];
let Grafica2 = new Chart(ctz, {
	type: "line",
	data: {
		labels: labels_n_memory,
		datasets: [
			{
				label: "Memoria RAM",
				data: data_n_memory,
				backgroundColor: ["rgba(0, 128, 0, 1)"],
				borderColor: ["rgba(0, 128, 0, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2_memory,
				backgroundColor: ["rgba(0, 255, 0, 1)"],
				borderColor: ["rgba(0, 255, 0, 1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					drawBorder: false,
					color: 'rgba(255, 255, 255, .2)'
				},
				ticks: {
					display: true,
					color: '#f8f9fa',
					padding: 10,
					font: {
						size: 14,
						weight: 300,
						family: "Roboto",
						style: 'normal',
						lineHeight: 2
					},
				}
			},
			x: {
				grid: {
					drawBorder: false,
					display: false,
					drawOnChartArea: false,
					drawTicks: false,
					borderDash: [5, 5]
				},
				ticks: {
					display: true,
					color: '#f8f9fa',
					padding: 10,
					font: {
						size: 14,
						weight: 300,
						family: "Roboto",
						style: 'normal',
						lineHeight: 2
					},
				}
			},
		},
	},
});

function addData2(chart, data1) {
	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	// Limit the number of data points to 6
	if (chart.data.labels.length >= 6) {
		chart.data.labels.shift();
		chart.data.datasets[0].data.shift();
	}

	// Add new data point
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(data1);
	chart.update();
}

const cty = document.getElementById("Grafica3").getContext("2d");
let labels_n_disco = [];
let data_n_disco   =   [];
let data_n2_disco=  [];
let Grafica3 = new Chart(cty, {
	type: "line",
	data: {
		labels: labels_n_disco,
		datasets: [
			{
				label: "Disco Duro",
				data: data_n_disco,
				backgroundColor: ["rgba(0, 0, 0, 1)"],
				borderColor: ["rgba(0, 0, 0, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2_disco,
				backgroundColor: ["rgba(105, 105, 105, 1)"],
				borderColor: ["rgba(105, 105, 105, 1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					drawBorder: false,
					color: 'rgba(255, 255, 255, .2)'
				},
				ticks: {
					display: true,
					color: '#f8f9fa',
					padding: 10,
					font: {
						size: 14,
						weight: 300,
						family: "Roboto",
						style: 'normal',
						lineHeight: 2
					},
				}
			},
			x: {
				grid: {
					drawBorder: false,
					display: false,
					drawOnChartArea: false,
					drawTicks: false,
					borderDash: [5, 5]
				},
				ticks: {
					display: true,
					color: '#f8f9fa',
					padding: 10,
					font: {
						size: 14,
						weight: 300,
						family: "Roboto",
						style: 'normal',
						lineHeight: 2
					},
				}
			},
		},
	},
});

function addData3(chart, data1, data2) {
	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	// Limit the number of data points to 6
	if (chart.data.labels.length >= 6) {
		chart.data.labels.shift();
		chart.data.datasets[0].data.shift();
	}

	// Add new data point
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(data1);
	chart.update();

}
