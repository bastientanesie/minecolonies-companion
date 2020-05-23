<template>
  <div class="overlay" @click.prevent="closeForm" @keyup.escape="closeForm">
    <form class="form" @submit.prevent="handleSubmit" @click.stop="">
      <h2 class="form-title">New citizen</h2>
      <ul>
        <li>
          <label for="citizen_name">Name</label>
          <input name="name" id="citizen_name" v-model="newCitizen.name" type="text" v-focus>
        </li>
        <li>
          <label for="citizen_job">Job</label>
          <select name="job" id="citizen_job" v-model="newCitizen.job">
            <option value="">Unemployed</option>
            <option v-for="(job, id) in jobs" :key="id" :value="id">{{ job.name }}</option>
          </select>
        </li>
        <li>Skills:
          <ul>
            <li v-for="skill in skills" :key="skill.key">
              <label :for="`citizen_skill_${skill.key}`">{{ skill.name }}</label>
              <input :name="`skills[${skill.key}]`" :id="`citizen_skill_${skill.key}`" v-model="newCitizen.skills[skill.key]" type="number" min="1">
            </li>
          </ul>
        </li>
      </ul>
      <div class="action-list">
        <button class="action-list-item" type="reset" @click.prevent="closeForm">Cancel</button>
        <button class="action-list-item" type="submit">Create citizen</button>
      </div>
    </form>
  </div>
</template>

<script>
    import { SKILLS } from '../domain/skills';
    import { JOBS } from '../domain/jobs';

    /**
     * @event close
     */
    export default {
        name: 'NewCitizenForm',
        data() {
            return {
                newCitizen: this.getInitialState(),
                skills: SKILLS,
                jobs: JOBS
            };
        },
        methods: {
            async handleSubmit() {
                const name = this.newCitizen.name && this.newCitizen.name.trim();
                if (! name) {
                    return;
                }

                await this.$store.dispatch('addCitizen', {
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

                SKILLS.forEach((skill) => {
                    obj.skills[skill.key] = 1;
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
  .overlay {
    background-color: rgba(0, 0, 0, 0.3);
    bottom: 0;
    display: flex;
    flex-direction: column;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
  }

  .form {
    background-color: #ffffff;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    margin: 20px auto;
    padding: 20px;
    min-width: 500px;
  }

  .form-title {
    margin: 0;
    padding: 0;
  }

  .action-list {
    display: flex;
    flex-direction: row;
  }

  .action-list-item {
    margin: 0;
  }

  .action-list-item:not(:first-child) {
    margin-left: 20px;
  }
  .action-list-item:first-child {
    margin-left: auto;
  }
</style>
