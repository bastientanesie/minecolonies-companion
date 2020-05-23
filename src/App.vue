<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <h2>Citizens</h2>
    <p v-show="citizens.length < 1">Start by creating a citizen with the form below.</p>
    <CitizenList :items="citizens" v-show="citizens.length > 0" />

    <NewCitizenForm />
  </div>
</template>

<script>
    import CitizenList from './components/CitizenList.vue';
    import NewCitizenForm from './components/NewCitizenForm.vue';
    import { mapState } from 'vuex';

    export default {
        name: 'App',
        components: {
            CitizenList,
            NewCitizenForm
        },
        computed: {
            // // 3 ways to declare computed properties and access Vuex store
            // count() {
            //     return this.$store.state.count;
            // },
            // ...mapState({
            //     count: state => state.count,
            // })
            citizens() {
                return this.$store.state.citizens;
            },
            ...mapState([
                'jobs'
            ])
        }
    }
</script>

<style>
  #app {
  }
</style>
