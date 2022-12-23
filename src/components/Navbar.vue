<template>
  <nav>
     <v-toolbar  height="110px" color="purple darken-4 white--text"> 
        <v-app-bar-nav-icon @click="drawer = !drawer" class="lg-none"></v-app-bar-nav-icon>

        <v-toolbar-title>
                 <v-img
                    lazy-src="https://materialesbasualdo.com.ar/uploads/configs/site_logo_1640802762678.png"
                    max-height="150"
                    max-width="250"
                    src="https://materialesbasualdo.com.ar/uploads/configs/site_logo_1640802762678.png">
                </v-img>
        </v-toolbar-title>

       <v-spacer></v-spacer>

       <v-btn elevation="1" color="deep-purple lighten-3 white--text" class="px-10 sm-none">
        <i class="fa-solid fa-chevron-down mr-2"></i>categorias
       </v-btn>

       <v-spacer></v-spacer>


       <v-autocomplete
      background-color="white"
      v-model="first"
      :search-input.sync="search"
      cache-items
      class="mx-4 sm-none"
      flat
      hide-no-data
      hide-details
      label="¿Qué estas buscando?"
      solo-inverted
    ></v-autocomplete> 
    
    <v-spacer></v-spacer>
 
       <v-btn icon>
          <v-icon color="white">fa-solid fa-user</v-icon>
        </v-btn>

      <div>
        <span class="icon-nav"><a href=""><i class="fa-solid fa-cart-shopping ml-2"></i></a></span>
      </div>
     
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" temporary>
        <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
 name: 'Navbar',
  data: () => ({
    drawer: false,
    items: [
          { title: 'Tienda', icon: 'mdi-view-dashboard' },
          { title: 'Categorias', icon: 'mdi-image' },
          { title: 'Iniciar ', icon: 'mdi-account' },
        ],
  })
}
</script>

<style>

.color-h1 {
    color: orangered;
}
 @media (min-width:1024px) {
        .lg-none {
            display: none!important;
        }
       
    }
    @media (max-width:620px){
       .sm-none {
            display: none !important;;
        }
    }

    .icon-nav a i{
      font-size: 1.5rem;
      color: white;
    }

</style>