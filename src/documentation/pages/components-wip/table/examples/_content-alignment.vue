<template lang="pug">
  <ComponentExample title="Content Alignment" id="content-alignment" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Chi also supports additional content alignment with inline text align utilities applying the modifier class 
      | <code>-text--left</code>, <code>-text--center</code> or <code>-text--right</code>.
    table.chi-table(slot="example")
      thead
        tr
          th.-text--left Name
          th.-text--center ID
          th.-text--right Last Login
      tbody
        tr.-md(v-for="(row, index) in rows" :key="index")
          td.-text--left {{ row.cell1 }}
          td.-text--center {{ row.cell2 }}
          td.-text--right {{ row.cell3 }}
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
      rows: [
        { cell1: 'Name 1', cell2: 'name-1', cell3: 'Dec 18, 2020 3:26 PM' },
        { cell1: 'Name 2', cell2: 'name-2', cell3: 'Dec 18, 2020 2:38 AM' },
        { cell1: 'Name 3', cell2: 'name-3', cell3: 'Nov 5, 2020 10:15 AM' }
      ],
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
        htmlblueprint: `<table class="chi-table">
    <thead>
        <tr>
            <th class="-text--left">Name</th>
            <th class="-text--center">ID</th>
            <th class="-text--right">Last Login</th>
        </tr>
    </thead>
    <tbody>
        <tr class="-md">
            <td class="-text--left">Name 1</td>
            <td class="-text--center">name-1</td>
            <td class="-text--right">2020 3:26 PM</td>
        </tr>
        <tr class="-md">
            <td class="-text--left">Name 2</td>
            <td class="-text--center">name-2</td>
            <td class="-text--right">2020 3:26 PM</td>
        </tr>
        <tr class="-md">
            <td class="-text--left">Name 3</td>
            <td class="-text--center">name-3</td>
            <td class="-text--right">2020 3:26 PM</td>
        </tr>
    </tbody>
</table>`
      }
    };
  }
})
export default class ContentAlignment extends Vue {}
</script>
