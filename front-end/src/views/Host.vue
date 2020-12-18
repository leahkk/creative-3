<template>
  <div>
    <h1>Create a Yard or Garage Sale</h1>
    <div id="profile">
      <div class="prof">
        <form @submit.prevent="register">
          <div class="info-cont">
            <input
              type="text"
              v-model="title"
              placeholder="Title"
              required
            />
            <input type="text" v-model="date" placeholder="Saturday, Jan 1 @7:00 A.M." required />
            How many contributors do you want? <input type="text" v-model="contributors" placeholder="#"/>
          </div>
          <h3>Location</h3>
          <div id="loc-cont">
            <input
              class="loc-text"
              type="text"
              v-model="city"
              placeholder="City"
              required
            />
            <input
              class="loc-text"
              type="text"
              v-model="state"
              placeholder="State"
              required
            />
          </div>
          <button @click="create"><h2>Create</h2></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Host',
  data() {
    return {
      title: "",
      date: "",
      contributors: "",
      city: "",
      state: ""
    }
  },
  methods: {
    create() {
      let newSale = {};
      newSale.title = this.title;
      newSale.date = this.date;
      newSale.city = this.city;
      newSale.state = this.state;
      newSale.maxContributors = this.contributors;
      newSale.contributors = 0;
      newSale.image = "1.JPG";
      newSale.id = this.$root.$data.sales.length + 1;
      this.$root.$data.sales.push(newSale);
      alert("Sale successfully created!");
      this.resetForm();
      this.$router.push("/");
    },
    resetForm() {
      this.title = "";
      this.date = "";
      this.contributors = "";
      this.city = "";
      this.state = "";
    }
  }
}
</script>

<style scoped>
#profile {
  padding: 0px 20px 50px 20px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.prof {
  flex: 60%;
  display: flex;
  flex-direction: column;
}

.info-cont {
  display: flex;
  flex: 100%;
}

#loc-cont {
  display: flex;
  flex: 100%;
}

i {
  margin-top: 30px;
  font-size: 300px;
  align-self: center;
}

h1 {
  color: #731A00;
}

p {
  text-align: left;
}

h3 {
  text-align: center;
  width: 100%;
  color: #731A00;
}

form {
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: #FEFCEF;
  padding: 10px;
  border-radius: 25px;
}

#content {
  margin-top: 10%;
}

h2 {
  color: #731A00;
}

input {
        width: 100%;
        height: auto;
        padding: 10px;
        margin: 0 10px 10px 0px;
        border-radius: 50px;
        border: none;
        box-shadow: -1px 1px 2px #DCDCDC;
        font-size: 20px;
}

    input:focus {
      outline: none;
      color: #081144;
    }

    .loc-text {
        flex: 33.3%;
        padding: 20px;
    }

    button {
      margin-top: 50px;
        width: 100%;
        margin-right: 10px;
        height: auto;
        color: white;
        background: #731A00;
        border: none;
        text-align: center;
        border-radius: 50px;
        cursor: pointer;
    }

    button h2 {
        color: white;
    }

    button:hover {
        outline: none;
        background: #AD0A00;
    }
</style>
