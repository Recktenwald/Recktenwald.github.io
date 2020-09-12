---
layout: default
mathjax: true
title:  "Defining the Tor-Functor and flat covers"
date:   06/09/2020 
categories: Homological-Algebra
show_abstract: true
abstract: The Tor-functor can be computed with flat resolutions, why can't it be defined, naively, via the same?
---

## I
Let $F:\Aa\to \Bb$ be right exact functor between sufficiently nice abelian categories. As everyone remembers from the tender days of childhood we can define the *left derived functors* $L^iF$ of $F$ in the following way:
For $A\in \Aa$ let $P^\bu\to A\to 0$ be a projective resolution. Then $L^iF(A):=H^i(F(P^\bu))$. One has to ask oneself why this is well-defined (up to unique isomorphisms) and why it is a functor. Let me just sketch the argument here.

Let $A\in \Aa$ be an object. Let $P^0\to A\to 0$ be an epimorphism where $P^0$ is projective. Let $K^0$ denote the kernel, consider $P^1\to K^0\to 0$. We can compose this to $P^1\to P^0\to A$. Now we repeat this process to build a projective resolution of $A$: At every point we take the kernel (note that it does not matter whether we take the kernel of $P^i\to P^{i-1}$ or $P^i\to K^{i-1}$), and 'resolve' the kernel with a projective object.
What we have to show is, that if $P^\bu\to A$ and $Q^\bu\to A$ are two projective resolutions then there is a natural isomorphism $H^i(F(P^\bu))\cong H^i(F(Q^\bu))$.

However it is actually quite natural to simply show that a morphism $f:A\to B$ induces a morphism $L^i(F(A))\to L^i(F(B))$, and then for $f=\id_A$ we immediately get the desired isomorphism.

Onwards! Let $f:A\to B$ be a morphism, and let $P^\bu\to A$ and $Q^\bu\to B$ be projective resolutions. Via composition we have a morphism $P^0\to B$ and by the universal property of projective objects (in this case we apply it for $P^0$) there is a morphism $P^0\to Q^0$, such that the obvious square commutes.

$$
    \begin{CD}
        P^1 @>>>P^0 @>>> A@>>>0\\
        @. @VVf^0V @VVfV\\
        Q^1 @>>>Q^0 @>>> B @>>>0
    \end{CD}
$$

We again simply continue in this fashion to get a morphism of complexes $P^\bu\to Q^\bu$. Now it is clear that $F$ extends to a functor of complexes, i.e. there is a morphism of complexes $F(P^\bu)\to F(Q^\bu)$. And it is true, in general, that a morphism of complexes $C^\bu\to D^\bu$ induces natural morphisms $H^i(C^\bu)\to H^i(D^\bu)$, this is a bit tedious, but not hard to show. 


## II

Wait we have not even used that $F$ is right exact‽ Yeah we haven't. Up to this point you could play the same game with any covariant additive functor. However
**Proposition**
$L^0F$ is naturally equivalent to $F$ if and only if $F$ is right exact.
**Proof**
If $F$ is right exact, then $F(P^1)\to F(P^0)$ is surjective, with cokernel $F(A)$. Since cokernels are essentially unique it follows that $L^0F\to F$ is a natural isomorphism. 
On the other hand let $L^0F$ and $F$ be naturally isomorphic, and let $A\to B\to 0$ be an epimorphism, where we choose projective resolutions $P^\bu\to A$ and $Q^\bu\to B$ as before. By definition of $H^0$ the natural morphisms $F(Q^0)\to L^0F(B)$ is an epimorphism. By assumption it is $L^0F(A)\congF(A)$ and $L^0F(B)\cong B$.
Now observe that by the universal property of $Q^0$ there is a morphism $Q^0\to A$, which gives rise to a morphism $F(Q^0)\to F(A)$. 
But that means that we could lift an epimorphism along $F(f)$, so it must itself be an epimorphism! (This is a simple lemma that holds in any category.)

## III

What happens if we try to mimic the same construction in some category of sheaves with flat sheaves, instead of projectives? Well, the first part doesn't work. Given a morphism $A\to B$ and flat resolutions of $A$ and $B$, there is no reason to expect morphisms between the resolutions. 
Indeed we have only used the fact that the functor is right exact at the very end, everything before were possible purely by the might of projective objects. The fact that flat sheaves behave really well with tensor products does not save us; we do not even reach a point where there is a morphism to apply the tensor product *to*!

There is even a simple example where no suitable map exists. We consider the category of $\Z$-modules, i.e. abelian groups. Consider the identity $\Z/p\Z\to \Z/p\Z$. Then $Z\to\Z/p\Z$ is a flat resolution, of course. But so is $\Z_{(p)}\to \Z/p\Z$. $\Z_{(p)}$ is flat since it is a localization. However there is no morphism $Z_{(p)}\to \Z$.

## IV

In order to remify this defect we need a stronger requirement than simply, 'There is some flat sheaf $F$ with an epimorphism $F\to A$'. In 1981 Enochs conjectured ([link](https://sci-hub.tw/https://link.springer.com/article/10.1007/BF02760849)) that they exist, and 20 years later Bican, Bashir and Enochs were able to prove it ([link](https://sci-hub.tw/10.1017/s0024609301008104)); it's just 6 pages, go have a look.

So what are flat covers, and how can they help us?


