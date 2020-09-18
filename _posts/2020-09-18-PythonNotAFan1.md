---
layout: default
mathjax: true
title:  "Why I don't like Python as much as some other people do: Part 1 of ∞"
date:   18/09/2020 
categories: Computer-Science
show_abstract: true
abstract: Default arguments are bound by function definition, not at execution.
---

## I

I have encountered what seemed like a bug at the time, and then stumbled upon [this question](https://stackoverflow.com/questions/1132941/least-astonishment-and-the-mutable-default-argument) on StackOverflow. 

Consider the following piece of code 
```python
def foo(val,a=[]):
    a.append(val)
    return a

foo(1) # [1]
foo(2) # [2]
foo(3) # [3]
# Some big code block, 
foo(18) # ???
```

Without checking <code>foo.__defaults__</code>, it is pretty much impossible to predict the outcome of the function. 

Reading through some of the answers in the above question, I can understand that there are reasons you would want mutable default arguments, but nevertheless, to me, I'm not a fan of that.

