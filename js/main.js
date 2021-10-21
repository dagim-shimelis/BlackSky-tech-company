      //Select element function
      const select = function (element) {
          return document.querySelector(element);
      };

//  var startbtn=0;
      let scontent1 = select('.scontent1');
      let scontent2 = select('.scontent2');
      let scontent3 = select('.scontent3');
      let scontent4 = select('.scontent4');
      let scontent5 = select('.scontent5');
      let filter = select('#filtered');
      let hirePage = select('.hire-page');
      let sideContent = select('.side-content');


      function service(num) {
         let box;
//          startbtn=1;
       scontent1.style.right="-60vw"; scontent2.style.right="-60vw"; scontent3.style.right="-60vw"; scontent4.style.right="-60vw"; scontent5.style.right="-60vw";
          switch (num) {
              case '1': {
                  box = scontent1;
                  break;
              }
              case '2': {
                  box = scontent2;
                  break;
              }
              case '3': {
                  box = scontent3;
                  break;
              }
              case '4': {
                  box = scontent4;
                  break;
              }
              case '5': {
                  box = scontent5;
                  break;
              }
          };
         
          box.style.right="10vw";
      };

//if(startbtn==0){
//    setInterval(loopBox,4000);
//}
//function loopBox{
//    for
//}



function hireUs(){
    filter.style.filter="blur(4px) brightness(40%)";
    hirePage.style.display="flex";
    hirePage.style.top="0";  
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
//        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}