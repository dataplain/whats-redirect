<template>
  <main class="text-center">
    <img class="logo" alt="WhatsApp Redirect" src="/logo.png">
    <h1>WhatsApp Redirect</h1>
    <p class="mt-2">Permite iniciar conversas no WhatsApp sem a necessidade de salvar contatos na sua agenda.</p>

    <div class="col-12 lg:col-4 lg:col-offset-4 mt-3">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          +55
        </span>
        <input
          :value="form.phoneNumberInput"
          class="input-number p-inputtext p-component p-inputnumber-input p-inputnumber-input"
          type="tel"
          maxlength="15"
          autofocus
          @input="(event) => updatePhoneNumber(event.target.value)"
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
import NumberFormatter from "@/resources/NumberFormatter";
import PhoneNumberFormatter from "@/resources/PhoneNumberFormatter";

export default {
  setup() {
    const whatsUrl = process.env.VUE_APP_WHATSAPP_URL;

    const form = ref({
      phoneNumberInput: "",
      phoneNumberDigits: "",
    });

    function updatePhoneNumber(value) {
      form.value = {
        phoneNumberDigits: NumberFormatter(value),
        phoneNumberInput: PhoneNumberFormatter(value),
      }
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
