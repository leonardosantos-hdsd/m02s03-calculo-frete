function calcularFrete(regiao, peso) {
  let frete;

  switch (regiao.toLowerCase()) {
    case "norte":
      frete = 24 + (2.20 * peso);
      break;
    case "nordeste":
      frete = 22 + (2.10 * peso);
      break;
    case "centro-oeste":
      frete = 20 + (2.00 * peso);
      break;
    case "sudeste":
      frete = 16 + (1.80 * peso);
      break;
    case "sul":
      frete = 18 + (1.90 * peso);
      break;
    default:
      return null;
  }

  return frete;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-frete");
  const regiaoInput = document.getElementById("regiao");
  const pesoInput = document.getElementById("peso");
  const saida = document.getElementById("saida");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const regiao = regiaoInput.value.trim();
    const peso = parseFloat(pesoInput.value);

    if (!regiao || isNaN(peso) || peso < 0) {
      saida.textContent = "❌ Dados inválidos.";
      console.log("Dados inválidos.");
      return;
    }

    const valorFrete = calcularFrete(regiao, peso);

    if (valorFrete === null) {
      saida.textContent = "❌ Região inválida";
      console.log("Região inválida");
    } else {
      const resultado = `Frete para ${regiao}: R$ ${valorFrete.toFixed(2)}`;
      saida.textContent = resultado;
      console.log(resultado);
    }
  });
});
