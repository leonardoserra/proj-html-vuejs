<script>
import { store } from '../store.js';
export default {
    name: 'CardGallery',
    data() {
        return {
            store
        }
    },
    // props: {
    //     imagePath: String,
    //     title: String,
    //     coursesQuantity: String
    // },

    // methods: {
    //     getImageURL: function (path) {
    //         return new URL(path, import.meta.url).href;

    //     }
    // }
}
</script>

<template>
    <div class="cards">

        <div class="card big">

            <div class="img-wrapper">
                <img src="../assets/images/cat_1-770x375.jpg" :alt="title">
            </div>

            <div class="info">
                <span class="course-name">{{ store.galleryData[0].title }}</span>
                <span class="course-quantity">{{ store.galleryData[0].coursesQuantity }}&nbsp;Courses</span>
            </div>
        </div>

        <div class="column">
            <div class="card">

                <div class="img-wrapper">
                    <img src="../assets/images/cat_2-740x310.jpg" :alt="title">
                </div>

                <div class="info">
                    <span class="course-name">{{ store.galleryData[1].title }}</span>
                    <span class="course-quantity">{{ store.galleryData[1].coursesQuantity }}&nbsp;Courses</span>
                </div>
            </div>

            <div class="card second-card">

                <div class="img-wrapper">
                    <img src="../assets/images/cat_3-740x310.jpg" :alt="title">
                </div>

                <div class="info">
                    <span class="course-name">{{ store.galleryData[2].title }}</span>
                    <span class="course-quantity">{{ store.galleryData[2].coursesQuantity }}&nbsp;Courses</span>
                </div>
            </div>
        </div>

        <div class="card">

            <div class="img-wrapper">
                <img src="../assets/images/cat_4-740x310.jpg" :alt="title">
            </div>

            <div class="info">
                <span class="course-name">{{ store.galleryData[3].title }}</span>
                <span class="course-quantity">{{ store.galleryData[3].coursesQuantity }}&nbsp;Courses</span>
            </div>
        </div>

        <div class="card">

            <div class="img-wrapper">
                <img src="../assets/images/cat_5-740x310.jpg" :alt="title">
            </div>

            <div class="info">
                <span class="course-name">{{ store.galleryData[4].title }}</span>
                <span class="course-quantity">{{ store.galleryData[4].coursesQuantity }}&nbsp;Courses</span>
            </div>
        </div>

        <div class="card">

            <div class="img-wrapper">
                <img src="../assets/images/cat_6-740x310.jpg" :alt="title">
            </div>

            <div class="info">
                <span class="course-name">{{ store.galleryData[5].title }}</span>
                <span class="course-quantity">{{ store.galleryData[5].coursesQuantity }}&nbsp;Courses</span>
            </div>
        </div>


    </div>
</template>

    <!--prova con v-for fallita-->

    <!-- <CardGallery :imagePath="card.imagePath" :title="card.title" :coursesQuantity="card.coursesQuantity" /> -->    
    <!-- <div class="cards">
    <div class="card" v-for="(card, index) in store.galleryData" :key="index">
    <div :class="`card-n${index}`">
    <div class="img-wrapper">
    <img :src="getImageURL(`../assets/images/${card.imagePath}.jpg`)" :alt="title">
    </div>
    <div class="info">
    <span class="course-name">{{ card.title }}</span>
    <span class="course-quantity">{{ card.coursesQuantity }}&nbsp;Courses</span>
    </div>
    </div>
    </div> -->
    <!-- <CardGallery :imagePath="card.imagePath" :title="card.title" :coursesQuantity="card.coursesQuantity" /> -->
    <!-- </div> -->


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;


.cards {
    width: 100%;

    @include mixins.flex-wrap;
    align-items: flex-start;
    gap: 19px;
    margin-left: 11px;

    .card.big {
        width: calc(100% / 3 * 2 - 20px);
        height: calc(100% / 3 * 2 - 20px);
    }

    .column {
        width: calc(100% / 3 - 20px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .second-card {
            margin-top: 38.5px;
        }

        .card {
            width: 100%;
        }
    }

    .card {
        justify-self: start;
        width: calc(100% / 3 - 20px);



    }

    .info {

        @include mixins.flex-space-between;

        .course-name {
            font-size: 1rem;
        }

        .course-quantity {
            font-size: 0.8rem;
        }
    }

    .img-wrapper {
        width: 100%;
        height: 100%;


        img {
            &:hover {
                box-shadow: 0 0 5px $grey-dark;
            }

            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

}
</style>