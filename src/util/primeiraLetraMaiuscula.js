/*
    Transforma primeira letra de uma String em letra Maiuscula
    Ex: exemplo -> Exemplo
*/

const primeiraLetraMaiuscula = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default primeiraLetraMaiuscula;