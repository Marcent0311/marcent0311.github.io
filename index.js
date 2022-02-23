function areaOfCircle(){
    let radius = prompt('Enter the radius of the circle: ');
    let areaOfCircle = Math.PI * (radius * radius);
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('The area of the circle is: ' + areaOfCircle + '.');
    h1.setAttribute('id', 'areaOfCircle');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('areaOfCircle').remove();
}

function mathAnswer(){
    let num1 = prompt('Enter a number: ');
    let num2 = prompt('Enter a number: ');
    let mathAnswer= +num1 + +num2;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('The answer is: ' + mathAnswer);
    h1.setAttribute('id', 'mathAnswer');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result-2').appendChild(h1);
}   

function reset2(){
    document.getElementById('mathAnswer').remove();
}