const input = document.querySelector('input')

const btn = document.querySelector('button')

const gradspan = document.getElementsByClassName('grade')[0]

const remarkspan = document.getElementsByClassName('remark')[0]

function clickme(){
    if(input.value >=70){
        gradspan.textContent = 'A'
        remarkspan.textContent = 'Excellent'
    }
    else if(input.value >=60){
        gradspan.textContent = 'B'
        remarkspan.textContent = 'Very Good'
    }
    else if(input.value >=50){
        gradspan.textContent = 'C'
        remarkspan.textContent = 'Good'
    }
    else{
        gradspan.textContent = 'F'
        remarkspan.textContent = 'Fail'
    }
}

btn.addEventListener('click', clickme)

