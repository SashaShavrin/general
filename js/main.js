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
  setTimeout(getMenu, 100)
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
