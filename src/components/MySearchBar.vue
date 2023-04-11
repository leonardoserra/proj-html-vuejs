<script>
export default {
    name: MySearchBar
}
</script>
<template>
    <div class="search-bar">
        <div class="category-filter">
            <a href="#">
                <i class="fa-solid fa-bars"></i>
            </a>
            <span>CATEGORY</span>
        </div>
        <input type="text" placeholder="search courses" />
    </div>
</template>
<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.search-bar {

    @include mixins.flex-align-center;

    .category-filter {
        color: $grey-dark;
        font-size: 8px;
    }
}
</style>