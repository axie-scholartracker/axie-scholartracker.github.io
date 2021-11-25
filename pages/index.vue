<template>
  <div class="index-page">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="text-center">
            <h1>{{ $tc("modules.home.title") }}</h1>
            <h3>
              {{ $tc("modules.home.text") }}
            </h3>
            <p>
              {{ $tc("modules.home.note") }}
            </p>
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
