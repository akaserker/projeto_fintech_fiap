function getMonthName(month) {
  var monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return monthNames[month];
}

function updateMonthYearDisplay(year, month) {
  var monthSelect = document.getElementById("monthSelect");
  var yearElement = document.getElementById("year");

  monthSelect.innerHTML = "";

  for (var i = 0; i < 12; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = getMonthName(i);
    monthSelect.appendChild(option);
  }

  monthSelect.value = month;
  yearElement.textContent = year;
}

function updateChart(year, month) {
  console.log("Atualizando gráfico para o mês " + getMonthName(month) + " de " + year);
}

function nextMonth() {
  var monthSelect = document.getElementById("monthSelect");
  var yearElement = document.getElementById("year");
  var year = parseInt(yearElement.textContent);
  var month = parseInt(monthSelect.value);

  if (month === 11) {
    year++;
    month = 0;
  } else {
    month++;
  }

  updateMonthYearDisplay(year, month);
  updateChart(year, month);
}

function previousMonth() {
  var monthSelect = document.getElementById("monthSelect");
  var yearElement = document.getElementById("year");
  var year = parseInt(yearElement.textContent);
  var month = parseInt(monthSelect.value);

  if (month === 0) {
    year--;
    month = 11;
  } else {
    month--;
  }

  updateMonthYearDisplay(year, month);
  updateChart(year, month);
}

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();

updateMonthYearDisplay(currentYear, currentMonth);

document.getElementById("previousMonth").addEventListener("click", previousMonth);
document.getElementById("nextMonth").addEventListener("click", nextMonth);
