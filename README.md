# Evaluating AI Scientists: Benchmarks, Simulation, and Trust

Website for the AAAI-27 workshop, built as plain static HTML with no build step and no
dependencies. Every page works when opened straight from disk and when served by GitHub Pages.

## Publishing

The site is deployed by GitHub Actions. `.github/workflows/deploy.yml` runs on every push
to `main`, uploads the repository as it stands, and publishes it to GitHub Pages. There is
no build step, so a push is the whole deployment.

```bash
git add .
git commit -m "Update the important dates"
git push
```

The run appears under the Actions tab and takes under a minute. You can also trigger a
deploy by hand from that tab, through the "Run workflow" button, which is useful if a run
failed for an unrelated reason.

The site uses relative links throughout, so it works unchanged at either kind of Pages URL,
`https://<owner>.github.io/<repo>/` or `https://<owner>.github.io/`.

The `.nojekyll` file is there on purpose. It tells Pages to serve the files as they are
without running them through Jekyll.

## Layout

```
.github/workflows/      Pages deployment, runs on every push to main
index.html              Home, banner, themes, challenge, program preview, organizers
calls/                  Call for papers, topics, submission guidelines, important dates
challenge/              The AI Scientist Evaluation Challenge, both tracks
schedule/               Full-day program
speakers/               Keynotes, four slots with topics
papers/                 Accepted papers
organizers/             Organizer profiles, advisory board and program committee
contact/                Contact addresses and venue
404.html                Not-found page, styles inlined so it works at any path depth
assets/css/style.css    The whole theme, one file
assets/js/main.js       Mobile navigation, scroll reveal, sticky header
assets/img/             Brand mark, decorative waves, portrait placeholders
```

Header and footer markup is repeated in each page. Changing a navigation item means
editing each of the eight HTML files, which is the trade for having no build step.

## Placeholders to fill in

These come from the proposal and the call for papers, where they were still open. Search
for the phrases in quotes.

| Where | What is missing |
| --- | --- |
| `calls/index.html` | Submission site link, in the block that says "The submission site will be announced here" |
| `calls/index.html` | Camera-ready date, "Camera-ready versions due" |
| `calls/index.html`, `challenge/index.html` | Challenge dataset release date |
| `challenge/index.html` | Registration link and the challenge submission deadline |
| `schedule/index.html`, and every page footer | The workshop day, currently "February 22 or 23, 2027" |
| `speakers/index.html` | Keynote speakers as they confirm, template in an HTML comment at the bottom |
| `papers/index.html` | Accepted papers after December 2, 2026, template in an HTML comment |
| `organizers/index.html` | Advisory board and program committee members as they confirm |
| `contact/index.html` | Shared workshop email address once it exists |

Two things were deliberately left off the public site. The organizers' phone numbers and
postal addresses from the proposal are not published. The senior advisor and the industry
advisors named in the proposal are not published either, since the proposal records them
as invited rather than confirmed. Add them once they accept.

## Portraits

`assets/img/organizers/` holds neutral placeholder graphics. Replace each file with a real
photograph, keeping the same filename, or change the `src` in `organizers/index.html` and
`index.html`. Square images of about 600 pixels a side work well, and they are displayed as
circles on the home page and as rounded squares on the organizers page.

Speaker portraits go in `assets/img/speakers/` and are used by the speaker template in
`speakers/index.html`.

## Editing the theme

Colors, spacing, and fonts are CSS custom properties at the top of `assets/css/style.css`.
Changing `--primary` re-tints buttons, links, section underlines, and the decorative
circles in one edit.

## Local preview

```bash
python3 -m http.server 8001
```

Then open `http://localhost:8001/`. Any free port works, pick another if 8001 is taken.
Edits show up on a plain browser refresh, with no restart.
