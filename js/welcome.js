// Obtém a hora atual
var dataAtual = new Date();
var horaAtual = dataAtual.getHours();

// Obtém o elemento do cabeçalho do painel de controle
var dashboardHeading = document.getElementById("dashboard-heading");

// Define o texto com base no turno (manhã, tarde ou noite)
if (horaAtual >= 0 && horaAtual < 12) {
  dashboardHeading.innerText = "Bem-vindo(a), tenha um ótimo dia!";
} else if (horaAtual >= 12 && horaAtual < 18) {
  dashboardHeading.innerText = "Bem-vindo(a), tenha uma ótima tarde!";
} else {
  dashboardHeading.innerText = "Bem-vindo(a), tenha uma ótima noite!";
}
