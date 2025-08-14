
var a = document.getElementById('this_is_h1')
  
a.addEventListener('click', function() {
//   console.log("hey there")
  var beginner_id = document.querySelector('.beginner_content');
  beginner_id.style.top = "0"; 
  var content = document.querySelector('.content');
  content.style.scale = "0.5";
  var container = document.querySelector('.container');
  container.style.overflowY = "auto";
  var Intermediate_content = document.querySelector('.Intermediate_content');
  Intermediate_content.style.display = "none"
});


var b = document.getElementById('this_is_h2')
  
b.addEventListener('click', function() {
//   console.log("hey there")
  var intermediate_id = document.querySelector('.Intermediate_content');
  intermediate_id.style.top = "0"; 
  var content = document.querySelector('.content');
  content.style.scale = "0.5";
  var container = document.querySelector('.container');
  container.style.overflowY = "auto";
  var beginner_content = document.querySelector('.beginner_content');
  beginner_content.style.display = "none"

});


var c = document.getElementById('button-1')
c.addEventListener('click', function(){
    var close_beginner_id = document.querySelector('.beginner_content');
    close_beginner_id.style.top = "-200%";
    var content = document.querySelector('.content');
    content.style.scale = "1";
     var Intermediate_content = document.querySelector('.Intermediate_content');
    Intermediate_content.style.display = "flex"
    var container = document.querySelector('.container');
    container.style.overflowY = "hidden";
})

var d = document.getElementById('button-2')
d.addEventListener('click', function(){
    var close_intermediate_id= document.querySelector('.Intermediate_content');
    close_intermediate_id.style.top = "200%";
    var content = document.querySelector('.content');
    content.style.scale = "1";
    var beginner_content = document.querySelector('.beginner_content');
    beginner_content.style.display = "flex"
    var container = document.querySelector('.container');
    container.style.overflowY = "hidden";
})