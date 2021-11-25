<template>
  <div class="login-module">
    <div class="login-module__header">
      <h3 class="login-module__header__title">
        {{ $tc("modules.login.title") }}
      </h3>
      <p class="login-module__header__text">
        {{ $tc("modules.login.text") }}
      </p>
    </div>
    <div class="login-module__body">
      <div class="app-element__form-input">
        <InputEmail :placeholder="$tc('modules.login.email')" />
      </div>
      <div class="app-element__form-input">
        <InputPassword :placeholder="$tc('modules.login.password')" />
      </div>

      <div class="app-element__form-button app-element__form-button--right">
        <Button>
          {{ $tc("modules.login.login") }}
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import InputEmail from "@/components/atoms/input/InputEmail.vue";
import InputPassword from "@/components/atoms/input/InputPassword.vue";
import Button from "@/components/atoms/button/Button.vue";
export default {
  components: {
    InputEmail,
    InputPassword,
    Button,
  },
};
</script>
<style lang="scss" scoped>
.login-module {
  padding: $spacing-9 $spacing-7 $spacing-6;
  background-color: $color-white;
  border-radius: $border-radius;
  max-width: 400px;
  box-shadow: $box-shadow;
}

.login-module__header__title {
  color: $color-base;
  font-weight: 700;
}
.login-module__header__text {
  margin-top: $spacing-4;
  color: $color-base-2;
}
</style>