1. The issue is that the type of the result value was a string, so num1 and num2 ended up being concatenated instead of summed
2. I would use the parseInt on lines 5 and 6 (the lines that retrieve the user input from the HTML) to convert these fields to ints. When you don't use parseInt, the type will be a string, and we end up with the concatenation problem.
