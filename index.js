function findMatching(array, string){
    return array.filter(name => name.toUpperCase() === string.toUpperCase())
};

function fuzzyMatch(array, string){
    return array.filter(name => name.slice(0, string.length).toUpperCase() === string.toUpperCase())
}

function matchName(array, string){
    return array.filter(element => element.name.toUpperCase() === string.toUpperCase())
}