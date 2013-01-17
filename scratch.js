//Okay, this works fine.  Just did not realize that you need to click on the paragraph to get it to act.
$('p:first').toggle(function() {
$(this).animate({'height':'+=150px'});
},function() {
$(this).animate({'height':'-=150px'});
});

//This also worked fine - p. 58
$('p:first').animate({'height':'+=150px'});
$('p:first').animate({'height':'-=150px'});

//The following worked fine after inserting the UI library - p.59
$('p:first').animate({'height':'+=150px'},2000,'easeOutBounce');
$('p:first').animate({'height':'-=150px'},2000,'easeInOutExpo');
$('p:first').animate({'height':'hide'},2000,'easeOutCirc');
$('p:first').animate({'height':'show'},2000,'easeOutElastic');
