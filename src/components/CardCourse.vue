<script>
export default {
    name: 'CardCourse',
    props: {
        imagePath: String,
        category: String,
        title: String,
        duration: String,
        rate: String,
        fullPrice: String,
        price: String,
        free: Boolean,
        featured: Boolean,
        new: Boolean,
        hot: Boolean,
        special: Boolean
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
        <div class="image-wrapper">
            <img class="course-image" :src="getImageURL(`../assets/images/${imagePath}`)" :alt="title">
        </div>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.card {
    width: 100%;
    height: 100%;

    .image-wrapper {
        width: 100%;
        height: 50%;

        .course-image {
            object-fit: cover;
            height: 100px;
            width: 100%;
        }
    }
}
</style>