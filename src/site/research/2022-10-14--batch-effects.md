---
title: "When no answer is better than a wrong answer: a causal perspective on batch effects"
authors: "Eric W. Bridgeford, Michael Powell, Gregory Kiar, Stephanie Noble, Jaewon Chung, <strong>Sambit Panda</strong>, Ross Lawrence, Ting Xu, Michael Milham, Brian Caffo, and Joshua T. Vogelstein"
journal: bioRxiv
doi: "10.1101/2021.09.03.458920"
abstract: |
  Batch effects, undesirable sources of variability across multiple experiments, present significant challenges for scientific and clinical discoveries. Batch effects can (i) produce spurious signals and/or (ii) obscure genuine signals, contributing to the ongoing reproducibility crisis. Because batch effects are typically modeled as classical statistical effects, they often cannot differentiate between sources of variability, which leads them to erroneously conclude batch effects are present (or not). We formalize batch effects as causal effects, and introduce algorithms leveraging causal machinery, to address these concerns. Simulations illustrate that when non-causal methods provide the wrong answer, our methods either produce more accurate answers or “no answer”, meaning they assert the data are an inadequate to confidently conclude on the presence of a batch effect. Applying our causal methods to a 27 neuroimaging datasets yields qualitatively similar results: in situations where it is unclear whether batch effects are present, non-causal methods confidently identify (or fail to identify) batch effects, whereas our causal methods assert that it is unclear whether there are batch effects or not. This work therefore provides a causal framework for understanding the potential capabilities and limitations of analysis of multi-site data.
type: preprint
date: 2024-02-01
intro: Models batch effects as causal effects, and introduces approaches that leverage causal machinery to mitigate these effects.
tags:
  - Causal Inference
---
