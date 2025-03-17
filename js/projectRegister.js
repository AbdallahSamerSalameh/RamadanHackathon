document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!");

    // Select Register Form Elements
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const form = document.getElementById("register");
    const registerMessage = document.querySelector(".register-message");
    const userName = document.getElementById("name");
    const userPhone = document.getElementById("phone");
    const userAge = document.getElementById("age");

    let mainUsers = [
        { id: 1, name: "abdallah salameh", phone: "0123456789", age: 24, email: "abdallah@gmail.com", password: "Asdfghjkl1*", history: [] },
        { id: 2, name: "ahmad alarabi", phone: "0123456789", age: 26, email: "ahmad@gmail.com", password: "Asdfghjkl1*", history: [] },
        { id: 3, name: "Omar Momani", phone: "0123456789", age: 27, email: "omar@gmail.com", password: "Asdfghjkl1*", history: [] },
        { id: 4, name: "hasan darwish", phone: "0123456789", age: 27, email: "hasan@gmail.com", password: "Asdfghjkl1*", history: [] },
        { id: 5, name: "yousif nadi", phone: "0123456789", age: 25, email: "yousif@gmail.com", password: "Asdfghjkl1*", history: [] },
    ];

    let users = JSON.parse(localStorage.getItem("users")) || mainUsers;
    localStorage.setItem("users", JSON.stringify(users));

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            registerMessage.innerHTML = "";
            registerMessage.style.color = "red";

            // Validate Email
            function checkEmail(email) {
                if (users.some((user) => user.email === email.value)) {
                    registerMessage.innerHTML += "<p>❌ Email already exists.</p>";
                    email.focus();
                    return false;
                }
                return true;
            }

            // Validate Password Matching
            function checkPasswordConfirm(password, confirmPassword) {
                if (password.value !== confirmPassword.value) {
                    registerMessage.innerHTML += "<p>❌ Passwords do not match.</p>";
                    password.value = "";
                    confirmPassword.value = "";
                    password.focus();
                    return false;
                }
                return true;
            }

            // Password Complexity Validation
            function validatePassword(password) {
                let errors = [];
                if (password.length < 8) errors.push("❌ Password must be at least 8 characters long.");
                if (!/[A-Z]/.test(password)) errors.push("❌ Password must contain at least one uppercase letter.");
                if (!/\d/.test(password)) errors.push("❌ Password must contain at least one number.");
                if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) errors.push("❌ Password must contain at least one special character.");
                
                if (errors.length > 0) {
                    registerMessage.innerHTML += errors.map(err => `<p>${err}</p>`).join("");
                    return false;
                }
                return true;
            }

            // Run all validations
            if (
                checkEmail(email) &&
                checkPasswordConfirm(password, confirmPassword) &&
                validatePassword(password.value)
            ) {
                registerMessage.innerHTML = "<p>✅ Registered successfully!</p>";
                registerMessage.style.color = "green";

                // Save New User
                const newUser = {
                    id: users.length + 1,
                    name: userName.value,
                    phone: userPhone.value,
                    age: userAge.value,
                    email: email.value,
                    password: password.value,
                    history: [],
                };

                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));

                // Redirect to index.html inside the HTML folder
                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 1500);
            }
        });
    } else {
        console.error("Register form not found!");
    }

    // ======================== LOGIN FUNCTIONALITY ========================

    const formLogin = document.getElementById("login-form");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const loginMessage = document.querySelector(".login-message");

    if (formLogin) {
        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();
            loginMessage.textContent = "";
            
            users = JSON.parse(localStorage.getItem("users"));
            
            let customer = users.find((user) => user.email === loginEmail.value);

            if (customer) {
                if (customer.password === loginPassword.value) {
                    const userData = {
                        id: customer.id,
                        name: customer.name,
                        phone: customer.phone,
                        age: customer.age,
                        email: customer.email,
                        history: customer.history,
                    };
                    loginMessage.textContent = "✅ Logged in successfully!";
                    loginMessage.style.color = "green";

                    localStorage.setItem("user", JSON.stringify(userData));

                    // Redirect to index.html inside the HTML folder
                    setTimeout(() => {
                        window.location.href = "../index.html";
                    }, 1500);
                } else {
                    loginMessage.innerHTML = "<p>❌ Wrong password.</p>";
                    loginMessage.style.color = "red";
                }
            } else {
                loginMessage.innerHTML = "<p>❌ Email not found.</p>";
                loginMessage.style.color = "red";
            }
        });
    } else {
        console.error("Login form not found!");
    }
});
