<script>
export default {
    name: 'JumbotronImage'
}
</script>
<template>
    <div class="wrapper">
        <img class="pos-abs bubblespeech" src="../assets/images/bubblespeech.png" alt="base" />
        <img class="pos-abs magnifier" src="../assets/images/magnifier.png" alt="base" />
        <img class="pos-abs book1" src="../assets/images/book1.png" alt="base" />
        <img class="pos-abs book2" src="../assets/images/book2.png" alt="base" />
        <img class="pos-abs moon" src="../assets/images/moon.png" alt="base" />
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.wrapper {
    background-image: url("../assets/images/base.png");
    width: 400px;
    height: 370px;
    background-size: contain;
    background-repeat: no-repeat;
    @include mixins.pos-rel;
}

.pos-abs {
    position: absolute;
}

.bubblespeech,
.book1,
.book2,
.moon {
    scale: 0.6;
}

.magnifier {
    scale: 0.7;
}

.bubblespeech {
    right: 8px;
    top: 35px;
}

.magnifier {
    right: 37px;
    bottom: 125px;
}

.book1 {
    left: 222px;
    top: 44px;
}

.book2 {
    right: 68px;
    bottom: 55px;
}

.moon {
    left: 61px;
    top: 77px;
    filter: grayscale(0.9);
}
</style>