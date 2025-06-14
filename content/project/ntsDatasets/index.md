---
title: 'ntsDatasets: Neutrosophic Data Sets'
authors:
  - admin
date: '2024-01-01'
summary: 'This R package provides a collection of datasets related to neutrosophic sets for statistical modeling and analysis.'
# Tags: can be used for filtering projects.
tags:
- R Package
- Neutrosophic
- Datasets

external_link: ""

image:
  caption: 'ntsDatasets R Package Logo'
  focal_point: Smart
  preview_only: false
  # Optional: Set specific placement
  placement: 1

# Links (optional).
url_pdf: https://cran.r-project.org/web/packages/ntsDatasets/ntsDatasets.pdf
url_slides: ""
url_video: ""
url_code: https://github.com/a-roshani/ntsDatasets

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

links:
  - name: "CRAN"
    url: "https://cran.r-project.org/package=ntsDatasets"
    icon_pack: "fab"
    icon: "r-project"
  - name: "Documentation"
    url: "https://cran.r-project.org/web/packages/ntsDatasets/ntsDatasets.pdf"
    icon_pack: "fas"
    icon: "file-pdf"
  - name: "GitHub"
    url: "https://github.com/a-roshani/ntsDatasets"
    icon_pack: "fab"
    icon: "github"
---

## Overview

**ntsDatasets** is an R package that provides a collection of datasets designed for modeling and analysis with neutrosophic sets — a generalization of classical and fuzzy sets that accounts for indeterminacy.

This package supports the development and benchmarking of statistical methods that handle uncertainty and partial truth in data.


## Installation

Install the package from CRAN:

```r
install.packages("ntsDatasets")
```

Or install the development version from GitHub:

```r
# install.packages("devtools")
devtools::install_github("a-roshani/ntsDatasets")
```

## Quick Start

```r
library(ntsDatasets)
data("balls")
head(balls)
```

## Authors

- **Mina Norouzirad** : Lead Developer, Conceptualization
- **Amin Roshani**: Developer
- **Danial Mazarei**: Developer

## Documentation

For detailed documentation, please refer to:
- [CRAN Documentation](https://cran.r-project.org/web/packages/ntsDatasets/ntsDatasets.pdf)
- [GitHub Repository](https://github.com/a-roshani/ntsDatasets)

## Citation

If you use PSinference in your research, please cite:

```bibtex
@Manual{ntsDatasets2024, 
    title = {ntsDatasets: Neutrosophic Data Sets}, 
    author = {Roshani, A. and Norouzirad, M. and Mazarei, D.}, 
    year = {2024}, 
    note = {R package version 0.2.0}, 
    url = {https://cran.r-project.org/package=ntsDatasets}
}
```

## License

GPL (>= 2)

## Contributing

Contributions are welcome! Please see our [GitHub repository](https://github.com/a-roshani/ntsDatasets/issues)
