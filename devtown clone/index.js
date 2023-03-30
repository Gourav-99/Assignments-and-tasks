class Password {
    constructor() {
        this.clickEvent();
        this.submit();
    }
    clickEvent = () => {
        let passCurr = document.querySelector(".pass-show");
        let passNew = document.querySelector(".pass-hide");
        let password = document.querySelectorAll(".passwd");
        password.forEach(item => {
            item.addEventListener("click", () => {
                let passwordField = document.querySelector("#pass");
                passNew.classList.toggle("hide");
                passCurr.classList.toggle("hide");
                if (passwordField.type === "password") {
                    console.log("inpass");
                    passwordField.type = "text";
                } else {
                    console.log("outpass");
                    passwordField.type = "password";
                }
            })
        })

    }
    submit = () => {
        let form = document.querySelector(".login");
        console.log(form);
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.querySelector('#email').value;
            const passInput = document.querySelector('#pass').value;
            console.log('Email:', emailInput);
            console.log('Password:', passInput);
            form.reset();
        })
    }
}
new Password;