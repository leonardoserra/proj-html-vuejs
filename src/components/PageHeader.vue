<script >
import { store } from '../store.js';

export default {
    name: 'PageHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="top-header">
        <div class="left">
            <span class="language">English</span>
            &nbsp;
            <i class="fa-solid fa-chevron-down"></i>
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



    <div class="bottom-header">

    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.top-header,
.bottom-header {
    @include mixins.flex-space-between;
}

.top-header {
    font-size: 8px;
    height: 50px;
    color: $grey-darker;

    i {
        font-size: 8px;
    }

    .right {
        @include mixins.flex-space-between;
        gap: 10px;

    }

    .single-category,
    .single-icon {
        text-decoration: none;
        color: $grey-darker;
        margin-left: 5px;

    }

}
</style>
