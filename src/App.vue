<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <h2>Citizens</h2>
    <p v-show="citizens.length < 1">Start by adding a citizen, click on the button below.</p>
    <CitizenList :items="citizens" v-show="citizens.length > 0" />

    <button type="button" @click.prevent="showNewCitizenForm">Add a citizen</button>

    <NewCitizenForm @close="isNewCitizenFormVisible = false" v-if="isNewCitizenFormVisible" />
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
        data: () => {
            return {
                isNewCitizenFormVisible: false
            };
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
        },
        methods: {
            showNewCitizenForm() {
                this.isNewCitizenFormVisible = true;
            }
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

  #app {
  }
</style>
