import db from './db.js'

const list = document.getElementById('people-list')

db.forEach(person => {
    const li = document.createElement('li')
    li.innerHTML = person.name + " " + person.email
    list.appendChild(li)
})