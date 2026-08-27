# Person photographs

Empty on purpose. Every card on the site shows initials until a file lands here.

## Adding one

1. Drop the file in as `<first>-<last>.jpg`, matching the slug in `styles.css`.
2. Uncomment that person's line in the avatar block at the bottom of `styles.css`.
3. That is all. Nothing else references the file.

Cards without a photograph keep their initials, so photographs can arrive one
at a time and the page never shows a broken image.

## Specification

Square, at least 400x400, centred on the face with a little headroom. The site
renders them at 62px for organizers and 54px for everyone else, so anything
above 400px is wasted bytes. JPEG, quality 80, under 60 KB each.

## Sources on file

Each was taken from that person's own official profile, so provenance rather
than face-recognition is what establishes identity.

| File | Source |
|---|---|
| `yoshua-bengio.jpg` | Wikimedia Commons, `File:Yoshua_Bengio_-_2017.jpg`, CC BY-SA |
| `irina-rish.jpg` | Mila directory, `mila.quebec/en/directory/irina-rish` |
| `bang-liu.jpg` | Mila directory, `mila.quebec/en/directory/bang-liu` |
| `samira-ebrahimi-kahou.jpg` | Mila directory, `mila.quebec/en/directory/samira-ebrahimi-kahou` |
| `perouz-taslakian.jpg` | Mila directory, `mila.quebec/en/directory/perouz-taslakian` |
| `aaron-tian.jpg` | LinkedIn profile photograph, supplied by the web chair |
| `steve-drew.jpg` | Supplied by the web chair |
| `yunkai-bao.jpg` | Supplied by the web chair |
| `tianyu-shi.jpg` | `tianyushi.org`, URL supplied by the web chair |
| `fan-zhou.jpg` | Supplied by the web chair at full resolution |
| `haolun-wu.jpg` | His own site, `haolun-wu.github.io` |
| `hongtu-zhu.jpg` | UNC Gillings School of Global Public Health profile |
| `sheila-mcilraith.jpg` | Vector Institute team page |
| `jieping-ye.jpg` | Supplied by the web chair, background already removed |
| `mengdi-wang.jpg` | Princeton Engineering faculty page |
| `peiyu-zhang.jpg` | Supplied by the web chair |

All cropped square with the frame biased upward, 400x400, JPEG quality 82.

## Complete

All sixteen cards carry a photograph. The initials fallback stays in the CSS,
so a card whose file is removed degrades to initials rather than breaking.

## Permission

Do not copy headshots from faculty pages, lab sites, or conference programmes.
Those belong to the university or the photographer and republishing them here
is infringement. Ask each person for a photograph they are happy to have on a
public page, which also gets you consent to appear on the site at all.

Yoshua Bengio and Mengdi Wang have been approached and have not confirmed. No
photograph of either should go up until they accept, since a picture on the
programme reads as agreement to speak.

## Build

`deploy-pages.yml` stages a hand-written file list. This directory is on that
list. Anything added elsewhere needs adding there too or it 404s in production.
