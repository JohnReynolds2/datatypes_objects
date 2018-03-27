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

// //Commit 3 - Crazy Object!
// const crazyObject = {
//   taco: [{meat: 'steak',
//          cheese: ['panela', 'queso', 'chihuahua']},
//          {meat: 'chicken',
//           salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//         ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [{
//       name: "Jeff",
//       occupation: "manager"
//     },
//     {
//       name: "funkhauser",
//       occupation: "tv dude"
//     },
//     {
//       name: "susie",
//       occupation: "jeffs wife",
//       favourtieHobby: "Swearing at Larry and Jeff"
//     },
//     ]
//   }
// };
// //1. omg my mouth is burning
// console.log(crazyObject.taco[1].salsa[5]);
// //2.pretty pretty good
// console.log(crazyObject.larry.quotes[0]);
// //3. Swearing at larry and jeff
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// //4. chicken teriyaki boy
// console.log(crazyObject.larry.nicknames[1]);
// //5. object containing funkhauser
// console.log(crazyObject.larry.characters[1]);

// //Commit 4 - Accessed Limbo
// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// };
// //Change the Value to Null
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6. limbo = null);
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6);

//Commit 5 - Made an Array of Bond titles

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];
// //Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
// //empty array to push titles to
// bondTitles = [];
// //for loop identifying titles and pushing them to empty array each loop
// for (i = 0; i < bondFilms.length; i++) {
// 	bondTitles.push(bondFilms[i].title);
// }
// //displaying the final array
// console.log(bondTitles);

// //Commit 6 - Odd Bonds
// //empty array to push odd year titles to
// oddBonds = [];
// //for loop that has an if statement saying that 'if the year has a remainder (meaning it is odd) than push it to the array'
// for (i =0; i < bondFilms.length; i++) {
// 	if (bondFilms[i].year % 2 !== 0) {
// 		oddBonds.push(bondFilms[i].title);
// 	}
// }
// //displaying final array of odd year bond films.
// console.log(oddBonds);

//Commit 7 - Bond Film Gross

totalSum = 0;

for (i = 0; i < bondFilms.length; i++) {
	dollarSignString = bondFilms[i].gross;
	grossNumbers = dollarSignString.replace(/,/g , "").replace('$', '');
	totalSum += Number(grossNumbers);
}
console.log(totalSum);
//=> 13821621224