document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".box1")

    let buttons = document.querySelectorAll(".box2 button")
    display.textContent = "0";
    console.log("js chal raha h");
    console.log(buttons.length);



    let expression = "";

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            let value = btn.innerText.trim();
            console.log("Value:", value);
            console.log("Expenssion", expression);


            // Ac

            if (value === "Ac") {
                expression = "";
                display.textContent = "0";
                return;
            }

            // Ignore these button

            if (value === "e" ||
                value === "u" ||
                value === "sin"
            ) {
                return;
            }
            if (
                expression === "" &&
                (value === "+" ||
                    value === "-" ||
                    value === "*" ||
                    value === "/" ||
                    value === ".")
            ) {
                return;
            }

            let lastChar = expression.slice(-1);
            if (
                (lastChar === "+" ||
                    lastChar === "-" ||
                    lastChar === "*" ||
                    lastChar === "/") &&
                (value === "+" ||
                    value === "-" ||
                    value === "*" ||
                    value === "/")
            ) {
                return;
            }
            // Result  

            if (value === "=") {

                try {
                    let result = eval(expression);
                    display.textContent = result;
                    expression = result.toString();
                } catch (err) {
                    console.log(err);
                    console.log(err);

                    display.textContent = "0"
                    expression = "";
                }
                return;
            }

            //  value add

            expression += value;
            display.textContent = expression;
        });
    });

})


