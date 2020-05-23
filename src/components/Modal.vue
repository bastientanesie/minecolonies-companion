<template>
  <transition name="modal">
    <article class="modal">
      <div class="modal-overlay" @click.prevent="$emit('close')" @keyup.escape="$emit('close')">
        <div class="modal-container" @click.stop="">
          <h2 class="modal-title">
            <slot name="header">Default modal header</slot>
          </h2>

          <div class="modal-body">
            <slot>
              <p>Default modal content</p>
            </slot>
          </div>

          <div class="modal-action-list">
            <slot name="actions">
              <button class="modal-action-list-item" type="button" @click.prevent="$emit('close')">Close</button>
            </slot>
          </div>
        </div>
      </div>
    </article>
  </transition>
</template>

<script>
    export default {
        name: 'Modal'
    }
</script>

<style>
  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.3);
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9998;
    transition: opacity 1s ease;
  }

  .modal-container {
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    min-width: 500px;
    overflow-y: auto;
    padding: 20px;
    transition: all 1s ease;
    z-index: 11;
  }

  .modal-title {
    margin: 0;
    padding: 0;
  }

  .modal-body {
    flex: 1 1 auto;
  }

  .modal-action-list {
    display: flex;
    flex-direction: row;
  }

  .modal-action-list-item {
    margin: 20px 0;
  }

  .modal-action-list-item:not(:first-child) {
    margin-left: 20px;
  }
  .modal-action-list-item:first-child {
    margin-left: auto;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    transform: scale(0.8);
  }
</style>
