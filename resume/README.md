# Resume source

`resume.tex` is the LaTeX source of `public/resume.pdf`. It was reconstructed
from the previously compiled PDF (the original source was lost) and reproduces
that layout: same fonts (Bitstream Charter), colours, geometry and spacing.
`public/resume.pdf` is built from this file.

## Build

```sh
cd resume
tectonic resume.tex          # or: pdflatex resume.tex  (run twice)
cp resume.pdf ../public/resume.pdf
```

Requires a TeX distribution with `charter`, `tikz`, `enumitem`, `etoolbox`,
`geometry` and `hyperref` (all part of TeX Live / Overleaf).

## Notes

- The five "Overfull \hbox" warnings are inherited from the original layout
  (the sidebar is set with normal tolerance and has a few tight lines).
- A handful of forced line breaks (`\\`) and spacing quirks are marked with
  comments; they exist only to match the earlier PDF and can be removed when
  the text is next edited.
