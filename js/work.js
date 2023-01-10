window.onscroll = function() {
    var scrolled = window.pageYOffset;
    if (scrolled > 500) {
      (function() {
        let name = document.getElementById('techologies');
        let span = name.querySelectorAll('.techologies-span');
        for (let i = 0; i < span.length; i++) {
          setTimeout(function() {
            if (window.innerWidth < 500) {
              span[i].style.marginRight = "3px";
            } else {
              span[i].style.marginRight = "1px";
            }
          }, 30 * i)
        }
      }())
    }
    if (scrolled > 950) {
      (function() {
        let name = document.getElementById('projects');
        let span = name.querySelectorAll('span');
        for (let i = 0; i < span.length; i++) {
          setTimeout(function() {
            span[i].style.color = "rgba(255, 255, 255, 0.82)";
            if (window.innerWidth < 500) {
              span[i].style.letterSpacing = '-20px'
            }
             else {
              span[i].style.letterSpacing = '-35px'
             }
          }, 30 * i)
        }
      }())
    }
  
    let item0 = document.getElementById('zero');
    if ((scrolled + 250) > item0.offsetTop) {
      item0.style.height = '345px';
      item0.style.padding = '15px';
    }
    if ((scrolled + 500) > item0.offsetTop && window.innerWidth < 500) {
      item0.style.height = '305px';
      item0.style.padding = '15px';
    }
  
    let item1 = document.getElementById('one');
    if ((scrolled + 250) > item1.offsetTop) {
      item1.style.height = '340px';
      item1.style.padding = '15px';
    }
    if ((scrolled + 500) > item1.offsetTop && window.innerWidth < 500) {
      item1.style.height = '400px';
      item1.style.padding = '15px';
    }
  
    let item2 = document.getElementById('two');
    if ((scrolled + 250) > item2.offsetTop) {
      item2.style.height = '330px';
      item2.style.padding = '15px';
    }
    if ((scrolled + 500) > item2.offsetTop && window.innerWidth < 500) {
      item2.style.height = '290px';
      item2.style.padding = '15px';
    }
  
    let item3 = document.getElementById('three');
    if ((scrolled + 250) > item3.offsetTop) {
      item3.style.height = '330px';
      item3.style.padding = '15px';
    }
    if ((scrolled + 500) > item3.offsetTop && window.innerWidth < 500) {
      item3.style.height = '385px';
      item3.style.padding = '15px';
    }
  
    let item4 = document.getElementById('four');
    if (window.innerWidth < 650) {
      four.src = "./img/image 9.png";
    }
    if ((scrolled + 250) > item4.offsetTop) {
      item4.style.height = '330px';
      item4.style.padding = '15px';
    }
    if ((scrolled + 450) > item4.offsetTop && window.innerWidth < 500) {
      item4.style.height = '430px';
      item4.style.padding = '15px';
    }
  
    let work = document.getElementById('work');
    if ((scrolled + 500) > work.offsetTop && window.innerWidth < 500) {
      (function() {
        let spanWork = work.querySelectorAll('.work-span');
        for (let i = 0; i < spanWork.length; i++) {
          setTimeout(function() {
            spanWork[i].style.marginRight = "1px";
            spanWork[i].style.color = "black";
          }, 30 * i)
        }
      }())
    }
    if ((scrolled + 250) > work.offsetTop) {
      (function() {
        let spanWork = work.querySelectorAll('.work-span');
        for (let i = 0; i < spanWork.length; i++) {
          setTimeout(function() {
            spanWork[i].style.marginRight = "1px";
            spanWork[i].style.color = "black";
          }, 30 * i)
        }
      }())
    }
  }