---
name: accessibility-check
description: Audit and improve HTML/CSS accessibility for keyboard navigation, focus rings, semantic structure, contrast, and reduced-motion support on the Kalispell Software Crafters site.
---

# Accessibility Check

Use this skill when reviewing the site for HTML/CSS accessibility issues before making changes.

## Scope

Review the following files first:
- All HTML files in `src/` (e.g., `src/index.html`)
- All scss styles under src/styles
- src/index.js

## Priority issues to check

### 1. Keyboard and focus accessibility
- Do all interactive elements work without a mouse?
- Is the mobile menu trigger a real button or another accessible control with keyboard support?
- Does the menu update state for screen-reader users, especially `aria-expanded` and `aria-controls`?
- Are links, menu items, and controls visibly focused using strong contrast?
- Is there a `:focus` or `:focus-visible` rule with acceptable visual feedback?

### 2. Semantic HTML structure
- Does the page include landmarks such as `header`, `nav`, and `main` where appropriate?
- Are headings ordered logically without skipping levels?
- Are section IDs and target links aligned so navigation is predictable?
- Are links and controls labeled clearly and meaningfully?

### 3. Contrast and readability
- Are foreground/background combinations readable for normal and low-vision users?
- Are hover states and focus states still readable and not too low-contrast?
- Does the blue page background and translucent overlay maintain sufficient contrast for text?
- Are font size, spacing, and line height comfortable for reading on mobile and desktop?

### 4. Mobile menu and layout accessibility
- Does the fixed-position navigation overlap content or hide important layout areas?
- Can the menu be used without trapping focus or causing a confusing user flow?
- Does content remain readable and accessible on smaller screens without horizontal scrolling?
- Are interactive touch targets large enough and easy to use?

### 5. Reduced motion and UI comfort
- Are CSS transitions and menu animations overused or distracting?
- Does the site respect `prefers-reduced-motion` and reduce unnecessary animation for users with vestibular sensitivity?
- Does the menu animation preserve clarity without creating disorientation?

## Issue patterns to flag

Flag these patterns when found:
- `div` used as a toggle control instead of a semantic button
- interactive elements missing keyboard triggers or focus styles
- navigation with fixed positioning and no focus management
- text on blue or translucent backgrounds with insufficient contrast
- no `:focus-visible` styling
- no `prefers-reduced-motion` handling
- missing landmark semantics or invalid heading hierarchy

## Acceptance criteria

A fix is acceptable only if all of the following are true:
- Keyboard users can navigate the page and menu without a mouse.
- Focus states are clearly visible and high contrast.
- Mobile navigation does not trap focus or hide content unexpectedly.
- The page uses semantic HTML and a logical heading structure.
- Text contrast is sufficient for readability.
- Motion is reduced or removed when the user prefers less animation.

## Suggested remediation approach

1. Replace non-semantic interactive controls with accessible elements where needed.
2. Add visible focus styles and keyboard support to all links and menu controls.
3. Add ARIA state updates for menu toggling when appropriate.
4. Check and improve contrast ratios for text, navigation, and hover states.
5. Review the fixed navigation and animation behavior on mobile screens.
6. Validate the page with keyboard-only use and a quick accessibility checklist before finalizing.

## Example checklist for this site

- Hamburger menu is accessible by keyboard
- Menu state is announced to assistive technology
- Focus ring is visible and high contrast
- No text becomes unreadable over the background colors
- Fixed navigation does not hide content or obstruct the page
- Motion is reduced for users with reduced-motion preferences
