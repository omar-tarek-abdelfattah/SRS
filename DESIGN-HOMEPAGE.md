---
name: Modern Jurisprudence
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838483'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c7c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

This design system is anchored in the concept of "Modern Jurisprudence"—a visual philosophy that balances the historical weight of legal authority with the streamlined efficiency of the digital age. The aesthetic is strictly editorial, drawing inspiration from high-end law journals and premium lifestyle publications. 

The brand personality is intellectual, decisive, and uncompromisingly clean. It utilizes heavy whitespace to allow complex legal information to breathe, ensuring that the user feels a sense of calm and clarity. By stripping away decorative excess and focusing on structural integrity and superior typography, the UI evokes an emotional response of trust, prestige, and contemporary professionalism.

## Colors

The palette is a disciplined, high-contrast monochrome study. Pure Black (#000000) serves as the primary driver for typography and structural elements, while Pure White (#FFFFFF) provides a crisp, clinical foundation. 

To prevent visual fatigue and maintain the editorial "Stone" aesthetic, a soft neutral (#F5F5F4) is utilized for subtle background partitioning and secondary containers. This creates a sophisticated layering effect without breaking the monochrome commitment. Color is used only as a functional signifier for system status (success/error), ensuring that the content remains the primary focus.

## Typography

The typographic strategy pairs the romantic, high-contrast elegance of **Playfair Display** with the systematic precision of **Inter**. 

Headlines utilize the serif to convey authority and heritage, often appearing with tighter letter-spacing in larger formats to mimic traditional print mastheads. Body copy is set in Inter to ensure maximum legibility across dense legal documentation and digital interfaces. Labels and utility text are rendered in uppercase Inter with increased tracking to provide a modern, architectural counterpoint to the fluid curves of the serif headlines.

## Layout & Spacing

The layout adheres to a 12-column fixed grid for desktop, transitioning to a fluid single-column model for mobile. A strict 8px rhythm governs all vertical and horizontal spacing to ensure mathematical harmony.

Generous margins (64px) and gutters (24px) are non-negotiable; whitespace is treated as a functional element that separates distinct legal concepts. Sections are divided by 1px "Hairline" dividers rather than heavy blocks, maintaining a light, airy, yet structured editorial feel. Content is centered within a maximum container width of 1280px to preserve line-length readability for long-form text.

## Elevation & Depth

This design system eschews traditional shadows and "fuzzy" depth in favor of **Tonal Layering** and **Low-Contrast Outlines**. Depth is communicated through the stacking of surfaces: 

1. **Base:** Pure White (#FFFFFF) or Stone (#F5F5F4).
2. **Intermediate:** 1px solid borders in Black with 10% opacity.
3. **Primary Action:** Solid Black (#000000) for high-contrast focus.

Where depth is absolutely required for overlays (such as modals), a "Large Diffused" shadow is used: `0px 24px 48px rgba(0, 0, 0, 0.05)`. This ensures the elevation feels like a physical piece of paper floating slightly above the desk, rather than a digital window.

## Shapes

The shape language reflects the "SRS" logo's unique blend of structured geometry and rounded terminals. Every interactive element—including buttons, input fields, and cards—utilizes a consistent **8px (0.5rem)** border radius. 

This specific radius is soft enough to feel modern and accessible, yet sharp enough to maintain the "Jurisprudence" authority. Icons should follow a "Linear-Rounded" style with 2px stroke weights to harmonize with the thin-line divider philosophy.

## Components

### Buttons
Primary buttons are solid Black (#000000) with White (#FFFFFF) Inter-bold text. Secondary buttons use a 1px Black outline at 20% opacity. All buttons feature an 8px radius and a minimum height of 48px to ensure a premium, tactile feel.

### Cards
Cards are defined by their absence of heavy fill. They use a 1px border (#E5E5E4) and generous 32px internal padding. They do not use shadows unless in an active/hover state, where a subtle 10% opacity increase occurs.

### Input Fields
Inputs are minimal, featuring a bottom-border-only style or a very light 4-sided stroke. Labels always sit above the field in uppercase 12px Inter for a clean, form-like appearance reminiscent of high-end legal stationery.

### Chips & Tags
Chips are used for legal categories and status. They feature a Stone (#F5F5F4) background with Black text, utilizing a pill-shape (full radius) to contrast against the 8px structure of primary containers.

### Dividers
Hairline dividers are 1px thick, set to Black at 10% opacity. They should be used to separate sections of text or list items, maintaining the editorial rhythm without adding visual weight.