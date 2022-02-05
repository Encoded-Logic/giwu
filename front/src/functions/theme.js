const toggleTheme = (targetTheme) => {
	var currentTheme = document.documentElement.getAttribute("data-theme");

	if (currentTheme === targetTheme) {
		return;
	}
	document.documentElement.setAttribute('data-theme', targetTheme)
	localStorage.setItem('theme', targetTheme);
};

export { toggleTheme }