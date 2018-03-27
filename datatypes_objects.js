//Commit 1 - Selecting datatypes
//1. Boolean , on === true, off === false
//2. array , [eamil1, eamil2, email3, email4]
//3. objects  , const spaceship = {hull: , laser blasters:, tractorbeam:, warpdrive: }
//4. array ,  class = [student1, student2, student3, student4]
//5. objects , const class = {student1 = {location}, student2 = {location}, student3 = {location}}
//6. objects , const class = {student1 = {location, list of tv shows}, student2 = {location, list of tv shows}, student3 = {location, list of tv shows}}

// //Commit 2 - Created some data structures and accessed some data
// //1. array that holds the rainbow
// let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// //2. code that accesses blue
// console.log(rainbow[4]);
// //3. object with my info
// const johnPaul = {
// 	location: "Denver",
// 	favoriteFood: "pizza",
// 	hobby: "getting outside",
// 	favoriteDatatype: "objects"
// };
// //4. access hobby
// console.log(johnPaul.hobby);

//console.log(solarSystem[4].moons)
//console.log(solarSystem[7].moons[1])
//solarSystem[1].moons[0] = "Endor"
//solarSystem[1].moons[1] = "Endor2"
//console.log(solarSystem[1].moons[0])
//console.log(solarSystem.push("Pluto"));
// function newPlanet(name, ringSystem, moons) {
//     this.name = name,
//     this.ringSystem = ringSystem,
//     this.moons = moons
// }
// solarSystem.push(newPlanet(pluto, false, Charon));

// const newPluto = {
//     name: "Pluto",
//     ringSystem: false,
//     moons: "Charon"
// };

// solarSystem.push(newPluto);
// console.log(solarSystem)

//Commit 3 - Crazy Object!
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
};
//1. omg my mouth is burning
console.log(crazyObject.taco[1].salsa[5]);
//2.pretty pretty good
console.log(crazyObject.larry.quotes[0]);
//3. Swearing at larry and jeff
console.log(crazyObject.larry.characters[2].favourtieHobby);
//4. chicken teriyaki boy
console.log(crazyObject.larry.nicknames[1]);
//5. object containing funkhauser
console.log(crazyObject.larry.characters[1]);













