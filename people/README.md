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

All cropped square with the frame biased upward, 400x400, JPEG quality 82.

## Still on initials

Tianyu Shi, Fan Zhou, Jieping Ye, Sheila McIlraith, Mengdi Wang, Hongtu Zhu,
Steve Drew, Haolun Wu, Aaron Tian, Peiyu Zhang, Yunkai Bao.

Reasons vary. Drew's UCalgary profile image sits behind an expiring token.
Wu's Mila record has no portrait file at the path his profile advertises. The
industry people have no public headshot to find. Fan Zhou, Aaron Tian and
Peiyu Zhang are common enough names that search returns several different
people, and publishing the wrong face is worse than an initial.

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
