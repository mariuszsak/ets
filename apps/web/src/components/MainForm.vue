<template>
  <Navbar />
  <h1>Zgłoszenie problemu informatycznego:</h1>
  <form class="form">
    <label class="field-header">Nazwisko osoby zgłaszającej:</label>
    <input class="field-full" type="text" required v-model="formVal.name">
    <label class="field-header">Sala / pokój / gabinet nr:</label>
    <input class="field-full" type="text" required v-model="formVal.room">
    <label class="field-header">Opis problemu:</label>
    <textarea class="field-full" rows="5" required v-model="formVal.issue"/>
    <button class="btn" type="submit" @click="submitForm">Wyślij</button>
  </form>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'MainForm',
  components: { Navbar },
  data () {
    return {
      formVal: {
        name: '',
        room: '',
        issue: ''
      }
    }
  },
  methods: {
    submitForm: function () {
      fetch.post('http://localhost:3000/issue/addissue', {
        params: {
          name: this.formVal.name,
          room: this.formVal.room,
          issue: this.formVal.issue
        }
      })
        .then(response => {
          this.responseData = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.form {
  max-width: 50vw;
  background: #FAFAFA;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 3px solid #305A72;
}

.field-header {
  padding-bottom: 12vh;
}

.field-full{
  width: 100%;
  margin-bottom: 5vh;
}

.btn {
  -moz-box-shadow: inset 0 1px 0 0 #3985B1;
  -webkit-box-shadow: inset 0 1px 0 0 #3985B1;
  box-shadow: inset 0 1px 0 0 #3985B1;
  background-color: #216288;
  border: 1px solid #17445E;
  display: inline-block;
  cursor: pointer;
  color: #FFFFFF;
  padding: 8px 18px;
  text-decoration: none;
  font: 12px Arial, Helvetica, sans-serif;
}
.btn:hover {
  background: #28739E linear-gradient(to bottom, #2D77A2 5%, #337DA8 100%);
}
</style>
