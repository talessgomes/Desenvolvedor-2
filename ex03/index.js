
const dados = [
    { dia: 1, valor: 100.0 },
    { dia: 2, valor: 0.0 },
    { dia: 3, valor: 200.5 },
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 300.0 },
  ];
  

  const faturamentoDiario = dados
    .filter(dia => dia.valor > 0)
    .map(dia => dia.valor);
  

  const menorValor = Math.min(...faturamentoDiario);
  const maiorValor = Math.max(...faturamentoDiario);
  

  const mediaMensal = faturamentoDiario.reduce((total, valor) => total + valor, 0) / faturamentoDiario.length;
  
  const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;
  

  console.log(`Menor valor de faturamento: ${menorValor}`);
  console.log(`Maior valor de faturamento: ${maiorValor}`);
  console.log(`Dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);