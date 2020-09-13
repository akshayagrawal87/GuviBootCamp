//predefined Code
var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [{
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre - sleep naps'],
            weight: 3
        }
    ]
}



//Problem Stataments

// 1.Add height and weight to Fluffy
// 2.Fluffy name is spelled wrongly.Update it to Fluffyy
// 3.List all the activities of Fluffyy’s catFriends.
// 4.Print the catFriends names.
// 5.Print the total weight of catFriends
// 6.Print the total activities of all cats(op: 6)
// 7.Add 2 more activities to bar & foo cats
// 8.Update the fur color of bar

//1.Add height and weight to Fluffy
cat['height'] = '25cm'
cat['weight'] = '700g'


// 2.Fluffy name is spelled wrongly.Update it to Fluffyy
cat["name"] = "Fluffyy"

//3.List all the activities of Fluffyy’s catFriends.

for (let i = 0; i < cat["catFriends"].length; i++) {

    console.log("activities: " + cat.catFriends[i].activities)

}

// 4.Print the catFriends names.
for (let i = 0; i < cat["catFriends"].length; i++) {

    console.log("cat friend: " + cat.catFriends[i].name)

}

// 5.Print the total weight of catFriends


const total = cat.catFriends.reduce((total, item) => {
    return item.weight + total
}, 0)

console.log(total)

//6. Print the total activities of all cats

console.log("name: fluffy Activity Count= " + cat.activities.length)

console.log("name: bar Activity Count= " + cat.catFriends[0].activities.length)

console.log("name: bar Activity Count= " + cat.catFriends[1].activities.length)

// 7.Add 2 more activities to bar & foo cats

cat.catFriends[0].activities.push("moew", "run behind mouse")



cat.catFriends[1].activities.push("moew", "run behind mouse")

console.log(cat.catFriends[0].activities)

console.log(cat.catFriends[1].activities)

// 8.Update the fur color of bar

cat.catFriends[0].furcolor = "Brown"

console.log("Color of fur for bar is: " +
    cat.catFriends[0].furcolor)


//console.log(cat);


//output:

// activities: be grumpy, eat bread omblet
// activities: sleep, pre - sleep naps
// cat friend: bar
// cat friend: foo
// 11
// name: fluffy Activity Count = 2
// name: bar Activity Count = 2['be grumpy', 'eat bread omblet', 'moew', 'run behind mouse']
//     ['sleep', 'pre - sleep naps', 'moew', 'run behind mouse']
// Color of fur
// for bar is: Brown