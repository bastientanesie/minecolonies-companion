<template>
  <form @submit.prevent="handleSubmit">
    <p><b>New citizen</b></p>
    <ul>
      <li>
        <label for="citizen_name">Name</label>
        <input name="citizen_name" id="citizen_name" v-model="newCitizen.name" type="text">
      </li>
      <li>
        <label for="citizen_job">Job</label>
        <select name="citizen_job" id="citizen_job" v-model="newCitizen.job">
          <option value="">Unemployed</option>
          <option v-for="(job, id) in jobs" :key="id" :value="id">{{ job.name }}</option>
        </select>
      </li>
      <li>Skills:
        <ul>
          <li v-for="(label, key) in skills" :key="key">
            <label :for="'citizen_skill_' + key">{{ label }}</label>
            <input :name="'citizen_skill_' + key" :id="'citizen_skill_' + key" v-model="newCitizen.skills[key]" type="number" min="1">
          </li>
        </ul>
      </li>
    </ul>
    <button type="submit">Create citizen</button>
  </form>
</template>

<script>
    import { SKILLS } from '../domain/skills';
    import { JOBS } from '../domain/jobs';

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

                this.newCitizen = this.getInitialState();
            },
            getInitialState() {
                const obj = {
                    name: '',
                    job: '',
                    skills: {}
                };
                for (const key in SKILLS) {
                    if (! Object.prototype.hasOwnProperty.call(SKILLS, key)) {
                        continue;
                    }
                    obj.skills[key] = 1;
                }
                return obj;
            }
        }
    }
</script>

<style scoped>

</style>
