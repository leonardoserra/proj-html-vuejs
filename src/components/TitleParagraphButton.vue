<script>
import { store } from '../store.js';
import MyButton from './MyButton.vue';

export default {
    name: 'TitleParagraphButton',
    data() {
        return {
            store
        }
    },
    components: {
        MyButton
    },
    props: {
        title: String,
        paragraph: String,
        buttonText: String
    }


}
</script>
<template>
    <h2>{{ title }}</h2>
    <p>{{ paragraph }}</p>
    <MyButton :text="buttonText" />
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

h2 {
    font-weight: 100;
    margin-bottom: 2rem;
    font-size: 4rem;
}

p {
    font-size: 1.6rem;
    margin-bottom: 2.5rem;
    padding-left: 1rem;

}
</style>