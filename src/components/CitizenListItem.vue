<template>
  <tr>
    <th>{{ citizen.name }}</th>
    <td>{{ citizen.job }}</td>
    <td>
      <button type="button" @click.prevent="handleDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
    import Citizen from '../models/Citizen';

    export default {
        name: "CitizenListItem",
        props: {
            citizen: {
                type: Citizen,
                required: true
            },
            deleteCitizen: {
                type: Function,
                required: true
            }
        },
        methods: {
            handleDelete() {
                if (! confirm(`Are you sure you want to delete ${this.citizen.name}?`)) {
                    return;
                }
                this.deleteCitizen(this.citizen);
            }
        }
    }
</script>

<style scoped>

</style>
