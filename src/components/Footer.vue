<template>
    <v-footer
      dark
      padless
      color="purple darken-4 white--text"
      class="mt-3"
    >
    <v-container>
        <v-row class="mt-5">
            <v-col
            cols="12"
            md="6">
            <v-list class="white--text pt-0" color="purple darken-4">
                <v-img
                    lazy-src="https://materialesbasualdo.com.ar/uploads/configs/site_logo_1640802762678.png"
                    max-height="150"
                    max-width="250"
                    src="https://materialesbasualdo.com.ar/uploads/configs/site_logo_1640802762678.png">
                </v-img>
                     
                    <list-item
                    v-for="info in information"
                    :key="info.title">
                    <!-- v-text="info.title" -->
                        <v-list-item-title class="mt-3" >
                          <p><span class="mr-1"><i :class="info.icon"></i></span> {{ info.title }}</p>
                        </v-list-item-title>
                    </list-item>

               <div class="icon-footer mt-2">
                <a href="" class="ml-2"><i class="fa-brands fa-instagram"></i></a>
                <a href="" class="ml-2"><i class="fa-brands fa-facebook"></i></a>
                <a href="" class="ml-2"><i class="fa-brands fa-youtube"></i></a>
              </div>
             </v-list>
              
            </v-col>

            <v-col cols="12" md="2">                   
             <v-list class="white--text pt-0 " color="purple darken-4">
                    <h3 class="font-weight-bold">Categorias</h3>
                    <list-item
                    v-for="category in categories"
                    :key="category.title">
                        <v-list-item-title class="mt-3" v-text="category.title"></v-list-item-title>
                    </list-item>
             </v-list>
            </v-col>

            <v-col cols="12" md="2">                   
             <v-list class="white--text pt-0" color="purple darken-4">
                    <h3 class="font-weight-bold">Marcas</h3>
                    <list-item
                    v-for="marca in marcas"
                    :key="marca.title">
                        <v-list-item-title class="mt-3" v-text="marca.title"></v-list-item-title>
                    </list-item>
             </v-list>
            </v-col>
         
            <v-col
            cols="12"
            md="2">
                <v-list class="white--text pt-0" color="purple darken-4">
                <h3 class="white--text font-weight-bold">Institucional</h3>
                    <list-item
                    v-for="question in questions"
                    :key="question.title">
                    <v-list-item-title class="mt-3" v-text="question.title"></v-list-item-title>
                    </list-item>      
                    <v-img
                    lazy-src="  http://cordobahosting.com/blog/wp-content/uploads/2013/09/DATAWEB.jpg"
                    max-height="150"
                    class="mt-2"
                    max-width="80"
                    src="  http://cordobahosting.com/blog/wp-content/uploads/2013/09/DATAWEB.jpg">
                    </v-img>
                </v-list>

            </v-col>
        </v-row>
        <v-divider></v-divider>
    </v-container>

    

    <v-row class="mb-1">
            <v-col cols="12" md="6">
                <v-card-text class="white--text">
                    <span>Todos los derechos reservados </span>
                    &copy;<span> Basualdo</span>
                </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
                <v-card-text class="white--text">
                    <span>Desarrollado por <a class="white--text" href="https://drubbit.com/" target="_blank">Drubbit</a> </span>
                </v-card-text>
            </v-col>
        </v-row>

    </v-footer>
  </template>

<script>
export default {
    name: 'Footer',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    information: [
        {
            title: 'Rico 640, Dolores, Prov de Buenos Aires',
            icon: 'fa-sharp fa-solid fa-location-dot'
        },
        {
            title: '+5402245440664',
            icon: 'fa-sharp fa-solid fa-phone'
        },
        {
            title: '+5492245600000',
            icon: 'fa-brands fa-whatsapp'
        },
        
        {
            title: 'ventas@materialesbasualdo.com.ar',
            icon: 'fa-sharp fa-solid fa-envelope'

        },
    ],
    categories: [
        {
            title: 'Aberturas'
        },
        {
            title: 'Baños'
        },
        {
            title: 'Calefacción'
        },
        {
            title: 'Cocinas'
        },
        {
            title: 'Griferías'
        },
        {
            title: 'Herramientas'
        },
        {
            title: 'Hogar'
        },
        {
            title: 'Instalaciones'
        },
        {
            title: 'Materiales De Construccion'
        },
        {
            title: 'Pinturas Y Revestimientos Plásticos'
        },
        {
            title: 'Piscinas'
        },
        {
            title: 'Pisos Y Revestimientos'
        },
        {
            title: 'Sin Categoría'
        },
        {
            title: 'Techos'
        },
    ],
    marcas: [
    {
      title: 'LOURDES'
    },
    {
      title: 'SAN PIETRO PORCELANATO'
    },
    {
      title: 'OBLAK'
    },
    {
      title: 'ECOTERMO'
    },
    {
      title: 'ALBERDI'
    },
    {
      title: 'KLAUKOL'
    },
    {
      title: 'TROMEN'
    },
    {
      title: 'SCHNEIDER'
    },
    {
      title: 'CERRO NEGRO'
    },
    {
      title: 'GRIFERIA PEIRANO'
    },
    {
      title: 'FERRUM'
    },
  ],
  
  questions:[
    {
      title: '¿Cómo comprar?'
    },
    {
      title: 'Preguntas frecuentes'
    },
    {
      title: 'Términos y condiciones'
    },
],
  }),
 
}
</script>

<style>
ul li{
    list-style: none;
    margin: 10px
}

.icon-footer a i{
      color:white;
      font-size: 22px;
      border-radius: 50%;
      background-color: rgb(43, 42, 42);
      padding: 8px;
    }
    .icon-footer a i:hover{
      background-color: #4b4a4a;
      transition: ease-in-out .2s;
    }

</style>