// Função para verificar se um número é primo ou não.
function ehPrimo(numero) {
     /**
      * Verifica se o número é menor ou igual a 1, 
      * pois números menores ou iguais a 1 não são primos.
     **/
     if (numero <= 1) {
        return false;
    }
    
    /** 
     * Inicia um loop for que irá verificar divisões do número 
     * a partir de 2 até um número antes do próprio número.
    */
    for (let i = 2; i < numero; i++) {
        // Verifica se o número é divisível por 'i' sem 
        //deixar um resto, o que indicaria que não é primo.
        if ((numero % i) === 0) {
            return false;
        }
    }

    // Se o loop terminar sem encontrar divisores, significa que o número é primo, então retorna true.
    return true;
}


// Função principal que exibe números primos em um intervalo especificado pelo usuário.
function exibirNumerosPrimos() {
    // Obtém os números de entrada do usuário a partir dos elementos HTML.
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    // Inicializa uma string para armazenar os números primos encontrados.
    let resultado = "";

    // Verifica se o primeiro número é menor ou igual ao segundo.
    if (numero1 <= numero2) {
        // Loop para iterar por todos os números no intervalo especificado.
        for (let i = numero1; i <= numero2; i++) {
            // Chama a função ehPrimo() para verificar se i é primo.
            if (ehPrimo(i)) {
                // Se i for primo, adiciona-o à string de resultado.
                resultado = resultado + i + " ";
            }
        }
    } else {
        // Se o primeiro número for maior que o segundo, exibe uma mensagem de erro.
        resultado = "O primeiro número deve ser menor ou igual ao segundo número.";
    }

    // Atualiza o elemento HTML com o ID "resultado" com o valor da string de resultado.
    document.getElementById("resultado").innerText = resultado;
}
