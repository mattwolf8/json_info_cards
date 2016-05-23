var div_click = document.querySelectorAll("#main_content  div  ul");

for (var i = 0; i < div_click.length; i++){
  // add event listener to each div container
   div_click[i].addEventListener('click', function(event){
      //console.log(this);
      this.classList.toggle('updated');
   });
}

