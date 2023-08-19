function contarParesImpares() {
    // Obtém os números informados pelo usuário a partir de elementos de entrada HTML
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    // Inicializa as variáveis para contar números pares e ímpares
    let pares = 0;
    let impares = 0;
    
    // Variáveis para armazenar o número maior e o número menor
    let numeroMaior = 0;
    let numeroMenor = 0;
    
    // Determina o número maior e o número menor entre os dois números informados
    if (numero1 > numero2) {
        numeroMaior = numero1;
        numeroMenor = numero2;
    } else {
        numeroMaior = numero2;
        numeroMenor = numero1;
    }

    // Itera através de todos os números entre o número menor e o número maior
    for (let i = numeroMenor; i <= numeroMaior; i++) {
        // Verifica se o número é par (divisível por 2)
        if ((i % 2) == 0) {
            pares++;
        } else {
            impares++;
        }
    }

    // Cria uma mensagem de resultado com a contagem de pares e ímpares
    let resultado = "Quantidade de números pares: " + pares + "<br>Quantidade de números ímpares: " + impares;
    
    // Exibe o resultado no elemento HTML com o ID "resultado"
    document.getElementById("resultado").innerHTML = resultado;
}
