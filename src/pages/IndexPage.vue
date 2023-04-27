<template>
  <q-btn color="orange-8" label="click-me"></q-btn>
  <q-card>
    <q-card-section>
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
