---
title: "The Chi-Square Test of Distance Correlation"
authors: "Cencheng Shen, <strong>Sambit Panda</strong>, and Joshua T. Vogelstein"
journal: Journal of Computational and Graphical Statistics
doi: "10.1080/10618600.2021.1938585"
abstract: |
  Distance correlation has gained much recent attention in the data science community: the sample statistic is straightforward to compute and asymptotically equals zero if and only if independence, making it an ideal choice to discover any type of dependency structure given sufficient sample size. One major bottleneck is the testing process: because the null distribution of distance correlation depends on the underlying random variables and metric choice, it typically requires a permutation test to estimate the null and compute the p-value, which is very costly for large amount of data. To overcome the difficulty, in this article, we propose a chi-squared test for distance correlation. Method-wise, the chi-squared test is nonparametric, extremely fast, and applicable to bias-corrected distance correlation using any strong negative type metric or characteristic kernel. The test exhibits a similar testing power as the standard permutation test, and can be used for K-sample and partial testing. Theory-wise, we show that the underlying chi-squared distribution well approximates and dominates the limiting null distribution in upper tail, prove the chi-squared test can be valid and universally consistent for testing independence, and establish a testing power inequality with respect to the permutation test. Supplementary files for this article are available online.
tags:
  - hypothesis
links:
  - "arXiv: https://arxiv.org/abs/1912.12150"
  - "Code: https://hyppo.neurodata.io/api/generated/hyppo.independence.dcorr#hyppo.independence.Dcorr.test"
type: journal
date: 2022-01-02
featured: true
---
