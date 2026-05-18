# Design System: Password Coach

This document defines the visual language and design tokens for the Password Coach project.

## Core Principles
- **RTL First**: All components are designed for Hebrew layout (`dir="rtl"`).
- **Rule Elimination**: Instead of showing errors, the UI shows a "roadmap" of rules that disappear as they are met.
- **State-Based Feedback**: Colors transition from Neutral -> Warm Yellow -> Success Green based on password strength.

## Design Tokens (CSS Variables)

### Colors
| Variable | Value | Preview |
| :--- | :--- | :--- |
| `--wp--preset--color--black` | `#000000` | |
| `--wp--preset--color--cyan-bluish-gray` | `#abb8c3` | |
| `--wp--preset--color--white` | `#ffffff` | |
| `--wp--preset--color--pale-pink` | `#f78da7` | |
| `--wp--preset--color--vivid-red` | `#cf2e2e` | |
| `--wp--preset--color--luminous-vivid-orange` | `#ff6900` | |
| `--wp--preset--color--luminous-vivid-amber` | `#fcb900` | |
| `--wp--preset--color--light-green-cyan` | `#7bdcb5` | |
| `--wp--preset--color--vivid-green-cyan` | `#00d084` | |
| `--wp--preset--color--pale-cyan-blue` | `#8ed1fc` | |
| `--wp--preset--color--vivid-cyan-blue` | `#0693e3` | |
| `--wp--preset--color--vivid-purple` | `#9b51e0` | |

### Gradients
- **Vivid Cyan Blue to Vivid Purple**: `linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)`
- **Light Green Cyan to Vivid Green Cyan**: `linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%)`
- **Luminous Vivid Amber to Luminous Vivid Orange**: `linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%)`
- **Luminous Vivid Orange to Vivid Red**: `linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%)`
- **Very Light Gray to Cyan Bluish Gray**: `linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%)`
- **Cool to Warm Spectrum**: `linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%)`
- **Blush Light Purple**: `linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%)`
- **Blush Bordeaux**: `linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%)`
- **Luminous Dusk**: `linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%)`
- **Pale Ocean**: `linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%)`
- **Electric Grass**: `linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%)`
- **Midnight**: `linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%)`

### Typography
- **Font Family**: "Ploni-dl" (Weight: 200)
- **Sizes**:
  - `small`: 13px
  - `normal`: 16px
  - `medium`: 20px
  - `large`: 36px
  - `x-large`: 42px
  - `huge`: 42px

### Spacing
- `20`: 0.44rem
- `30`: 0.67rem
- `40`: 1rem
- `50`: 1.5rem
- `60`: 2.25rem
- `70`: 3.38rem
- `80`: 5.06rem

### Shadows
- **Natural**: `6px 6px 9px rgba(0, 0, 0, 0.2)`
- **Deep**: `12px 12px 50px rgba(0, 0, 0, 0.4)`
- **Sharp**: `6px 6px 0px rgba(0, 0, 0, 0.2)`
- **Outlined**: `6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)`
- **Crisp**: `6px 6px 0px rgba(0, 0, 0, 1)`

### Aspect Ratios
- `square`: 1
- `4-3`: 4 / 3
- `3-4`: 3 / 4
- `3-2`: 3 / 2
- `2-3`: 2 / 3
- `16-9`: 16 / 9
- `9-16`: 9 / 16

## CSS Implementation

```css
:root {
    --wp--preset--aspect-ratio--square: 1;
    --wp--preset--aspect-ratio--4-3: 4 / 3;
    --wp--preset--aspect-ratio--3-4: 3 / 4;
    --wp--preset--aspect-ratio--3-2: 3 / 2;
    --wp--preset--aspect-ratio--2-3: 2 / 3;
    --wp--preset--aspect-ratio--16-9: 16 / 9;
    --wp--preset--aspect-ratio--9-16: 9 / 16;
    --wp--preset--color--black: #000000;
    --wp--preset--color--cyan-bluish-gray: #abb8c3;
    --wp--preset--color--white: #ffffff;
    --wp--preset--color--pale-pink: #f78da7;
    --wp--preset--color--vivid-red: #cf2e2e;
    --wp--preset--color--luminous-vivid-orange: #ff6900;
    --wp--preset--color--luminous-vivid-amber: #fcb900;
    --wp--preset--color--light-green-cyan: #7bdcb5;
    --wp--preset--color--vivid-green-cyan: #00d084;
    --wp--preset--color--pale-cyan-blue: #8ed1fc;
    --wp--preset--color--vivid-cyan-blue: #0693e3;
    --wp--preset--color--vivid-purple: #9b51e0;
    --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
    --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
    --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
    --wp--preset--font-size--small: 13px;
    --wp--preset--font-size--normal: 16px;
    --wp--preset--font-size--medium: 20px;
    --wp--preset--font-size--large: 36px;
    --wp--preset--font-size--x-large: 42px;
    --wp--preset--font-size--huge: 42px;
    --wp--preset--spacing--20: 0.44rem;
    --wp--preset--spacing--30: 0.67rem;
    --wp--preset--spacing--40: 1rem;
    --wp--preset--spacing--50: 1.5rem;
    --wp--preset--spacing--60: 2.25rem;
    --wp--preset--spacing--70: 3.38rem;
    --wp--preset--spacing--80: 5.06rem;
    --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
    --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
    --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
    --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
    --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    box-sizing: border-box;
    font-family: "Ploni-dl", sans-serif;
    font-weight: 200;
    /* Accessibility: Ensure minimum contrast ratios are met for all color states */
}

@font-face {
    font-family: "Ploni-dl";
    font-weight: 200;
    font-display: swap; /* Prevent layout shift, fallback to sans-serif immediately */
    src: url(../fonts/ploni-ultralight-aaa.woff2) format("woff2"), 
         url(../fonts/ploni-ultralight-aaa.woff) format("woff"), 
         url(../fonts/ploni-ultralight-aaa.ttf) format("truetype"), 
         url(../fonts/ploni-ultralight-aaa.svg#Ploni-dl) format("svg");
}

## Accessibility (a11y)
- **Screen Readers**: Use `aria-live="polite"` for the feedback container to announce password strength updates.
- **Keyboard Navigation**: All interactive elements (input, show/hide toggle) must be focusable via `Tab`.
- **Contrast**: Neutral and Success states must maintain a 4.5:1 contrast ratio against the background.

## Browser Support
- **Target**: Microsoft Edge (Latest) and Google Chrome (Latest).
- **Standards**: Utilize standard CSS Flexbox/Grid and native ARIA attributes for maximum compatibility.

```
