<template lang="pug">
  #docs-container.docs-container
    <script v-html="redirectionScript"></script>
    <Header />
    main.chi-grid__container-wide.docs-body.-non-doc
      nav.docs-sidenav
        <Navigation />
      .docs-article
        <Nuxt />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CHI_VERSION } from '../constants/configs';
import { redirectionScript } from '../constants/scripts';

@Component({
  data: () => {
    return {
      CHI_VERSION,
      redirectionScript,
    }
  }
})
export default class Wide extends Vue {}
</script>
