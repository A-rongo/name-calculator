function submit() {
    var birth = document.getElementById("birthID").value;
    
    var gender = document.getElementById("genderID").value;
    
    
    if(!birth) {
        return alert("Kindly input your BirthDay")
    }
    if(!gender) {
        return alert("Kindly input your Gender")
    }
}