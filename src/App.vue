<script >
import { store } from './store.js';
import PageHeader from './components/PageHeader.vue';
import MyJumbotron from './components/MyJumbotron.vue';
import CardFeature from './components/CardFeature.vue';
import CardGallery from './components/CardGallery.vue';
import TitleParagraphButton from './components/TitleParagraphButton.vue';
import FixedSideNav from './components/FixedSideNav.vue';
import CardCourse from './components/CardCourse.vue';
import MyButton from './components/MyButton.vue';

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
    CardCourse,
    MyButton
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
              :free="card.free" :featured="card.featured" :newPill="card.newPill" :hotPill="card.hotPill"
              :specialPill="card.specialPill" />
          </div>
        </div>
        <div class="course-button">
          <MyButton text="SHOW ALL" />
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
  height: 500px;
  margin: 50px 0;
  padding-top: 70px;
}

.container-60 {
  @include mixins.container-60;

  .features-wrapper {
    margin-bottom: 100px;
    @include mixins.flex-space-between;
    height: 150px;

    .features-card {
      margin: 0 10px;
      width: calc(100% / 3 - 20px);
    }
  }

  .gallery-wrapper {
    @include mixins.flex-wrap;
    justify-content: space-between;
    gap: 15px;




    .single-card {
      width: calc(100% / 3 - 30px);
      height: calc(100% / 3 - 30px);

      &:first-child {
        width: calc((100% / 3) * 2 - 30px);
        height: calc((100% / 3) * 2 - 30px);
        flex-grow: 2;
      }



    }

  }



  .jumbo2-text-wrapper {
    width: 600px;
  }

}

.container-90 {
  @include mixins.container-90;

  .recent-courses-wrapper {
    .course-button {
      margin-top: 50px;
      text-align: center;
    }

    h2 {
      text-align: center;
      font-weight: 100;
      margin-bottom: 2rem;
      font-size: 3.8rem;
    }

    .recent-course-nav {
      margin: auto;
      max-width: 60%;
      @include mixins.flex-space-between;
      list-style: none;
      margin-bottom: 50px;

      li {
        font-size: 1rem;

        a {
          color: $button-blue;
          text-decoration: none;
        }

        &:first-child {
          border-radius: 14px;
          background-color: $grey-light;
          padding: 8px 10px;

          a {
            color: $grey-dark;
          }
        }

      }
    }

    .course-cards-wrapper {
      @include mixins.flex-space-between-wrap;
      gap: 10px;

      .single-card-course {
        margin-bottom: 15px;
        width: calc(100% / 6 - 20px);
        height: 310px;
        border: 1px solid $grey-light;

      }

    }
  }

}
</style>
