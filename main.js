$("summary").click(function(e){
	console.log(e.target);
	console.log(e.currentTarget);
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass("open");
})
