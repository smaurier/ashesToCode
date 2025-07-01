const monObjet = {
  nom: "Exemple",
  age: 25,
  hobbies: ["lecture", "sport", "musique"],
  couleurs: ["rouge", "bleu", "vert"]
};

const [first, ...couleurs] = monObjet.couleurs
console.log(first, couleurs)

const nouveauxHobbies = [...monObjet.hobbies, "guitare"]
console.log(nouveauxHobbies)

// On clone et on ajoute une propriété
const cloneMonObjet = { ...monObjet, prenom: "Sylvain", age: 45 }
console.log(cloneMonObjet)