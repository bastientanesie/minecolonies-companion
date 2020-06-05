<template>
  <article class="house-list-item">
    <p class="house-list-item-column mod-name">{{ house.name }}</p>
    <p class="house-list-item-column mod-beds">{{ house.inhabitants.length }}&nbsp;/&nbsp;{{ house.bedCount }}</p>
    <div class="house-list-item-column mod-actions">
      <button class="house-list-item-action" type="button" @click.prevent="$emit('edit', house)">Edit</button>
      <button class="house-list-item-action" type="button" @click.prevent="handleDelete">Delete</button>
    </div>
  </article>
</template>

<script>
    import House from '../../domain/models/House';

    export default {
        name: 'HouseListItem',
        props: {
            house: {
                type: House,
                required: true
            }
        },
        methods: {
            async handleDelete() {
                if (! confirm(`Are you sure you want to delete house "${this.house.name}"?`)) {
                    return;
                }
                await this.$store.dispatch('houses/remove', this.house.id);
            }
        }
    }
</script>

<style scoped>
  .house-list-item {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0 0 1px 0;
    padding: 0 0 1px 0;
  }

  .house-list-item-column {
    margin: 0 1px;
    min-width: 150px;
    padding: 5px 10px;
  }
  .house-list-item-column.mod-name {
    flex: 1 1 40%;
  }
  .house-list-item-column.mod-beds {
    flex: 1 1 30%;
  }
  .house-list-item-column.mod-actions {
    flex: 1 1 30%;
  }
  .house-list-item:hover .house-list-item-column {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .house-list-item-action {
    margin: 0;
  }
  .house-list-item-action:not(:first-child) {
    margin-left: 10px;
  }
</style>
