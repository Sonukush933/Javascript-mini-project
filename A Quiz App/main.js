const questions = [
    {
        'que': 'which of the following a markup language?',
        'a': 'HTML',
        'b': 'CASCADING STYLE SHEET',
        'c': 'JAVASCRIPT',
        'd': 'PHP',
        'correct': 'a'

    },
    {
        'que': 'Which of the following is not an HTML table layout element?',
        'a': 'alignment',
        'b': 'colour',
        'c': 'size',
        'd': 'span',
        'correct': 'b'

    },
    {
        'que': 'Which HTML5 element is used to style the layout?',
        'a': 'CSS',
        'b': 'jQuery',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'

    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionsInput = document.querySelectorAll(".options");
const loadQuestion = () => {
    if(index === total){
       return endQuiz();
    }
reset();

    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a
    optionsInput[1].nextElementSibling.innerText = data.b
    optionsInput[2].nextElementSibling.innerText = data.c
    optionsInput[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
        right++
    } else {
        wrong++
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionsInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            
            }
        }
    )
    return answer
}

const reset = () =>{
    optionsInput.forEach(
        (input) => {
            if (input.checked) {
                input.checked = false;
            }
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `<h3>Thank you playing Quiz.</h3>
    <h2>${right} / ${total}</h2>`
}

loadQuestion();