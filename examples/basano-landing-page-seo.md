# Basano worked example: landing page fails on AI-search readiness

An AEO and GEO review. A static review can read two things: whether a site blocks the AI crawlers, and whether the page exposes structured data for them. What it cannot read is whether AI products actually cite the site, which needs live queries it does not run. So this example leads with a real failure, the crawler opt-out, and marks the outcome question not assessable rather than guessing at it. The opt-out is where a static review does its most useful work: it confirms the door is shut.

## The review

```
Build: a finished commercial landing page for a generic business, with a hero, feature blocks, and a contact prompt
Standard: production-ready
Findings: AEO and GEO fail on the AI-crawler block (high) and a missing llms.txt (low); on-page SEO, technical SEO, and accessibility hold
```

## The verdict Basano produces

```
Verdict status: fails

Areas (4):
  - area-1: review on-page SEO of the build
      selected: seo-onpage
  - area-2: review technical SEO of the build
      selected: seo-technical
  - area-3: review AEO and GEO readiness for AI search
      selected: seo-aeo-geo
  - area-4: review accessibility against WCAG
      selected: accessibility-audit

Fails (2, severity-ordered):
  - [HIGH] AI-crawler access in robots.txt:
      robots.txt disallows all the major AI crawlers (GPTBot, ClaudeBot,
      Google-Extended, PerplexityBot, CCBot). The area asks for AEO and GEO
      readiness while the site opts out of the engines that deliver it.
  - [LOW] llms.txt at the site root:
      /llms.txt returns HTTP 404. A root llms.txt is a low-cost signal that
      helps AI assistants map the site's content.

Holds (9):
  - title tag: present, 57 chars
  - meta description: present, within length
  - canonical: a self-referential canonical is declared
  - H1: exactly one H1 on the page
  - structured data: JSON-LD present (Organization, WebSite, WebPage,
    BreadcrumbList); the extraction-relevant types AI assistants read,
    Organization and BreadcrumbList, are among them
  - robots meta: index, follow, no noindex, so the page is indexable
  - document language: the html element declares lang
  - image alt-text: every image on the page declares an alt attribute
  - CTA contrast: both call-to-action samples at or above WCAG AA, lowest 6.70:1

Could not assess (2):
  - crawl and sitemap baseline: the runner reads the requested page's HTML;
    sitemap.xml discovery and full HTTP response-header signals are not
    fetched on this run, so the broader crawl baseline is not assessed.
  - AI-product citation and entity strength: whether AI products actually
    cite this site on its priority queries, and its entity strength across
    the web, need live AI queries and external lookups the static runner
    does not perform, so they are marked not assessable rather than guessed.

Summary:
  Verdict: fails. 2 failing findings; 9 holds; 2 not assessable.
  Fails, highest severity first:
    - [HIGH] AI-crawler access in robots.txt
    - [LOW] llms.txt at the site root
  Could not assess:
    - crawl and sitemap baseline
    - AI-product citation and entity strength
  Holds: on-page SEO, structured data, technical SEO, accessibility
```

## What Basano did, and did not, do

- Scoped the production-ready standard into four areas and selected verification skills per area, the same deterministic, legible scoping the other examples show.
- Carried the prioritize-by-severity pattern: the high-severity crawler block leads the report, the low-severity missing llms.txt follows in order, not hidden behind it.
- Surfaced the holds, rather than leaving them implied by the absence of fails. On-page SEO, technical SEO, the extractable structured data, and accessibility are stated as holds; the structured-data hold confirms the page gives AI engines Organization and BreadcrumbList to read.
- Marked what it could not assess. Whether AI products cite the site, and the broader crawl baseline, need instruments the static review does not have, so they are reported as not assessable. They are not counted toward the holds, and the missing data is never read as a pass.
- Reported the verdict and stopped. Basano does not fix; the fix is the human's call.

## What you do next

Clear the high-severity finding first: the AI-crawler block is a choice in robots.txt, so if AI-search visibility is wanted, stop disallowing the named AI crawlers. Adding a root llms.txt clears the low-severity finding and is a fast follow. The two not-assessable items are not defects to patch; they need a different instrument, such as tracking real AI-product citations and checking entity presence across the web, before anyone can say whether the site shows up in AI answers. Once the crawlers are allowed and an llms.txt is published, re-run Basano against the same standard to confirm the AEO and GEO area holds.
