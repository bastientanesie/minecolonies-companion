<template>
  <Modal @close="closeForm">
    <template v-slot:header>New house</template>
    <template v-slot:actions>
      <button class="modal-action-list-item" type="button" @click.prevent="closeForm">Cancel</button>
      <button class="modal-action-list-item" type="button" @click.prevent="handleSubmit">Create house</button>
    </template>

    <form @submit.prevent="handleSubmit">
      <ul>
        <li>
          <label for="house_name">Name</label>
          <input name="name" id="house_name" v-model="newHouse.name" type="text" v-focus>
        </li>
        <li>
          <label for="house_beds">Beds</label>
          <input name="beds" id="house_beds" v-model="newHouse.beds" type="number" min="1">
        </li>
      </ul>
      <button type="submit" style="display: none;"></button>
    </form>
  </Modal>
</template>

<script>
    import Modal from '../Modal';

    /**
     * @event close
     */
    export default {
        name: 'NewHouseForm',
        components: {
            Modal
        },
        data() {
            return {
                newHouse: this.getInitialState()
            };
        },
        methods: {
            async handleSubmit() {
                const name = this.newHouse.name && this.newHouse.name.trim();
                if (!name) {
                    return;
                }

                await this.$store.dispatch('houses/add', {
                    name: this.newHouse.name,
                    beds: this.newHouse.beds
                });

                this.closeForm();
            },
            getInitialState() {
                return {
                    name: '',
                    beds: 1
                };
            },
            closeForm() {
                this.newHouse = this.getInitialState();
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

</style>
