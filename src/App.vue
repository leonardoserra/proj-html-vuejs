<script >
import { store } from './store.js';
import PageHeader from './components/PageHeader.vue';
import TitleParagraphButton from './components/TitleParagraphButton.vue';
import MyJumbotron from './components/MyJumbotron.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    PageHeader,
    MyJumbotron
  }
}

</script>

<template>
  <PageHeader />
  <main>
    <div class="container-60">
      <MyJumbotron />
    </div>

  </main>
</template>

<style scoped lang="scss">
@use './styles/general.scss';
@use './styles/partials/mixins';
@use './styles/partials/colors' as*;

.container-60 {
  @include mixins.container-60;

}
</style>
