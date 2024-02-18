document.addEventListener('scroll', function (){
    if (window.scrollY > 30) {
        document.getElementById('header').classList.add('scrolled-header');
    }else{
        document.getElementById('header').classList.remove('scrolled-header');
    }
}
)
 
function bigImg(x) {
    x.style.height = "120px";
    x.style.width = "120px";
  }
  
  function normalImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
  }
