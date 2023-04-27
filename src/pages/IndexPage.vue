<template>
  <h1 class="tw-text-3xl tw-font-bold tw-underline tw-text-green">
    Hello world!
  </h1>
  <div class="tw-w-24 tw-border-green tw-border-solid">
    Hello
  </div>
  <div class="w-24 border-green border-solid ">
    Hello
  </div>
  <q-btn color="orange-8" label="click-me"></q-btn>
  <q-card class="tw-w-full">
    <q-card-section class="bg-blue text-white">
      My Card
    </q-card-section>
    <q-card-section>

    </q-card-section>
  </q-card>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
