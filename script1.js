function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const message = document.getElementById("message");

            if (username === "KC2104825" && password === "kiddocode") {
                message.style.color = "#78a7c4";
                message.innerHTML = `
                    <form action="3.dashboard link.html"><button>Dashboard</button></form>
                `;
            } else {
                message.style.color = "red";
                message.innerText = "Invalid username or password.";
            }
        }