<script >
import { store } from './store.js';
import PageHeader from './components/PageHeader.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    PageHeader
  }
}

</script>

<template>
  <PageHeader />
</template>

<style scoped lang="scss">
@use './styles/general.scss'
</style>
