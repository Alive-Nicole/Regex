const regexChecker = () => {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;

    let regexCheck = /^[A-Z][a-z]+$/g;

    if(firstName.match(regexCheck) && lastName.match(regexCheck)) {
        alert("Yay! Your inputs were all correct!");
    } else {
        alert("Oh no! Thats an invalid format!")
    }

}