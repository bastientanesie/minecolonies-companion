<template>
  <Modal @close="closeForm">
    <template v-slot:header>Edit citizen: {{ citizen.name }}</template>
    <template v-slot:actions>
      <button class="modal-action-list-item" type="button" @click.prevent="closeForm">Cancel</button>
      <button class="modal-action-list-item" type="button" @click.prevent="handleSubmit">Save changes</button>
    </template>

    <form @submit.prevent="handleSubmit">
      <ul>
        <li>
          <label for="citizen_name">Name</label>
          <input name="name" id="citizen_name" v-model="name" type="text" v-focus>
        </li>
        <li>
          <label for="citizen_job">Job</label>
          <select name="job" id="citizen_job" v-model="job" disabled>
            <option value="">Unemployed</option>
            <option v-for="job in availableJobs" :key="job.id" :value="job.id">{{ job.name }}</option>
          </select>
        </li>
        <li>
          <label for="citizen_house">House</label>
          <select name="house" id="citizen_house" v-model="house">
            <option value="">Homeless</option>
            <option v-for="house in availableHouses" :key="house.id" :value="house.id">{{ house.name }}</option>
          </select>
        </li>
        <li>Skills:
          <ul>
            <li v-for="skill in availableSkills" :key="skill.id">
              <label :for="`citizen_skill_${skill.id}`">{{ skill.name }}</label>
              <input :name="`skills[${skill.id}]`" :id="`citizen_skill_${skill.id}`" v-model="skills[skill.id]" type="number" min="1">
            </li>
          </ul>
        </li>
      </ul>
      <button type="submit" style="display: none;"></button>
    </form>
  </Modal>
</template>

<script>
    import availableSkills from '../../domain/skills';
    import availableJobs from '../../domain/jobs';
    import Citizen from '../../domain/models/Citizen';
    import Modal from '../Modal';

    /**
     * @event close
     */
    export default {
        name: 'EditCitizenForm',
        components: {
            Modal
        },
        data() {
            return {
                availableSkills,
                availableJobs,
                availableHouses: this.$store.getters["houses/getSorted"],
                name: this.citizen.name,
                job: this.citizen.job || '',
                house: this.citizen.house,
                skills: Object.assign({}, this.citizen.skills)
            };
        },
        props: {
            citizen: {
                type: Citizen,
                required: true
            }
        },
        methods: {
            async handleSubmit() {
                const name = this.name && this.name.trim();
                if (! name) {
                    return;
                }

                await this.$store.dispatch('citizens/edit', {
                    citizenId: this.citizen.id,
                    name: this.name,
                    house: this.house,
                    skills: this.skills
                });

                this.closeForm();
            },
            closeForm() {
                this.$store.dispatch('citizens/selectToEdit', null);
            }
        }
    }
</script>

<style scoped>

</style>
