<template>
  <div>
    <h1>Find a Sale to Contribute</h1>
    <Contribute :sales="sales"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import SearchBar from '@/components/SearchBar.vue'
import Contribute from '@/components/Contribute.vue'

export default {
  name: 'Sell',
  components: {
  //  SearchBar
    Contribute
  },
  computed : {
    sales() {
      return this.$root.$data.sales.filter(sale => sale.maxContributors - sale.contributors != 0);
    }
  }
}
</script>

<style>
h1 {
  color: #731A00;
}
</style>
