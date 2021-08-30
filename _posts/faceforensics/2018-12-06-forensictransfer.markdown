---
layout: post
title: "ForensicTransfer: Weakly-supervised Domain Adaptation for Forgery Detection"
date: 2018-12-06
description: We introduce a novel face manipulation dataset of about half a million edited images for automated detection.
tags: [faceforensics]
img:  forensictransfer.png
thumbnail: forensictransfer.png
authors:
 - davide_cozzolino
 - justus_thies
 - andreas_roessler
 - christian_riess
 - matthias_niessner
 - luisa_verdoliva
---

<p align="center"><b>Arxiv</b></p>

Distinguishing manipulated from real images is becoming increasingly difficult as new sophisticated image forgery approaches come out by the day. Naive classification approaches based on Convolutional Neural Networks (CNNs) show excellent performance in detecting image manipulations when they are trained on a specific forgery method. However, on examples from unseen manipulation approaches, their performance drops significantly. To address this limitation in transferability, we introduce Forensic-Transfer (FT). We devise a learning-based forensic detector which adapts well to new domains, i.e., novel manipulation methods and can handle scenarios where only a handful of fake examples are available during training. To this end, we learn a forensic embedding based on a novel autoencoder-based architecture that can be used to distinguish between real and fake imagery. The learned embedding acts as a form of anomaly detector; namely, an image manipulated from an unseen method will be detected as fake provided it maps sufficiently far away from the cluster of real images. Comparing to prior works, FT shows significant improvements in transferability, which we demonstrate in a series of experiments on cutting-edge benchmarks. For instance, on unseen examples, we achieve up to 85% in terms of accuracy, and with only a handful of seen examples, our performance already reaches around 95%.

__Paper Link:__ [Arxiv 2019 - ForensicTransfer](https://arxiv.org/pdf/1812.02510.pdf)



