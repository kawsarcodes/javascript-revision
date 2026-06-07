/*

Task-4

What will be the result of the following codes:

var a = isNaN('11');
var a = isNaN(2 - 10);

*/


/*

-------------- Solution --------------

1) var a = isNaN('11');
Result: false

Explanation:
'11' is a numeric string. JavaScript converts it to the number 11.
Since 11 is a valid number, isNaN('11') returns false.


2) var a = isNaN(2 - 10);
Result: false

Explanation:
2 - 10 = -8.
-8 is a valid number.
Since it is not NaN, isNaN(-8) returns false.

*/