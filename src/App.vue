<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Layout from './components/Layout.vue'
import Episode from './components/Episode.vue'
import Personnage from './components/Personnage.vue'
import PersonnageDetails from './components/PersonnageDetails.vue'

</script>

<template>
  <div>
    <Layout/>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-image: url('./images/back.png');
  width:100%;
  height:100%;
  overflow-x: hidden;
  background-size: cover;
}

.gridchar {
    margin: 0px 10% 0px 10%;
    display: flex;
	flex-wrap: wrap;
    width: auto;
    text-align: center;
    border: 1px;
}

.cardchar {
  flex: 0 0 20%;
  width: 300px;
  height: auto;
  padding-top: 25px;
  margin: 10px 10px 10px 10px;
  background-color: grey;
}

.hiddencard {
  display: none;
}

.cardinfo {
  margin-top: 13%;
}

.charCard {
    width: 20%;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.box {
  padding-left: 50px;
  padding-right: 50px;
  color: white
}

h1 {
  color: white;
}

.grid {
  margin: 0px 10% 0px 10%;
	display: flex;
	flex-wrap: wrap;
  width: auto;
  text-align: center;
}

.card {
  flex: 0 0 31%;
  border: 1px solid black;
  width: 300px;
  height: auto;
  padding-top: 25px;
  margin: 10px 10px 10px 10px;
  background-color: azure;
}

.hiddencard {
  display: none;
}

.cardinfo {
  margin-top: 13%;
}

</style>
