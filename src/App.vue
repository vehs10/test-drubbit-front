<template>
  <v-app>
 <template>
  <!-- grey lighten-4 -->
    <v-card
      color="grey lighten-4"
      flat
      height="100%"
      tile
      class="App"
    >
    <!-- HEADER -->
    <Navbar/>
    <!-- PRODUCT DETAIL CONTENT -->
    <section class="content-detail">
      <Product/>
    </section>
   
    <!-- CARDS OPTIONS CONTENT -->
    <h3 class="text-center text-uppercase text-decoration-underline py-1 text-lg-h6" style="color:orangered">tambien te puede interesar</h3>
    <ProductCards/>
    <!-- FOOTER -->
   <Footer/>
    </v-card>
</template>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Product from './components/Product.vue';
import Footer from './components/Footer.vue';
import ProductCards from './components/ProductCards.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Product,
    ProductCards,
   
  }

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,500;1,700&display=swap');

* {
  font-family: 'Ubuntu', sans-serif;
}

.App{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.content-detail{
  background-color: white;
}
@media (min-width: 1024px) {
  .content-detail{
    width: 90%;
    margin: 50px 30px 50px 70px;
  }
}
</style>
