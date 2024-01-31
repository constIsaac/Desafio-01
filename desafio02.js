function somar(Vitórias, Derrotas) {
    return Vitórias - Derrotas;
  }
  
  let resultado = somar(73, 28);
  
  let Patente;
  
  if (resultado <= 10){
    console.log(Patente = "Ferro")}
  else if (resultado >= 11 && resultado <= 20) {
     console.log(Patente  = "Bronze")}
  else if (resultado >= 21 && resultado <= 50) {
      console.log(Patente = "Prata")}
  else if (resultado >= 51 && resultado <= 80) {
      console.log(Patente  = "Ouro")}
  else if (resultado >= 81 && resultado <= 90) {
      console.log(Patente = "Diamante")}
  else if (resultado >= 91 && resultado <= 100) {
      console.log(Patente = "Lendário")}
  else {console.log (Patente = "imortal")}
  
  console.log("o herói tem saldo de " + resultado + " vitórias esta no nivel de " + Patente )