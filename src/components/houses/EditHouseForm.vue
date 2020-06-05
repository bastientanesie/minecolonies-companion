<template>
  <Modal @close="closeForm">
    <template v-slot:header>Edit house: {{ house.name }}</template>
    <template v-slot:actions>
      <button class="modal-action-list-item" type="button" @click.prevent="closeForm()">Cancel</button>
      <button class="modal-action-list-item" type="button" @click.prevent="handleSubmit">Save changes</button>
    </template>

    <form @submit.prevent="handleSubmit">
      <ul>
        <li>
          <label for="house_name">Name</label>
          <input name="name" id="house_name" v-model="name" type="text" v-focus>
        </li>
        <li>
          <label for="house_beds">Beds</label>
          <input name="beds" id="house_beds" v-model="beds" type="number" :min="minimumBedValue">
        </li>
      </ul>
      <button type="submit" style="display: none;"></button>
    </form>
  </Modal>
</template>

<script>
    import House from '../../domain/models/House';
    import Modal from '../Modal';

    /**
     * @event close
     */
    export default {
        name: 'EditHouseForm',
        components: {
            Modal
        },
        data() {
            return {
                name: this.house.name,
                beds: this.house.bedCount
            };
        },
        props: {
            house: {
                type: House,
                required: true
            }
        },
        computed: {
            minimumBedValue() {
                return (this.house.inhabitants.length > 0)
                    ? this.house.inhabitants.length
                    : 1;
            },
        },
        methods: {
            async handleSubmit() {
                const name = this.name && this.name.trim();
                if (! name) {
                    return;
                }

                await this.$store.dispatch('houses/edit', {
                    houseId: this.house.id,
                    name: this.name,
                    beds: this.beds
                });

                this.closeForm();
            },
            closeForm() {
                this.name = null;
                this.beds = null;
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

</style>
