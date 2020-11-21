console.log('Múltiplos');

alert('Calculador de múltiplos');

const numero1 = prompt('Ingrese el primer número');
const numero2 = prompt('Ingrese el segundo número');
const resto = Number(numero1) % Number(numero2);

alert(`(Si el número ${numero1} es múltiplo de ${numero2} el valor resultante es 0, si no es múltiplo va a dar otro número)
        El valor es ${resto}.
`)