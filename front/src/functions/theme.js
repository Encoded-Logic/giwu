const toggleTheme = (targetTheme) => {
	var currentTheme = document.documentElement.getAttribute("data-theme");

	if (currentTheme === targetTheme) {
		return;
	}
	console.log(targetTheme);
	document.documentElement.setAttribute('data-theme', targetTheme)
	localStorage.setItem('theme', targetTheme);
};

export { toggleTheme }