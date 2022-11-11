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
  
  function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
 
  window.onscroll = function() {
    var scrolled = window.pageYOffset;
    if (scrolled > 500) {
      (function() {
        let name = document.getElementById('techologies');
        let span = name.querySelectorAll('.techologies-span');
        for (let i = 0; i < span.length; i++) {
          setTimeout(function() {
            if (window.innerWidth < 500){
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
            span[i].style.letterSpacing = '-35px'
          }, 30 * i)
        }
      }())
    }
    let item1 = document.getElementById('one');
    if ((scrolled + 250) > item1.offsetTop) {
     
        item1.style.height = '330px';
        item1.style.padding = '15px';
      
    }
    if ((scrolled + 500) > item1.offsetTop && window.innerWidth < 500) {
       
          item1.style.height = '385px';
          item1.style.padding = '15px';
        
      }
    let item2 = document.getElementById('two');
    if ((scrolled + 500) > item2.offsetTop) {
 
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
        item4.style.height = '365px';
        item4.style.padding = '15px';
    }
    if ((scrolled + 450) > item4.offsetTop && window.innerWidth < 500) {
          item4.style.height = '430px';
          item4.style.padding = '15px';
      }




    let work = document.getElementById('work');
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
    setTimeout(getFullName,2100)
    
    function getText() {
      let text = document.getElementById('block3');
      text.classList.toggle('show')
    }
    setTimeout(getText, 2200)
    
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
  
 

  var hello = "Hello! My name is Alexander";
  var i = -1;
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
  
