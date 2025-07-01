const monObjet = {
  nom: "Exemple",
  age: 25,
  hobbies: ["lecture", "sport", "musique"],
  couleurs: ["rouge", "bleu", "vert"]
};

const { age, couleurs } = monObjet;
console.log(age, couleurs)

const [item1, item2] = monObjet.couleurs

console.log(item1, item2)