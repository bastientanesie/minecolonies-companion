<template>
  <Modal @close="closeForm">
    <template v-slot:header>New citizen</template>
    <template v-slot:actions>
      <button class="modal-action-list-item" type="button" @click.prevent="closeForm">Cancel</button>
      <button class="modal-action-list-item" type="button" @click.prevent="handleSubmit">Create citizen</button>
    </template>

    <form @submit.prevent="handleSubmit">
      <ul>
        <li>
          <label for="citizen_name">Name</label>
          <input name="name" id="citizen_name" v-model="newCitizen.name" type="text" v-focus>
        </li>
        <li>
          <label for="citizen_job">Job</label>
          <select name="job" id="citizen_job" v-model="newCitizen.job">
            <option value="">Unemployed</option>
            <option v-for="job in availableJobs" :key="job.id" :value="job.id">{{ job.name }}</option>
          </select>
        </li>
        <li>
          <label for="citizen_house">House</label>
          <select name="house" id="citizen_house" v-model="newCitizen.house">
            <option value="">Homeless</option>
            <option v-for="house in availableHouses" :key="house.id" :value="house.id">{{ house.name }}</option>
          </select>
        </li>
        <li>Skills:
          <ul>
            <li v-for="skill in availableSkills" :key="skill.id">
              <label :for="`citizen_skill_${skill.id}`">{{ skill.name }}</label>
              <input :name="`skills[${skill.id}]`" :id="`citizen_skill_${skill.id}`" v-model="newCitizen.skills[skill.id]" type="number" min="1">
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
    import Modal from '../Modal';

    /**
     * @event close
     */
    export default {
        name: 'NewCitizenForm',
        components: {
            Modal
        },
        data() {
            return {
                newCitizen: this.getInitialState(),
                availableSkills,
                availableJobs,
                availableHouses: this.$store.getters["houses/getSorted"],
            };
        },
        methods: {
            async handleSubmit() {
                const name = this.newCitizen.name && this.newCitizen.name.trim();
                if (! name) {
                    return;
                }

                const citizen = await this.$store.dispatch('citizens/add', {
                    name: this.newCitizen.name,
                    job: this.newCitizen.job,
                    skills: this.newCitizen.skills
                });

                if (this.newCitizen.house !== '') {
                    await this.$store.dispatch('houses/assignInhabitant', {
                        houseId: this.newCitizen.house,
                        inhabitantId: citizen.id
                    });
                }

                this.closeForm();
            },
            getInitialState() {
                const obj = {
                    name: '',
                    job: '',
                    house: '',
                    skills: {}
                };

                availableSkills.forEach((skill) => {
                    obj.skills[skill.id] = 1;
                });
                return obj;
            },
            closeForm() {
                this.newCitizen = this.getInitialState();
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

</style>
