<script >
import { store } from './store.js';
import PageHeader from './components/PageHeader.vue';
import MyJumbotron from './components/MyJumbotron.vue';
import CardFeature from './components/CardFeature.vue';
import CardGallery from './components/CardGallery.vue';
import TitleParagraphButton from './components/TitleParagraphButton.vue';
import FixedSideNav from './components/FixedSideNav.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    PageHeader,
    MyJumbotron,
    CardFeature,
    CardGallery,
    TitleParagraphButton,
    FixedSideNav
  }
}

</script>

<template>
  <!-- header -->
  <header>
    <PageHeader />
  </header>

  <main>
    <!-- FixedSideNav -->

    <FixedSideNav />




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

    <!-- sezione gallery -->
    <div class="container-60 ">
      <div class="gallery-wrapper">
        <div class="single-card" v-for="(card, index) in store.galleryData" :key="index">
          <CardGallery :imagePath="card.imagePath" :title="card.title" :coursesQuantity="card.coursesQuantity" />
        </div>


      </div>

    </div>

    <!-- sezione jumbo2 -->
    <div class="jumbo2">
      <div class="container-60">
        <div class="jumbo2-text-wrapper">
          <TitleParagraphButton :title="store.jumbo2Data.title" :paragraph="store.jumbo2Data.paragraph"
            :buttonText="store.jumbo2Data.buttonText" />
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

.jumbo2 {
  background-image: url('./assets/images/Untitled-1-1-1-1-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 380px;
  margin: 50px 0;
  padding-top: 110px;
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

  .gallery-wrapper {
    margin-top: 55px;
    @include mixins.flex-wrap;
    gap: 15px;
    justify-content: space-between;



    .single-card {
      width: calc(100% / 3 - 15px);
      height: calc(100% / 3 - 15px);
    }

    // .single-card:first-child {
    //   width: calc(100% / 3 * 2 - 7.5px);
    //   height: calc(100% / 3 * 2 - 7.5px);
    //   flex-grow: 0;
    // }


    // .single-card:nth-child(2) {
    //   width: calc(100% / 3 );
    //   height: calc(100% / 3 );
    // }
  }


  .jumbo2-text-wrapper {
    width: 355px;
  }
}
</style>
