<template>
  <section
    class="call-action section-padding sub-bg bg-img"
    :style="`background-image: url(${img ? img : '/img/patrn.svg'})`"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-6">
          <div class="content sm-mb30">
            <h6 class="wow words chars splitting" data-splitting>{{ carrera_iniciales }}</h6>
            <h2 class="wow words chars splitting" data-splitting>
              {{ carrera_title_organigrama }} <br />
              <b class="back-color">{{ carrera_nombre }}</b>.
            </h2>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <vue-pdf
            ref="pdf"
            :src="url_api + '/InstitucionUpea/' + carrera_organigrama"
            :page="1"
            :original-size="true"
            class="pdf-viewer"
          ></vue-pdf>          
        </div>

        <div class="col-md-4 col-lg-3 valign">
          <a
            :href="url_api + '/InstitucionUpea/' + carrera_organigrama"
            target="_blank"
            class="butn bord curve wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>Descargar Organigrama</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
export default {
  props: ["img"],
  async asyncData({ $axios }) {        
        try {         
            const useInstitucion = useInstitucionStore()     
            if( useInstitucionStore().institucion == null || useInstitucionStore().carrera_links_externos == null){
              const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)              
              useInstitucion.asignarInstitucion(institucion.Descripcion)              
            }            
        } catch (e) {
            console.error("error",e)
        }
    },  
  data() {
    return {
      url_api : process.env.APP_ROOT_API, 
      carrera_organigrama : useInstitucionStore().institucion.institucion_organigrama,
      carrera_title_organigrama: useInstitucionStore().title_index_organigrama,
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      carrera_iniciales: useInstitucionStore().institucion.institucion_iniciales,
    };
  },
};
</script>

<style scoped>
</style>