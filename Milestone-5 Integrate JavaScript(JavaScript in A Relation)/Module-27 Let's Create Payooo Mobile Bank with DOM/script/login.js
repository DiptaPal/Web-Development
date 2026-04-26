document
    .getElementById("login-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const accountNumber = getInputValueByID("account-number").value;

        const pinNumber = getInputValueByID("pin-number").value;

        if (accountNumber.length === 11 && pinNumber.length === 4) {
            if (
                accountNumber === "01230123012" &&
                parseInt(pinNumber) === 1234
            ) {
                console.log("Okay thik ache");
                window.location.href = "../main.html";
            } else {
                alert("Wrong Account! or Pin!");
            }
        } else {
            alert("Need valid account number!");
        }
    });
