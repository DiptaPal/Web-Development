function getInputValueByID(id) {
    return document.getElementById(id);
}

function getElementByIdFloatNumber(id) {
    const amount = document.getElementById(id).value;
    const convertedAmount = parseFloat(amount);
    return convertedAmount;
}

function getElementByIdIntNumber(id) {
    const amount = document.getElementById(id).value;
    const convertedAmount = parseInt(amount);
    return convertedAmount;
}

function getInnerTextByID(id) {
    const amount = document.getElementById(id).innerText;
    const convertedAmount = parseFloat(amount);
    return convertedAmount;
}

function setInnerTextByIdAndValue(type, id, value) {
    if (type === "text") {
        document.getElementById(id).innerText = value;
    } else {
        document.getElementById(id).value = value;
    }
}

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}
