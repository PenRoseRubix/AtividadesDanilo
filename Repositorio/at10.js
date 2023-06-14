var listaAlunos = [
    {
        nome: "fulano",
        notas: [1,3,4,7]
    },{
        nome: "ciclana",
        notas: [6,8,5,9]
    },{
        nome: "silva",
        notas: [9,9,9,9]
    }
]
function melhoresAlunos(arrObj){
    const numeroDeAlunos = arrObj.leangth-1
    var medias=[]
    for(let i = 0; i > numeroDeAlunos;i++)/*para cada aluno*/{
        var jx = 0
        for( j of arrObj[i].notas){
            jx += j
        }
        medias.push(jx/arrObj[i].notas.length)
    } 
    return medias
}
console.log(melhoresAlunos(listaAlunos))