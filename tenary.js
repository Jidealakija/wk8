const input = document.querySelector('input')
const btn = document.querySelector('button')
const answer = document.querySelector('p')

function voteStat(){
    const age = (new Date().getFullYear()) - (input.value).slice(0,4)
    answer.textContent = age > 18 ? 'old enough to vote' : 'too young to vote'
}

btn.addEventListener('click', voteStat)