<template>
  <table>
    <thead>
      <tr>
        <th>Citizen</th>
        <th>Job</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <CitizenListItem v-for="citizen in items" :key="citizen.id" :citizen="citizen" :deleteCitizen="deleteCitizen"/>
    </tbody>
  </table>
</template>

<script>
    import CitizenListItem from './CitizenListItem';

    export default {
        name: "CitizenList",
        components: {
            CitizenListItem
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            deleteCitizen: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
