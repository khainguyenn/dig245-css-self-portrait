
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

document.addEventListener("mousemove", (event) => {
  let mousex = event.clientX;
  let mousey = event.clientY;
  document.getElementById("mouse").innerHTML = "X = " + mousex + ", " + "Y = " + mousey;
});


const allElements = document.querySelectorAll('*'); 
console.log("Total number of HTML elements in the portrait:", allElements.length);

document.getElementById("colorButton").addEventListener("click", function() {
  if (document.body.style.backgroundColor === "red") {
      document.body.style.backgroundColor = "white";
  } else {
      document.body.style.backgroundColor = "red";
  }
});
