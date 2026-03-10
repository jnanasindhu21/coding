/*package whatever //do not write package name here */

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		//code here
		int low = 999999;
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int[] a = new int[n];
		
		for ( int i = 0; i < n; i++ ) {
		    a[i] = sc.nextInt();
		}
		
		for ( int i = 0; i < n; i++) {
		    if( a[i] < low ) {
		        low = a[i];
		    }
		}
		System.out.println(low);
	}
}