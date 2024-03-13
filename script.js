/* const taskName1 = document.getElementById('taskName')
const taskNameBtn = document.getElementById('taskName-btn')
taskNameBtn.addEventListener('click', () => {
  console.log(taskName1.value)
})
if (taskName1 instanceof HTMLScriptElement) {
  const lista = document.createElement('div')

  lista.classList.add('lista')

  const h2New = document.createElement('h2')
  h2New.innerText = taskName.value
  console.log(h2New.value)
}
 */
const close = document.getElementsByClassName('close')
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement
    div.style.display = 'none'
  }
}

let list = document.querySelector('ul')
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked')
    }
  },
  false
)

function newElement() {
  let li = document.createElement('li')
  let inputValue = document.getElementById('myInput').value
  let t = document.createTextNode(inputValue)
  li.appendChild(t)
  if (inputValue === '') {
    alert('Non puoi inserire un elemento vuoto!')
  } else {
    document.getElementById('myUL').appendChild(li)
  }
  document.getElementById('myInput').value = ''

  const addBtn = document.createElement('button')
  const txt = document.createTextNode('X')
  addBtn.className = 'close'
  addBtn.appendChild(txt)
  li.appendChild(addBtn)

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement
      div.style.display = 'none'
    }
  }
}
