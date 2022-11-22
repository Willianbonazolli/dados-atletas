//definando a  classe atleta
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
// Inserindo as funções
  //Calculador de categoria 
calculaCategoria() {
        if(this.idade >= 9 && this.idade <=  11) {
            return 'Infantil';
        }
        else if(this.idade >= 12 && this.idade <= 13 ) {
            return 'Juvenil';
        }
        else if(this.idade >= 14 && this.idade <= 15 ) {
            return 'Intermediário';
        }
        else if(this.idade >= 16 && this.idade <= 30 ) {
            return 'Adulto';
        } else {
            return 'Sem categoria';
        }
  
    }
//Calculador de IMC
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    } 

    obtemNomeAtleta() {
        return this.nome; //Retorno do nome do atleta
    }

    obtemIdadeAtleta() {
        return this.idade; //Retorno da Idade do atleta
    }

    obtemPesoAtleta() {
        return  this.peso; //Retorno do peso do atleta
    }

    obtemNotasAtleta() {
        return  this.notas; //Retorno das notas do atleta
    }

    obtemCategoria() {
        return atleta.calculaCategoria(); //Retorno da categoria do atleta
    }

    obtemIMC() {
        return atleta.calculaIMC().toFixed(2); //Retorno do IMC do atleta
    }
//Calulando a Media Valida
    calculaMediaValida() {
        let somaDasNotas = this.notas.reduce(function(total, atual){
            return total + atual
        },0)

        let media = (somaDasNotas/this.notas.length).toFixed(2);

        return media;
    }
    obtemMediaValida(){
        return this.calculaMediaValida(); //Retorno da media do atleta
    }
}
//Atleta definido
const atleta = new Atleta("Cesar Abascal",
   30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
//Console para retornar as informações ao usuario
console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Notas:", atleta.obtemNotasAtleta());
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média Válida:", atleta.obtemMediaValida());