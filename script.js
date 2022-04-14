function validate(){
    var txtDob = $("#txtDate").val();
    var dob = new Date(txtDob);
    if(dob >= new Date()){
        alert("Date of Birth is not valid. Date has to be before today.");
        return false;
    }
    var phone = $("#phone").val();
    if(phone.length != 10 || isNaN(phone)){
        alert("Phone number is not valid – needs 10 digits or not in a valid format – no characters or hyphens.");
        return false;
    }
}