const actionTrigger = document.getElementById("trigger-btn");
const displayField = document.getElementById("token-output");


function assembleSecureToken() {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const requiredLength = 8;
    let resultString = "";

    
    for (let index = 0; index < requiredLength; index++) {
        const pointer = Math.floor(Math.random() * charset.length);
        resultString += charset.charAt(pointer);
    }

    displayField.value = resultString;
}


actionTrigger.addEventListener("click", assembleSecureToken);