(function() {
    let parent = document.getElementById('programs');
    let progs = parent.querySelectorAll('.program');
    for (let i = 0; i < 10000; i++) {
      setTimeout(function() {
        i = Math.round(Math.random() * 10);
        progs[i].classList.toggle('program-animate')
      }, 3000 * i)
    }
  }())
