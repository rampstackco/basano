# Basano worked example: landing page fails on accessibility

A real-failure review. Basano scopes the production-ready standard into five areas, selects verification skills per area, one area returns a high-severity fail, and the verdict reads fails. The holds are still surfaced; the fail is not hidden behind a minor note.

## The review

```
Build: a finished landing page for a new product, with hero, features, testimonials, and a contact form
Standard: production-ready
Findings: mixed; accessibility fails high, content fails low, the rest hold
```

## The verdict Basano produces

```
Verdict status: fails

Areas (5):
  - area-1: review on-page and technical SEO of the build [needs_clarification]
  - area-2: review accessibility against WCAG
      selected: accessibility-audit
  - area-3: review the code for quality and correctness
      selected: code-review-web, design-standards
  - area-4: review performance and page speed
      selected: performance-optimization
  - area-5: review content quality and editorial standards
      selected: editorial-qa, content-strategy

Fails (2, severity-ordered):
  - [HIGH] Color contrast on the hero CTA:
      CTA text contrast ratio 2.8:1 against the hero gradient; WCAG AA
      requires 4.5:1. Users with low vision cannot read the primary call
      to action.
  - [LOW] Feature copy uses unexplained jargon:
      Three of five feature blocks use product-team shorthand without
      translation. Cold visitors will not parse it.

Holds (2):
  - code quality: review passed with no high or medium findings
  - performance: Core Web Vitals within budget on the target page

Summary:
  Verdict: fails. 2 failing findings; 2 holds; 0 not assessable.
  Areas that could not be confidently scoped: area-1.
  Fails, highest severity first:
    - [HIGH] Color contrast on the hero CTA
    - [LOW] Feature copy uses unexplained jargon
  Holds: code quality, performance
```

## What Basano did, and did not, do

- Scoped the standard, selected per area, and got a needs-clarification on one area. The verdict notes that area could not be confidently scoped; Basano did not review it against a guessed skill set.
- Carried the prioritize-by-severity pattern: the high-severity contrast fail leads the report, the low-severity content fail follows in order, not hidden.
- Refused to soften the fail. The verdict reads fails, not "passes with notes" or "mostly fine." A passing verdict that carried any fail could not have been constructed.

## What you do next

Fix the high-severity contrast fail first; ship is blocked until that clears. The low-severity copy fail is a fast fix that can run in parallel. Once both are addressed, re-run Basano against the same standard with fresh findings, and re-scope the unscoped area with a narrower focus phrase.
