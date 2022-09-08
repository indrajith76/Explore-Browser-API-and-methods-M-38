// alart (BOM API)
// alert('Hello Everyone!');

const showAlert = () => {
    const num = Math.ceil(Math.random() * 10);
    console.log(num);
    if(num < 5) {
        alert('Hi.. How are you?');
    }
}

// confirm (BOM API) // thats return true or false value
const askSomething = () => {
    const decision = confirm('Are you comming Picnic ?');
    console.log(decision);
    if(decision === true) {
        alert('Give Your Registration fee.');
    }
    else {
        console.log('Oops..! We will miss you.')
    }
}


// prompt (BOM API)
const getUserInfo = () => {
    const name = prompt("What is your name?");
    console.log(name);
    if(!!name) { // !! it's your for turthy or falsey
        console.log(`Welcome here ${name}`);
    }
}