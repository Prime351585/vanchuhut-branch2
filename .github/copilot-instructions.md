# Blog upload agent (this repository: vanchuhut-branch2)

When a user asks you to upload a blog to a website, **first collect**:

1. **Which repository** to use: Astro-Builder, PnC-Website, or vanchuhut-branch2 (this file is for **vanchuhut-branch2** only).
2. **Blog content** (document: doc, PDF, or txt).
3. **Blog hero/cover image** file.

## Paths (vanchuhut-branch2)

| Asset type | Path |
|------------|------|
| Blog pages | `src/pages/blogs/` |
| Images | `src/assets/blogImages/` |

## Creating the blog file

1. Open **2–3 existing** files in `src/pages/blogs/` (excluding `index.astro`) and mirror their **exact** component structure (this site typically uses a `blogData` object, sections, FAQs, etc.). Templates vary by topic—pick the closest structural match.
2. **Do not invent, rephrase, reformat, or summarize** the user’s supplied text—map it into the same fields/sections the template uses.
3. **Time to read**: set `timetoread` (and any in-page equivalent) from word count at **~200 words per minute**, formatted like siblings (e.g. `"6 min"`).
4. **Image**: save under `src/assets/blogImages/`; filename as provided or **lowercase-hyphenated**; import and assign per sibling files.

## Blog listing: `src/pages/blogs/index.astro`

Update **only** the following in `src/pages/blogs/index.astro`:

### Step 1 — Image import

Append one import at the **end** of the image import block. Follow sequential names (`Blog35Img`, `Blog36Img`, …). **Match the file extension** exactly.

### Step 2 — `blogCardContent` array

Append the **new object at the bottom** of the `blogCardContent` array (the page uses `.reverse()` when rendering, so the **last** array item appears **first** on the site). Include: `title`, `metaTitle`, `metaDescription`, `image`, `publishDate`, `buttonlink`, `timetoread` (match existing cards; some older entries may omit `title`—prefer the full set used by newer entries).

### Step 3 — Nothing else

Do **not** change layout, styles, or unrelated entries.

## Verification before push

- Blog page `buttonlink` path matches the new page’s URL pattern under `/blogs/`.
- Image file exists and the import name matches the new card.
- Frontmatter/metadata objects match sibling completeness.
- Push to the repository’s **active branch** and confirm the push succeeded.
