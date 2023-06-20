
let light = document.querySelector('.light');
let button= document.querySelector('#power');

function power(){
    if(light.classList.contains('light-on')){
    light.classList.remove('light-on');
    button.style.backgroundColor="red";
    button.innerHTML="OFF";
}
else{
    light.classList.add("light-on");
    button.style.backgroundColor="green";
    button.innerHTML="ON";

}
}


    


document.querySelector('#power').addEventListener("click", power);


