// Write a function called“ transformGeekData” that 
// transforms some set of data from one format to another

var array = [
    [
        ['firstName', 'Vasanth'],
        ['lastName', 'Raja'],
        ['age', 24],
        ['role', 'JSWizard']
    ],
    [
        ['firstName', 'Sri'],
        ['lastName', 'Devi'],
        ['age', 28],
        ['role', 'Coder']
    ]
];

function transformGeekData(list) {

    let obj = []

    for (let i = 0; i < list.length; i++) {

        let temp = {}

        for (let j = 0; j < list[i].length; j++) {

            temp[list[i][j][0]] = list[i][j][1]

        }
        obj.push(temp)

    }

    return obj

}
console.log(transformGeekData(array))