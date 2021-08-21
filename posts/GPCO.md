---
title: 'GPCO - General Power Converter Optimizer'
date: 'August 13, 2021'
excerpt: 'Application for optimizing the CC-CC Boost Half Bridge power converter.'
tags: 'python'
cover_image: '/images/posts/GPCO.jpg'
---

<a href="https://github.com/Cbonief/GPCO" style="color: Blue">Github Repo</a>

**GPCO** is a python based efficiency optimizer for switched-mode power converters that is able to optimize both the operating frequency and the components used, while satisfying the design constraints. It does this by separating the discrete and continuous variables into two layers of optimization. The superficial layer uses a genetic algorithm to handle the discrete variables, while the second layer uses a numeric, gradient based algorithm to optimize the continuous variables.

**Obs**: Up until this point, the only power converter available is the Boost Half Bridge DC-DC converter (Figure 1). However, the code is being generalized to easily accept other converters in the near future.

*Figure 1 - Boost Half Bridge DC-DC Converter*

![Hello](https://imgur.com/bd5bGsC.png)


