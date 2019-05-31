---
layout: post
title: Neural Tangent Kernel
category: [Neural Network, Kernel Method, Paper Note]
---

[Arxiv](http://arxiv.org/abs/1806.07572)

<!--exerpt-->

## Artificial neural network as a function

For a fixed distribution \\(p\\), consider a artificial neural network(ANN) as a function:
\\[f:\Re^{N_0}\mapsto\Re^{N_L}\in\mathcal{F},\\]
with inner product in \\(\mathcal{F}\\) defined as:
\\[<f, g> = \mathbb{E}_{x\sim p}[f(x)^\intercal g(x)].\\]

then one may want to find an function that minimize some convex functional loss \\(\mathcal{L}\\) through gradient descent, by (functional) gradient \\(\delta_f \mathcal{L}\\)

## Descending curves

Obviously, one can not goes further with these setting since one can not represent \\(f\\). By introducing parameter \\(\theta\\) and a realization \\(F: \theta\mapsto f\\), one may derive the gradient w.r.t \\(\theta\\) as:
\\[\partial_\theta \mathcal{L} = \delta_f \mathcal{L} \partial_\theta F\\]
Then optimizing the cost \\(\mathcal{L}\circ F\\), the parameters \\(\theta\\) follows the ODE:
\\[\partial_t \theta(t) = -\partial_\theta \mathcal{L}\\]

As a result the function \\(f\\) evolves according to:
\\[\partial_t f(t) = \partial_\theta F \partial_t \theta = -\delta_f \mathcal{L} \partial_\theta F \partial_\theta F\\]

Denoting \\(\partial_\theta F \partial_\theta F\\) as a kernel \\(K\\), then the curve implies that one update \\(f\\) through a modified gradient \\(-K\delta_f \mathcal{L}\\), which is called by the paper kernel gradient descent.

If K is positive defined, then the descending property is ensured and the function \\(f\\) dropped into the global minimum thanks to the convex of loss \\(\mathcal{L}\\).

# Why kernel gradient descent?

Since the loss only depends on the empirical distribution of training set, that is
\\[dF(X,Y) = \frac{1}{N}\sum_{i=1}^N \delta_{x_i, y_i}(X,Y)dXdY,\\]
the (functional) gradient descent will only affect the function on data points appearing in the training set, resulting no generalization guarantees. 
The kernel introduced actually adds a prior constrain on descending direction, working like Newton's method in optimization. Presented NTK was derived by the structure of neural network itself, and might offers a possibility to break the framework of ANN to make a better kernel.