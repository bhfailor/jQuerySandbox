// The self documenting version followed by the idiom
//$(document).ready(function() { 
$(function() { 

// Use alert for zero order test to be sure that jQuery is loaded and available!
//    alert('Welcome to StarTrackr!  Now no longer under police investigation!');

// specify tbody rather than entire table - w/o tbody the number = number + 1 because header row is included
//    alert($('#celebs tbody tr').length + ' elements!');

// filter for even values by adding :filter - could be :odd, :first, :last, eq(), i.e. eq(3)
//    alert($('#celebs tbody tr:even').length + ' elements!');

// using commas produces a union, spaces an intersection
//    alert($('#celebs, tbody, tr:even').length + ' total elements!');

// return the font size of the first table row
//    var fontSize = $('#celebs tbody tr:first').css('font-size');
//    alert(fontSize);

// add zebra striping - note that 0 is considered 'even' and that the first row is number '0'
//    $('#celebs tbody tr:eq(0)').css('background-color','#dddddd');
//    $('#celebs tbody tr:even').css('background-color','#dddddd');

// now specify css parameters using and 'object literal' - what I think of as a hash
// you could stack up parameters in a series of calls but doing them all at once makes more sense!
// docs should indicate what params css can set
//    $('#celebs tbody tr:even').css({
//	'background-color':'#dddddd',
//	'color':'#666666'
//});
// note: to see what the above command has done, you can click on 'html' in the firebug window and 'inspect' the DOM elements in sequence
// I found that the style values agree with Fig. 2.3 in the book
// To make the above changes more permanent, include a link to a css file named 'zebra.css' - it will be inserted in the <head>
// Note that the zebra.css file entries do not have quotes (') and the lines are terminated with semicolons (;)
// Now instead of a css() call we can call addClass()
    $('#celebs tbody tr:even').addClass('zebra');

});

// p. 34 starts section on hiding and revealing elements - want to add an 'id' to the disclaimer paragraph
// Also added the button as described in the book as well - works, now add the action
//$('#hideButton').click(function() {
//    $('#disclaimer').hide();
//});

// In the above example 'click' is an 'event handler'
// Make the button disappear as well using 'this' - idiomatic approach compared to using '#hideButton'
//$('#hideButton').click(function() {
//    $(this).hide();
//});

// Okay - above works and both disappear!  Now add a 'show' button and have the #disclaimer appear again!
//$('#showButton').click(function() {
//    $('#disclaimer').show();
//});

// Now replace the hide/show buttons with a toggle button - old button definitions pasted in below:
// <input type="button" id="hideButton" value="hide" /> 
// <input type="button" id="showButton" value="show" /> 
// Need a conditional now
//$('#toggleButton').click(function() {
//    if ($('#disclaimer').is(':visible')) {
//	$('#disclaimer').hide();
//    } else {
//	$('#disclaimer').show();
//    }
//});

// now toggle disclaimer and flip the name of the button from 'hide' to 'show'
// also initially set the value of the button to 'hide' since the disclaimer shows initially
//$('#toggleButton').click(function() {
//    $('#disclaimer').toggle();
//
//    if ($('#disclaimer').is(':visible')) {
//	$(this).val('hide');
//    } else {
//	$(this).val('show');
//    }
//});

//p.39 Progressive Enahancement
//pull the button into the Javascript in case the browser does not do javascript
//<input type="button" id="toggleButton" value="hide" />  <= original html needed for previous section
$('<strong>START!</strong>').prependTo('#disclaimer');
$('<strong>END!</strong>').appendTo('#disclaimer');

$('<input type="button" id="toggleButton" value="hide" />').insertBefore('#disclaimer');
$('#toggleButton').click(function() {
    $('#disclaimer').fadeToggle(3000, function(){ //example of anonymons function just used one place
	alert('The slide has finished sliding!');
    if ($('#disclaimer').is(':visible')) {
	$('#toggleButton').val('shide');
    } else {
	$('#toggleButton').val('show'); // the 'this' parameter was off, apparently - works
//	$(this).val('show'); // the 'this' parameter was off, apparently - does not work; wonder how you check value of 'this'
    }

});
//    $('#disclaimer').fadeToggle('slow');
//    $('#disclaimer').slideToggle();
//    $('#disclaimer').toggle();
//    $('#disclaimer').toggle('slow');

});

$('<div>', {
    id: 'specialButton',
    text: "Click Me!",
    click: function(){
	alert("Advanced jQuery!")
}
}).insertBefore('#toggleButton');

//Removing Existing Elements, p. 43
//normally <noscript> tag is used to insert messages for browsers w/o JavaScript
//in this case just looking at an example
$('#no-script').remove(); 
$('#celebs tr').remove(':contains("Singer")'); 

//Modifying Content
//$('p').html('<strong>good-bye</strong>, cruel paragraphs!'); 
//$('h1').text('<strong>All</strong> your titles belong to us'); 

//No argument returns the value selected
//alert($('p').html());
//alert($('h1').text());

// p. 48 starts section on hiding and revealing elements - want to add an 'id' to the disclaimer paragraph
// Also added the button as described in the book as well - works, now add the action
//$('#hideButton').click(function() {
//    $('#disclaimer').slideUp('slow', function() {
//	$('#hideButton').fadeOut('slow');
//});
//});

//Highlighting When Hovering
//Works but make sure to type '#celebs' not just 'celebs'!
//$('#celebs tbody tr').mouseover(function() {
//    $(this).addClass('zebraHover');
//});
//$('#celebs tbody tr').mouseout(function() {
//    $(this).removeClass('zebraHover');
//});

//Now use the hover function itself (takes one or two arguments)
//$('#celebs tbody tr').hover(function() {
//    $(this).addClass('zebraHover');
//}, function() {
//    $(this).removeClass('zebraHover');
//});

//Above works; now set class on click
//$('#celebs tbody tr').click(function() {
//    $(this).toggleClass('zebraHover');
//});

//Spoiler revealer
//Need to add paragraphs to HTML - done!

$('.spoiler').hide(); // hide all to start out
$('<input type="button" class="revealer" value="Tell Me!" />').insertBefore('.spoiler')
$('.revealer').click(function() {
    $(this).fadeOut(1500); // hide button and 
    $(this).next().fadeIn(1500); // show the "spoiler"
});

//Chapter 3
//Animation of CSS properties like padding, fontSize, opacity, height
//Just executed the following in the console
//ppp = $('p').animate({
//padding: '20px',
//fontSize: '30px'
//},2000);

// The following did not work and did not throw and error
//$('#celebs tbody tr').hover(function() {
//    $(this).animate({paddingLeft: '+=15px'}, 200);
//}, function() {
//    $(this).animate({paddingLeft: '-=15px'}, 200);
//});

// from page 55
$('#fisclaimer').animate({
    padding: '10px',
    fontSize: '15px'
}, 'slow');

//$('#fisclaimer').animate({
//    opacity: 'hide',
//    height: 'hide'
//}, 'slow');

//$('#demodiv').animate({backgroundColor: '#400101'})
//Note!! The system will not throw an error if a file is not found!
//What you can do is look at the page source and then try and click on the link to load the file!
//http://www.bitstorm.org/jquery/color-animation/jquery.animate-colors.js
//Finally got the below to work
//The code was throwing an error that 'begin' was not defined so I defined both colors with the first line and I was okay.
//$('#fisclaimer').css({backgroundColor: '#0FFF00', color:'#000FFF'},2000)
//$('#fisclaimer').animate({backgroundColor: '#FFFFFF', color:'#0FFF00'},2000)