function Validate() {
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;
    if (password != confirmPassword) {
        alert("You first Passwords is not similar with 2nd password. Please enter same password in both");
        return false;
    }
    return true;
}
