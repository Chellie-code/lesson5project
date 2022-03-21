let diameterInput = prompt('Enter diameter of circle');


function calculateArea(){
   let area = 3.14*(diameterInput/2)**2
   alert(`Area of your circle is ${area}`)
   //alert('Area of your circle is' + area)
}

calculateArea();