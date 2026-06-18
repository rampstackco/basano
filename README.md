# Basano

**An open critic for the Claude Skills catalog.** Built by [RampStack](https://rampstack.co).

Basano is an open critic for the Claude Skills catalog, built by RampStack. It reviews a finished build against a standard and reports what holds and what fails. It reads the [claude-skills](https://github.com/rampstackco/claude-skills) catalog, selects the verification skills a review needs, runs the review, and returns a structured verdict: the failures, prioritized by severity, and the parts that hold, so the verdict is trustworthy in both directions.

The name comes from the Greek basanos, the touchstone: the stone against which gold was rubbed to test whether it was genuine. That is what Basano does to a build.

This repository documents what Basano does and shows worked examples. The critic is operated by RampStack.

---

## What it does

- **Scopes the review.** Turns a build and a standard into the areas worth checking: SEO, accessibility, code quality, performance, content, and others as the build calls for.
- **Selects the verification skills.** For each area, it picks the relevant audit and review skills from the catalog, honoring each skill's own stated boundaries, so the review maps to skills that actually check that dimension.
- **Reports a verdict.** It synthesizes findings into a structured result: what fails, ordered by severity with the reason it matters, and what holds. Not a raw issue dump, a prioritized verdict.

---

## The honest verdict

A critic is only worth having if its judgment is trustworthy in both directions. Basano is built so that:

- A failure is never softened into a pass or a minor note. If an area fails the standard, the verdict says so, with severity.
- What cannot be assessed is marked as such, never quietly counted as a pass.
- A verdict reads "passes" only when every assessed area holds. A passing verdict that carried a real failure is structurally impossible, it cannot be constructed, not merely discouraged.

That is the point of the tool: its "this holds" is trustworthy because its "this fails" is unsparing.

Basano reports; it does not fix. The fix is the human's call.

---

## Worked examples

- [Landing page passes production-ready](examples/basano-landing-page-pass.md) - a clean pass, with the holds surfaced rather than assumed.
- [Landing page fails on accessibility](examples/basano-landing-page-fail.md) - a high-severity failure leads the verdict, a low-severity one follows in order, two areas hold, and one area is honestly marked as not confidently scoped.

---

## Getting started

1. Read the framework above and the honest-verdict rule it sets out: failures are reported with severity, and what cannot be assessed is marked not assessable rather than counted as a pass.
2. Pick the worked example that matches your review from [`examples/`](examples/): the clean pass, the accessibility-led fail, or the AEO and GEO verdict.
3. Run the operated critic at [rampstack.co/basano](https://rampstack.co/basano) against your build and standard, and read the verdict it returns.
4. Read or build against the verdict. Act on the fails in severity order, and treat the not-assessable items as open questions rather than passes. The fix is yours.

---

## Quick examples

A curated entry point into [`examples/`](examples/). Open the one closest to your review first.

- [Landing page passes production-ready](examples/basano-landing-page-pass.md) - a clean pass with every hold surfaced rather than assumed.
- [Landing page fails on accessibility](examples/basano-landing-page-fail.md) - a high-severity fail leads, a low-severity one follows in order, two areas hold, and one area is not confidently scoped.
- [Landing page fails on AI-search readiness](examples/basano-landing-page-seo.md) - an AEO and GEO verdict where the AI-crawler opt-out fails high, a missing llms.txt fails low, and the outcome question is marked not assessable.

Basano is one of three engines RampStack runs against the same catalog: [Krine](https://github.com/rampstackco/krine) decides, [Tholo](https://github.com/rampstackco/tholo) builds, Basano proves. On the SEO thread, Tholo produces the audit-and-fix plan and Basano verifies the AEO and GEO result.

---

## Using the outputs

Building against a Basano run? The verdict shape is documented in [`schemas/verdict.ts`](schemas/verdict.ts) as annotated types, carrying only what the published examples already show.

---

## Artifacts and schemas

- [`examples/`](examples/) holds worked examples of the verdicts Basano produces.
- [`schemas/`](schemas/) holds the shape of those public artifacts as annotated types, for building against the engine's outputs. The types carry only what the published artifacts already show.

---

## About

Basano is built by [RampStack](https://rampstack.co), which maintains the open [claude-skills](https://github.com/rampstackco/claude-skills) catalog Basano reviews against.

- RampStack: [rampstack.co](https://rampstack.co)
- The catalog: [github.com/rampstackco/claude-skills](https://github.com/rampstackco/claude-skills)

---

## The name

Basano is the name of RampStack's open critic, in active use since 2026. The name and its associated branding are used in commerce by RampStack. This documentation, dated and public, is part of that record.
