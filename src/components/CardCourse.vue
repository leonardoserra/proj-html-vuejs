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
        <div class="info-wrapper">
            <div class="category">
                <a href="">{{ category }} &gt;</a>
            </div>
            <div class="title">{{ title }}</div>
            <hr class="horizontal-rule" />

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

    .info-wrapper {
        padding: 10px 8px 8px;

        .category {
            font-size: 0.4rem;

            a {
                text-decoration: none;
                color: $grey-dark;
            }
        }

        .title {
            margin-top: 5px;
            font-size: 0.5rem;
        }

        .horizontal-rule {
            border-radius: 0.3px;
            margin-top: 8px;
            height: 0.1px;
            border: none;
            background-color: $grey-light;
        }
    }
}
</style>