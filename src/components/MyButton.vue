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
    height: 50px;
    padding: 0 30px;
    color: $white;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: $hover-button;
    }

    &:active {
        background-color: $active-button;
    }

}
</style>