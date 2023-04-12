<script>
export default {
    name: 'MyButton',
    props: {
        text: String
    }
}
</script>
<template>
    <button> {{ text }} </button>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

button {
    background-color: $button-blue;
    height: 40px;
    padding: 0 25px;
    color: $white;
    border: none;
    border-radius: 20px;
    font-size: 14px;

    &:hover {
        background-color: $hover-button;
    }

    &:active {
        background-color: $active-button;
    }

}
</style>