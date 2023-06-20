// Dados para o gráfico de pizza
var data = {
  labels: ["Alimentação", "Gastos pessoais", "Moradia", "Transporte"],
  datasets: [{
    data: [900, 270.52, 1500, 300],
    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
  }]
};

// Opções do gráfico de pizza
var options = {
  responsive: true,
  plugins: {
    legend: {
      display: false // Desativar a exibição padrão da legenda
    }
  }
};

// Criação do gráfico de pizza
var ctx = document.getElementById("pieChart").getContext("2d");
var pieChart = new Chart(ctx, {
  type: "pie",
  data: data,
  options: options
});

// Criar uma legenda personalizada abaixo do gráfico
var legendContainer = document.querySelector("#legend tbody");
data.labels.forEach(function(label, index) {
  var legendRow = document.createElement("tr");

  var colorBoxCell = document.createElement("td");
  var colorBox = document.createElement("span");
  colorBox.className = "color-box";
  colorBox.style.backgroundColor = data.datasets[0].backgroundColor[index];
  colorBoxCell.appendChild(colorBox);

  var labelCell = document.createElement("td");
  var labelName = document.createElement("span");
  labelName.className = "legend-label";
  labelName.innerText = label;
  labelCell.appendChild(labelName);

  var valueCell = document.createElement("td");
  var value = document.createElement("span");
  value.innerText = "R$ " + data.datasets[0].data[index];
  valueCell.appendChild(value);

  legendRow.appendChild(colorBoxCell);
  legendRow.appendChild(labelCell);
  legendRow.appendChild(valueCell);

  legendContainer.appendChild(legendRow);
});
