<script>
export default {
    name: 'JumbotronImage'
}
</script>
<template>
    <div class="wrapper pos-rel">
        <img class="base" src="../assets/images/base.png" alt="base" />
        <img class="pos-abs bubblespeech" src="../assets/images/bubblespeech.png" alt="base" />
        <img class="pos-abs magnifier" src="../assets/images/magnifier.png" alt="base" />
        <img class="pos-abs book1" src="../assets/images/book1.png" alt="base" />
        <img class="pos-abs book2" src="../assets/images/book2.png" alt="base" />
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.wrapper,
.base {
    width: 100%;
    height: 100%;
}

.pos-rel {
    @include mixins.pos-rel;
}

.pos-abs {
    position: absolute;
}

.bubblespeech {
    right: 0;
}
</style>