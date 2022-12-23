
<script setup>
import { ref, onMounted } from 'vue'
import { findProductDetail } from '../helpers/api';

const options = ref({});

onMounted(async () => {
  const response = await findProductDetail();
  options.value = response.data.relatedProducts;
  console.log(options.value, 'OPTIONS')
});

</script>


<template>
  <v-container
    color="#fff"
    class="mt-4"
    max-width="80%">
  <v-row>
    <v-col v-for="option in options"
    :key="option.id"
    cols="12"
    md="3">
    <v-card
    class="mx-auto"
    max-width="300"
    max-height="500"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="option.mainImage.originalUrl"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="">
      <p class="text-decoration-line-through text--disabled">$ {{ option.variants[0].pvPrice.basePrice}}</p>
      <h2 class="font-weight-bold">${{ option.variants[0].pvPrice.price}}</h2>
    </v-card-subtitle>

    <v-card-text class="text--primary">

      <div>{{ option.name }}</div>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        color="black"
        text
        block
        class="text-center"
      >
       Comprar
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col> 
  </v-row>
</v-container>
</template>

<style>
</style>