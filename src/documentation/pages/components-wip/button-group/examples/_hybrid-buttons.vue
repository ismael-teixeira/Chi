<template lang="pug">
  <ComponentExample title="Hybrid buttons" id="hybrid-buttons" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Button groups support all button types and styles, including icons.
      | Mix and match text and icons to form a hybrid button group.
    .chi-button-group(slot="example")
      button(class=`chi-button`) Button
      button(class=`chi-button -icon`, aria-label="Button action")
        .chi-button__content
          i.chi-icon.icon-atom(aria-hidden="true")
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
      htmlblueprint: `<div class="chi-button-group">
  <button class="chi-button">Button</button>
  <button class="chi-button -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`,
      },
    };
  },
})
export default class HybridButtons extends Vue {}
</script>
