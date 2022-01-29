var defaultTaggle = window.document.getElementById("defaultTaggle");
var lightTaggle = window.document.getElementById("lightTaggle");
var darkTaggle = window.document.getElementById("darkTaggle");

var storedTheme = localStorage.getItem('theme') || "default";

if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


function toggleTheme(targetTheme) {
    var currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === targetTheme) {
        return;
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};