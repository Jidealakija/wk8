const section = document.querySelector('section')
const heading = document.createElement('h2')
heading.innerText = 'This is append Element'
heading.setAttribute('class', 'head1')
section.append(heading)
document.body.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
document.body.style.color = 'white'


const image = document.createElement('img')
section.append(image)
image.setAttribute('src', 'https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/08/23125057/Thierry-Henry-Arsenal-4.jpg')
image.setAttribute('alt', 'Titi')
image.setAttribute('width', '50%')
image.setAttribute('height', '50%')

