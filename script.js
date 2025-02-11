
let hrs = document.getElementById("hours")
let min = document.getElementById("minutes")
let sec = document.getElementById("seconds")
let form = document.getElementById("format")

setInterval(() => {

    let getTime = new Date();

    //hrs.innerHTML = getTime.getHours();

    if (getTime.getHours() > 12) {
        hrs.innerHTML = getTime.getHours() - 12;
        form.innerHTML = "PM";
    }


    if (getTime.getHours() < 12) {
        form.innerHTML = "AM"
    }



    min.innerHTML = getTime.getMinutes();
sec.innerHTML = getTime.getSeconds();
}, 1000);


