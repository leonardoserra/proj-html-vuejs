<script >
import { store } from '../store.js';
export default {
    name: 'MyHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="top-header">
        <div class="left">
            <span class="language">English</span>
            &nbsp;
            <i class="fa-solid fa-chevron-down"></i>
        </div>

        <div class="right">
            <span class="language">English</span>
            &nbsp;
            <i class="fa-solid fa-chevron-down"></i>
        </div>


    </div>



    <div class="bottom-header">

    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixins';

.top-header,
.bottom-header {
    @include mixins.flex-space-between;
}

.top-header {
    font-size: 10px;
    height: 50px;
}
</style>
