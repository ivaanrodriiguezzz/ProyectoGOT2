import { Casa } from "./clases/Casa.js";
import { Arma } from "./clases/Arma.js";
import { Reino } from "./clases/Reino.js";
import { Personaje } from "./clases/Personaje.js";
import { Guerrero } from "./clases/personajesEspeciales/Guerrero.js";
import { Consejero } from "./clases/personajesEspeciales/Consejero.js";
import { Rey } from "./clases/personajesEspeciales/Rey.js";

//Armas
let garra = new Arma("Garra", 25, "espada");

//Casas
let stark = new Casa("Stark", "Se acerca el invierno");
let lannister = new Casa("Lannister", "Oye mi rugido");

//Personajes
let jon = new Guerrero("Jon Snow", 25, true, stark, garra);
let tyrion = new Consejero("Tyrion Lannister", 25, true, lannister, "sabiduria");
let robert = new Rey("Robert Baratheon", 25, true, lannister, 15);

jon.presentacion();
jon.luchar();
jon.entrenar();

tyrion.presentacion();
tyrion.luchar();
tyrion.aconsejar(robert);

robert.presentacion();
robert.gobernar();
robert.luchar();
