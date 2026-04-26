const cashoutDisplay = getInputValueByID("cashout-display");
document
    .getElementById("add-money-btn")
    .addEventListener("click", function (event) {
        handleToggle("add-money-display", "block");
        handleToggle("latest-payment", "none");
    });

document
    .getElementById("cash-out-btn")
    .addEventListener("click", function (event) {
        handleToggle("add-money-display", "none");
        handleToggle("latest-payment", "none");
        handleToggle("cashout-display", "block");
    });
