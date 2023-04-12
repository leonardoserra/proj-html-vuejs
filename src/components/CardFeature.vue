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
    padding: 40px;

    &:hover {
        background-color: $grey-hover;
    }

    .icon-style {
        color: $button-blue;
        font-size: 2rem;

    }

    .title {
        font-size: 1rem;
        margin-bottom: 12px;
        margin-top: 14px;

    }

    .text {
        font-size: 0.8rem;
        color: $grey-dark;
    }

}
</style>