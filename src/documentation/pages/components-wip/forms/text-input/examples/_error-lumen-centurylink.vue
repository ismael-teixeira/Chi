<template lang="pug">
  <ComponentExample title="Error" id="error-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>danger</code> state to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item
          chi-label(for="example__danger") Name
          chi-text-input(
            id="example__danger"
            state="danger"
            )
          .chi-label.-status.-danger Please enter a name.
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
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<div class="chi-form__item">
  <chi-label for="example__danger">Name</chi-label>
  <chi-text-input id="example__danger" state="danger"></chi-text-input>
  <div class="chi-label -status -danger">Please enter a name.</div>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__danger">Name</label>
  <input type="text" class="chi-input -danger" id="example__danger">
  <div class="chi-label -status -danger">Please enter a name.</div>
</div>`
      }
    };
  }
})
export default class ErrorLumenCenturyLink extends Vue {}
</script>
