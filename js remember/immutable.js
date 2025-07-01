const tableauObjets = [
    { id: 1, nom: "Alice", age: 28 },
    { id: 2, nom: "Bob", age: 34 },
    { id: 3, nom: "Charlie", age: 22 }
];

//add
function add(object){
    newTableauObjets = [...tableauObjets, object]
    return newTableauObjets
}

//delete : filter
function del(id) {
    const newtableauObjet = tableauObjets.filter((object) => object.id !== id)
    return newtableauObjet
}

//update : map
function up(id){
    newTableauObjets = tableauObjets.map((objet) => {
        return objet.id !== id ? {...objet, surname:"Blabla"} : objet
    })
    return newTableauObjets
}