<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->

    <section>
      <h2>Citizens</h2>
      <p v-show="citizens.length < 1">Start by adding a citizen, click on the button below.</p>
      <CitizenList :items="citizens" v-show="citizens.length > 0" />

      <button type="button" @click.prevent="showNewCitizenForm">Add a citizen</button>
    </section>

    <NewCitizenForm @close="isNewCitizenFormVisible = false" v-if="isNewCitizenFormVisible" />
    <EditCitizenForm :citizen="editedCitizen" v-if="editedCitizen !== null" />

    <section>
      <h2>Houses</h2>
      <p v-show="houses.length < 1">Start by adding a house, click on the button below.</p>
      <button type="button" @click.prevent="isNewHouseFormVisible = true">Add a house</button>
    </section>

    <NewHouseForm @close="isNewHouseFormVisible = false" v-if="isNewHouseFormVisible" />

    <JobAssignmentModal
      v-if="selectedCitizenForAssignment"
      :selected-citizen="selectedCitizenForAssignment"
      :citizens="citizens"
      @close="$store.dispatch('jobs/selectToAssign', null)"
    />
  </div>
</template>

<script>
    import CitizenList from './components/CitizenList.vue';
    import NewCitizenForm from './components/NewCitizenForm.vue';
    import EditCitizenForm from './components/EditCitizenForm';
    import JobAssignmentModal from './components/jobs/AssignmentModal';
    import NewHouseForm from './components/houses/NewHouseForm';
    import { mapState } from 'vuex';

    export default {
        name: 'App',
        components: {
            EditCitizenForm,
            CitizenList,
            NewCitizenForm,
            JobAssignmentModal,
            NewHouseForm
        },
        data: () => {
            return {
                isNewCitizenFormVisible: false,
                isNewHouseFormVisible: false,
            };
        },
        computed: {
            // // 3 ways to declare computed properties and access Vuex store
            // citizens() {
            //     return this.$store.state.citizen.citizens;
            // },
            // ...mapState({
            //     citizens: (state) => state.citizen.citizens,
            // }),
            ...mapState('citizens', [
                'citizens',
                'editedCitizen'
            ]),
            ...mapState('houses', [
                'houses'
            ]),
            ...mapState('jobs', {
                selectedCitizenForAssignment: (state) => state.selectedCitizen,
            }),
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
