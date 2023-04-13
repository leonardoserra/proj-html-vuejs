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
import MyBanner from './components/MyBanner.vue';

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
    MyButton,
    MyBanner
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

    <!--  MyJumbotron section-->
    <div class="container-60">
      <MyJumbotron />
    </div>

    <!--  features section-->
    <div class="container-60 ">
      <div class="features-wrapper">
        <div class="features-card" v-for="(card, index) in store.featuresData" :key="index">
          <CardFeature :icon="card.icon" :title="card.title" :text="card.text" />
        </div>
      </div>
    </div>

    <!--  gallery section-->
    <div class="container-60 ">
      <div class="gallery-wrapper">
        <div class="single-card" v-for="(card, index) in store.galleryData" :key="index">
          <CardGallery :imagePath="card.imagePath" :title="card.title" :coursesQuantity="card.coursesQuantity" />
        </div>
      </div>
    </div>

    <!--  jumbo2 section-->
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

    <!-- analytics section-->
    <div class="analytics-section">
      <div class="container-60">
        <h2 class="analytics-title">We are Proud</h2>
        <p class="analytics-text">
          Certificate courses are instructed by highly
          educated and qualified instructors who hold
          doctoral and master's level degrees.
        </p>
        <div class="numbers">
          <div class="slot" v-for="(data, index) in store.analyticsNumbers" :key="index">
            <div class="number">{{ data.number }}</div>
            <div class="subject">{{ data.subject }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- banner section -->
    <div class="banner-section">
      <MyBanner />
    </div>

    <!-- popular courses section -->
    <div class="popular-section">
      <div class="container-90 ">
        <div class="popupar-courses-wrapper">
          <h2>Popular Courses</h2>
          <p>Discover our most popular courses forself learning</p>
          <div class="course-cards-wrapper">
            <div class="single-card-course" v-for="(card, index) in store.coursesPopularData" :key="index">
              <CardCourse :imagePath="card.imagePath" :category="card.category" :title="card.title"
                :duration="card.duration" :rate="card.rate" :fullPrice="card.fullPrice" :price="card.price"
                :free="card.free" :featured="card.featured" :newPill="card.newPill" :hotPill="card.hotPill"
                :specialPill="card.specialPill" />
            </div>
          </div>
          <div class="course-switch">
            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
            <span class="right">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- plan section -->
    <div class="container-90">
      <div class="plan-cards">
        <div class="instructor">
          <div class="left">
            <img src="./assets/images/image_box_1-221x231.png" alt="instructor_plan">
          </div>
          <div class="right">
            <h3>Become an Instructor</h3>
            <p>Teach what you love. Masterstudy gives you
              the tools to create a course.</p>
            <MyButton text="START TECHING" />
          </div>
        </div>

        <div class="business">
          <div class="left">
            <img src="./assets/images/image_box_2-234x231.png" alt="instructor_plan">

          </div>
          <div class="right">
            <h3>Setup for Business</h3>
            <p>Get unlimited access to 2,500 of Udemys top
              courses for your team.</p>
            <MyButton text="DOING BUSINESS" />


          </div>
        </div>
      </div>

    </div>

    <!-- testimonial section -->
    <div class="testimonial-section">
      <div class="bubblespeech-testimonial">
        <div class="square"></div>
        ciao

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

.banner-section {
  background-color: $banner-green;
  margin: auto;

}

.analytics-section {
  text-align: center;
  margin-top: 90px;
  background-image: url('./assets/images/we_proud.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-color: $grey-hover;
  height: 900px;
  background-position: bottom;

  .analytics-title {
    font-size: 3.8rem;
    font-weight: 100;
    padding-top: 115px;
  }

  .analytics-text {
    margin: auto;
    width: 70%;
    font-size: 1.3rem;
    font-weight: 100;
    padding-top: 50px
  }

  .numbers {
    padding-top: 130px;
    @include mixins.flex-center;
    // gap: 60px;

    .slot {
      text-align: center;
      width: 450px;
      border-right: 2px solid $grey-light;
      padding: 20px 0;
      ;

      &:last-child {
        border: none;
      }
    }

    .number {
      font-size: 5rem;
      font-weight: 100;
    }

    .subject {
      font-size: 1.5rem;
    }
  }

}


// recent e popular courses
.popular-section {
  background-color: $grey-hover;

}

.container-90 {
  @include mixins.container-90;

  .popupar-courses-wrapper {
    padding-top: 50px;

    p {
      text-align: center;
      font-size: 1.3rem;
      font-weight: 100;
      margin-bottom: 50px;
    }

    .course-switch {
      margin-top: 60px;
      text-align: center;
      padding-bottom: 60px;

      .left,
      .right {
        display: inline-block;
        height: 51px;
        background-color: $white;
        cursor: pointer;

        &:hover {
          background-color: $grey-light;
        }


        i {
          border: 1px solid $grey-hover;
          font-size: 1.2rem;
          color: $grey-dark;
          padding: 15px 25px;
        }
      }
    }
  }

  .recent-courses-wrapper,
  .popupar-courses-wrapper {

    .course-button {
      margin-top: 60px;
      text-align: center;
    }

    h2 {
      text-align: center;
      font-weight: 100;
      margin-bottom: 2rem;
      font-size: 3.3rem;
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

  // plan-section
  .plan-cards {
    margin-top: 100px;
    @include mixins.flex-space-between;
    gap: 20px;

    .instructor,
    .business {
      border: 1px solid $grey-light;
      padding: 50px;
      @include mixins.flex-start;
      gap: 100px;

      .right {
        max-width: 45%;
      }

      .left,
      .right {
        h3 {
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 25px;
        }

        p {
          font-size: 1rem;
          font-weight: 100;
          margin-bottom: 25px;
        }
      }
    }
  }
}

.testimonial-section {
  background-image: url(./assets/images/brooke-cagle-224821-unsplash-1-1920x700.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 700px;
  margin: 100px 0;
  padding-top: 85px;


  .bubblespeech-testimonial {
    position: relative;
    background-color: $white;
    height: 530px;
    width: 745px;
    margin-left: 365px;

    .square {
      position: absolute;
      background-color: $white;
      top: calc(50% - 25px);
      right: -10px;
      width: 50px;
      height: 50px;
      // border: 1px solid black;
      transform: rotate(45deg);
    }
  }
}
</style>
