$(function(){
   var sticky_nav_offset = $('#menu').offset().top;
   var sticky_nav = function(){
   	var scroll_top = $(window).scrollTop();
   	if(scroll_top > sticky_nav_offset){
   		$('#menu').removeClass('menu');
   		$('#menu').addClass('fixed');
   	}else{
   		$('#menu').removeClass('fixed');
   		$('#menu').addClass('menu');
   	}
   };
   sticky_nav();

   $(window).scroll(function(){
   	sticky_nav();
   })
});

var parallax = (function(){
var bg = document.querySelector('.hero__bg');
var imgleft = document.querySelector('.info__imgleft');
var imgright = document.querySelector('.info__imgright');
var infologo = document.querySelector('.info__logo');
   return {
      move: function(block, windowScroll, amount){
         var strafe = windowScroll / -amount + '%';
         var style = block.style;
         style.top = strafe;
      },
      init: function(topScroll){
         this.move(bg,topScroll, 30);
   
      }
   }
}());
window.onscroll = function(){
   var topScroll = window.pageYOffset;
   parallax.init(topScroll);
  }

var toggleBtn = document.getElementById('toggle');
var mobilNav = document.querySelector('.mobil__nav')
toggleBtn.onclick = function(e){
      mobilNav.classList.toggle('nodisp')
}
mobilNav.onmouseleave = function(){
   mobilNav.classList.add('nodisp')
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xuICAgdmFyIHN0aWNreV9uYXZfb2Zmc2V0ID0gJCgnI21lbnUnKS5vZmZzZXQoKS50b3A7XG4gICB2YXIgc3RpY2t5X25hdiA9IGZ1bmN0aW9uKCl7XG4gICBcdHZhciBzY3JvbGxfdG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgXHRpZihzY3JvbGxfdG9wID4gc3RpY2t5X25hdl9vZmZzZXQpe1xuICAgXHRcdCQoJyNtZW51JykucmVtb3ZlQ2xhc3MoJ21lbnUnKTtcbiAgIFx0XHQkKCcjbWVudScpLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgXHR9ZWxzZXtcbiAgIFx0XHQkKCcjbWVudScpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgXHRcdCQoJyNtZW51JykuYWRkQ2xhc3MoJ21lbnUnKTtcbiAgIFx0fVxuICAgfTtcbiAgIHN0aWNreV9uYXYoKTtcblxuICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgXHRzdGlja3lfbmF2KCk7XG4gICB9KVxufSk7XG52YXIgcGFyYWxsYXggPSAoZnVuY3Rpb24oKXtcbnZhciBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19iZycpO1xudmFyIGltZ2xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb19faW1nbGVmdCcpO1xudmFyIGltZ3JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9fX2ltZ3JpZ2h0Jyk7XG52YXIgaW5mb2xvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb19fbG9nbycpO1xuICAgcmV0dXJuIHtcbiAgICAgIG1vdmU6IGZ1bmN0aW9uKGJsb2NrLCB3aW5kb3dTY3JvbGwsIGFtb3VudCl7XG4gICAgICAgICB2YXIgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLWFtb3VudCArICclJztcbiAgICAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xuICAgICAgICAgc3R5bGUudG9wID0gc3RyYWZlO1xuICAgICAgfSxcbiAgICAgIGluaXQ6IGZ1bmN0aW9uKHRvcFNjcm9sbCl7XG4gICAgICAgICB0aGlzLm1vdmUoYmcsdG9wU2Nyb2xsLCAzMCk7XG4gICBcbiAgICAgIH1cbiAgIH1cbn0oKSk7XG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpe1xuICAgdmFyIHRvcFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgIHBhcmFsbGF4LmluaXQodG9wU2Nyb2xsKTtcbiAgfVxuXG52YXIgdG9nZ2xlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZScpO1xudmFyIG1vYmlsTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsX19uYXYnKVxudG9nZ2xlQnRuLm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcbiAgICAgIG1vYmlsTmF2LmNsYXNzTGlzdC50b2dnbGUoJ25vZGlzcCcpXG59XG5tb2JpbE5hdi5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpe1xuICAgbW9iaWxOYXYuY2xhc3NMaXN0LmFkZCgnbm9kaXNwJylcbn0iXX0=
