`use strict`;

(() => {


    const btn = document.querySelector('#btn')
    const res = document.querySelector('#res')
    const btnTry = document.querySelector('#btn-try');

    btnTry.disabled = true;
    btn.addEventListener('click', () => {
        let result = '',
            a1 = document.querySelector('#q1').value,
            a2 = document.querySelector('#q2').value,
            a3 = document.querySelector('#q3').value,
            a4 = document.querySelector('#q4').value,
            a5 = document.querySelector('#q5').value,
            a6 = document.querySelector('#q6').value;


        if (a1 === "6") {
            result++
        }
        if (a2 === "-9") {
            result++
        }
        if (a3 === "1") {
            result++
        }
        if (a4 === "3.45") {
            result++
        }
        if (a5 === "0") {
            result++
        }
        if (a6 === "-98") {
            result++
        }

        if (result == 0) {
            res.textContent = 'Non of your answers where correct'
        } else if (result == 1) {
            res.textContent = 'You got 1 correct answer'
        } else {
            res.textContent = 'You got ' + result + ' correct answers'
        }


        btn.disabled = true;
        btnTry.disabled = false;
        return result;
    })

    btnTry.addEventListener('click', () => {

        location.reload()
    });
})();