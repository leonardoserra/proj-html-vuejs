<script >
import { store } from '../store.js';
import MySearchBar from './MySearchBar.vue'
export default {
    name: 'PageHeader',
    data() {
        return {
            store
        }
    },
    components: {
        MySearchBar
    }
}
</script>

<template>
    <div class="top-header">
        <div class="left">
            <span class="language">English</span>
            &nbsp;

            <a href="#">
                <i class="fa-solid fa-chevron-down"></i>
            </a>
        </div>

        <div class="right">
            <div class="categories">
                <a class="single-category" href="#" v-for="(category, index) in store.pageHeaderDatas" :key="index">{{
                    category }}</a>
            </div>

            <div class="icons">
                <a class="single-icon" href="#" v-for="(icon, c) in store.pageHeaderIcons" :key="c"><i
                        :class="`fa-brands fa-${icon}`"></i></a>
            </div>
        </div>

    </div>

    <hr class="complete-hr" />

    <div class="bottom-header">

        <div class="logo">
            <img src="../assets/images/MasterStudy_logo.svg" alt="master_study_logo" />
        </div>

        <MySearchBar />

    </div>
    <div class="client-plan"></div>

    <div class="user-login"></div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.complete-hr {
    background-color: $grey-light;
    height: 1px;
    border: none;
}

.top-header,
.bottom-header {
    @include mixins.flex-space-between;
    @include mixins.container-90;

}

.top-header {
    font-size: 8px;
    height: 30px;
    color: $grey-dark;

    .left {
        i {
            font-size: 8px;
            text-decoration: none;
            color: $grey-dark;


        }
    }

    .right {
        @include mixins.flex-space-between;
        gap: 20px;

        .single-category,
        .single-icon {
            text-decoration: none;

        }

        .single-category {
            margin-left: 15px;

            color: $grey-dark;
        }

        .single-icon {
            font-size: 10px;
            color: $grey-darker;
            margin-left: 10px;
        }
    }


}

.bottom-header {
    height: 50px;

    .logo {
        @include mixins.flex-align-center;
        height: 100%;

        img {
            height: 28px;
        }
    }

    .search-bar {

        @include mixins.flex-align-center;

        .category-filter {
            color: $grey-dark;
            font-size: 8px;
        }
    }

}
</style>
