<template>
  <div>
    <section class="citizen-list">
      <ul class="citizen-list-header">
        <li class="citizen-list-header-item mod-name">Citizen</li>
        <li class="citizen-list-header-item mod-job">Job</li>
        <li class="citizen-list-header-item mod-house">House</li>
        <li class="citizen-list-header-item mod-actions"></li>
      </ul>
      <CitizenListItem v-for="citizen in items" :key="citizen.id"
        :citizen="citizen"
        @edit="onEdit"
        @assignJob="onAssignJob"
      />
    </section>

    <EditCitizenForm
      v-if="editedCitizen !== null"
      :citizen="editedCitizen"
      @close="editedCitizen = null"
    />

    <JobAssignmentModal
      v-if="assigningCitizen !== null"
      :selected-citizen="assigningCitizen"
      :citizens="items"
      @close="assigningCitizen = null"
    />
  </div>
</template>

<script>
    import CitizenListItem from './CitizenListItem';
    import EditCitizenForm from './EditCitizenForm';
    import JobAssignmentModal from './AssignmentModal';

    export default {
        name: "CitizenList",
        components: {
            CitizenListItem,
            EditCitizenForm,
            JobAssignmentModal
        },
        data() {
            return {
                editedCitizen: null,
                assigningCitizen: null,
            };
        },
        props: {
            items: {
                type: Array,
                required: true
            },
        },
        methods: {
            onEdit(citizen) {
                this.editedCitizen = citizen;
            },
            onAssignJob(citizen) {
                this.assigningCitizen = citizen;
            },
        },
    }
</script>

<style scoped>
  .citizen-list {
    display: flex;
    flex-direction: column;
  }

  .citizen-list-header {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0 0 1px 0;
    padding: 0;
  }

  .citizen-list-header-item {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    font-weight: bold;
    margin: 0 1px;
    min-width: 150px;
    padding: 5px 10px;
  }
  .citizen-list-header-item.mod-name {
    flex: 1 1 30%;
  }
  .citizen-list-header-item.mod-job {
    flex: 1 1 15%;
  }
  .citizen-list-header-item.mod-house {
    flex: 1 1 15%;
  }
  .citizen-list-header-item.mod-actions {
    flex: 1 1 20%;
  }
</style>
