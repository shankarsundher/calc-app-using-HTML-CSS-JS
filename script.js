let currentInput = document.querySelector('.currentInput');
let answerArea = document.querySelector('.answerArea');
let allButtons = document.querySelectorAll('button');
let eraseBtn = document.querySelector('#erase');
let clearBtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let answerScreenValue = [];

clearBtn.addEventListener("click", () => {
    answerScreenValue = [''];
    answerArea.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerArea.className = 'answerArea';
    answerArea.style.color = "rgba(150, 150, 150, 0.87)";
})

allButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        /* clicked button is not erased btn.
         for that the clicking button should 
         not be erase button */
        if (!btn.id.match('erase')) {
            //To press other button display value.
            answerScreenValue.push(btn.value)
            console.log(answerScreenValue);
            currentInput.innerHTML = answerScreenValue.join('');
            // evaluating answer in real time
            if (btn.classList.contains('number_btn')) {
                if ((eval(answerScreenValue.join(''))).toString().length > 8) {
                    answerArea.innerHTML = (eval(answerScreenValue.join(''))).toFixed(5);
                }
                else {
                    console.log((eval(answerScreenValue.join(''))).toString().length)
                    answerArea.innerHTML = eval(answerScreenValue.join(''));
                }
            }
        }
        //when erased button clicked, then
        if(btn.id.match(erase)){
       answerScreenValue.pop();
       currentInput.innerHTML = answerScreenValue.join('');
       answerArea.innerHTML = eval(answerScreenValue.join(''));
        }
        // when clicked button is evaluate button, then
        if(btn.id.match('evaluate')){
            currentInput.className = 'answerArea';
            answerArea.className = 'currentInput';
           
        }
// To prevent undefined error in screen 
if(typeof eval(answerScreenValue.join('')) == 'undefined'){
    answerArea.innerHTML = 0;
}
    })
})
