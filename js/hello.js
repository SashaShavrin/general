let hello = "Hello! I am Alexander";
let i = -1;
if (window.innerWidth < 500) {
  setInterval(function() {
    if (i >= hello.length - 1) {
      return false
    } else {
      ++i
      document.getElementById('insertHello').innerHTML += hello[i];
      insertHello.classList.toggle('sayHello')
    }
  }, 15)
} else {
  setInterval(function() {
    if (i >= hello.length - 1) {
      return false
    } else {
      ++i
      document.getElementById('insertHello').innerHTML += hello[i];
      insertHello.classList.toggle('sayHello')
    }
  }, 30)
}

if (window.innerWidth < 500) {
  function getImg() {
    let img = document.getElementById('block1');
    img.classList.toggle('show')
  }
  setTimeout(getImg, 2000)

  function getFullName() {
    let fullName = document.getElementById('block2');
    fullName.classList.toggle('show')
  }
  setTimeout(getFullName, 2100)

  function getText() {
    let text = document.getElementById('block3');
    text.classList.toggle('show')
  }
  setTimeout(getText, 2200)

  function getMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('showMenu')
  }
  setTimeout(getMenu, 2000)
} else {
  function getImg() {
    let img = document.getElementById('block1');
    img.classList.toggle('show')
  }
  setTimeout(getImg, 1400)

  function getFullName() {
    let fullName = document.getElementById('block2');
    fullName.classList.toggle('show')
  }
  setTimeout(getFullName, 1500)

  function getText() {
    let text = document.getElementById('block3');
    text.classList.toggle('show')
  }
  setTimeout(getText, 1600)

  function getMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('showMenu')
  }
  setTimeout(getMenu, 1000)
}
