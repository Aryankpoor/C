// This is the crossword clue
// Apparently it's supposed to be solved and the output should be an 8 digit number 
// The first digit of the number is 4 , 3rd digit is 1 and 6th digit is 1.
// Which looks something like 4x1xx1xx
// We just have to find the rest of the digits
// If you want to see the visual problem I have put a photo in the root directory named problem.jpg

'1'.joi(['4','3','7'].map(x=>str(atoi(2*x)+1)))
