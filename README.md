[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12716913&assignment_repo_type=AssignmentRepo)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature. I have also not provided any test code, but you
can base yours on test code from other exercises.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not? Add your answer, including your
reasoning, to this markdown file.

### Answer
Tail-recursive Fibonacci has a simpler asymptotic complexity than the non-tail-recursive version because the tail-recursive involves saving memory on the stack, does not have to keep track of the previous stack, no need to combine two recursive calls. we are taking advantage of the optimizations that compilers or in this case, javascript runtimes might apply to allow us to do much larger numbers without running out of time. 

Here, Tail-recursive Fibonacci takes linear time O(n) because in the worst case, it needs to run through all elements. In contrast, non-tail-recursive takes two recursive calls involves the time complexity is O(2^n). 2^n arises from the binary tree-like structure of recursive calls, making this version less efficient for larger input values compared to the tail-recursive approach.
