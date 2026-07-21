# General Portfolio Redesign Plan

Status: Planning only. No production UI changes have been approved or implemented.

Branch: `feature/edit-phase-3`

## Goal

Reposition the portfolio so it no longer reads like an application to Singapore Management University. The site should work as a general professional portfolio for hiring managers and potential technical collaborators.

The redesign should preserve the strongest parts of the current visual identity while changing the information hierarchy, narrative, and SMU-specific content.

## Primary Audience

The portfolio should primarily persuade:

- hiring managers
- potential technical collaborators

Education should remain an important part of Triet's background and differentiation, but SMU should no longer be the destination or organizing idea of the portfolio.

## Central Positioning

Agreed headline:

> I make stuff that helps people learn better.

This should become the central theme across the portfolio, not only a hero tagline.

Supporting positioning explored during planning:

> I combine education, storytelling, and AI to turn complex ideas into products people can actually use.

The supporting line may still be refined when the full hero copy is reviewed.

## Voice and Tone

The portfolio should sound:

- casual
- personal
- direct
- confident without sounding corporate

The word "stuff" is intentional. It gives the headline personality and avoids a generic title such as "AI Product Builder."

Avoid:

- generic technology titles
- corporate buzzwords
- language that presents Triet as an applicant
- language that suggests he is only beginning to become a builder
- polished but impersonal marketing copy

## Visual Direction

The current visual system should largely be preserved:

- black and off-white foundations
- restrained lime accent
- current typography contrast
- motion-led presentation
- the split hero composition

The problem is primarily positioning and information architecture, not the entire visual language.

Motion should be purposeful and restrained. It should clarify the story rather than delay access to the work or add decorative noise.

## Page Order

Agreed structure:

1. Hero
2. Selected Work
3. My Story
4. Contact

This replaces the current order of Hero, About, Projects, Contact.

Reason: hiring managers and collaborators should see proof of capability before reading the longer personal narrative.

## Hero Direction

The current split-screen visual approach will remain. A proposed unified hero was rejected because the split composition still communicates the two sides of Triet's background effectively.

The split should present two complementary capabilities, not an unfinished transition.

Proposed left side:

> **Educator & storyteller.**
> 10M+ views, two TEDx talks, and years spent making difficult ideas easier to understand.

Proposed right side:

> **Builder.**
> I make stuff that helps people learn better—using AI, product thinking, and code.

The center ampersand should communicate that these strengths work together.

The exact hero copy is directional and should receive a final copy review before implementation.

## Loading Experience

Agreed direction: remove the forced loading screen.

The current loader makes every visitor wait roughly three seconds before seeing the portfolio. Its personality can be preserved through a short hero entrance animation without blocking access to the page.

The phrase "SMU Applicant" must not appear in the revised experience.

## Selected Work

Agreed featured order:

1. LitMatch
2. ChronicAI
3. A comprehensive guide to Large Language Models for non-technical people
4. SafeFormAI

Why these four:

- LitMatch best combines learning, AI, product design, and external recognition.
- ChronicAI provides the strongest evidence of technical and systems capability.
- The LLM guide demonstrates the ability to explain complex topics at scale, supported by 300K+ views.
- SafeFormAI shows practical AI guidance applied to a real human problem.

Remaining projects should move into a secondary section with a casual label such as:

> More things I've made

Each featured case study should communicate:

- the problem
- what was built
- Triet's exact role
- the outcome or evidence
- a live demo or source link when available

## My Story

Agreed three-part story:

1. I learned how to teach at scale
2. I learned how to build with AI
3. Now I'm combining both

This replaces the SMU-application arc.

### Phase 1: I learned how to teach at scale

Use the existing education, content, speaking, and audience evidence to show how Triet learned to make complex ideas understandable.

### Phase 2: I learned how to build with AI

Show the shift from explaining ideas to building working systems. Avoid overloading this phase with project cards because Selected Work now appears earlier on the page.

### Phase 3: Now I'm combining both

Phase 3 should explain Triet's present direction rather than point toward an institution.

Directional copy:

> **Now I'm combining both.**
> I make stuff that helps people learn better—tools that make difficult ideas clearer, guidance more personal, and learning more enjoyable.

Possible supporting principles:

- Make complex things understandable
- Build around how people actually learn
- Use AI where it creates genuine guidance

## Phase 3 Visual

A project collage was considered and rejected because it would repeat evidence already shown in Selected Work and Phase 2.

Agreed direction: explore one conceptual convergence visual rather than more project imagery.

Concept:

```text
Education          Storytelling
        \          /
         Better learning
        /          \
      AI            Product building
```

The four ideas should begin separately and converge into:

> I make stuff that helps people learn better.

The visual should:

- complete the three-part story
- connect Triet's background and current capabilities
- avoid repeating project screenshots
- match the portfolio's restrained motion language
- work on desktop and mobile
- run once and respect reduced-motion preferences

The SMU campus image should be removed from Phase 3.

The existing Spline embed should not automatically be retained. The current recommendation is to replace decorative third-party 3D content with the purpose-built convergence visual, subject to prototype review.

## Contact Direction

The current candidate-only wording should become broader so the portfolio supports both hiring and collaboration.

Agreed contact copy:

> I want to help build the next thing that makes learning better—either in a product role or as a Founder’s Associate at an edtech company.

GitHub should be considered alongside email and LinkedIn. The supporting link labels and calls to action remain unresolved.

## Repository and Metadata Cleanup

Later implementation should also consider:

- rewriting `README.md` so it no longer says the portfolio was created for an SMU application
- adding a useful site description and social-sharing metadata
- confirming the production URL and canonical metadata use `trietportfolio.com`
- eventually renaming the GitHub repository from `Portfolio-SMU`

Renaming the remote GitHub repository is not part of the current UI scope and would require separate approval.

## Prototype-First Workflow

Before changing production UI, create a disposable interactive prototype of Phase 3.

Planned prototype file:

`/Users/nguyenminhtriet/.codex/visualizations/2026/07/21/019f83c8-8dab-7eb3-b97d-81b18f752145/phase-3-convergence.html`

Prototype acceptance criteria:

- Phase 3 only; no production portfolio files changed
- light-panel aesthetic aligned with the current third phase
- restrained lime accent and compatible typography
- four concepts visibly converge into the central headline
- clear at desktop and mobile widths
- no horizontal overflow or clipped text
- motion runs once and respects reduced-motion settings

The prototype is paused until this planning document is reviewed and approved.

## Decisions Still Open

- final supporting copy beneath the hero headlines
- whether the current hero background video remains unchanged
- final Phase 3 convergence composition after prototype review
- how much project evidence remains inside Phase 2 after Selected Work moves earlier
- supporting Contact link labels and calls to action
- final metadata and social-sharing copy
- whether the GitHub repository should be renamed later

## Implementation Guardrails

- Work in small, separately approved phases.
- Prototype visual ideas before production implementation.
- Preserve the current split hero composition.
- Do not reintroduce SMU as the destination of the narrative.
- Do not repeat the same project evidence across multiple sections.
- Keep the casual, personal voice.
- Validate every UI phase visually on desktop and mobile.
- Run targeted build and type checks after approved implementation phases.
- Do not rename repositories, modify deployment settings, or publish changes without separate approval.
