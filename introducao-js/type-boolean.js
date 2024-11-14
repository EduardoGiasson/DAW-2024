const value1 = true;
const value2 = false;


console.log(value1 == value2);
//thrusty / falsy -> Variaveis vazias ou com valor 0, se submeteram  a
// teste logico, se tornaram um tipo boolean (thrusty/falsy)

if(value1){
    console.log('Verdadeiro')
}else{
    console.log('falso')
}
//Teste logico
if(value1){
    console.log('Verdadeiro')
}
//0 de cima vira:
if(value1){console.log('Verdadeiro')}

//Operador ternario

const resultado = value1 ? 'verdadeiro' :'falso';