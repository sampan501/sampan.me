---
title: "Simplest Streaming Trees"
authors: "Haoyin Xu, Jayanta Dey, <strong>Sambit Panda</strong>, and Joshua T. Vogelstein"
journal: arXiv
doi: "10.48550/arXiv.2110.08483"
abstract: |
  Decision forests, including random forests and gradient boosting trees, remain the leading machine learning methods for many real-world data problems, especially on tabular data. However, most of the current implementations only operate in batch mode, and therefore cannot incrementally update when more data arrive. Several previous works developed streaming trees and ensembles to overcome this limitation. Nonetheless, we found that those state-of-the-art algorithms suffer from a number of drawbacks, including low accuracy on some problems and high memory usage on others. We therefore developed the simplest possible extension of decision trees: given new data, simply update existing trees by continuing to grow them, and replace some old trees with new ones to control the total number of trees. In a benchmark suite containing 72 classification problems (the OpenML-CC18 data suite), we illustrate that our approach, Stream Decision Forest (SDF), does not suffer from either of the aforementioned limitations. On those datasets, we also demonstrate that our approach often performs as well, and sometimes even better, than conventional batch decision forest algorithm. Thus, SDFs establish a simple standard for streaming trees and forests that could readily be applied to many real-world problems.
type: preprint
date: 2023-10-24
intro: Developed a streaming algorithm for decision trees based on the simplest possible extension of them.
tags:
  - Forests
---
