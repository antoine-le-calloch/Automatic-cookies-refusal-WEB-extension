function clickOnDenyAll() {
    window.removeEventListener('tac.open_panel', clickOnDenyAll);
    setTimeout(() => {
        const denyAllButton = document.querySelector("button[id^='tarteaucitronAllDenied']");
        if (denyAllButton) {
            console.log("Tarteau-citron deny button found.");
            denyAllButton.click();
        } else {
            console.log("No tarteau-citron deny button found.");
        }
    }, 1000);
}

window.addEventListener('tac.open_alert', clickOnDenyAll);