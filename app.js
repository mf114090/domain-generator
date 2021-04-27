let articulo = ["la", "una", "su"];
let adjetivo = ["gran", "mejor", "loca"];
let sustantivo = ["solucion", "respuesta"];

function generadorDominio(parte1, parte2, parte3){
    for(let a=0; a<parte1.length; a++){
        for(let b=0; b<parte2.length; b++){
            for(let c=0; c<parte3.length; c++){
                let nuevoNombre = (parte1[a] + parte2[b] + parte3[c] + ".com");


                console.log(nuevoNombre);
            }
        }
    }
}
generadorDominio(articulo,adjetivo,sustantivo)