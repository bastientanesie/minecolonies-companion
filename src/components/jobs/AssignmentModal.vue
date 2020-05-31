<template>
  <Modal @close="closeForm" :class="'mod-fullpage'">
    <template v-slot:header>Assignment: {{ selectedCitizen.name }}</template>
    <template v-slot:actions>
      <button class="modal-action-list-item" type="button" @click.prevent="closeForm">Close</button>
    </template>

    <table class="job-list">
      <thead>
        <tr>
          <th>Job</th>
          <th>Skills</th>
          <th>Score</th>
          <th>Other workers</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in citizenJobs" :key="job.id" :class="{'current-job': (selectedCitizen.job === job.id)}">
          <th style="text-align: left">{{ job.name }}</th>
          <td>
            <div v-for="skill in job.primarySkills" :key="skill">{{findSkillById(skill).name}}</div>
            <div v-for="skill in job.secondarySkills" :key="skill">{{findSkillById(skill).name}}</div>
          </td>
          <td>{{ job.getScore() }}</td>
          <td>
            <div v-for="worker in getWorkerForJob(findJobById(job.id))" :key="worker.id">
              {{ worker.name }}: {{ worker.job.getScore() }}
            </div>
          </td>
          <td>
            <button type="button" @click.prevent="assign(selectedCitizen.id, job.id)">Assign</button>
          </td>
        </tr>
      </tbody>
    </table>
  </Modal>
</template>

<script>
    import Modal from '../Modal';
    import Citizen from '../../domain/models/Citizen';
    import CitizenJob from '../../domain/models/CitizenJob';
    import availableJobs, { findById as findJobById } from '../../domain/jobs';
    import { findById as findSkillById } from '../../domain/skills';

    export default {
        name: 'AssignmentModal',
        components: {
            Modal,
        },
        props: {
            selectedCitizen: {
                type: Citizen,
                required: true
            },
            citizens: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                citizenJobs: availableJobs.map((job) => {
                    const citizenJob = CitizenJob.fromJob(job);
                    citizenJob.setCitizenLevels(this.selectedCitizen.skills);
                    return citizenJob;
                }).sort(CitizenJob.compareByScore),
            };
        },
        computed: {
            otherCitizens() {
                return this.citizens.filter((citizen) => {
                    return citizen.id !== this.selectedCitizen.id;
                });
            },
        },
        methods: {
            closeForm() {
                this.$store.dispatch('jobs/selectToAssign', null)
            },
            findJobById(jobId) {
                return findJobById(jobId);
            },
            findSkillById(skillId) {
                return findSkillById(skillId);
            },
            getWorkerForJob(job) {
                return this.otherCitizens.filter((citizen) => {
                  return citizen.job === job.id;
                }).map((citizen) => {
                    const citizenJob = CitizenJob.fromJob(job);
                    citizenJob.setCitizenLevels(citizen.skills);
                    return {
                        id: citizen.id,
                        name: citizen.name,
                        job: citizenJob,
                    };
                });
            },
            async assign(citizenId, jobId) {
                await this.$store.dispatch('citizens/assignJob', {
                    citizenId,
                    jobId,
                });
            },
        },
    }
</script>

<style scoped>
  .job-list {
    width: 100%;
  }

  .job-list tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .job-list > thead > tr {
    background-color: #d9d9d9;
    color: #000000;
  }
  .job-list > tbody > tr.current-job {
    background-color: rgba(0, 128, 0, 0.05);
  }

  .job-list > tbody th,
  .job-list > tbody td {
    padding: 5px 10px;
  }
</style>
