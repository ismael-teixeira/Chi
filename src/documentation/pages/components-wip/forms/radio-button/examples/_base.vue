<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    fieldset(slot="example")
      legend(class="chi-label") Select an option
      .chi-form__item
        .chi-radio
          input(class="chi-radio__input" type="radio" name="radios" id="radio-ba1")
          label(class="chi-radio__label" for="radio-ba1") Option 1
      .chi-form__item
        .chi-radio
          input(class="chi-radio__input" type="radio" name="radios" id="radio-ba2")
          label(class="chi-radio__label" for="radio-ba2") Option 2
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
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-ba1">
      <label class="chi-radio__label" for="radio-ba1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-ba2">
      <label class="chi-radio__label" for="radio-ba2">Option 2</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Base extends Vue {}
</script>
