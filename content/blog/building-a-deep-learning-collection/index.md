---
title: Building A Deep Learning Collection
date: 2021-04-09 21:00:00
author: Cristhian Wiki
tags: ['python', 'pytorch', 'tensorflow']
---

This repository contains various tutorials for the implementation of current DL models, in the fields of NLP and Computer Vision (I will expand the catalog soon).

## Defining the goals

Before implement any deep learning model you should 1st design how the pipeline would look like and then write the neccessary code to make it work. 

One of the most important components of this pipeline is the collection of data. As far as possible, I will try to provide a dataset to train the model, in such a way that the experiments are easily reproducible by you.

**I also try to integrate other tools that are very useful**

- Pytorch Lightning
- Captum

Lightning allows you to speed up the training process, and Captum provides beautiful insights into the interpretability and explicability of the models. I suggest that you also integrate it into your arsenal of tools as an ML Engineer.

### Pytorch Lightning

An implementation of Lightning in our models would look something like this :-

```python
import pytorch_lightning as pl

# definition of the model
class LitAutoEncoder(pl.LightningModule):

    def __init__(self):
        super().__init__()
        self.encoder = nn.Sequential(
          nn.Linear(28 * 28, 128), 
          nn.ReLU(), nn.Linear(128, 3))
        self.decoder = nn.Sequential(
          nn.Linear(3, 128), 
          nn.ReLU(), 
          nn.Linear(128, 28 * 28))

    def forward(self, x):
        # in lightning, forward defines the prediction/inference actions
        embedding = self.encoder(x)
        return embedding

    def training_step(self, batch, batch_idx):
        # training_step defined the train loop. It is independent of forward
        x, y = batch
        x = x.view(x.size(0), -1)
        z = self.encoder(x)
        x_hat = self.decoder(z)
        loss = F.mse_loss(x_hat, x)
        self.log('train_loss', loss)
        return loss

    def configure_optimizers(self):
        optimizer = torch.optim.Adam(self.parameters(), lr=1e-3)
        return optimizer

# training boosting
dataset = MNIST(os.getcwd(), download=True, transform=transforms.ToTensor())
train, val = random_split(dataset, [55000, 5000])

autoencoder = LitAutoEncoder()
trainer = pl.Trainer()
trainer.fit(autoencoder, DataLoader(train), DataLoader(val))
```

Note: Training_step defines the training loop. Forward defines how the LightningModule behaves during inference/prediction.

### Captum

Declarative APIs are simple & easier for users to structure the Tree, but in real world scenarios we will have a JSON
Object representing the Folder Tree and we need to render that with the Imperative API.

```python
from captum.attr import ( 
                        IntegratedGradients,
                        Saliency,
                        DeepLift,
                        NoiseTunnel,
                        visualization as viz
                        )

# Gradient-based attribution
integrated_gradients = IntegratedGradients(model)
attributions_ig = integrated_gradients.attribute(
  input, target=pred_label_idx, n_steps=200)

# Let's visualize the image and corresponding attributions 
# by overlaying the latter on the image.
default_cmap = LinearSegmentedColormap.from_list('custom blue', 
                                                [
                                                  (0, '#ffffff'),
                                                  (0.25, '#000000'),
                                                  (1, '#000000')
                                                ], 
                                                N=256)

_ = viz.visualize_image_attr(
            np.transpose(attributions_ig.squeeze().cpu().detach().numpy(), (1,2,0)),
            np.transpose(transformed_img.squeeze().cpu().detach().numpy(), (1,2,0)),
            method='heat_map',
            cmap=default_cmap,
            show_colorbar=True,
            sign='positive',
            outlier_perc=1)
```

<p align="center">
  <img src="https://cms.gilberttanner.com/content/images/size/w2000/2020/08/GradientSHAP-Example.png" />
</p>

Now you have powerful tools to enhance your DL projects.

##  About the tutorials

[![RasPi-BloodView](https://github-readme-stats.vercel.app/api/pin/?username=HiroForYou&repo=Deep-Learning-Collection&show_owner=true)](https://github.com/HiroForYou/Deep-Learning-Collection)

The code presented in the repository is part of my personal collection that has been compiled from various YouTube channels, associated repositories, etc. I try to credit the original authors, so feel free to go back to the original sources.

There is also code of my authorship, but feel free to edit it, we are all community!

The tutorials are divided into level, the basic level is for people who are just taking their first steps in DL, while the advanced level takes into account that you already have experience at the time of debugging and/or optimizing the models presented. .

I will increase the collection of available models, as well as share the weights of the network, so that you do not have complications!


## Popular Models

I am going to list a few models, which I consider essential for every Deep Learning enthusiast.

- [Vision Transformer - ViT](https://github.com/HiroForYou/Deep-Learning-Collection/blob/main/DL/Avanzado/Vision-Transformer)
- [Image Caption](https://github.com/HiroForYou/Deep-Learning-Collection/blob/main/DL/Avanzado/Image-Captioning)
- [U-NET](https://github.com/HiroForYou/Deep-Learning-Collection/blob/main/DL/Avanzado/Segmentaci%C3%B3n-UNET)

And most importantly, don't forget to leave your star in the repository!

Thanks for reading the post, i hope you learned something and enjoyed it.   
Bye have a nice day!  
