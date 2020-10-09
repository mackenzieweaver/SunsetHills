# SunsetHills

## It's an array game baby

The Sunset Hills coding challenge is intended to assess a candidate’s ability to work with Arrays. This challenge or a slight variation has been used by technology companies such as Amazon and was also featured on a Geeks for Geeks blog post titled "Amazon Interview Experience | Set 189 (For SDE-1)"

## [My implementation](https://mackenzie-weaver-sunsethills.netlify.app/)

### Intro
Sunset Hills is supposed to be a coding challenge which tests the challenger’s array handling skills. There are a few different versions of this challenge and I’m sure there are many more ways to solve each of them than the way I did. Originally you were supposed to write a program which would print out how many buildings and which ones would be able to see a sunset given an array; however, I modified it to accept 5 user inputs which would represent the number of stories per building. There would only be 5 buildings in this case. 

### What makes mine different
My algorithm will then check from left to right. The first building always sees the sunset since there are no buildings to its left. So technically speaking my program starts checking at the second building in order to save a computation cycle. My solution will check all of the buildings to the left of the building I’m checking. So if I’m checking on if building 3 can see the sunset or not it only checks its height against the height of building 1 and 2, but not buildings 4 and 5. The way I accomplish this is by using nested loops.


### Conclusion
The outer loop will go through each building, and the inner loop will check that building against the rest of the buildings to its left. So not only am I using the arrays to loop through the input, I’m also using arrays to store and display my output. However, this challenge wouldn’t be nearly as fun or enjoyable to experience if there wasn’t a great user interface. So I’ve implemented a simple animation with javascript to grow the size of a building which is built with pure CSS. The buildings grow in size in response to real-time user-input and when the “Visualize” button is pressed then the output is displayed and the buildings are given a blue color if they can see the sunset and gray if they cannot.

Check it out
