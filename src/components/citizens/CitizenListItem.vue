<template>
  <article class="citizen-list-item">
    <p class="citizen-list-item-column mod-name">{{ citizen.name }}</p>
    <p class="citizen-list-item-column mod-job">{{ jobTitle }}</p>
    <p class="citizen-list-item-column mod-house">{{ houseName }}</p>
    <div class="citizen-list-item-column mod-actions">
      <button class="citizen-list-item-action" type="button" @click.prevent="$emit('assignJob', citizen)">Job</button>
      <button class="citizen-list-item-action" type="button" @click.prevent="$emit('edit', citizen)">Edit</button>
      <button class="citizen-list-item-action" type="button" @click.prevent="handleDelete">Delete</button>
    </div>
  </article>
</template>

<script>
    import Citizen from '../../domain/models/Citizen';
    import House from '../../domain/models/House';
    import { findById as findJobById } from '../../domain/jobs';

    export default {
        name: "CitizenListItem",
        props: {
            citizen: {
                type: Citizen,
                required: true
            }
        },
        computed: {
            jobTitle() {
                if (! this.citizen.job) {
                    return 'Unemployed';
                }
                const job = findJobById(this.citizen.job);
                return (job) ? job.name : 'Unemployed';
            },
            houseName() {
                const house = this.$store.getters['houses/findByInhabitant'](this.citizen.id);
                return (house instanceof House) ? house.name : 'Homeless';
            },
        },
        methods: {
            async handleDelete() {
                if (! confirm(`Are you sure you want to delete ${this.citizen.name}?`)) {
                    return;
                }
                await this.$store.dispatch('citizens/remove', this.citizen.id);
            }
        }
    }
</script>

<style scoped>
  .citizen-list-item {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0 0 1px 0;
    padding: 0 0 1px 0;
  }

  .citizen-list-item-column {
    margin: 0 1px;
    min-width: 150px;
    padding: 5px 10px;
  }
  .citizen-list-item-column.mod-name {
    flex: 1 1 30%;
  }
  .citizen-list-item-column.mod-job {
    flex: 1 1 15%;
  }
  .citizen-list-item-column.mod-house {
    flex: 1 1 15%;
  }
  .citizen-list-item-column.mod-actions {
    flex: 1 1 20%;
  }
  .citizen-list-item:hover .citizen-list-item-column {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .citizen-list-item-action {
    margin: 0;
  }
  .citizen-list-item-action:not(:first-child) {
    margin-left: 10px;
  }
</style>
