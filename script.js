const precoIngresso = 100;
const form = document.getElementById("form-inscricao");

function processarInscricao(nome, idade, possuiCupom) {
    let precoFinal = precoIngresso;

    if(idade < 16) {
        console.log("Inscrição Bloqueada: "+nome+" não possui idade minima");
    } else {
        if(possuiCupom) {
            precoFinal = precoFinal - 20;
        }
        console.log("Inscrição Confirmada para "+nome+"!");
        console.log("Valor a pagar: R$"+precoFinal);
    }
}

function simularVendaDeIngressos() {
    for(let i = 5; i > 0; i--) {
        console.log("Corra! Faltam apenas "
            +i+" vagas para o TechDay 2026");
    }
    console.log("Vagas Encerradas!");
}

form.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        console.log("Formulario interceptado com sucesso!");
        const valorNome = document.getElementById("nome").value;
        const valorEmail = document.getElementById("email").value;

        if(valorNome.trim() === "") {
            alert("Por favor, preencha o seu nome!");
        }
        if(valorEmail.trim() === "") {
            alert("Por favor, preencha seu email!");
        }
        
    }
);