function allo(parametro){
    if(typeof(parametro) === typeof(true)){parametro = !parametro;console.log(parametro)}
    else if (typeof(parametro) === typeof(2)){parametro = parametro* -1;console.log(parametro)}
    else(console.log("Booelano ou Número esperados, mas oparâmetro é do tipo", typeof(parametro)))

}
allo("as")