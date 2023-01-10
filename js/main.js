if (window.innerWidth < 500) {
  function getImg() {
    let img = document.getElementById('block1');
    img.classList.toggle('show')
  }
  setTimeout(getImg, 1500)

  function getFullName() {
    let fullName = document.getElementById('block2');
    fullName.classList.toggle('show')
  }
  setTimeout(getFullName, 1600)

  function getText() {
    let text = document.getElementById('block3');
    text.classList.toggle('show')
  }
  setTimeout(getText, 1700)

  function getMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('showMenu')
  }
  setTimeout(getMenu, 1000)
} else {
  function getImg() {
    let img = document.getElementById('block1');
    img.classList.toggle('show')
  }
  setTimeout(getImg, 1200)

  function getFullName() {
    let fullName = document.getElementById('block2');
    fullName.classList.toggle('show')
  }
  setTimeout(getFullName, 1300)

  function getText() {
    let text = document.getElementById('block3');
    text.classList.toggle('show')
  }
  setTimeout(getText, 1400)

  function getMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('showMenu')
  }
  setTimeout(getMenu, 1000)
}
