var submit = document.getElementById("mySubmit");
submit.addEventListener("click", validation);

function validation(){
    var variables = document.getElementById("myForm");
    
    namaLengkap = variables[0].value;
    email = variables[1].value;
    confEmail = variables[2].value;
    pass = variables[3].value;
    confPass = variables[4].value;
    username = variables[5].value;
    gender = variables[6].value;
    provinsi = variables[7].value;
    pekerjaan = variables[8].value;

    if((namaLengkap === "") || (email === "") || (confEmail === "") || (pass === "") || (confPass === "") || (username === "") || (gender === "") || (provinsi === "")|| (pekerjaan === "")) {
        alert("Anda harus mengisi semua data registrasi");
        return false;
    }else{
        if((pass !== confPass)){
            alert("Password konfirmasi harus sama");
            return false;
        }
        if((email !== confEmail)){
            alert("Email konfirmasi harus sama");
            return false;
        }
        // additional features
        // username at least 6 letters
        var username_length = username.length;
        if(username_length < 7){
            alert("Username harus lebih dari 6 karakter");
            return false;
        }
        // password at least 6 letters
        var pass_length = pass.length;
        if(pass_length < 7){
            alert("Password harus lebih dari 6 karakter");
            return false;
        }
        // // regex email
        var pattern = /\S+@\S+\.\S+/;
        var regexResult = pattern.test(email)
        if(regexResult !== true){
            alert("Masukkan data email yang benar");
            return false;
        }
        // if success do your action...
    }
}