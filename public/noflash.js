(function () {
    if (window.localStorage) {
        const themeName = localStorage.getItem("theme-name");
        document.querySelector("html")?.setAttribute("data-theme", themeName);
    }
})();
