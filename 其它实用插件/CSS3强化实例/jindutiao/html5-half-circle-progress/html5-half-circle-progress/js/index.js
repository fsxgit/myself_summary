;( function( document ) {
  var progress = document.getElementById( 'progress' );
  
  setInterval( function() {
    var oldValue = +progress.getAttribute( 'value' );
    
    if ( oldValue < 100 ) {
      var newValue = oldValue + 1;

      progress.setAttribute( 'value', newValue );
    }
  }, 100 );
} )( document );