<script>
import { store } from '../store.js';
export default {
    name: 'CardGallery',
    data() {
        return {
            store
        }
    },
    props: {
        imagePath: String,
        title: String,
        coursesQuantity: String
    },

    methods: {
        getImageURL: function (path) {
            return new URL(path, import.meta.url).href;

        }
    }
}
</script>
<template>
    <div class="card">
        <div class="img-wrapper">
            <img :src="getImageURL(`../assets/images/${imagePath}.jpg`)" :alt="title">
        </div>
        <div class="info">
            <span class="course-name">{{ title }}</span>
            <span class="course-quantity">{{ coursesQuantity }}&nbsp;Courses</span>
        </div>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.card {
    width: 100%;
    height: 100%;

    .info {
        @include mixins.flex-space-between;

        .course-name {
            font-size: 0.6rem;
        }

        .course-quantity {
            font-size: 0.4rem;
        }
    }

    .img-wrapper {
        width: 100%;
        height: 100%;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }
}
</style>