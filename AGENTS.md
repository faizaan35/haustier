# AGENTS.md

# HAÚSTIER PRODUCTS — WEBSITE ENGINEERING & DESIGN RULES

## 0. PROJECT PURPOSE

This repository contains the website for HAÚSTIER PRODUCTS.

The website is a premium B2B manufacturer/exporter website.

It is NOT an e-commerce website.

The primary purpose is:

1. Establish credibility.
2. Present HAÚSTIER as a serious international manufacturer.
3. Showcase products and craftsmanship.
4. Communicate manufacturing capability.
5. Generate B2B enquiries.

The primary visitor is expected to be a business buyer, importer, distributor,
retailer, pet brand, sourcing company, or other commercial customer.

The website must feel like a premium international manufacturing company,
not a local business template and not a consumer pet shop.


# 1. SOURCE OF TRUTH

The file:

    /haustier_products_agent_brief.md

contains researched information about the client.

READ IT BEFORE IMPLEMENTING CONTENT.

Do not invent company facts.

Never fabricate:

- clients
- certifications
- production capacity
- employee count
- factory size
- countries served
- revenue
- founding year
- awards
- machinery
- MOQ
- lead times
- export volume
- OEM/ODM capabilities
- private-label capabilities

unless explicitly supported by the source material or provided later
by the client.

When information is missing, use an intentional placeholder or omit it.

Never fill missing information with generic AI marketing claims.


# 2. DESIGN SOURCE

The Stitch MCP is available.

Stitch is the PRIMARY DESIGN EXPLORATION TOOL.

Before implementing major visual sections:

1. Inspect available Stitch designs.
2. Understand their visual language.
3. Preserve strong layout and art-direction decisions.
4. Translate the design into maintainable React components.

Do not blindly reproduce Stitch output.

Do not allow Stitch-generated placeholder content to become final client content.

Client facts always take priority over generated copy.


# 3. TECHNOLOGY STACK

Use the following stack unless there is a strong technical reason not to.

## Core

- React
- Vite
- TypeScript

TypeScript is mandatory.

Do not introduce JavaScript-only components unless technically unavoidable.

## Styling

- Tailwind CSS

Use Tailwind for the majority of layout and styling.

Use component-scoped CSS only when needed for:

- complex animations
- unusual visual effects
- 3D scenes
- highly custom interactions

Do not create a giant global CSS file full of arbitrary styles.

## Animation

Use:

- GSAP
- GSAP ScrollTrigger

GSAP is the preferred animation system.

Do not introduce multiple competing animation libraries.

Do not use:

- Framer Motion
- Anime.js
- React Spring
- Locomotive Scroll

unless explicitly requested later.

Use CSS transitions for simple hover/focus states.

Use GSAP for complex timeline/scroll choreography.


# 4. 3D

Three.js / React Three Fiber are approved technologies for the FUTURE 3D phase.

Potential packages:

- three
- @react-three/fiber
- @react-three/drei

IMPORTANT:

Do NOT implement the final 3D hero during the initial website build.

Do not install the 3D stack merely because it is available.

The 3D hero will be designed as a separate phase.

When that phase begins, 3D must have a clear narrative purpose.

Do not add 3D merely because it looks technically impressive.


# 5. COMPONENT LIBRARIES

DO NOT use a generic visual component library as the design foundation.

Do NOT use:

- Material UI
- Ant Design
- Chakra UI
- DaisyUI
- Bootstrap
- generic template libraries

Do not let a component library dictate the visual identity.

This is an editorial/luxury website.

Components should be designed specifically for the project.

Small accessible primitives may be used when useful, but the site's visual
system must remain custom.

Lucide React is approved for simple interface icons.

Do not use huge decorative icon libraries.


# 6. DESIGN LANGUAGE

The website should feel:

- premium
- editorial
- tactile
- warm
- international
- sophisticated
- precise
- restrained

It should NOT feel:

- SaaS
- corporate template
- generic Indian exporter website
- e-commerce marketplace
- children's pet website
- gaming website
- AI startup
- cyberpunk
- overly futuristic


# 7. "QUIETLY EXPENSIVE"

Premium design must come from:

- typography
- spacing
- composition
- photography
- material detail
- visual hierarchy
- restrained colour
- animation quality

NOT from:

- gradients everywhere
- glassmorphism
- excessive shadows
- neon
- glowing borders
- giant pills
- excessive rounded cards
- floating blobs
- particle effects
- random 3D objects


# 8. AVOID AI-SLOP PATTERNS

Do not automatically generate:

- three-column feature cards
- gradient hero text
- giant rounded cards
- meaningless statistics
- "Innovative Solutions" copy
- "We are committed to excellence"
- "Trusted by thousands"
- fake testimonials
- fake client logos
- fake certifications
- generic stock photos
- excessive pill buttons
- arbitrary decorative shapes

Every visual element must have a reason to exist.


# 9. LAYOUT

Prefer:

- large editorial compositions
- asymmetrical layouts
- strong typography
- generous whitespace
- full-bleed imagery
- visual storytelling
- intentional grids

Do not make every section:

    heading
    paragraph
    3 cards

Avoid repetitive section structures.


# 10. TYPOGRAPHY

Prefer a combination of:

EDITORIAL SERIF
+
MODERN SANS-SERIF

Serif can be used for:

- major statements
- editorial headings
- brand moments

Sans-serif can be used for:

- navigation
- labels
- metadata
- body
- buttons

Do not use more than necessary.

Typography hierarchy should feel deliberate.


# 11. COLOUR

The visual direction should explore warm material-inspired colours:

- ivory
- bone
- cream
- parchment
- sand
- taupe
- cognac
- saddle brown
- espresso
- charcoal
- restrained forest

Do not use all of them.

The final palette must remain restrained.

Avoid default corporate blue unless explicitly selected through the
approved brand direction.


# 12. IMAGES

Real client photography is preferred.

When client assets are unavailable:

- use intentional temporary imagery
- keep image locations easy to replace
- do not present generic factory photography as HAÚSTIER's factory
- do not fabricate product photography and claim it represents the client

Create reusable image components where useful.


# 13. PRODUCT PRESENTATION

This is NOT an ecommerce catalogue.

Do NOT implement:

- Add to Cart
- Buy Now
- Checkout
- Shopping Cart
- Quantity selectors
- Retail pricing

Products should be presented editorially.

The goal is:

"These are products we manufacture."

Not:

"Buy this product."


# 14. B2B CONVERSION

The primary CTA is business-oriented.

Preferred CTA language:

- Start an Enquiry
- Request Product Information
- Discuss Your Requirements
- Contact Us
- Partner With Us

Avoid:

- Shop Now
- Buy Now
- Order Now


# 15. MOTION

Motion should feel:

- physical
- deliberate
- smooth
- restrained

Good:

- image reveals
- typography reveals
- subtle image scale
- editorial transitions
- scroll-linked storytelling
- product-focused animation

Avoid:

- bouncing
- random parallax
- particles
- excessive cursor effects
- scroll hijacking
- animation on every element

Motion must communicate something.


# 16. PERFORMANCE

Do not sacrifice performance for visual effects.

Requirements:

- lazy-load non-critical images
- optimize images
- avoid unnecessarily large dependencies
- avoid unnecessary rerenders
- use GPU-heavy effects carefully
- respect prefers-reduced-motion
- maintain good mobile performance

The final 3D experience will need additional performance work,
but that belongs to the later 3D phase.


# 17. RESPONSIVENESS

Desktop and mobile are separate compositions where appropriate.

Do not simply scale desktop down.

Mobile must have:

- strong typography
- usable navigation
- appropriate image crops
- sensible section ordering
- no horizontal overflow
- accessible touch targets
- usable enquiry forms

Hover must never be required to understand important information.


# 18. ACCESSIBILITY

Use:

- semantic HTML
- proper headings
- accessible buttons
- accessible links
- meaningful alt text
- keyboard navigation
- visible focus states
- adequate contrast

Do not sacrifice basic accessibility for visual effects.


# 19. CODE QUALITY

Prefer:

- small focused components
- reusable primitives
- clear naming
- predictable data structures
- maintainable CSS
- TypeScript types
- minimal duplication

Avoid:

- giant components
- giant files
- deeply nested conditional rendering
- unnecessary abstractions
- duplicate styling
- magic numbers everywhere


# 20. DO NOT OVERENGINEER

This is primarily a static marketing website.

Do not introduce:

- databases
- authentication
- unnecessary state management
- backend infrastructure
- CMS infrastructure
- complex API layers

unless explicitly requested.

Keep the architecture appropriate for a premium static B2B website.


# 21. FUTURE 3D PHASE

The future hero may use:

Three.js
React Three Fiber
Drei
GSAP
ScrollTrigger

Possible directions include:

- 3D collar
- material → product transformation
- dog + collar interaction
- product → factory transition

No direction has been approved yet.

Do not make assumptions.

The current website should be architected so the hero can later be replaced
without rebuilding the entire page.


# 22. WORKFLOW

Before implementing:

1. Inspect the repository.
2. Read haustier_products_agent_brief.md.
3. Inspect Stitch designs.
4. Understand the existing stack.
5. Establish the design system.
6. Plan the page structure.
7. Implement the page.

Do not immediately start generating random components.


# 23. VALIDATION

Before considering a phase complete:

- run the production build
- fix TypeScript errors
- fix console errors
- test desktop
- test mobile
- test navigation
- test forms
- check responsive overflow
- check images
- check typography
- check accessibility basics

Do not declare success based only on "the page renders."


# 24. CHANGE DISCIPLINE

Do not:

- rewrite working infrastructure unnecessarily
- replace dependencies without reason
- change the entire architecture to solve a small issue
- add libraries for trivial problems
- modify unrelated files

Prefer the smallest clean change that solves the problem.


# 25. FINAL QUALITY BAR

The final result should look like it was designed by a strong
digital design studio for an international manufacturing company.

It should NOT look like:

"an AI agent made a website."

When choosing between:

MORE EFFECTS
and
BETTER DESIGN

choose BETTER DESIGN.

When choosing between:

MORE COMPONENTS
and
BETTER TYPOGRAPHY

choose BETTER TYPOGRAPHY.

When choosing between:

MORE INFORMATION
and
BETTER STORYTELLING

choose BETTER STORYTELLING.

When choosing between:

TECHNICAL COMPLEXITY
and
USER EXPERIENCE

choose USER EXPERIENCE.