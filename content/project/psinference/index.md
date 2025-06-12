---
title: 'PSinference: Inference for Released Plug-in Sampling Single Synthetic Dataset'

# Date this page was created.
date: 2024-01-01T00:00:00Z

# Project summary to display on homepage.
summary: An R package for statistical inference on synthetic datasets generated using plug-in sampling methods, providing robust analytical tools for researchers working with privacy-preserving synthetic data.

# Tags: can be used for filtering projects.
tags:
- R Package


# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder. 
image:
  caption: 'PSinference R Package Logo'
  focal_point: Smart
  preview_only: false
  # Optional: Set specific placement
  placement: 1

# Links (optional).
url_pdf: "https://cran.r-project.org/web/packages/PSinference/PSinference.pdf"
url_slides: ""
url_video: ""
url_code: "https://github.com/ricardomourarpm/PSinference"

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
    url: "https://cran.r-project.org/package=PSinference"
    icon_pack: "fab"
    icon: "r-project"
  - name: "Documentation"
    url: "https://cran.r-project.org/web/packages/PSinference/PSinference.pdf"
    icon_pack: "fas"
    icon: "file-pdf"
  - name: "GitHub"
    url: "https://github.com/ricardomourarpm/PSinference"
    icon_pack: "fab"
    icon: "github"

---
## Overview

PSinference is an R package designed for statistical inference on synthetic datasets generated using plug-in sampling methods. This package provides researchers with robust analytical tools specifically tailored for working with privacy-preserving synthetic data.

## Key Features

- **Statistical Inference Tools**: Comprehensive methods for analyzing synthetic datasets
- **Plug-in Sampling Support** -- Specialized functions for datasets created via plug-in sampling
- **Privacy-Preserving Analytics** -- Tools designed with data privacy considerations
- **Easy Integration**-- Seamless integration with existing R workflows

## Installation

Install the package from CRAN:

```r
install.packages("PSinference")
```

Or install the development version from GitHub:

```r
# install.packages("devtools")
devtools::install_github("ricardomourarpm/PSinference")
```

## Quick Start

```r
library(PSinference)

# Example usage (add your specific examples here)
# Basic inference on synthetic data
# result <- ps_inference(your_synthetic_data)
```

## Authors

- **Ricardo Moura** : Lead Developer
- **Mina Norouzirad** : Developer
- **Vítor Augusto** : Contributor  
- **Miguel Fonseca** : Contributor

## Documentation

For detailed documentation, please refer to:
- [CRAN Documentation](https://cran.r-project.org/web/packages/PSinference/PSinference.pdf)
- [GitHub Repository](https://github.com/ricardomourarpm/PSinference)

## Citation

If you use PSinference in your research, please cite:

```bibtex
@Manual{PSinference2024,
  title = {PSinference: Inference for Released Plug-in Sampling Single Synthetic Dataset},
  author = {Ricardo Moura and Vítor Augusto and Miguel Fonseca},
  year = {2024},
  note = {R package},
  url = {https://cran.r-project.org/package=PSinference}
}
```

## License

GPL (>= 2)

## Contributing

Contributions are welcome! Please see our [GitHub repository](https://github.com/ricardomourarpm/PSinference/issues)
