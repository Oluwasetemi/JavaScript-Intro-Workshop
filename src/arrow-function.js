const myFunction = () => {
  return 'my First Function'
}
myFunction()

const doSomething = (name) => {
  console.log(name)
  return `Hello New FreeCodeCamper ${name}`
}
let name = 'Quincy Larson'
doSomething(name)

// () => return 'Hello, => functions'

// implicit return

const myFunction = () => ({ value: 'test' })
myFunction() //{value: 'test'}


// explicit return

// this in arrow function
const link = document.querySelector('#link')
link.addEventListener('click', () => {
  // this === window
})

const link = document.querySelector('#link')
link.addEventListener('click', function () {
  // this === link
}) 