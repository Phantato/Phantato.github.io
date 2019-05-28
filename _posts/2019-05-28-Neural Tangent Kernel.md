---
layout: post
title: Neural Tangent Kernel
category: [Neural Network, Kernel Method, Paper Note]
---

[Arxiv](http://arxiv.org/abs/1806.07572)

<!--exerpt-->

## Artificial neural network as a function

For a fixed distribution \\(p\\), consider a artificial neural network(ANN) as a function:
\\[f:\Re^{n_0}\mapsto\Re^{N_L}\in\mathcal{F},\\]
with semi-norm\\(\|\cdot\|\\) in \\(\mathcal{F}\\) defined as:
\\[<f, g> = \mathbb{E}_{x\sim p}(f(x)^\intercal g(x).\\]

then one may want to find an function that minimize some functional loss \\(\mathcal{L}\\) through gradient descent, by (functional) gradient \\(\delta_f \mathcal{L}\\)

## Descending curves

Obviously, one can not goes further with these setting since one can not represent \\(f\\). By introducing parameter \\(\theta\\) and a realization \\(F: \theta\mapsto f\\), one may derive the gradient w.r.t \\(\theta\\) as:
\\[\partial_\theta \mathcal{L} = \delta_f \mathcal{L} \partial_\theta F\\]
Then optimizing the cost \\(\mathcal{L}\circ F\\), the parameters \\(\theta\\) follows the ODE:
\\[\partial_t \theta(t) = -\partial_\theta \mathcal{L}\\]

As a result the function \\(f\\) evolves according to:
\\[\partial_t f = \partial_\theta F \partial_t \theta = -\delta_f \mathcal{L} \partial_\theta F \partial_\theta F\\]

Denoting \\(\partial_\theta F \partial_\theta F\\) as a kernel \\(K\\), then the curve implies that one update \\(f\\) through a modified direction \\(-K\delta_f \mathcal{L}\\), which the paper called kernel gradient descent.