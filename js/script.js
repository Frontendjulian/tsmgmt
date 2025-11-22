//loads header and footer
$(function(){
  $('#header').load("header.html"); 
  $('#footer').load("footer.html"); 
});

//footer year
 document.getElementById("year").innerHTML = new Date().getFullYear();

