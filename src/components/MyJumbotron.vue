<script>
import { store } from '../store.js';
import TitleParagraphButton from './TitleParagraphButton.vue';
import JumbotronImage from './JumbotronImage.vue';

export default {
    name: 'MyJumbotron',
    data() {
        return {
            store
        }
    },
    components: {
        TitleParagraphButton,
        JumbotronImage
    }
}
</script>
<template>
    <div class="wrapper">

        <div class="left-container">
            <TitleParagraphButton :title="store.jumbotronData.title" :paragraph="store.jumbotronData.paragraph"
                :buttonText="store.jumbotronData.buttonText" />
        </div>

        <div class="right-container">
            <JumbotronImage />
        </div>

    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.wrapper {
    @include mixins.flex-space-between;


    .left-container {
        width: 60%;
    }

    .right-container {
        width: 40%;
    }
}
</style>