function sumagem (arr){
    let x = 0
    let size = arr.length
    for(let i = 0; i<size;i++){
        x = x+arr[0]
        arr.shift()

    }
    return x
}
console.log("igual a",sumagem([1,2,3]))