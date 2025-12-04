function noDuplicate(arr){
    const unique = [];
    for(const item of arr){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
}

const friends = ["abdul", "babul", "kabul", "abdul", "babul", "rahul", "kahul"];

console.log(noDuplicate(friends));