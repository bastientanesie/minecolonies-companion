<template>
  <section class="house-list">
    <ul class="house-list-header">
      <li class="house-list-header-item mod-name">Name</li>
      <li class="house-list-header-item mod-job">Beds</li>
      <li class="house-list-header-item mod-actions"></li>
    </ul>
    <HouseListItem v-for="house in items" :key="house.id" :house="house" />
  </section>
</template>

<script>
    import HouseListItem from './HouseListItem';

    export default {
        name: 'HouseList',
        components: {
            HouseListItem
        },
        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
  .house-list {
    display: flex;
    flex-direction: column;
  }

  .house-list-header {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0 0 1px 0;
    padding: 0;
  }

  .house-list-header-item {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    font-weight: bold;
    margin: 0 1px;
    min-width: 150px;
    padding: 5px 10px;
  }
  .house-list-header-item.mod-name {
    flex: 1 1 40%;
  }
  .house-list-header-item.mod-job {
    flex: 1 1 30%;
  }
  .house-list-header-item.mod-actions {
    flex: 1 1 30%;
  }
</style>
