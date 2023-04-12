<script >
import { store } from './store.js';
import PageHeader from './components/PageHeader.vue';
import MyJumbotron from './components/MyJumbotron.vue';
import CardFeature from './components/CardFeature.vue';
import CardGallery from './components/CardGallery.vue';
import TitleParagraphButton from './components/TitleParagraphButton.vue';
import FixedSideNav from './components/FixedSideNav.vue';
import CardCourse from './components/CardCourse.vue';

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
    FixedSideNav,
    CardCourse
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

    <!-- recent courses section -->
    <div class="container-90">
      <div class="recent-courses-wrapper">
        <h2>Recent Courses</h2>
        <ul class="recent-course-nav">
          <li v-for="item in store.recentCoursesNav"><a href="#">{{ item }}</a></li>
        </ul>
        <div class="course-cards-wrapper">
          <div class="single-card-course" v-for="(card, index) in store.coursesGalleryData" :key="index">
            <CardCourse :imagePath="card.imagePath" :category="card.category" :title="card.title"
              :duration="card.duration" :rate="card.rate" :fullPrice="card.fullPrice" :price="card.price"
              :free="card.free" :featured="card.featured" :new="card.new" :hot="card.hot" :special="card.special" />


          </div>
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

      &:first-child {
        width: calc(100% / 3 * 2 - 7.5px);
        height: calc(100% / 3 * 2 - 7.5px);
        flex-grow: 0;
      }

      &:nth-child(2) {
        width: calc(100% / 3 - 15px);
        height: calc(100% / 3 - 15px);
      }
    }


  }


  .jumbo2-text-wrapper {
    width: 355px;
  }

}

.container-90 {
  @include mixins.container-90;

  .recent-courses-wrapper {
    h2 {
      text-align: center;
      font-weight: 100;
      margin-bottom: 1rem;
      font-size: 2.1rem;
    }

    .recent-course-nav {
      margin: auto;
      max-width: 60%;
      @include mixins.flex-space-between;
      list-style: none;
      margin-bottom: 30px;

      li {
        font-size: 0.6rem;

        a {
          color: $button-blue;
          text-decoration: none;
        }

        &:first-child {
          border-radius: 10px;
          background-color: $grey-light;
          padding: 5px 7px;

          a {
            color: $grey-dark;
          }
        }

      }
    }

    .course-cards-wrapper {
      @include mixins.flex-space-between-wrap;
      gap: 5px;

      .single-card-course {
        margin-bottom: 5px;
        width: calc(100% / 6 - 10px);
        height: 190px;
        border: 1px solid $grey-light;
      }
    }
  }

}
</style>
