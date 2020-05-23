<template>
  <div class="overlay" @click.prevent="closeForm">
    <form class="form" @submit.prevent="handleSubmit" @click.stop="">
      <h2 class="form-title">Edit citizen</h2>
      <ul>
        <li>
          <label for="citizen_name">Name</label>
          <input name="name" id="citizen_name" v-model="name" type="text">
        </li>
        <li>
          <label for="citizen_job">Job</label>
          <select name="job" id="citizen_job" v-model="job">
            <option value="">Unemployed</option>
            <option v-for="(job, id) in availableJobs" :key="id" :value="id">{{ job.name }}</option>
          </select>
        </li>
        <li>Skills:
          <ul>
            <li v-for="(label, key) in availableSkills" :key="key">
              <label :for="'citizen_skill_' + key">{{ label }}</label>
              <input :name="`skills[${key}]`" :id="'citizen_skill_' + key" v-model="skills[key]" type="number" min="1">
            </li>
          </ul>
        </li>
      </ul>
      <div class="action-list">
        <button class="action-list-item" type="reset" @click.prevent="closeForm">Cancel</button>
        <button class="action-list-item" type="submit">Save changes</button>
      </div>
    </form>
  </div>
</template>

<script>
    import { SKILLS } from '../domain/skills';
    import { JOBS } from '../domain/jobs';
    import Citizen from '../domain/models/Citizen';

    /**
     * @event close
     */
    export default {
        name: 'EditCitizenForm',
        data() {
            return {
                availableSkills: SKILLS,
                availableJobs: JOBS,
                name: this.citizen.name,
                job: this.citizen.job,
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

                for (const key in this.skills) {
                    if (! Object.prototype.hasOwnProperty.call(this.skills, key)) {
                        continue;
                    }
                    this.skills[key] = parseInt(this.skills[key]);
                }

                await this.$store.dispatch('editCitizen', {
                    citizenId: this.citizen.id,
                    name: this.name,
                    job: this.job,
                    skills: this.skills
                });

                this.closeForm();
            },
            closeForm() {
                this.$store.dispatch('app/hideEditCitizenForm');
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
