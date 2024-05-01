# Part 2 Explore JS Questions
+ Question 1 ~ Line 12 will print the value at prices.length-1, which is 2. Var is accessible outside of the block it is declared in,
  so it is perfectly fine to access it at line 12, outside the loop. On the last iteration of the loop, the value of i will be 2, so
  when you go to print i, 2 will be printed.
+ Question 2 ~ Line 13 will print the value 150. The variable discountedPrice is declared with var, so it is able to be accessed
  outside the block it is declared in. On the last iteration of the loop, the discountedPrice is reassigned to 150 (through plugging
  values in the formula), so it has that value when you print it at the end.
+ Question 3 ~ Line 14 will print the value 150. This is because final price on the final iteration of the loop is equal to 150*100/100, which is just 150.
+ Question 4 ~ The function will return the values 50, 100, 150. These are just the prices with the discount applied, and they're stored within an array.
+ Question 5 ~ That will produce an error because the variable i is only declared in the scope of the for loop function block, so accessing it outside of the for loop is not allowed and will therefore result in an error
+ Question 6 ~ That will produce an error because the variable discountedPrice is only declared in the body of the for loop, so 
  accessing it outside of the for-loop block results in an error.
+ Question 7 ~ The value 150 will be printed. This is because on the last iteration, prices[i] = 300, and the final price is 150, so
  the variable is reassigned to have the value 150.
+ Question 8 ~ The values 50, 100, 150 will be returned because those are the values in the array. The variable is also defined in  the scope where it is returned.
+ Question 9 ~ This will produce an error because you are attempting to 
+ Question 10 ~ At that line, 3 will be printed, const is block scoped and it is defined in the block in which it is printed
+ Question 11 ~ The values 50, 100, 150 will be returned because you are allowed to push values on const arrays, you can't just reassign the array, and the array is defined in the block in which you are returning the value in

Question 12:
+ Accessing the name: alert(student.name)
+ Accessing the Grad Year: alert(student["Grad Year"])
+ Calling function for greeting property: student.greeting()
+ Accessing property: alert(student["Favorite Professor"].name)
+ Accessing the 0th index: alert(student.courseLoad[0])

Question 13:
+ A. The output is '32' because of string concatenation
+ B. The output is 2, string concatenation is with a plus but since we are subtracting, the value of 1 is subtracted from the numeric value of the string
+ C. 3 is printed because null has a value of 0, so the value of the sum is just 3
+ D. 3null because again, string concatenation
+ E. 4 is printed because true = 1 so 3 + 1 is equal to 4
+ F. 0 because false = 0 and null has a value of 0 so you get 0
+ G. 3undefined because of string concatenation
+ H. NaN because undefined subtracting it from 3 wouldn't yield something that could be represented by a number, so you get NaN
  
Question 14:
+ A. True because the value in the string is compared to the value on the right and 2 > 1
+ B. False because strings are compared character by character, and because the first character in 12 is 1, and the first character in 2 is 2, 1 is not > than two, so "12">"2" is false
+ C. True because the value in the string on the left is compared to the value of the int on the right and 2 == 2 is true
+ D. False because === compares the types of the values as well as the values themselves, and one is a string and the other is an int so they don't equal one another
+ E. False because true is converted to a one and one doesn't equal two
+ F. True because true is a boolean expression and boolean(2) evaluates to true because passing in 2 (a non zero value) will evaluate to true

Question 15:
The triple equals sign (===) is the strict equality comparator. It will compare the types of the things being compared as well as the values of each object. The double equals sign will convert certain values to numbers. For example '2'== 2 returns true because '2' is converted to a 2, and because the numeric values are equal, true is returned.
For === to return true, the values and types have to be equal, whereas for ==, the types don't have to be equal as long as the converted versions of the values are equal.

Question 17:
The array returned will be [2,4,6]. This is because when calling modifyArray, you supply an array as well as a callback function that modifies each value in the original array. For each value in the passed array, the callback function, which doubles each value, is called, and this doubled value is placed in a new array. By the end, a new array with all of the doubled values should be returned.

Question 19:
The code prints 1234. The number 1 is printed immediately, 2 is printed one second after 1, 3 and 4 are printed right after
