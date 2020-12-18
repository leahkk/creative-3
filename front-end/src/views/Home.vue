<template>
  <div>
    <h1>Find a Yard or Garage Sale</h1>
    <Sale :sales="sales"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import SearchBar from '@/components/SearchBar.vue'
import Sale from '@/components/Sale.vue'

export default {
  name: 'Home',
  components: {
    //SearchBar,
    Sale
  },
  computed: {
    sales() {
      return this.$root.$data.sales;
    }
  }
}
</script>
