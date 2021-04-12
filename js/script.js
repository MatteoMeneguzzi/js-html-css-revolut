$(document).ready(function () {
	// Ref

	var dropDown = $(".with-dropdown");
	var dropLinks = dropDown.children("a");
	var dropMenus = dropDown.children(".dropdown-menu");

	// Click show/hide dropdown menu

	// dropLinks.click(function (event) {
	// 	console.log("ciao");
	// 	var actualMenu = $(this).next(".dropdown-menu");

	dropLinks.click(function (event) {
		var actualMenu = $(this).next(".dropdown-menu");

		dropMenus.not(actualMenu).hide();
		actualMenu.toggle();
	});

	// 	dropMenus.not(actualMenu).hide();
	// 	actualMenu.toggle();
	// });

	// Hover show/hide dropdown menu

	// dropLinks.hover(function () {
	// 	$(this).next(".dropdown-menu").toggle();
	// });
	// dropLinks.hover(function () {
	// 	$(this).next(".dropdown-menu").toggle();
	// });
});

// Functions
