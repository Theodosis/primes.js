function calc( begin, length ){
    var limit, i, prime, n, count = 0;
    if( begin == 0 ){
        begin = 2;
        count = 0;
    }
    for( n = begin; n <= begin + length; ++n ){
        prime = true;
        limit = Math.sqrt( n );
        for( i = 2; i <= limit; ++i ){
            if( n % i == 0 ){
                prime = false;
                break;
            }
        }
        if( prime ){
            ++count;
        }
    }
    return count;
}
onmessage = function( event ){
    var results = event.data.split( ' ' );
    var begin = parseInt( results[ 0 ] );
    var length = parseInt( results[ 1 ] );
    /* 
    if( length > 100000 ){
        var a = new Worker( 'worker.js' );
        var b = new Worker( 'worker.js' );
        var newlength = parseInt( length / 2 );
        a.postMessage( begin + ' ' + newlength );
        b.postMessage( begin + newlength + ' ' + newlength );
        a.onmessage = function( event ){
            self.counta = parseInt( event.data );
            self.fa = true;
            if( self.fb ){
                postMessage( self.counta + self.countb );
            }
            a.terminate();
        };
        b.onmessage = function( event ){
            self.countb = parseInt( event.data );
            self.fb = true;
            if( self.fa ){
                postMessage( self.counta + self.countb );
            }
            b.terminate();
        };
    }
    else{
    */
        postMessage( calc( begin, length ) );
    //}
}
