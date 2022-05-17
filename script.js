let string = "";
// querySelectorAll selects all the query of the specified tag in the ('...');
let buttons = document.querySelectorAll('.button');

/*
innerHTML : fetch the entire html of the selected element.
-> innerHTML is a property and not a method.
or, change the entire html of the selected content.
*/

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
      if(e.target.innerHTML == '=')
      {
        // eval is a functional property in js which takes string as a parameter.
          string = eval(string);
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'C'){
        string = "";
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'del')
      {
        // string = string + e.target.innerHTML;
        string = string.slice(0,-1);
        document.querySelector('input').value = string;
      }
      else{
        console.log(e.target);
      // adding contents using innerHtml property
      string  = string + e.target.innerHTML;
      // display to the screen using input tag
      // selects the query using querySelector
      document.querySelector('input').value = string; 
      }      
    })
})