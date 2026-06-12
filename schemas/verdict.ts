// Basano verdict: the shape of the engine's public artifacts, for building
// against its outputs.
//
// Every field here is present in the published worked examples in examples/.
// The types describe what a verdict exposes, nothing more.

/**
 * The verdict as a whole. A verdict reads "passes" only when every assessed
 * area holds; a verdict carrying any failing finding reads "fails".
 */
export type VerdictStatus = "passes" | "fails";

/**
 * Severity of a failing finding. Fails are reported highest severity first.
 */
export type Severity = "HIGH" | "MEDIUM" | "LOW";

/**
 * One area the standard was scoped into, e.g. accessibility or performance.
 */
export interface Area {
  /** Stable id within the verdict, e.g. "area-1". */
  id: string;
  /** What the area reviews, e.g. "review accessibility against WCAG". */
  description: string;
  /**
   * Verification skills selected for the area, by catalog slug.
   * Absent when the area could not be confidently scoped.
   */
  selected?: string[];
  /**
   * True when the area could not be confidently scoped. The area is
   * reported as such, never reviewed against a guessed skill set and never
   * quietly counted as a pass.
   */
  needs_clarification?: boolean;
}

/**
 * A failing finding. A verdict containing any of these reads "fails".
 */
export interface Fail {
  severity: Severity;
  /** Short name of the failure, e.g. "Color contrast on the hero CTA". */
  title: string;
  /** Why it matters, in plain language. */
  detail: string;
}

/**
 * A hold: an assessed dimension that meets the standard, stated
 * affirmatively rather than implied by the absence of a fail.
 */
export interface Hold {
  /** The dimension that holds, e.g. "code quality". */
  label: string;
  /** What was verified, e.g. "Core Web Vitals within budget on the target page". */
  detail: string;
}

/**
 * The closing summary block of a verdict.
 */
export interface Summary {
  verdict: VerdictStatus;
  /** Count of failing findings. */
  fails: number;
  /** Count of holds. */
  holds: number;
  /** Count of areas that could not be assessed. */
  not_assessable: number;
  /** Ids of areas that could not be confidently scoped, e.g. ["area-1"]. */
  unscoped_areas: string[];
}

/**
 * A complete Basano verdict.
 */
export interface Verdict {
  status: VerdictStatus;
  /** The areas the standard was scoped into. */
  areas: Area[];
  /** Failing findings, ordered highest severity first. Empty on a pass. */
  fails: Fail[];
  /** The dimensions that hold, surfaced even when the verdict fails. */
  holds: Hold[];
  summary: Summary;
}
