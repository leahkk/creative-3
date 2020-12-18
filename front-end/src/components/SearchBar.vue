<template>
  <div>
    <input type="text" placeholder="Location" v-model="location"/>
    <img src="../assets/searching.svg" @click.prevent="search"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: function() {
    return {
      location: ""
    }
  },
  methods: {
    search() {
      
    }
  }
}
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
  }
  input {
    border: none;
    padding: 20px;
    width: 33%;
    font-size: 20px;
    border-radius: 100px;
    box-shadow: -1px 1px 2px #DCDCDC;
  }
  input:focus {
    outline: none;
  }
  img {
    width: 50px;
    fill: white;
    cursor: pointer;
  }
</style>
