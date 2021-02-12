---
layout: post
mathjax: true
title:  "The Runge Phenomenon"
date:   12/02/2021
categories: Mathematics
show_abstract: true
abstract: Sometimes naive polynomial interpolation fails.
---

## I 
It is well known that any continuous function on a closed intervall can be uniformly approximated by polynomials. 
This leads many people to believe that uniformly spaced interpolation points can approximate continuous functions arbitrarily well. The following example due to Runge shows that this is not the case.
Consider the function

$$
	\begin{align*}
		f: [-1,1] &\to \R\\
		x &\mapsto \frac{1}{1+25x^2}
	\end{align*}
$$

Below you can see the Runge function as well as the polynomial approximations with varying interpolation points. You will see, that the approximation gets arbitrarily bad towards the boundaries. However if we use so called [Chebyshev nodes](https://en.wikipedia.org/wiki/Chebyshev_nodes), then then interpolation polynomial at these points does in fact approximate the Runge function.
They are defined by
$$
	x_k = \cos(\frac{2k-1}{2n} \pi) \text{ for } k = 1,\ldots, n
$$
I won't go into the proof here, but these specific nodes work for any absolutely continuous function. Currently I do not know if there is an algorithmic way to find a sequence of polynomials approximating any continuous function on a closed interval. 


<script src="/assets/js/javascripts/Runge.min.js" ></script>
<div id="app"></div>
<script>
	var app = Elm.Runge.init({node: document.getElementById("app")})
</script>


