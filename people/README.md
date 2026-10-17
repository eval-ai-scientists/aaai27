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
| `irina-rish.jpg` | Mila directory, `mila.quebec/en/directory/irina-rish` |
| `bang-liu.jpg` | Mila directory, `mila.quebec/en/directory/bang-liu` |
| `samira-ebrahimi-kahou.jpg` | Mila directory, `mila.quebec/en/directory/samira-ebrahimi-kahou` |
| `perouz-taslakian.jpg` | Mila directory, `mila.quebec/en/directory/perouz-taslakian` |
| `aaron-tian.jpg` | LinkedIn profile photograph, supplied by the web chair |
| `steve-drew.jpg` | Supplied by the web chair |
| `yunkai-bao.jpg` | Supplied by the web chair |
| `tianyu-shi.jpg` | `tianyushi.org`, URL supplied by the web chair |
| `fan-zhou.jpg` | Supplied by the web chair at full resolution |
| `haolun-wu.jpg` | Own site, `haolun-wu.github.io` |
| `hongtu-zhu.jpg` | UNC Gillings School of Global Public Health profile |
| `peiyu-zhang.jpg` | Supplied by the web chair |
| `xiaowu-dai.jpg` | Own site, `xiaowudai.org`, linked by a co-organizer |
| `zhijing-jin.jpg` | Own site, `zhijing-jin.com`, cut from a circular PNG inside its feathered edge |
| `meijia-chen.jpg` | Supplied by the web chair as a 510 px square PNG |
| `jiajun-wu.jpg` | Supplied by the web chair, cropped square from a 1705 by 1634 original |
| `yifan-hu.jpg` | Own site, `sites.google.com/view/yifan-hu`, URL supplied by the web chair |
| `phoenix-peng.jpg` | Gestala team page, `gestala.com/team/phoenix-peng`, URL supplied by the web chair, cropped from a 720 by 1080 full-length portrait |
| `zhenyu-wang.jpg` | Supplied by the web chair as a 256 px square PNG, cropped to the 192 px square around the face |

All cropped square with the frame biased upward, 400x400, JPEG quality 82.
`zhenyu-wang.jpg` stays at 192 px, since its source is 256 px, and that still
covers the 54 px avatar at three times pixel density.

## Complete

Every person card carries a photograph. The nineteen files cover nineteen
people, and Hongtu Zhu's serves two cards. The initials fallback stays in the
CSS, so a card whose file is removed falls back to its initials.

## Permission

Do not copy headshots from faculty pages, lab sites, or conference programmes.
Those belong to the university or the photographer and republishing them here
is infringement. Ask each person for a photograph they are happy to have on a
public page, which also gets you consent to appear on the site at all.

## Build

`deploy-pages.yml` stages a hand-written file list. This directory is on that
list. Anything added elsewhere needs adding there too or it 404s in production.
