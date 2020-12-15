var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"] 

var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


function AkanNames() {
    var century = document.getElementById("century").value;
    
    // alert(century)
    var year = parseInt(document.getElementById("year").value);
    // alert(year)
    var mm = parseInt(document.getElementById("month").value);
    alert(mm)
    var day = document.getElementById("day").value;
    alert(day)
    var gender = document.getElementById("gender").value;
    alert(gender)

    var date = parseInt(((century / 4) - 2 * century - 1) + ((5 * year/ 4)) + ((26 * (mm + 1) / 10)) + day) % 7

    if (year <= 0 || year == "" || year > 2020) {
        alert("enter valid year")
    }
    if (century <=1 || century == 0){
        alert("enter century" )
    }
    if (day <=31  || day ==0){
        alert("enter day")
    
   } 
      if (month<=12  || month ==0){
        alert("enter day")
    }

    if (gender === "male") {
        alert("your Akan male name is" + maleName[date]);
        
    }
    if (gender === "female") {
        alert("your Akan male name is" + femaleName[date]);
    };