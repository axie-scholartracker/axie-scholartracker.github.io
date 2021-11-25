<template>
  <div class="input-text app-element__input">
    <label class="app-element__input-label" v-if="label">{{ label }}</label>
    <div class="app-element__input-wrapper">
      <input type="password" :placeholder="placeholder" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
};
</script>
