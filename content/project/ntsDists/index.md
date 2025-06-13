---
title: 'ntsDists: Neutrosophic Distributions'

authors:
  - admin

date: '2023-01-01'

summary: 'This R package computes the pdf, cdf, quantile function, and generates random numbers for neutrosophic distributions. This family of distributions has been developed by different authors in recent years.'


# Tags: can be used for filtering projects.
tags:
- R Package
- Neutrosophic
- Distributions

external_link: ""

image:
  caption: 'ntsDists: Neutrosophic Distributions'
  focal_point: Smart
  preview_only: false
  # Optional: Set specific placement
  placement: 1

# Links (optional).
url_pdf: https://cran.r-project.org/web/packages/ntsDists/ntsDists.pdf
url_slides: ""
url_video: ""
url_code: https://github.com/dmazarei/ntsDists

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

links:
  - name: "CRAN"
    url: "https://cran.r-project.org/package=ntsDists"
    icon_pack: "fab"
    icon: "r-project"
  - name: "Documentation"
    url: "https://cran.r-project.org/web/packages/ntsDists/ntsDists.pdf"
    icon_pack: "fas"
    icon: "file-pdf"
  - name: "GitHub"
    url: "https://github.com/dmazarei/ntsDists"
    icon_pack: "fab"
    icon: "github"
---

## Overview

**ntsDists** is an R package that implements a variety of neutrosophic probability distributions. These distributions generalize classical statistical models by incorporating uncertainty, imprecision, and indeterminacy—key components of neutrosophic theory.

This package enables users to:

- Compute the **Probability Density Function (PDF)**
- Evaluate the **Cumulative Distribution Function (CDF)**
- Obtain values from the **Quantile Function**
- **Generate random samples** from neutrosophic distributions

It is a valuable tool for researchers working with data that includes vague or imprecise components.

## Installation

Install the package from CRAN:

```r
install.packages("ntsDists")
```

Or install the development version from GitHub:

```r
# install.packages("devtools")
devtools::install_github("dmazarei/ntsDists")
```

## Quick Start

```r
library(ntsDists)

data(balls)
dnsNorm(x = balls, mean = c(72.14087, 72.94087), sd = c(37.44544, 37.29067))
pnsNorm(q = 5, mean = c(72.14087, 72.94087), sd = c(37.44544, 37.29067))
qnsNorm(p = c(0.25, 0.5, 0.75), mean = c(9.1196, 9.2453), sd = c(10.1397, 10.4577))
rnsNorm(n = 10, mean = c(4.141, 4.180), sd = c(0.513, 0.521))
```

## Authors

- **Danial Mazarei**: Developer
- **Mina Norouzirad** : Lead Developer, Conceptualization
- **Amin Roshani**: Contributor
- **Gadde Srinivasa Rao** : Contributor 
- **Foad Esmaeili** : Contributor 


## Documentation

For detailed documentation, please refer to:
- [CRAN Documentation](https://cran.r-project.org/web/packages/ntsDists/ntsDists.pdf)
- [GitHub Repository](https://github.com/dmazarei/ntsDists)

## Citation

If you use PSinference in your research, please cite:

```bibtex
@Manual{ntsDists2023,
  title = {ntsDists: Neutrosophic Distributions},
  author = {Danial Mazarei and Amin Roshani and Gadde Srinivasa Rao and Foad Esmaeili},
  year = {2023},
  note = {R package},
  url = {https://cran.r-project.org/package=ntsDists}
}
```

## License

GPL (>= 2)

## Contributing

Contributions are welcome! Please see our [GitHub repository](https://github.com/a-roshani/ntsDatasets/issues)
