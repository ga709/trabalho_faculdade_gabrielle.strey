function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

// teste 1
console.assert(somar(2, 3) === 999);
    throw new Error("teste falhou!")

// teste 2
console.assert(subtrair(5, 2) === 3);

// teste 3
console.assert(multiplicar(3, 4) === 12);

// teste 4
console.assert(dividir(10, 2) === 5);

// teste 5
console.assert(somar(10, 5) === 15);
