<template>
<div class="wrapper">
  <div class="sales">
    <div class="sale" v-for="sale in sales" :key="sale.id">
      <div class="image">
        <img :src="'/images/'+sale.image">
      </div>
        <div class="info">
          <h1>{{sale.title}}</h1>
          <h3>Address: {{sale.city}}, {{sale.state}}</h3>
          <h3>Number of Contributors: {{sale.contributors}}</h3>
        </div>
        <div class="date">
          <h2>{{sale.date}} @{{sale.time}}</h2>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Sale',
  props: {
    sales: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
}
.sales {
  margin-top: 20px;
  width: 97%;
}
.sale {
  margin: 20px;
  width: 100%;
  display: flex;
  background-color: #FEFCEF;
  box-shadow: -1px 1px 2px #DCDCDC;
  border-radius: 25px;
}
.sale img {
  height: 250px;
  width: 200px;
  object-fit: cover;
  border-radius: 25px;
  box-shadow: -1px 1px 2px #DCDCDC;
}
.sale .image {
  border-radius: 25px;
  display: flex;
  margin-bottom: 5px;
  padding: 10px;
}

.info {
  width: 100%;
}

.info p {
  margin: 0px;
}

.date {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-right: 20px;
}

.date h2 {
  align-self: flex-end;
  color: #731A00;
}
</style>
