

## Rename "Repeat" to "Repeatt"

A straightforward find-and-replace across all files where the brand name appears.

### Files to update

1. **`index.html`** — Title, meta author, og:title, twitter:title (4 occurrences of "Repeat")
2. **`src/components/Navbar.tsx`** — Logo text "Repeat" → "Repeatt"
3. **`src/components/HeroSection.tsx`** — `repeat.` → `repeatt.` in headline
4. **`src/components/WaitlistSection.tsx`** — "try Repeat" → "try Repeatt"
5. **`src/components/Footer.tsx`** — Logo text and copyright line
6. **`src/pages/Privacy.tsx`** — "Repeat collects…" and "early access to Repeat"
7. **`src/pages/Terms.tsx`** — "Repeat is currently…" and "when Repeat launches"
8. **`src/components/ValueSection.tsx`** — No change needed (uses lowercase "repeat" as a verb, not brand name)

All instances of the brand name "Repeat" become "Repeatt". Lowercase usages like "set payments to repeat" and "everything that repeats" stay as-is since those are verbs, not the brand.

