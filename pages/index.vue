<template>
  <div class="index-page">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center mt-5 mb-4">Axie Infinity Manager Tracker</h1>
          <div class="row">
            <div class="col">
              <LoginModule />
            </div>
            <div class="col">
              <LoginModule />
            </div>
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
