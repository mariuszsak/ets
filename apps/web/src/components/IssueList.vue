<template>
  <div class="container">
    <ul id="array-rendering">
      <li v-for="item in val" :key="item.id">
        <h4> Zgłoszenie nr: {{ item.id }} </h4><br/>
        <span> Problem: </span> {{ item.issue }},<br/>
        Status: {{ item.status }}, <br/>
        Dodane: {{ item.registeredAt }} przez: .............,<br/>
        Komentarze: {{ item.comments }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'IssueList',
  data () {
    return {
      val: null
    }
  },
  mounted () {
    fetch('http://localhost:3000/tickets')
      .then(res => res.json())
      .then(data => {
        this.val = data
      })
  }
}
</script>

<style scoped>

.container {
  max-width: 50vw;
  background: #FAFAFA;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 3px solid #305A72;
}
ul {
  list-style: none;
   background-color: pink;
}

li {
  text-align: left;
  margin-bottom: 5px;
  font-size: 13px;
  line-height: 1;
  padding-bottom: 2vh;
  background-color: coral;
}
</style>
