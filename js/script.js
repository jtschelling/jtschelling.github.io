// Modal fix for iOS and Internet Explorer
$(function () {
    var isIE = window.ActiveXObject || "ActiveXObject" in window;
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIE || iOS) {
        $('.modal').removeClass('fade');
    }
});

// Calf Tracker Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-calftracker');
    $('#caption-calftracker span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-calftracker');
        $('#caption-calftracker span').html(caption.html());
        caption.css('display','none');
    });
});

// Dropbox-Clone Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-dropbox');
    $('#caption-dropbox span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-dropbox');
        $('#caption-dropbox span').html(caption.html());
        caption.css('display','none');
    });
});

// Sound Engineer Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-sound');
    $('#caption-sound span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-sound');
        $('#caption-sound span').html(caption.html());
        caption.css('display','none');
    });
});