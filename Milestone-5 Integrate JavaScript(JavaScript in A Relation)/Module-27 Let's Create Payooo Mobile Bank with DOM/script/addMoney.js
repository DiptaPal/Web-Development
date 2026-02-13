document
    .getElementById("add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const amount = getElementByIdFloatNumber("amount");

        const totalAmount = getInnerTextByID("total-amount");

        const pin = getElementByIdIntNumber("pin");

        // for verification
        const bank = getInputValueByID("bank-name");
        const accountNumber = getInputValueByID("account-number");
        if (amount < 0) {
            alert("Please give a valid number!!!");
            return;
        } else {
            if (bank && accountNumber && amount && pin) {
                if (pin === 1234) {
                    const sum = totalAmount + amount;
                    setInnerTextByIdAndValue("text", "total-amount", sum);

                    setInnerTextByIdAndValue("value", "amount", "");
                } else {
                    alert("Wrong Pin");
                }
            } else {
                alert("Please fill up the input field");
            }
        }
    });
