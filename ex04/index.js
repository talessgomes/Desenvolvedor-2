// Criando os dados do faturamento.
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

//Calculando o valor total
let faturamentoTotal = 0;
for (let estado in faturamentoPorEstado) {
    faturamentoTotal += faturamentoPorEstado[estado];
}


console.log("Percentual de representação de cada estado:");
for (let estado in faturamentoPorEstado) {
  let percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
