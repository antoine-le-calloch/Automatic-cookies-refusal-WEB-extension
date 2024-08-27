browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        // Blocage des requêtes de cookies
        return { cancel: true };
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);