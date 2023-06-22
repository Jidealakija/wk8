const btn = document.querySelector('button')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const hidden = document.getElementsByClassName('hidden')[0]
const result = document.getElementsByClassName('result')[0]
const recommend = document.getElementsByClassName('recommend')[0]
const status = document.getElementsByClassName('status')[0]

function bmi(){
   const we = weight.value
   const he = height.value
   const finalResult = (we / Math.pow((he/100),2)).toFixed(2)
   
   result.textContent = finalResult

   hidden.style.display = 'block'

   
   if(finalResult >= 30.0){
    status.textContent = 'obese'
    recommend.textContent = 'visit your doctor and/or join a gym'
   }
   
   if(finalResult >= 25.0){
    status.textContent = 'overweight'
    recommend.textContent = 'Take it easy on the calories and exercise more'
   }

   else if(finalResult >= 18.5){
    status.textContent = 'healthy weight'
    recommend.textContent = 'keep it up. You are tracking well'
   }

   else{
    status.textContent = 'underweight'
    recommend.textContent = 'Load up on the calories'
   }
}

btn.addEventListener('click', bmi)