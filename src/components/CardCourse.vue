<script>
export default {
    name: 'CardCourse',
    props: {
        imagePath: String,
        category: String,
        title: String,
        duration: String,
        rate: String,
        fullPrice: String,
        price: String,
        free: Boolean,
        featured: Boolean,
        new: Boolean,
        hot: Boolean,
        special: Boolean
    }

}
</script>
<template></template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;
</style>