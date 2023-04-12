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
    margin-bottom: 1rem;
    font-size: 2.1rem;
}

p {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;

}
</style>