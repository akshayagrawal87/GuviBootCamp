"use strict";

//predefined Code
var cat = {
  name: 'Fluffy',
  activities: ['play', 'eat cat food'],
  catFriends: [{
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
  }, {
    name: 'foo',
    activities: ['sleep', 'pre - sleep naps'],
    weight: 3
  }]
}; //Problem Stataments
// 1.Add height and weight to Fluffy
// 2.Fluffy name is spelled wrongly.Update it to Fluffyy
// 3.List all the activities of Fluffyy’s catFriends.
// 4.Print the catFriends names.
// 5.Print the total weight of catFriends
// 6.Print the total activities of all cats(op: 6)
// 7.Add 2 more activities to bar & foo cats
// 8.Update the fur color of bar
//1.Add height and weight to Fluffy

cat['height'] = '25cm';
cat['weight'] = '700g'; // 2.Fluffy name is spelled wrongly.Update it to Fluffyy

cat["name"] = "Fluffyy"; //3.List all the activities of Fluffyy’s catFriends.

for (var i = 0; i < cat["catFriends"].length; i++) {
  console.log(cat.catFriends[i].activities);
} // 4.Print the catFriends names.


for (var _i = 0; _i < cat["catFriends"].length; _i++) {
  console.log(cat.catFriends[_i].name);
}

console.log(cat);