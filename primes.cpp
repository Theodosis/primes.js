#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <unistd.h>
#include <math.h>
#define size 3000000

void calcTime( struct timeval first, struct timeval second, struct timeval *lapsed ){
    if(first.tv_usec>second.tv_usec){
        second.tv_usec += 1000000;
        second.tv_sec--;
    }
    lapsed->tv_usec = second.tv_usec - first.tv_usec;
    lapsed->tv_sec = second.tv_sec - first.tv_sec;
}
int calc(){
    int i, n, count = 0;
    float limit;
    int prime;
    for( n = 2; n < size; ++n ){
        prime = 1;
        limit = sqrt( n );
        for( i = 2; i <= limit; ++i ){
            if( n / i * i == n ){
                prime = 0;
                break;
            }
        }
        if( prime ){
            ++count;
        }
    }
    return count;
}

int main(){
    
    struct timeval first, second, lapsed;
    struct timezone tzp;
    printf( "Please wait while we calculate primes using Cpp... " );
    gettimeofday(&first, &tzp);
    printf( "%d primes in ", calc() );
    gettimeofday(&second, &tzp);
    
    calcTime( first, second, &lapsed );
    printf( "%d.%06d \n", (int) lapsed.tv_sec, (int) lapsed.tv_usec );
    
    return 0;
}
