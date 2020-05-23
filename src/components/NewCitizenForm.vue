<template>
  <form @submit.prevent="addCitizen">
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
          <li>
            <label for="citizen_skill_adaptability">Adaptability</label>
            <input name="citizen_skill_adaptability" id="citizen_skill_adaptability" v-model="newCitizen.skills.adaptability" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_agility">Agility</label>
            <input name="citizen_skill_agility" id="citizen_skill_agility" v-model="newCitizen.skills.agility" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_athletics">Athletics</label>
            <input name="citizen_skill_athletics" id="citizen_skill_athletics" v-model="newCitizen.skills.athletics" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_creativity">Creativity</label>
            <input name="citizen_skill_creativity" id="citizen_skill_creativity" v-model="newCitizen.skills.creativity" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_dexterity">Dexterity</label>
            <input name="citizen_skill_dexterity" id="citizen_skill_dexterity" v-model="newCitizen.skills.dexterity" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_focus">Focus</label>
            <input name="citizen_skill_focus" id="citizen_skill_focus" v-model="newCitizen.skills.focus" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_intelligence">Intelligence</label>
            <input name="citizen_skill_intelligence" id="citizen_skill_intelligence" v-model="newCitizen.skills.intelligence" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_knowledge">Knowledge</label>
            <input name="citizen_skill_knowledge" id="citizen_skill_knowledge" v-model="newCitizen.skills.knowledge" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_mana">Mana</label>
            <input name="citizen_skill_mana" id="citizen_skill_mana" v-model="newCitizen.skills.mana" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_stamina">Stamina</label>
            <input name="citizen_skill_stamina" id="citizen_skill_stamina" v-model="newCitizen.skills.stamina" type="number" min="1">
          </li>
          <li>
            <label for="citizen_skill_strength">Strength</label>
            <input name="citizen_skill_strength" id="citizen_skill_strength" v-model="newCitizen.skills.strength" type="number" min="1">
          </li>
        </ul>
      </li>
    </ul>
    <button type="submit">Create citizen</button>
  </form>
</template>

<script>
    export default {
        name: "NewCitizenForm",
        props: {
            createCitizen: {
                type: Function,
                required: true
            },
            jobs: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                newCitizen: {
                    name: "",
                    job: "",
                    skills: {
                        adaptability: 1,
                        agility: 1,
                        athletics: 1,
                        creativity: 1,
                        dexterity: 1,
                        focus: 1,
                        intelligence: 1,
                        knowledge: 1,
                        mana: 1,
                        stamina: 1,
                        strength: 1
                    }
                }
            };
        },
        methods: {
            addCitizen() {
                const name = this.newCitizen.name && this.newCitizen.name.trim();
                if (! name) {
                    return;
                }

                this.createCitizen(
                    this.newCitizen.name,
                    this.newCitizen.job,
                    this.newCitizen.skills
                );

                // Reset fields
                this.newCitizen.name = "";
                this.newCitizen.job = null;
                for (const skill in this.newCitizen.skills) {
                    this.newCitizen.skills[skill] = 1;
                }
            }
        }
    }
</script>

<style scoped>

</style>
