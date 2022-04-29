<template>
  <main class="text-center">
    <img class="logo" alt="WhatsApp Redirect" src="./assets/logo.png">
    <h1>WhatsApp Redirect</h1>
    <p class="mt-2">Permite iniciar conversas no WhatsApp sem<br />a necessidade de salvar contatos na sua agenda.</p>

    <div class="col-12 lg:col-4 lg:col-offset-4 mt-3">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          +55
        </span>
        <input-mask
          v-model="phoneNumber"
          :auto-clear="false"
          mask="(99) 99999-9999"
          class="input-number"
          autofocus
          @keyup.enter="redirect"
        />
      </div>
    </div>

    <new-button
      class="mt-3"
      icon="pi pi-comment"
      @click="redirect"
      :disabled="!isValidPhoneNumber"
      label="Iniciar conversa"
    />
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  setup() {
    const whatsUrl = process.env.VUE_APP_WHATSAPP_URL;
    const phoneNumber = ref("");

    const phoneNumberDigits = computed(() => phoneNumber.value.replace(/[^\d]/g, ""));

    const isValidPhoneNumber = computed(() =>
      phoneNumberDigits.value.length >= 10 && phoneNumberDigits.value.length <= 11
    );

    function redirect() {
      if (isValidPhoneNumber.value) {
        window.location.href = `${whatsUrl}${phoneNumberDigits.value}`;
      }
    }

    return {
      phoneNumber,
      isValidPhoneNumber,
      redirect,
    }
  }
}
</script>

<style scoped>
.logo {
  width: 120px;
}

.input-number {
  font-size: 1.5rem;
}
</style>
