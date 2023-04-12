<script >
import { store } from './store.js';
import PageHeader from './components/PageHeader.vue';
import MyJumbotron from './components/MyJumbotron.vue';
import CardFeature from './components/CardFeature.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    PageHeader,
    MyJumbotron,
    CardFeature
  }
}

</script>

<template>
  <!-- header -->
  <header>
    <PageHeader />
  </header>

  <main>

    <!-- sezione MyJumbotron -->
    <div class="container-60">
      <MyJumbotron />
    </div>

    <!-- sezione features -->
    <div class="container-60 ">

      <div class="features-wrapper">
        <div class="features-card" v-for="(card, index) in store.featuresData" :key="index">
          <CardFeature :icon="card.icon" :title="card.title" :text="card.text" />
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped lang="scss">
@use './styles/general.scss';
@use './styles/partials/mixins';
@use './styles/partials/colors' as*;

main {
  margin-top: 30px;
}

.container-60 {
  @include mixins.container-60;

  .features-wrapper {
    @include mixins.flex-space-between;
    height: 150px;

    .features-card {
      width: calc(100% / 3 - 20px);
      gap: 20px;

    }
  }

}
</style>
