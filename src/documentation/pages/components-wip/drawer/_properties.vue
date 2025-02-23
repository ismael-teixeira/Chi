<template lang="pug">
  div
    h2 Web Component
    <PropertiesGenerator tag="chi-drawer" />

    .chi-divider.-my--5

    h2 Chi Vue
    h3 Props
    section.chi-table.chi-table__options.-bordered.-my--3
      div(style='overflow-x:auto;')
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Property
              th
                div Description
              th
                div Type
              th
                div Default
          tbody
            tr
              td
                div
                  code active
              td
                div To open or close the drawer
              td
                div
                  code boolean
              td
                div
                  em undefined
            tr
              td
                div
                  code backdrop
              td
                div To add a backdrop behind the drawer, which covers the viewport
              td
                div
                  code string
              td
                div
                  em undefined
            tr
              td
                div
                  code noHeader
              td
                div To remove the space for the header
              td
                div
                  code boolean
              td
                div
                  em undefined
            tr
              td
                div
                  code nonClosable
              td
                div To render Drawer without a close button
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code portal
              td
                div To define portal style of the Drawer header
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code position
              td
                div To set position of the drawer { top, right, bottom or left }
              td
                div
                  code string
              td
                div
                  em undefined
            tr
              td
                div
                  code title
              td
                div To define drawer title. Not compatible with noHeader
              td
                div
                  code string
              td
                div
                  em undefined

    h3 Events
    section.chi-table.chi-table__options.-bordered.-my--3
      div(style='overflow-x:auto;')
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Event
              th
                div Description
              th
                div Type
          tbody
            tr
              td
                div
                  code chiDrawerHidden
              td
                div Drawer has been hidden to the user. The animation has completed.
              td
                div
                  code CustomEvent&lt;string&gt;
            tr
              td
                div
                  code chiDrawerHide
              td
                div Drawer hide method has executed, but the closing animation has not started yet
              td
                div
                  code CustomEvent&lt;string&gt;
            tr
              td
                div
                  code chiDrawerShow
              td
                div Drawer show method has executed, but the showing animation has not started yet
              td
                div
                  code CustomEvent&lt;string&gt;
            tr
              td
                div
                  code chiDrawerShown
              td
                div
                  | Drawer has been shown to the user and is fully visible. The animation has completed.
              td
                div
                  code CustomEvent&lt;string&gt;
            tr
              td
                div
                  code chiDrawerClickOutside
              td
                div
                  | Mutating a prop locally is an anti-pattern in Vue, so the user can use this event to decide whether or not the drawer needs to be hidden.
              td
                div
                  code CustomEvent&lt;string&gt;

    h3 Methods 
    section.chi-table.chi-table__options.-bordered.-my--3
      div(style='overflow-x:auto;') 
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Method
              th
                div Description
              th
                div Returns
              th
                div Parameters
          tbody
            tr
              td
                div
                  code hide() =&gt; Promise&lt;void&gt;
              td
                div Hides the drawer
              td
                div
                  p.-text Type: Promise&lt;void&gt;
              td
                .-text--center -
            tr
              td
                div
                  code show() =&gt; Promise&lt;void&gt;
              td
                div Shows the drawer.
              td
                div
                  p.-text Type: Promise&lt;void&gt;
              td
                .-text--center -
            tr
              td
                div
                  code toggle() =&gt; Promise&lt;void&gt;
              td
                div Toggles active state (show/hide)
              td
                div
                  p.-text Type: Promise&lt;void&gt;
              td
                .-text--center -

    .chi-divider.-my--5

    h2 JavaScript
    p.-text This component accepts options to configure its behavior.
    section.chi-table.chi-table__options.-bordered.-my--3
      div
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Option
              th
                div Default
              th
                div Description
          tbody
            tr
              td
                div
                  code= 'animated'
              td
                div
                  code= 'true'
              td
                div
                  | Enables animation on drawer display and hide, and fade effect in the backdrop.
            tr
              td
                div
                  code= 'target'
              td
                div
                  code= 'null'
              td
                div
                  | Lets the developer refer the target programmatically instead of by data-target attribute.
                  | It accepts Element object and xpath selector string.
            tr
              td
                div
                  code= 'preventAutoHide'
              td
                div
                  code= 'false'
              td
                div
                  | Set <code>preventAutoHide</code> to <code>true</code> to prevent hidding the drawer when clicking
                  | outside the drawer.

    h3.mt--2 Methods
    section.chi-table.chi-table__methods.-bordered.-my--3
      div
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Method
              th
                div Description
              th
                div Returns
          tbody
            tr
              td
                div
                  code= 'hide() => void'
              td
                div
                  | Hides the drawer
              td
                div
                  | Type: void
            tr
              td
                div
                  code= 'show() => void'
              td
                div
                  | Shows the drawer
              td
                div
                  | Type: void
            tr
              td
                div
                  code= 'toggle() => void'
              td
                div
                  | Toggles active state (show/hide)
              td
                div
                  | Type: void

    h3 Events
    section.chi-table.-bordered.-my--3
      table(cellpadding='0' cellspacing='0')
        thead
          tr
            th
              div Event
            th
              div Description
        tbody
          tr
            td
              div
                code chiDrawerShow
            td
              div Drawer show has been triggered, but the showing animation has not started yet.
          tr
            td
              div
                code chiDrawerHide
            td
              div Drawer hide has been triggered, but the closing animation has not started yet.
          tr
            td
              div
                code chiDrawerShown
            td
              | Drawer has been shown to the user and is fully visible. The animation has completed.
          tr
            td
              div
                code chiDrawerHidden
            td
              div
                | Drawer has been hidden to the user. The animation has completed.

    h3 Preventing memory leaks
    p.-text
      | Drawer components have a dispose function to free all resources attached to the element, such as event listeners
      | and object data. You should call this method when you want to remove the component.
    pre.language-javascript
       code.javascript(v-highlight="$data.codeMemory1")
    p.-text
      | It is safe to call the <code>drawer</code> method more than once, as it will return any previously created drawer component
      | associated with the trigger.
    pre.language-javascript
      code.javascript(v-highlight="$data.codeMemory2")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeMemory1: `var elem = document.getElementById('drawer-1');
var drawer = chi.drawer(elem);
// do stuff
drawer.dispose();`,
      codeMemory2: `var elem = document.getElementById('drawer-2');
var drawer = chi.drawer(elem);
var elem2 = document.getElementById('drawer-2');
var drawer2 = chi.drawer(elem2);
drawer === drawer2; // returns true

drawer.dispose(); // Only have to do it once.`
    };
  }
})
export default class Properties extends Vue {}
</script>
