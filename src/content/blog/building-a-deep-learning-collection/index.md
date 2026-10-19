---
title: Building A Deep Learning Collection
date: 2021-04-09 21:00:00
updated: 2026-10-19
author: Cristhian Wiki
tags: ['python', 'pytorch', 'tensorflow']
excerpt: 'A growing collection of PyTorch tutorials from basic to advanced, plus notes on PyTorch Lightning and Captum for training and interpreting deep learning models.'
cover: ./images/repo-preview.png
---

Every time I learned a new architecture, I ended up with the same mess: a notebook copied from a
video, a script half-adapted from someone's repository, and a dataset I could no longer find a
month later. So I started putting all of it in one place, cleaned up and runnable. That place is
[Deep-Learning-Collection](https://github.com/HiroForYou/Deep-Learning-Collection): a set of
tutorials for current deep learning models in NLP and Computer Vision, which I plan to keep
expanding.

> **Note from the future:** this post was written in 2021. Some APIs have moved since then; for
> example, PyTorch Lightning is now published as the `lightning` package. The ideas still hold.

## Start with the pipeline, not the model

Before writing a single layer, it pays to sketch what the whole pipeline looks like: where the
data comes from, how it is preprocessed, how the model is trained, and how you will know whether
it worked. Only then is it worth writing the code that makes each step run.

Data is the piece that usually breaks reproducibility, so whenever possible each tutorial ships
with a dataset (or a script that downloads it). If you clone the repository, you should be able to
run the experiment and get the same results I did.

A clear project structure matters just as much as the pipeline itself:

![The HiroForYou/Deep-Learning-Collection repository on GitHub, with tutorials grouped by level](./images/repo-preview.png)

## Two tools I now use everywhere

Beyond PyTorch itself, two libraries changed how I write and understand models: **PyTorch
Lightning** removes most of the training boilerplate, and **Captum** shows you what a trained
model is actually paying attention to. If you work as an ML engineer, both are worth adding to
your toolbox.

### PyTorch Lightning

Lightning asks you to organize a model into a few well-defined methods, and then it takes care of
the training loop, devices, logging and checkpoints. A small autoencoder looks like this:

```python
import os

import pytorch_lightning as pl
import torch
import torch.nn.functional as F
from torch import nn
from torch.utils.data import DataLoader, random_split
from torchvision import transforms
from torchvision.datasets import MNIST


class LitAutoEncoder(pl.LightningModule):
    def __init__(self):
        super().__init__()
        self.encoder = nn.Sequential(nn.Linear(28 * 28, 128), nn.ReLU(), nn.Linear(128, 3))
        self.decoder = nn.Sequential(nn.Linear(3, 128), nn.ReLU(), nn.Linear(128, 28 * 28))

    def forward(self, x):
        # In Lightning, forward defines inference: here, the embedding.
        return self.encoder(x)

    def training_step(self, batch, batch_idx):
        # training_step defines one step of the training loop, independent of forward.
        x, _ = batch
        x = x.view(x.size(0), -1)
        x_hat = self.decoder(self.encoder(x))
        loss = F.mse_loss(x_hat, x)
        self.log('train_loss', loss)
        return loss

    def configure_optimizers(self):
        return torch.optim.Adam(self.parameters(), lr=1e-3)


dataset = MNIST(os.getcwd(), download=True, transform=transforms.ToTensor())
train, val = random_split(dataset, [55000, 5000])

autoencoder = LitAutoEncoder()
trainer = pl.Trainer()
trainer.fit(autoencoder, DataLoader(train), DataLoader(val))
```

The split that took me a while to appreciate: `training_step` describes how the model learns,
while `forward` describes how it behaves once it is trained. Keeping them apart makes the same
module easy to train, evaluate and deploy.

### Captum

A model that scores well is not necessarily looking at the right things. Captum implements
attribution methods (Integrated Gradients, Saliency, DeepLift and others) that tell you which
parts of the input pushed the model towards its prediction. For an image classifier, that means a
heat map of the pixels that mattered:

```python
import numpy as np
from captum.attr import IntegratedGradients
from captum.attr import visualization as viz
from matplotlib.colors import LinearSegmentedColormap

# Gradient-based attribution for the predicted class.
integrated_gradients = IntegratedGradients(model)
attributions_ig = integrated_gradients.attribute(input, target=pred_label_idx, n_steps=200)

# Overlay the attributions on the original image.
default_cmap = LinearSegmentedColormap.from_list(
    'custom blue', [(0, '#ffffff'), (0.25, '#000000'), (1, '#000000')], N=256
)

_ = viz.visualize_image_attr(
    np.transpose(attributions_ig.squeeze().cpu().detach().numpy(), (1, 2, 0)),
    np.transpose(transformed_img.squeeze().cpu().detach().numpy(), (1, 2, 0)),
    method='heat_map',
    cmap=default_cmap,
    show_colorbar=True,
    sign='positive',
    outlier_perc=1,
)
```

If the heat map lights up the background instead of the object, you have learned something
important about your data that no accuracy number would have told you.

## How the tutorials are organized

The tutorials are split by level. The basic ones are for people taking their first steps in deep
learning; the advanced ones assume you are already comfortable debugging and optimizing a model.

Part of the code is my own, and part of it was compiled from YouTube channels, papers and their
companion repositories. I try to credit every original author, so please go back to those sources
too. And feel free to modify anything you find; that is the whole point of sharing it.

Over time I want to add more models and publish the trained weights, so you can skip straight to
experimenting.

## Where I would start

If you only have time for a few, these are the models I consider essential for anyone getting
serious about deep learning:

- [Vision Transformer (ViT)](https://github.com/HiroForYou/Deep-Learning-Collection/blob/main/DL/Avanzado/Vision-Transformer):
  attention applied to image patches, and the reason transformers took over vision.
- [Image Captioning](https://github.com/HiroForYou/Deep-Learning-Collection/blob/main/DL/Avanzado/Image-Captioning):
  a vision encoder and a language decoder working together.
- [U-Net](https://github.com/HiroForYou/Deep-Learning-Collection/blob/main/DL/Avanzado/Segmentaci%C3%B3n-UNET):
  the encoder-decoder with skip connections behind most segmentation work.

If any of them helps you, a star on the
[repository](https://github.com/HiroForYou/Deep-Learning-Collection) is the best way to tell me,
and it keeps me adding new ones.
