<template lang="pug">
  <ComponentExample title="Draggable popover" id="draggable-portal" :tabs="exampleTabs">
    <Wrapper slot='example'>
      chi-button#example-modal-draggable-button(@click="togglePopover") Click me!
      chi-popover(ref="popover" title="Draggable Popover" reference="#example-modal-draggable-button" drag modal closable) Popover content
    </Wrapper>
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the <code>reference</code> attribute with a
        | CSS selector to properly reference an element.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <pre class="language-html" slot='code-htmlblueprint'>
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-button id="example-modal-draggable-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-modal-draggable-popover" title="Draggable Popover" reference="#example-modal-draggable-button" drag modal closable>Popover content</chi-popover>

<script>
  document.querySelector("#example-modal-draggable-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-modal-draggable-popover");

      popoverElem.toggle();
  });
<\/script>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class DraggablePortal extends Vue {
  togglePopover() {
    (this.$refs.popover as any).toggle();
  }
}
</script>
