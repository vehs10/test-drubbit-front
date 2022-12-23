<script setup>
import { ref, onMounted } from 'vue'
import { findProductDetail, findJson } from '../helpers/api';

const product = ref({});

onMounted(async () => {
  const response = await findProductDetail();
  product.value = response.data.product;
});


</script>

<template>
    <v-container
    color="#fff"
    class="mt-4"
    max-width="70%">
    <v-row class="container">
       <v-col cols="12" md="7">
         <v-img
         max-height="550"
         max-width="650"
          :src="product.images[0].originalUrl"
         ></v-img>
       </v-col>
       <v-col cols="12" md="5">

        <v-breadcrumbs :items="items" large >
         <template v-slot:item="{ item }">
            <v-breadcrumbs-item :disabled="item.disabled">
                <span :style="`color: ${item.color}`">
                {{ item.text}}
                </span>
            </v-breadcrumbs-item>
         </template>
        </v-breadcrumbs>

        <v-row>
        <v-col cols="8">
            <v-card-text>
                <div class="product">
                    <h1 class="mb-2">{{ product.name }}</h1>
                    <p class="text-caption font-weight-bold sku">SKU {{ product.variants[0].sku }}</p>
                    <p class="bread-text font-weight-bold">{{ product.brand.name }}</p>
                </div>

                <div class="product-price">
                    <p class="text-decoration-line-through text--disabled">$ {{ product.variants[0].pvPrice.basePrice}}</p>
                    <h2 class="font-weight-regular mb-3">$ {{ product.variants[0].pvPrice.price}}
                    <span class="text-sm-body-2 font-weight-bold" style="color:orangered">20% OFF</span></h2> 
                    <p><span class="icon-content-1 mr-3"><i class="fa-solid fa-check"></i></span> Disponible en stock</p>
                    <p><span class="icon-content-1 mr-3"><i class="fa-solid fa-credit-card"></i></span>Hasta 18 cuotas sin interés</p>
                </div>
            </v-card-text>
         </v-col>
            <v-col cols="4">
                <div class="icons-lateral">
                    <div class="Icon-side mt-2">
                      <a href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                    <div class="Icon-side mt-2">
                      <a href=""><i class="fa-solid fa-share-nodes"></i></a>
                    </div>
                </div>
            </v-col>         
        </v-row>

        <v-divider class="mb-8"></v-divider>

         <v-btn
         block
         rounded
         elevation="1"
         color="#F8BBD0"
         max-width="90%"
         class="text-uppercase font-weight-bold py-3"
         >
         <span class="bread-text"><i class="fa-sharp fa-solid fa-cart-plus "></i> Comprar ahora</span>
         </v-btn>

        <v-divider class="mt-8"></v-divider>

       <v-card-text>
        <p><span class="icon-content-2 mx-3 my-2"><i class="fa-sharp fa-solid fa-boxes-packing"></i></span> Retiro gratis en nuestro local.
         Rico 640, Dolores, Prov de Buenos Aires</p>
        <p><span class="icon-content-2 mx-3 my-2"><i class="fa-sharp fa-solid fa-truck-fast"></i></span> Envío a domicilio. Consultenós el costo a su localidad.
          Realizamos envíos a Dolores y zona con nuestra propia flota de camiones. LLegamos a Castelli, Lezama, Pila, Chascomús, Gral. Guido, Maipú, Gral. Conesa, Lavalle y el Partido de la Costa. Por otros destinos consulte antes de realizar su compra.</p>
       </v-card-text>
       </v-col>
    </v-row>
 
    </v-container>
 </template>
 
 <script>

 export default {
    name: 'Product',
   data: () => ({
     items: [
         {
           text: 'Tienda',
           disabled: false,
           href: 'breadcrumbs_dashboard',
           color: '#4A148C',
         },
         {
           text: 'Herramientas',
           disabled: false,
           href: 'breadcrumbs_link_1',
           color: '#4A148C',
         },
         {
           text: 'Amoladoras',
           disabled: false,
           href: 'breadcrumbs_link_2',
           color: '#4A148C',
         },
       ],
   }),
  
 }
 </script>

 <style>
    .bread-text {
        color: #4A148C;
    }
    .Icon-side a i{
      color:#4A148C;
      font-size: 22px;
      border-radius: 50%;
      background-color: #F5F5F5;
      padding: 8px;
    }
    .Icon-side a i:hover{
      background-color: #c0bfbf;
      transition: ease-in-out .2s;
    }
    .icon-content-1{
      color: #7e7e7e;
      font-size: 20px;
    }
    .icon-content-2{
      color:#4A148C;
      font-size: 30px;
      border: #4A148C 2px solid;
      border-radius: 10%;
      padding: 2px;
    }
    
</style>