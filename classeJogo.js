class Heroi {
    constructor (nomeHeroi, idadeHeroi, tipoHeroi){
        this.nome = nomeHeroi;
        this.idade = idadeHeroi;
        this.tipo = tipoHeroi;
    }
    atacar(){
        if (this.tipo === "mago"){
            return('magia')
        } else if (this.tipo === "guerreiro"){
            return ('espada')    
        } else if (this.tipo === "monge"){
            return ('artes marciais')
        } else if(this.tipo === "ninja"){
            return('shuriken')
        } else {
            return('poder especial')
        };
    }       
}

const nomeHeroi = "Jedizao";
const idadeHeroi = 33;
const tipoHeroi = "ninja";

const heroiEscolhido = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi)

console.log("Nome: " + heroiEscolhido.nome);
console.log("Idade: " + heroiEscolhido.idade);
console.log("Tipo: " + heroiEscolhido.tipo);

const ataque = heroiEscolhido.atacar();
console.log("O " + tipoHeroi + " atacou usando " + ataque);