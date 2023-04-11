<script >
export default {
    name: 'MyHeader'
}
</script>

<template>
    <div class="top-header">
        <span class="language">English</span>
        <i class="fa-solid fa-chevron-down"></i>

    </div>



    <div class="bottom-header">

    </div>
</template>

<style scoped lang="scss">
.top-header,
.bottom-header {
    display: flex;
}

.top-header {
    font-size: 10px;
    height: 50px;
}
</style>
