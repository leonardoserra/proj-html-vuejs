<script>
export default {
    name: 'CardCourse',
    props: {
        imagePath: String,
        category: String,
        title: String,
        duration: String,
        rate: Number,
        fullPrice: String,
        price: String,
        free: Boolean,
        featured: Boolean,
        newPill: Boolean,
        hotPill: Boolean,
        specialPill: Boolean
    },
    methods: {
        getImageURL: function (path) {
            return new URL(path, import.meta.url).href;

        }
    }

}
</script>
<template>
    <div class="card" :class="featured ? 'featured' : ''">
        <div v-if="featured" class="featured-label">
            FEATURED
        </div>

        <div class="pill">
            <div v-if="specialPill" class="special">SPECIAL</div>
            <div v-if="newPill" class="new"> NEW </div>
            <div v-if="hotPill" class="hot"> HOT </div>
        </div>
        <div class="image-wrapper">
            <img class="course-image" :src="getImageURL(`../assets/images/${imagePath}`)" :alt="title">
        </div>
        <div class="info-wrapper">
            <div class="category">
                <a href="">{{ category }} &gt;</a>
            </div>
            <div class="title">{{ title }}</div>
            <hr class="horizontal-rule" />

            <div class="under-info">
                <div class="left">

                    <div class="duration" v-if="duration">
                        <span>
                            <i class="fa-regular fa-clock"></i>&nbsp;
                        </span>
                        <span>{{ duration }}&nbsp;Hours</span>
                    </div>

                    <div class="rate" v-if="rate">
                        <img v-for="(starFull, index) in rate" :key="index" src="../assets/images/starfull.svg"
                            alt="star_full" class="full-star">
                        <img v-for="(starEmpty, index) in 5 - rate" :key="index" src="../assets/images/staremptyl.svg"
                            alt="star_empty" class="empty-star">
                        <span>&nbsp;{{ rate }}</span>
                    </div>
                </div>

                <div class="right">
                    <div v-if="fullPrice" class="full-price">${{ fullPrice }}</div>
                    <div v-if="price" class="price">${{ price }}</div>
                    <div v-if="!price && free" class="free">Free</div>
                </div>

            </div>

        </div>

    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.card.featured {
    border: 1px solid $pill-yellow;


    .featured-label {
        position: absolute;
        top: 17px;
        right: 168px;
        text-align: center;
        font-size: 0.8rem;
        padding: 3px;
        background-color: $pill-yellow;
        color: $white;
        display: inline-block;
        width: 127px;
        height: 25px;
        transform: rotate(315deg);
    }

}

.card {
    overflow: hidden;
    width: 100%;
    min-width: 260px;
    height: 100%;
    position: relative;
    transition: border 0.5s linear, box-shadow 0.5 linear;

    &:hover {
        background-color: lighten($color: $grey-hover, $amount: 0.5);
        cursor: pointer;
        box-shadow: 0 0 8px $grey-dark;
    }


    .pill {
        position: absolute;
        top: 7px;
        right: 7px;
        text-align: center;
        font-size: 0.8rem;

        .new,
        .hot,
        .special {
            @include mixins.pill;
        }

        .new {
            background-color: $pill-green;
        }

        .hot {
            background-color: $pill-red;

        }

        .special {
            background-color: $pill-yellow;

        }
    }

    .image-wrapper {
        width: 100%;
        height: 50%;

        .course-image {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    .info-wrapper {
        padding: 10px 8px 8px;
        height: 50%;

        .category {
            font-size: 0.6rem;

            a {
                text-decoration: none;
                color: $grey-dark;
            }
        }

        .title {
            margin-top: 5px;
            font-size: 1rem;
        }

        .horizontal-rule {
            border-radius: 0.3px;
            margin-top: 8px;
            height: 0.1px;
            border: none;
            background-color: $grey-light;
            margin-bottom: 15px;
        }

        .under-info {
            @include mixins.flex-space-between;

            .left {
                .duration {
                    font-size: 0.7rem;
                }

                .rate {
                    span {
                        font-size: 0.8rem;
                    }

                    .full-star,
                    .empty-star {
                        width: 15%;
                    }

                }
            }

            .right {
                font-size: 0.8rem;
                font-weight: 600;

                .full-price {
                    color: $grey-dark;
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>