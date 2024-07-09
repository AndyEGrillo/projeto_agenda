function novoCadastro() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    if (nome === ''|| telefone === ''){
        alert("Para continuar com o cadastro, por favor, preencha todos os campos.");
        return;
    }

    let tabela = document.getElementById("tabelaRegistro");
    let linhas = tabela.rows;

    for (let i = 1; i < linhas.length; i++) {
        let novoNome = linhas[i].cells[0];
        if (novoNome.innerHTML === nome) {
            alert("Esse nome já foi registrado na agenda!");
            return;
        }
  
    }

    Novocontato();
}

function  Novocontato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    let tabela = document.getElementById("tabelaRegistro");
    let novaLinha = tabela.insertRow(-1);

    let novoNome = novaLinha.insertCell(0);

    let telefoneRegistro = novaLinha.insertCell(1);
    
    novoNome.innerHTML = nome;
    telefoneRegistro.innerHTML = telefone;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}

