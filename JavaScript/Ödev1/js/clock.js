let myName = document.querySelector('#myName');
myName.innerHTML = prompt("Name?");


    function timeUpdate() {
        var current = document.querySelector('#myClock');
        var date = new Date();

        var hour = date.getHours(); 
        var minute = date.getMinutes(); 
        var second = date.getSeconds(); 

        var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    
        var day = days[date.getDay()];

        var time = `${hour}:${minute}:${second}, ${day}`;

        current.innerHTML = time;

        setTimeout(timeUpdate, 1000); 
    }
    timeUpdate();