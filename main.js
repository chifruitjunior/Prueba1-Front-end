const Primo=(numero)=> {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}
const imprimirPrimerosPrimos=(cantidad)=> {
    let primerosPrimos = [];
    let numero = 2;

    while (primerosPrimos.length < cantidad) {
        if (Primo(numero)) {
            primerosPrimos.push(numero);
        }
        numero++;
    }

    console.log(`Los primeros ${cantidad} números primos son: ${primerosPrimos.join(', ')}`);
}
imprimirPrimerosPrimos(10);
