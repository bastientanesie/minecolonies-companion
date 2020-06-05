<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->

    <section>
      <h2>Citizens</h2>
      <p v-show="citizens.length < 1">Start by adding a citizen, click on the button below.</p>
      <CitizenList v-show="citizens.length > 0" :items="citizens" />

      <button type="button" @click.prevent="showNewCitizenForm">Add a citizen</button>
    </section>

    <NewCitizenForm v-if="isNewCitizenFormVisible" @close="isNewCitizenFormVisible = false" />

    <section>
      <h2>Houses</h2>
      <p v-show="houses.length < 1">Start by adding a house, click on the button below.</p>
      <HouseList v-show="houses.length > 0" :items="houses" />

      <button type="button" @click.prevent="isNewHouseFormVisible = true">Add a house</button>
    </section>

    <NewHouseForm v-if="isNewHouseFormVisible" @close="isNewHouseFormVisible = false" />
  </div>
</template>

<script>
    import CitizenList from './components/citizens/CitizenList.vue';
    import NewCitizenForm from './components/citizens/NewCitizenForm.vue';
    import NewHouseForm from './components/houses/NewHouseForm';
    import HouseList from './components/houses/HouseList';

    export default {
        name: 'App',
        components: {
            CitizenList,
            NewCitizenForm,
            NewHouseForm,
            HouseList
        },
        data: () => {
            return {
                isNewCitizenFormVisible: false,
                isNewHouseFormVisible: false,
            };
        },
        computed: {
            houses() {
                return this.$store.getters[`houses/getSorted`];
            },
            citizens() {
                return this.$store.getters[`citizens/sortByName`];
            },
        },
        methods: {
            showNewCitizenForm() {
                this.isNewCitizenFormVisible = true;
            },
        }
    }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    line-height: calc(20 / 16);
  }
</style>
