const valorTotal = [0, 0, 0];
const valorProduto = [50.00, 60.00, 70.00];
const qtd = [0, 0, 0];

function adicionarItem(item) {
  const quantidade = document.getElementById('quantidade' + item);
  const total = document.getElementById("total" + item);
  qtd[item] += 1;
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
  quantidade.value = qtd[item];
  total.innerHTML = valorTotal[item].toFixed(2);
  valorCompra();
}

function decrementQuantidade(item) {
  const quantidade = document.getElementById('quantidade' + item);
  const total = document.getElementById("total" + item);
  if (qtd[item] > 0) {
    qtd[item] -= 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.value = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
  }
}

function valorCompra(){
    const valorTotalCompra = document.getElementById('valorTotalCompra');
    let valor = 0;
    for(let i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];

    }
    valorTotalCompra.innerHTML = valor.toFixed(2);
}