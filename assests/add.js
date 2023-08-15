function independence() {
    let personName = prompt("Please enter your name:");
    let wish = document.querySelectorAll(".wish");
    
    wish.forEach(function(day) {
        day.textContent = "Happy Independence Day, " + personName + "! From Umama Masroor";
        day.style.color = "green";
        
    });
}