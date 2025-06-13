---
title: 'TestIndVars: Neutrosophic Distributions'

authors:
- admin

# Date this page was created.
date: 2024-01-01T00:00:00Z

# Project summary to display on homepage.
summary: This R package is statistical testing of independence between neutrosophic variables. It extends classical independence tests to handle uncertainty, indeterminacy, and imprecision inherent in neutrosophic data.

# Tags: can be used for filtering projects.
tags:
- R Package


# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder. 
image:
  caption: 'TestIndVars R Package Logo'
  focal_point: Smart
  preview_only: false
  # Optional: Set specific placement
  placement: 1

# Links (optional).
url_pdf: "https://cran.r-project.org/web/packages/TestIndVars/TestIndVars.pdf"
url_slides: ""
url_video: ""
url_code: "https://github.com/mnrzrad/TestIndVars"

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
  - name: "CRAN"
    url: "https://cran.r-project.org/package=TestIndVars"
    icon_pack: "fab"
    icon: "r-project"
  - name: "Documentation"
    url: "https://cran.r-project.org/web/packages/TestIndVars/TestIndVars.pdf"
    icon_pack: "fas"
    icon: "file-pdf"
  - name: "GitHub"
    url: "https://github.com/mnrzrad/TestIndVars"
    icon_pack: "fab"
    icon: "github"

---
## Overview

**TestIndVars** is an R package that provides statistical tools for testing the independence between variables.

The package generalizes classical statistical methods to operate on datasets where each variable may be described by intervals or ranges representing uncertainty.


## Installation

Install the package from CRAN:

```r
install.packages("TestIndVars")
```

Or install the development version from GitHub:

```r
# install.packages("devtools")
devtools::install_github("mnrzrad/TestIndVars")
```

## Quick Start

```r
library(TestIndVars)
n = 50 
p = 5  
rho = 0.4
cov_mat <- covMatAR(p = p, rho = rho)
data <- mvrnorm(n = n, mu = rep(0,p), Sigma = cov_mat)
indTest(data)
```

## Authors

- **Filipe J. Marques** : Lead Developer, Conceptualization
- **Mina Norouzirad** : Developer
- **Regina Bispo** : Contributor  
- **Joana Diogo** : Contributor

## Documentation

For detailed documentation, please refer to:
- [CRAN Documentation](https://cran.r-project.org/web/packages/TestIndVars/TestIndVars.pdf)
- [GitHub Repository](https://github.com/mnrzrad/TestIndVars)

## Citation

If you use PSinference in your research, please cite:

```bibtex
@Manual{TestIndVars2024,
  title = {TestIndVars: Neutrosophic Distributions},
  author = {Filipe J. Marques and Joana Diogo and Regina Bispo},
  year = {2024},
  note = {R package},
  url = {https://cran.r-project.org/package=TestIndVars}
}
```

## License

GPL (>= 2)

## Contributing

Contributions are welcome! Please see our [GitHub repository](https://github.com/mnrzrad/TestIndVars/issues)
