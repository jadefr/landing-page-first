# landing-page-first
Template de uma página inicial

## Tech Stack
* Vue.js
* Vuetify (Material Design)
* SCSS

## Functional Requirements
* FR1: The website must be composed of the following sections (in order): header, about, services, testimonials, parallax image above footer, and footer
* FR2: Display a background image as header of 100vh
* FR3: Darken the background image
* F4: Over the background image, display title, subtitle and a button
* FR5: Present an About section, with some text and an image
* RF6: The Services section must comprise cards, which are composed of title (top), image (right-hand side), and text (left-hand side)
* RF7: Present the testimonials as a carousel
* RF8: The footer must contain the standard links and a logo

## Non-Functional Requirements
* RF1: Responsiveness
* RF2: Use contrasting colors

## Responsiveness
### Font Size
As Vuetify does not present (to the date of 20/04/2020) responsive font size, the following js trick was used to set the font size to **title** for the breakpoint *md* and below and set to **subtitle-1** for above *md*

```
            <p
              :class="[$vuetify.breakpoint.mdAndUp ? 'title font-weight-light' : 'subtitle-1 font-weight-light']"
            >
            text
            </p>
```

### Carousel Items
As the testimonial varied greatly in amount of text, the heights should change according for mobile viewport:

```
          <v-carousel
            :height="[$vuetify.breakpoint.mdAndUp ? '500' : 'this.$props.height']"
            cycle
            interval="10000"
            hide-delimiters
          >
          </v-carousel>
```
