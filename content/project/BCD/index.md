---
title: 'BCD: Bivariate Distributions via Conditional Specification'

authors:
  - admin

date: '2025-06-17'

summary: 'This R package provides an implementation of bivariate binomial, geometric, and Poisson distributions based on conditional specifications. The package also includes tools for data generation and goodness-of-fit testing for these three distribution families'


# Tags: can be used for filtering projects.
tags:
- R Package
- Distribution

external_link: ""

image:
  caption: 'BCD R Package Logo'
  focal_point: Smart
  preview_only: false
  # Optional: Set specific placement
  placement: 1

# Links (optional).
url_pdf: https://cran.r-project.org/web/packages/BCD/BCD.pdf
url_slides: ""
url_video: ""
url_code: https://github.com/mnrzrad/BCD

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

links:
  - name: "CRAN"
    url: "https://cran.r-project.org/package=BCD"
    icon_pack: "fab"
    icon: "r-project"
  - name: "Documentation"
    url: "https://cran.r-project.org/web/packages/BCD/BCD.pdf"
    icon_pack: "fas"
    icon: "file-pdf"
  - name: "GitHub"
    url: "https://github.com/mnrzrad/BCD"
    icon_pack: "fab"
    icon: "github"
---

## Overview

**BCD** is an R package that implement of bivariate binomial, geometric, and Poisson distributions based on conditional specifications. The package also includes tools for data generation and goodness-of-fit testing for these three distribution families.


## Installation

Install the package from CRAN:

```r
install.packages("BCD")
```

Or install the development version from GitHub:

```r
# install.packages("devtools")
devtools::install_github("mnrzrad/BCD")
```

## Quick Start

```r
samples <- rgeomBCD(n = 50, q1 = 0.2, q2 = 0.2, q3 = 0.5)
result <-MLEgeomBCD(samples)
print(result)

data(abortflights)
MLEgeomBCD(abortflights)
```

## Authors

- **Mina Norouzirad** : Lead Developer, Conceptualization
- **Filipe J. Marques**: Methodology
- **Indranil Ghosh** : Contributor 


## Documentation

For detailed documentation, please refer to:
- [CRAN Documentation](https://cran.r-project.org/web/packages/BCD/BCD.pdf)
- [GitHub Repository](https://github.com/mnrzrad/BCD)

## Citation

If you use PSinference in your research, please cite:

```bibtex
@Manual{BCD, 
    title = {BCD: Bivariate Distributions via Conditional Specification}, 
    author = {Mina Norouzirad and Filipe J. Marques and Indranil Shosh}, 
    year = {2025}, 
    note = {R package version 0.1.0}, 
    url = {https://cran.r-project.org/package=BCD}
}
```

## License

GPL (>= 2)

## Contributing

Contributions are welcome! Please see our [GitHub repository](https://github.com/mnrzrad/BCD/issues)
