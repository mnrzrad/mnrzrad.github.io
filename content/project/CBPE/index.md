---
title: 'CBPE: Correlation-Based Penalized Estimators'

authors:
  - admin

date: '2024-01-01'

summary: 'This R package provides correlation-based penalty estimators for both linear and logistic regression models by implementing a new regularization method.'


# Tags: can be used for filtering projects.
tags:
- R Package
- Regularization

external_link: ""

image:
  caption: 'CBPE R Package Logo'
  focal_point: Smart
  preview_only: false
  # Optional: Set specific placement
  placement: 1

# Links (optional).
url_pdf: https://cran.r-project.org/web/packages/CBPE/CBPE.pdf
url_slides: ""
url_video: ""
url_code: https://github.com/mnrzrad/CBPE

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

links:
  - name: "CRAN"
    url: "https://cran.r-project.org/package=CBPE"
    icon_pack: "fab"
    icon: "r-project"
  - name: "Documentation"
    url: "https://cran.r-project.org/web/packages/CBPE/CBPE.pdf"
    icon_pack: "fas"
    icon: "file-pdf"
  - name: "GitHub"
    url: "https://github.com/mnrzrad/CBPE"
    icon_pack: "fab"
    icon: "github"
---

## Overview

**CBPE** is an R package that introduces a novel approach to penalized estimation using correlation-based penalties. It is designed for both linear and logistic regression models.

The key feature of CBPE is its use of **correlation structure among predictors** to guide regularization.

## Features

- Correlation-based penalized **linear regression**
- Correlation-based penalized **logistic regression**

## Installation

Install the package from CRAN:

```r
install.packages("CBPE")
```

Or install the development version from GitHub:

```r
# install.packages("devtools")
devtools::install_github("mnrzrad/CBPE")
```

## Quick Start

```r
library(CBPE)
set.seed(42)
n <- 100
p <- 4
X <- matrix(rnorm(n * p), n, p)
beta_true <- c(0.5, -1, 2, 5)
y <- X %*% beta_true + rnorm(n)
lambda <- 0.1

result <- CBPLinearE(X, y, lambda = lambda)
print(result)
```

## Authors

- **Mina Norouzirad** : Lead Developer, Conceptualization
- **Mohammad Arashi**: Methodology
- **Mahdi Rahimi** : Contributor 


## Documentation

For detailed documentation, please refer to:
- [CRAN Documentation](https://cran.r-project.org/web/packages/CBPE/CBPE.pdf)
- [GitHub Repository](https://github.com/mnrzrad/CBPE)

## Citation

If you use PSinference in your research, please cite:

```bibtex
@Manual{CBPE, 
title = {CBPE: Correlation-Based Penalized Estimators}, 
author = {Arashi, M. and Rahimi, M. and Norouzirad, M.}, 
year = {2024}, 
note = {R package version 0.1.0}, 
url = {https://cran.r-project.org/package=CBPE}
}
```

## License

GPL (>= 2)

## Contributing

Contributions are welcome! Please see our [GitHub repository](https://github.com/mnrzrad/CBPE/issues)
