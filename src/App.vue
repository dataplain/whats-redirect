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
        <input
          :value="form.phoneNumber"
          class="input-number p-inputtext p-component p-inputnumber-input p-inputnumber-input"
          type="phone"
          maxlength="15"
          autofocus
          @input="updatePhoneNumber"
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

    function keepNumbers(value) {
      return value.replace(/[^\d]/g, "");
    }

    function formatPhoneNumber(phoneNumber) {
      const checkNumber = keepNumbers(phoneNumber);
        
      if (checkNumber.length === 10)
        return checkNumber.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
      else if (checkNumber.length === 11)
        return checkNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      else
        return checkNumber;
    }

    const form = ref({
      phoneNumber: "",
      phoneNumberDigits: "",
    });

    function updatePhoneNumber(event) {
      form.value.phoneNumberDigits = keepNumbers(event.target.value);
      form.value.phoneNumber = formatPhoneNumber(form.value.phoneNumberDigits);
    }

    const isValidPhoneNumber = computed(() =>
      form.value.phoneNumberDigits.length >= 10 && form.value.phoneNumberDigits.length <= 11
    );

    function redirect() {
      if (isValidPhoneNumber.value) {
        window.location.href = `${whatsUrl}${form.value.phoneNumberDigits}`;
      }
    }

    return {
      form,
      updatePhoneNumber,
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
