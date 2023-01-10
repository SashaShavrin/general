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