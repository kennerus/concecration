$(document).ready(function() {
		$('#nav-icon1').click(function() {
			$(this).toggleClass('open');
			$('.header__nav-menu').toggleClass('expand');
		});
		$('.header__profile-search').click(function() {
			$('.search').toggleClass('srch');
		});
})
