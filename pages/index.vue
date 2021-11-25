<template>
  <div class="index-page">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <LoginModule />
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginModule from "@/components/organisms/login-module/LoginModule.vue";
export default {
  components: {
    LoginModule,
  },
};
</script>
