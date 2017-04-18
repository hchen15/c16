$(function() {


$('#landingBtn').on('click', function(){
	window.location.href='html/about.html';
});

$("#HarvardPresident").on('click', function(){
	window.open("https://i-lab.harvard.edu/news/finalists-named-presidents-innovation-challenge/");
	$(this).blur();
});

$("#HarvardRock").on('click', function(){
	window.open("https://entrepreneurship.hbs.edu/programs/mba/Pages/rock-accelerator.aspx");
	$(this).blur();
});

$("#HarvardNVC").on('click', function(){
	window.open("http://www.hbs.edu/newventurecompetition/social-enterprise-track/Pages/teams.aspx");
	$(this).blur();
});

$("#email").on('click', function(){
	window.location.href = "mailto:sticku@mba2017.hbs.edu";
});


});