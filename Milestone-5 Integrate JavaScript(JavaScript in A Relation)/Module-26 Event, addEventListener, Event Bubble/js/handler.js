document
    .getElementById("btn-update-title")
    .addEventListener("click", function () {
        const pageTitleElement = document.getElementById("page-title");
        pageTitleElement.innerText = "Updated page title text";
    });

document.getElementById("btn-login").addEventListener("click", function () {
    const userInfoEl = document.getElementById("user-info");
    userInfoEl.innerText = "User logged in successfully";
});
