var n =   document.querySelectorAll(".drum").length;
var i;
 for(i=0;i<n;i++)
 {
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
     {
          //alert("Clicked");
          var kp = this.innerHTML;
          key_press(kp);
          animation(kp);
        });
 }
document.addEventListener("keypress",function()
{
  key_press(event.key);
  animation(event.key);

});
function key_press(k)
{
  //var k = event.key;
  switch(k)
  {
   case "w":
   var tom1 = new Audio('sounds/tom-1.mp3');
   tom1.play();
   break;
   case "a":
   var tom2 = new Audio('sounds/tom-2.mp3');
   tom2.play();
   break;
   case "s":
   var tom3 = new Audio('sounds/tom-3.mp3');
   tom3.play();
   break;
   case "d":
   var tom4 = new Audio('sounds/tom-4.mp3');
   tom4.play();
   break;
   case "j":
   var snare = new Audio('sounds/snare.mp3');
   snare.play();
   break;
   case "k":
   var crash = new Audio('sounds/crash.mp3');
   crash.play();
   break;
   case "l":
   var kick = new Audio('sounds/kick-bass.mp3');
   kick.play();
   break;
   }
 }
function click_button()
{
  //alert("Clicked");
   var audio = new Audio('sounds/tom-1.mp3');
   audio.play();
   var bt = this.innerHTML;
}
function animation(key)
{
  document.querySelector("."+key).classList.add("pressed");
   setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  },100); 
  }
