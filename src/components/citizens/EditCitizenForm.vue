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
          <input name="name" id="citizen_name" v-model="newName" type="text" v-focus>
        </li>
        <li>
          <label for="citizen_job">Job</label>
          <select name="job" id="citizen_job" v-model="newJob" disabled>
            <option value="">Unemployed</option>
            <option v-for="job in availableJobs" :key="job.id" :value="job.id">{{ job.name }}</option>
          </select>
        </li>
        <li>
          <label for="citizen_house">House</label>
          <select name="house" id="citizen_house" v-model="newHouse">
            <option value="">Homeless</option>
            <option v-for="house in availableHouses" :key="house.id" :value="house.id" :disabled="house.bedCount <= house.inhabitants.length">
              {{ house.name }} ({{ house.inhabitants.length }}&nbsp;/&nbsp;{{ house.bedCount }})
            </option>
          </select>
        </li>
        <li>Skills:
          <ul>
            <li v-for="skill in availableSkills" :key="skill.id">
              <label :for="`citizen_skill_${skill.id}`">{{ skill.name }}</label>
              <input :name="`skills[${skill.id}]`" :id="`citizen_skill_${skill.id}`" v-model="newSkills[skill.id]" type="number" min="1">
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
            const currentHouse = this.$store.getters['houses/findByInhabitant'](this.citizen.id);
            return {
                availableSkills,
                availableJobs,
                availableHouses: this.$store.getters['houses/getSorted'],
                currentHouse: currentHouse || null,
                newName: this.citizen.name,
                newJob: this.citizen.job || '',
                newHouse: (currentHouse) ? currentHouse.id : '',
                newSkills: Object.assign({}, this.citizen.skills)
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
                const newName = this.newName && this.newName.trim();
                if (! newName) {
                    return;
                }

                await this.$store.dispatch('citizens/edit', {
                    citizenId: this.citizen.id,
                    name: newName,
                    skills: this.newSkills
                });

                if (this.newHouse !== '') {
                    await this.$store.dispatch('houses/assignInhabitant', {
                        houseId: this.newHouse,
                        inhabitantId: this.citizen.id
                    });
                } else {
                    await this.$store.dispatch('houses/removeInhabitant', {
                        houseId: this.currentHouse.id,
                        inhabitantId: this.citizen.id
                    });
                }

                this.closeForm();
            },
            closeForm() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

</style>
