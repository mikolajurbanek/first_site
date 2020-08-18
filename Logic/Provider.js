function main() {

validateEmail();


}


function validateEmail() {
    const validation = document.getElementById("button")
    validation.addEventListener('click', function () {
        let emailAddress = document.getElementById('email').value;
        if(!emailAddress.includes('@')){
            let wrongAddress = alert('Proszę wprowadzić poprawny address email');
        }
    })
}



main();