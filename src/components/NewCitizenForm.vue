<template>
  <Modal @close="closeForm">
    <template v-slot:header>New citizen</template>

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
            <option v-for="job in jobs" :key="job.id" :value="job.id">{{ job.name }}</option>
          </select>
        </li>
        <li>Skills:
          <ul>
            <li v-for="skill in skills" :key="skill.id">
              <label :for="`citizen_skill_${skill.id}`">{{ skill.name }}</label>
              <input :name="`skills[${skill.id}]`" :id="`citizen_skill_${skill.id}`" v-model="newCitizen.skills[skill.id]" type="number" min="1">
            </li>
          </ul>
        </li>
      </ul>
      <div class="modal-action-list">
        <button class="modal-action-list-item" type="reset" @click.prevent="closeForm">Cancel</button>
        <button class="modal-action-list-item" type="submit">Create citizen</button>
      </div>
    </form>
  </Modal>
</template>

<script>
    import skills from '../domain/skills';
    import jobs from '../domain/jobs';
    import Modal from './Modal';

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
                skills,
                jobs
            };
        },
        methods: {
            async handleSubmit() {
                const name = this.newCitizen.name && this.newCitizen.name.trim();
                if (! name) {
                    return;
                }

                await this.$store.dispatch('citizens/add', {
                    name: this.newCitizen.name,
                    job: this.newCitizen.job,
                    skills: this.newCitizen.skills
                });

                this.closeForm();
            },
            getInitialState() {
                const obj = {
                    name: '',
                    job: '',
                    skills: {}
                };

                skills.forEach((skill) => {
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
