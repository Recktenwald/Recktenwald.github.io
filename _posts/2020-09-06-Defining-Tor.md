---
layout: default
mathjax: true
title:  "Defining the Tor-Functor and flat covers"
date:   06/09/2020 
categories: Homological-Algebra
show_abstract: true
abstract: The Tor-functor can be computed with flat resolutions, why can't it be defined, naively, via the same?
---

# I
Let $F:\Aa\to \Bb$ be right exact functor. As everyone remembers from the tender days of childhood we can define the *left derived functors* $L^iF$ of $F$ in the following way:
For $A\in \Aa$ let $P^\bu\to A\to 0$ be a projective resolution. Then $L^iF(A):=H^i(F(P^\bu))$. One has to ask oneself why this is well-defined (up to unique isomorphisms) and why it is a functor. Let me just sketch the argument here.

