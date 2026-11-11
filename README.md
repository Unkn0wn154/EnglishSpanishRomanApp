# Español · English

Offline PWA to learn **Spanish** (from zero, 1,500 most frequent words) and **English** (B1 → C1, 1,500 words),
with meanings in French, Russian and Ukrainian. Built on the same engine as the Russian Daily app.

## Use it
Host the folder on GitHub Pages (Settings → Pages → deploy from branch, root), open the URL in Chrome on the phone,
then menu → *Add to home screen*. Everything works offline after the first visit.
Switch course with the ⇄ button (or open `…/index.html?course=en`). Each course keeps its own progress;
Settings → Export saves both in one file.

For pronunciation, install the Android voices: Settings → General management → Text-to-speech → engine → Install voice data
→ *Español (España)* and *English (United States)*.

## Change content
- `es/` and `en/` hold the data (words, verbs, lessons, drills, phrases, texts, reading). Formats are described at the top of each file.
- `files.js` lists every file: add new ones there. **Bump `CACHE`** there on every deploy so phones fetch the update.
- `node test.js` checks all data (field counts, duplicates, quiz answers) and the Spanish conjugator against known forms.
