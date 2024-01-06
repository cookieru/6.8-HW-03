const trafficLights = document.querySelectorAll('.trafficLight');
let counter = 0; 

trafficLights.forEach(element => {
        element.addEventListener('click', nextColor)
    }
);

function nextColor()
{
    counter++;
    if (counter > 3) counter = 1;
    
    trafficLights.forEach(element => {
        element.style.background = ('black');
    });

    switch (counter) {
        case 1:
            trafficLights[2].style.background = ('green');
            break;
        case 2:
            trafficLights[1].style.background = ('yellow');
            break;
        case 3:
            trafficLights[0].style.background = ('red');
            break;    
        default:
            break;
    }
}
