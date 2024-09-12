// Script for simulating the fake verification process

const checkboxBtn = document.getElementById("b-checkbox");
const checkboxBtnSpinner = document.getElementById("d-spinner");

checkboxBtn.addEventListener("click", event => event.preventDefault());

function verifyCaptcha() {
    checkboxBtn.innerText = "✓";
    setTimeout(() => afterVerify(), 2500);
}

function afterVerify() {
    const urlParams = new URLSearchParams(window.location.search);
    const connection_id = urlParams.get('connection_id');

    if (connection_id) {
        if (urlParams.get('security_key')) {
            window.location.href = `https://gochris.li/verified/${connection_id}`;
        } else {
            if (confirm("Missing security_key argument!\nThe good news is: We could verify your connection and you are human. \nBut the bad news is: The connection to the site you are tring to connect to may not be secure.  \n\nProceed anyway?")) { 
                window.location.href = `https://gochris.li/verified/${connection_id}`;
            }
        }
    } else {
        if (confirm("Missing argument!")) { 
            window.location.reload(); 
        }
    } 
}

function toggleCaptcha(display, radius, margin, opacity) {
    checkboxBtn.style.width = display;
    checkboxBtn.style.height = display;
    checkboxBtn.style.borderRadius = radius;
    checkboxBtn.style.margin = margin;
    checkboxBtn.style.opacity = opacity;
}

function toggleLoading(visibility, opacity) {
    checkboxBtnSpinner.style.visibility = visibility;
    checkboxBtnSpinner.style.opacity = opacity;
}

function runClickedCheckboxEffects() {
    toggleCaptcha("4px", "50%", "33px 0 0 25px", "0");
    setTimeout(() => toggleLoading("visible", "1"), 500);
    setTimeout(() => {
        toggleCaptcha("100%", "2px", "21px 0 0 18px", "1");
        toggleLoading("hidden", "0");
        setTimeout(verifyCaptcha, 8);
    }, 5000);
}

runClickedCheckboxEffects();
