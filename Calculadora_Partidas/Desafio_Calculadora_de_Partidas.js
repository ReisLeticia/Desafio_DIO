
let relacaoPontos = Calcular(78, 49)
Saldo(relacaoPontos)

function Calcular(vitorias, derrotas){
    let subtracao = vitorias - derrotas
    return subtracao 
}

function Saldo(relacao){
    if (relacao <= 10){
        console.log(`O Herói tem de saldo de ${relacao} está no nível de Ferro`)
    }
    else if (relacao >= 11 && relacao <= 20){
        console.log(`O Herói tem de saldo de ${relacao} está no nível de Bronze`)
    }
    else if (relacao >= 21 && relacao <= 50){
        console.log(`O Herói tem de saldo de ${relacao} está no nível de Prata`)
    }
    else if (relacao >= 51 && relacao <= 80){
        console.log(`O Herói tem de saldo de ${relacao} está no nível de Ouro`)
    }
    else if (relacao >= 81 && relacao <= 90){
        console.log(`O Herói tem de saldo de ${relacao} está no nível de Diamante`)
    }
    else if (relacao >= 91 && relacao <= 100){
        console.log(`O Herói tem de saldo de ${relacao} está no nível de Lendário`)
    }
    else if (relacao >= 101){
        console.log(`O Herói tem de saldo de ${relacao} está no nível de Imortal`)
    }

}
