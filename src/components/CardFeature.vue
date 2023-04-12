<script>
export default {
    name: 'CardFeature',
    props: {
        icon: String,
        title: String,
        text: String
    },
    created() {
        console.log(this.icon);
    }
}

</script>
<template>
    <div class="card">
        <i class="icon-style" :class="`fa-solid fa-${icon}`"></i>
        <div class="title">{{ title }}</div>
        <p class="text">{{ text }}</p>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.card {
    background-color: $grey-light;
    padding: 20px;

    .icon-style {
        color: $button-blue;
        font-size: 1.5rem;

    }

    .title {
        font-size: 0.6rem;
        margin-bottom: 5px;
        margin-top: 7px;

    }

    .text {
        font-size: 0.5rem;
        color: $grey-dark;
    }

}
</style>