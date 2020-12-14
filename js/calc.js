function submit() {
    var birth = document.getElementById("birthID").value;
    
    var gender = document.getElementById("genderID").value

    if (gender=== male){ Kwasi,Kwadwo,Kwabena,Kwaku,Yaw,Kofi,Kwame 
    };
    else( gender=== female) { Akosua,Adwoa,Abenaa,Akua,Yaa,Afua,Ama
    };
    var cC = parseInt(birth.substr(0, 2))
    console.log(cC)

    var yY = parseInt(birth.substr(2, 5))
    console.log(yY)
   var mM = parseInt(birth.substr(5,8))
    console.log(mM)

    var dD = parseInt(birth.substr(8,11))
    console.log(dD)

   
    // var mod = function ( % )
    var Dayoftheweek = ( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD )%7
    
