// Five Seconds to Explain the Glass — entry program.
//
// The entry line:
//   "Your glassware failed its routine inspection, so I removed it from
//    service permanently. You're welcome."
//
// WHY THIS ANGLE
// The judge rewards a cat's own logic, self-interest and total lack of
// remorse, plus a fresh comic idea rather than the obvious gravity,
// slippery-edge or "it was already falling" lines. So the cat here is not
// denying the act at all — it is reframing it as a job. A quality inspector
// does not apologise for condemning a faulty product; it files the report
// and moves on. "Removed it from service" is the cat claiming the push was
// deliberate, official, and for the human's own good, which is exactly the
// entitled, unbothered voice the brief asks for. "You're welcome" lands the
// final twist: the cat expects gratitude, not punishment.
//
// REVISION 1 — TIGHTENING THE VERB
// v1 read "I was conducting a routine quality inspection of your glassware".
// That is padding: "was conducting" is three soft words where one strong
// verb does the job, and criterion 5 punishes throat-clearing. "I ran a
// routine quality inspection" kept the bureaucratic register while cutting
// two words and speeding the spoken cadence.
//
// REVISION 2 — LEAD WITH THE VERDICT, NOT THE CAT (new thinking)
// v2 still opened with the cat: "I ran a routine quality inspection..."
// That makes the sentence about what the cat *did*, which invites the
// question "why did you do that?" — the very question a defence should
// never invite. The strongest opening is the verdict itself: "Your
// glassware failed its routine inspection". Now the first thing the judge
// hears is that the *glass* is at fault, and the cat is merely the
// messenger of an official finding. The cat also disappears as the subject
// until the second clause, which is exactly how an inspector talks — the
// report comes first, the agent second. Dropping "quality" is safe: a
// "routine inspection" already implies the quality check, and the shorter
// phrase lands faster in five seconds of speech.
//
// The second change in this revision is "permanently". It looks redundant
// after "removed it from service" — and that redundancy is the joke. The
// cat is clarifying, with bureaucratic precision, that the glass is gone
// for good, as if the human might have hoped for a temporary suspension.
// It is one word that adds a whole beat of menace to an otherwise dry
// sentence, and it costs only eleven characters of a 200-character budget
// we are nowhere near exhausting.
//
// ALTERNATIVES CONSIDERED AND REJECTED
// - "Gravity did it" / "the edge was slippery" / "it was already falling":
//   explicitly called out in the brief as the obvious lines every entry will
//   use. Any of them loses the freshness criterion on arrival.
// - "I didn't mean to, it was an accident": a confession in all but name,
//   and the brief says an apology has lost the argument before it starts.
// - "It was in my sunbeam / my spot": solid cat territorial logic, but it
//   only explains motive, not justification — the cat sounds annoyed rather
//   than authoritative, and it is a common second-tier idea.
// - "The glass looked at me funny": funny, but it hands the judge a joke
//   about the glass's attitude instead of the cat's authority; weaker
//   self-interest, and it reads as a playground excuse.
// - "I was testing whether it could fly": a classic, but it admits the push
//   was a prank with no purpose — the cat looks mischievous rather than
//   convinced of its own rightness.
// - Leading with the human's fault ("You left it on the edge of MY table"):
//   tempting, since the brief allows blaming the human's table management,
//   but it turns the cat into a complainer. Blaming the glass's *quality*
//   keeps the cat in the position of authority instead of grievance.
//
// The inspector angle wins because it is the only one where the cat is
// *right* by its own rules: it did its duty, the glass failed, case closed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Your glassware failed its routine inspection, so I removed it from service permanently. You're welcome.";

// Gate checks (mirror the sealed scorer): UTF-8 text, 1-200 chars, not
// only whitespace, exactly one line.
function gate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry is ${text.length} characters, must be 1-200`);
  }
  if (!text.trim()) {
    throw new Error("entry is blank or only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

gate(ENTRY);

// MAKEFUN_OUTPUT_DIR is a directory; the entry goes in entry.txt inside it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length}-character entry to ${outFile}`);
