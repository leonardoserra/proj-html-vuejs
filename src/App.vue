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
  <MyHeader />
</template>

<style scoped></style>
