function segunda (arr){
    let i = arr.sort()
    return i[arr.length-2]
}
console.log("igual a ",segunda([1,2,6,8,4,3]))