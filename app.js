
// הצגת טיימר
// לאחר 25 דקות הראה חלון 
//איפוס טיימר

//משתנים

const timerDom = document.querySelector("#time");
const textDom = document.querySelector("#text");
const btn = document.querySelector(".btn");

const workTime = 1500000;
const breakTime = 300000;
const totalTime = workTime + breakTime;




// הפעלת טיימר
btn.addEventListener('click',() => {
    //textDom.innerHTML = 'work';
    //remove button
    btn.remove();
    let time = Date();
    //show clock

    //add new button to stop timer

 
})