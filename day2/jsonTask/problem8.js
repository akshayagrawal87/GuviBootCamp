// You
// function should take the object and a pair of strings and should return
// if the quest is present and
// if its valid answer

var securityQuestions = [{
        question: 'What was your first pet’ s name ? ',
        expectedAnswer: 'FlufferNutter'
    },
    {
        question: 'What was the model year of your first car ? ',
        expectedAnswer: '1985'
    },
    {
        question: 'What city were you born in ?',
        expectedAnswer: 'NYC'
    }
]

function checksecurityQuestions(securityQuestions, question, ans) {

    for (var a in securityQuestions) {

        if (securityQuestions[a].question === question && securityQuestions[a].expectedAnswer === ans)
            return true
    }

    return false
}

//Test case1:
var ques = 'What was your first pet’ s name ? ';
var ans = 'FlufferNutter';
var status = checksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
var ques = 'What was your first pet’ s name ? ';
var ans = 'DufferNutter';
var status = checksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase