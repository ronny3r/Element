console.log('=== Element Framework ===');
console.log('[Element]: Element framework loaded');

$('.el').each(function() {

    // Breadcrumbs
    if ($(this).hasClass('breadcrumbs')) {
        // wrap <a> tags in a <div> to enable transform effect on hover.
        $(this).children('a').each(function() {
            $(this).wrap( "<div class='crumb'></div>" );
        });
        // add separator ("/") after each <a> tag in .breadcrumbs element.
        $(this).children('.crumb').each(function() {
            $(this).after('<i>/</i>');
        });
    }


    
    // Header

    //.actions
    if ($(this).hasClass('actions')) {
        // wrap icons in a div to make a square button on hover.
        $(this).children('a').each(function() {
            $(this).wrap( "<div></div>" );
        });
        $(this).children('span').each(function() {
            $(this).wrap( "<div class='separated'></div>" );
        });
    }

    //.controls
    if ($(this).hasClass('controls')) {
        // wrap icons in a div to make a square button on hover.
        $(this).children('a').each(function() {
            $(this).wrap( "<div></div>" );
        });
    }

});