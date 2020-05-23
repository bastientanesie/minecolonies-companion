<template>
  <tr>
    <th>{{ citizen.name }}</th>
    <td>{{ citizen.job || "Unemployed" }}</td>
    <td>
      <button type="button" @click.prevent="handleDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
    import Citizen from '../domain/models/Citizen';

    export default {
        name: "CitizenListItem",
        props: {
            citizen: {
                type: Citizen,
                required: true
            }
        },
        methods: {
            async handleDelete() {
                if (! confirm(`Are you sure you want to delete ${this.citizen.name}?`)) {
                    return;
                }
                await this.$store.dispatch('removeCitizen', this.citizen.id);
            }
        }
    }
</script>

<style scoped>

</style>
