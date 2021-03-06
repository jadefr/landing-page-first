# landing-page-first
Template de uma página inicial

## Tech Stack
* Vue.js
* Vuetify (Material Design)
* SCSS

## Requirements
Functional and non-functional requirements are presented below.

### Functional Requirements
* FR1: The website must be composed of the following sections (in order): header, about, services, testimonials, parallax image above footer, and footer
* FR2: Display a background image as header of 100vh
* FR3: Darken the background image
* FR4: Over the background image, display title, subtitle and a button
* FR5: Present an About section, with some text and an image
* FR6: The Services section must comprise cards, which are composed of title (top), image (right-hand side), and text (left-hand side)
* FR7: Present the testimonials as a carousel
* FR8: The footer must contain the standard links and a logo

### Non-Functional Requirements
* NFR1: Responsiveness
* NFR2: Use contrasting colors

## Responsiveness
Below it is described how some elements respond to the change of viewport size.

### Font Size
As Vuetify does not present (to the date of 20/04/2020) responsive font size, the following js trick was used to set the font size to **title** for the breakpoint *md and below* and to set it to **subtitle-1** otherwise.

```
            <p
              :class="[$vuetify.breakpoint.mdAndUp ? 'title font-weight-light' : 'subtitle-1 font-weight-light']"
            >
            text
            </p>
```

### Carousel Items
As the testimonial varied greatly in amount of text, the heights should change accordingly for mobile viewport:

```
          <v-carousel
            :height="[$vuetify.breakpoint.mdAndUp ? '500' : 'this.$props.height']"
            cycle
            interval="10000"
            hide-delimiters
          >
          </v-carousel>
```

## Routes

* / --> Home
* /politica-de-privacidade --> Privacy Policy

## Structure
High level code of the orchestrator **App.vue**:

```
<v-app>
            <v-app-bar>
            <AppBarBtn/>
            </v-app-bar>
            
            <router-link to ="/"></router-link>
            <router-view/>
            
            <Footer/>
</v-app>
```

## Architecture

![Image of architecture](https://raw.githubusercontent.com/jadefr/ontology-testing/master/lorem-ipsum.png)
