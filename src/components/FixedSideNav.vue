<script>
export default {
    name: 'FixedSideNav'
}
</script>
<template>
    <div class="side-nav">
        <a href="#">
            <i class="fa-solid fa-desktop"></i>
        </a>
        <a href="#">
            <i class="fa-solid fa-life-ring"></i>
        </a>
        <a href="#">
            <i class="fa-solid fa-wrench"></i>
        </a>
        <a href="#">
            <i class="fa-solid fa-cart-shopping"></i>
        </a>
        <a href="#">
            <i class="fa-solid fa-mobile-screen"></i>
        </a>


    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.side-nav {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    width: 30px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 1px $grey-light;
    box-shadow: -0.5px 0px 8px $grey-dark;
    border-radius: 1.5px;
    background-color: $white;

    i {
        color: $grey-darker;
        font-size: 0.7rem;
    }
}
</style>