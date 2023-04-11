<script >
import { store } from './store.js';
import MyHeader from './components/MyHeader.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    MyHeader
  }
}

</script>

<template>
  <div>ciao</div>
  <MyHeader />
  ciao
</template>

<style scoped lang="scss">
@use './styles/general.scss'
</style>
