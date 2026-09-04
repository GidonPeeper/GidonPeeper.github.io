# Resume source

`resume.tex` is the LaTeX source of `public/resume.pdf`. It was reconstructed
from the compiled PDF (the original source was lost) and reproduces it line for
line: same fonts (Bitstream Charter), colours, geometry, line breaks and
baselines.

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
  comments; they exist only to match the original PDF and can be removed when
  the text is next edited.
- The original text has a missing closing parenthesis in the sidebar
  ("Tutoring, privately and through institutions (2016 -- 2023"); it is kept
  as is.
