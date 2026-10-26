
import { Personaje } from "../Personaje.js";

export class Guerrero extends Personaje{
    
    //Atributos
    #arma;

    //Constructor parametrizado
    constructor(nombre,edad,vivo,casa,arma){
        super(nombre,edad,vivo,casa,null);
        this.#arma=arma;
    }

    //Metodo luchar
    luchar(){
        console.log(`${this.getNombre()} ataca con su ${this.#arma.getNombre()}, causando ${this.#arma.getdanio()} puntos de daño`);
    }

    //Metodo entrenar
    entrenar(){
        console.log(`${this.getNombre()} se entrena sin descanso para la próxima batalla`);
    }

    //Getters y Setters
    getArma(){
        return this.#arma;
    }
    setArma(arma){
        this.#arma=arma;
    }

}
