# Basano worked example: landing page passes production-ready

A clean-pass review. Basano scopes the production-ready standard into five areas, selects verification skills per area, every finding holds, and the verdict reads passes.

## The review

```
Build: a finished landing page for a new product, with hero, features, testimonials, and a contact form
Standard: production-ready
Findings: per-area holds, from the team's verification run
```

## The verdict Basano produces

```
Verdict status: passes

Areas (5):
  - area-1: review on-page and technical SEO of the build
      selected: seo-onpage, seo-technical
  - area-2: review accessibility against WCAG
      selected: accessibility-audit
  - area-3: review the code for quality and correctness
      selected: code-review-web, design-standards
  - area-4: review performance and page speed
      selected: performance-optimization
  - area-5: review content quality and editorial standards
      selected: editorial-qa, content-strategy

Holds (5):
  - SEO hygiene: titles, meta, headers, internal links verified
  - accessibility: WCAG AA conformance verified including contrast and keyboard nav
  - code quality: review passed with no high or medium findings
  - performance: Core Web Vitals within budget on the target page
  - content quality: editorial pass clean, no jargon flags
```

## What Basano did, and did not, do

- Scoped the production-ready standard into the area set: SEO, accessibility, code, performance, content. The expansion is deterministic and legible, not a hidden model call.
- Selected verification skills per area. The same selection used for build planning runs the same way for review scoping.
- Surfaced the holds, not just the absence of fails. A critic that only lists failures is as useless as one that only flatters; passes is trustworthy because the holds are visible too.
- Reported the verdict and stopped. Basano does not fix; the fix is the human's call, or a follow-on build.

## What you do next

If you trust the standard and the findings the team ran, ship. If you want a stricter review, add more areas or raise the standard.
