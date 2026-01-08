class Solution {

    void printTriangle(int n) {
        // code here
        for ( int i = 1; i<=n; i++) {
            //spaces
            for( int j = 1; j<i; j++) {
                System.out.print(" ");
            }
            
            //*
            for( int j = i; j <= n; j++) {
                System.out.print("*");
            }
            
            for( int j = 1; j <= n-i; j++ ) {
                System.out.print("*");
            }
            
            System.out.println();
        }
    }
}