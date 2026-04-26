document
    .getElementById("withdraw-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const amount = getElementByIdFloatNumber("withdraw-amount");

        const totalAmount = getInnerTextByID("total-amount");

        const pin = getElementByIdIntNumber("withdraw-pin");

        if (pin === 1234) {
            if (amount < 0) {
                alert("Please give a valid number!!!");
                return;
            } else {
                if (amount > totalAmount) {
                    alert("You don't have enough money!!!");
                } else if (isNaN(amount)) {
                    alert("Please put any amount");
                } else {
                    const sum = totalAmount - amount;
                    setInnerTextByIdAndValue("text", "total-amount", sum);

                    setInnerTextByIdAndValue("value", "withdraw-amount", "");
                }
            }
        } else {
            alert("Wrong Pin");
        }
    });
