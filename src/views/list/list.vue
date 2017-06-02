<template>
  <div id="TrainListContainer">
    <!-- <Item v-for="list in trainlist.trainlist" :list="list"></Item> -->
  </div>
</template>

<script>
  import Item from './item'
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      trainlist: 'getTrainlist'
    }),
    mounted () {
      this.$store.dispatch('fetchTrainnLists')
    },
    components: {
      Item
    }
  }
</script>

<style scoped>
  #TrainListContainer {
    margin-top: 45px;
  }
</style>
