// Pagecreate will fire for each of the pages in this demo
// but we only need to bind once so we use "one()"
$( document ).one( "pagecreate", ".home-page", function() {
    // Initialize the external persistent header and footer
    $( "#header" ).toolbar({ theme: "b" });
    $( "#footer" ).toolbar({ theme: "b" });
    // Handler for navigating to the next page
    function navnext( next ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "change", next + ".html", {
            transition: "slide"
        sfs});
    }
    // Handler for navigating to the previous page
    function navprev( prev ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "change", prev + ".html", {
            transition: "slide",
            reverse: true
        });
    }
    // Navigate to the next page on swipeleft
    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        // Get the filename of the next page. We stored that in the data-next
        var next = $( this ).jqmData( "next" );
        // Check if there is a next page and swipes on the page
        if ( next && ( event.target === $( this )[ 0 ] ) ) {
            navnext( next );
        }
    });
    // Navigate to the next page when the "next" button in the footer is clicked
    $( document ).on( "click", ".next", function() {
        var next = $( ".ui-page-active" ).jqmData( "next" );
        // Check if there is a next page
        if ( next ) {
            navnext( next );
        }
    });
    // The same for the navigating to the previous page
    $( document ).on( "swiperight", ".ui-page", function( event ) {
        var prev = $( this ).jqmData( "prev" );
        if ( prev && ( event.target === $( this )[ 0 ] ) ) {
            navprev( prev );
        }
    });
    $( document ).on( "click", ".prev", function() {
        var prev = $( ".ui-page-active" ).jqmData( "prev" );
        if ( prev ) {
            navprev( prev );
        }
    });
});
$( document ).on( "pageshow", ".home-page", function() {
    var thePage = $( this ),
        title = thePage.jqmData( "title" ),
        next = thePage.jqmData( "next" ),
        prev = thePage.jqmData( "prev" );
    // Point the "Trivia" button to the popup for the current page.
    $( "#trivia-button" ).attr( "href", "#" + thePage.find( ".trivia" ).attr( "id" ) );
    // use the same header so we can get the headers of each page
    $( "#header h1" ).text( title );
    // Prefetch the next page
    if ( next ) {
        $( ":mobile-pagecontainer" ).pagecontainer( "load", next + ".html" );
    }
//If there is no pages left to scroll, disable the buttons
    $( ".next.ui-state-disabled, .prev.ui-state-disabled" ).removeClass( "ui-state-disabled" );
    if ( ! next ) {
        $( ".next" ).addClass( "ui-state-disabled" );
    }
    if ( ! prev ) {
        $( ".prev" ).addClass( "ui-state-disabled" );
    }
});
