---
title: 'ImpShrinkage: Improved Shrinkage Estimations for Multiple Linear Regression'

authors:
  - admin
  - Danial Mazarei
  - Ricardo Moura

author_notes: []

date: '2023-01-01'
publishDate: '2025-06-05T14:28:08.567811Z'

summary: This R package provides a variety of improved shrinkage estimators in the area of statistical analysis: unrestricted; restricted; preliminary test; improved preliminary test; Stein; and positive-rule Stein.

tags:
  - R Package

external_link: ""

image:
  caption: 'ImpShrinkage R Package Logo'
  focal_point: Smart
  preview_only: false

url_pdf: "https://cran.r-project.org/web/packages/ImpShrinkage/ImpShrinkage.pdf"
url_slides: ""
url_video: ""
url_code: "https://github.com/mnrzrad/ImpShrinkage"

slides: ""

links:
  - name: "CRAN"
    url: "https://cran.r-project.org/package=ImpShrinkage"
    icon_pack: "fab"
    icon: "r-project"
  - name: "Documentation"
    url: "https://cran.r-project.org/web/packages/ImpShrinkage/ImpShrinkage.pdf"
    icon_pack: "fas"
    icon: "file-pdf"
  - name: "GitHub"
    url: "https://github.com/mnrzrad/ImpShrinkage"
    icon_pack: "fab"
    icon: "github"
---

## Overview

**ImpShrinkage** is an R package that provides a broad collection of classical and modern shrinkage estimators for multiple linear regression.

These include:

- **Unrestricted estimator**
- **Restricted estimator**
- **Preliminary test estimator**
- **Improved preliminary test estimator**
- **Stein estimator**
- **Positive-rule Stein estimator**

These estimators are particularly valuable in high-dimensional settings, or when multicollinearity leads to instability in traditional OLS estimates.


## Installation

Install the package from CRAN:

```r
install.packages("ImpShrinkage")
```

Or install the development version from GitHub:

```r
# install.packages("devtools")
devtools::install_github("mnrzrad/ImpShrinkage")
```

## Quick Start

```r
library(ImpShrinkage)

# Simulated data
set.seed(123)
X <- matrix(rnorm(100 * 5), ncol = 5)
beta <- c(1, 0.5, 0, 0, 0)
y <- X %*% beta + rnorm(100)

# Apply unrestricted and Stein estimators
fit_unres <- shrinkage_unrestricted(X, y)
fit_stein <- shrinkage_stein(X, y)

print(fit_unres)
print(fit_stein)
```

## Authors

- **Mina Norouzirad** : Lead Developer, Conceptualization
- **Danial Mazarei**: Developer
- **Ricardo Moura** : Testing, Website and Integration

## Documentation

For detailed documentation, please refer to:
- [CRAN Documentation](https://cran.r-project.org/web/packages/ImpShrinkage/ImpShrinkage.pdf)
- [GitHub Repository](https://github.com/mnrzrad/ImpShrinkage)

## Citation

If you use PSinference in your research, please cite:

```bibtex
@Manual{ImpShrinkage2023,
  title = {ImpShrinkage: Improved Shrinkage Estimations for Multiple Linear Regression},
  author = {Danial Mazarei and Ricardo Moura},
  year = {2023},
  note = {R package},
  url = {https://cran.r-project.org/package=ImpShrinkage}
}
```

## License

GPL (>= 2)

## Contributing

Contributions are welcome! Please see our [GitHub repository](https://github.com/mnrzrad/ImpShrinkage/issues)
