<template>
  <div>
    <Navbar ref="navbar" theme="light" />
    <ContactHeader />
    <div class="main-content">
      <ContactForm theme="light" />
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29695.671230259337!2d2.3558151621751584!3d48.86295242559001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2z2YXYqtit2YEg2KfZhNmE2YjZgdix!5e0!3m2!1sar!2seg!4v1642786626975!5m2!1sar!2seg"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
      <Footer hideBGCOLOR />
    </div>
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Contact Light'
    };
  },
  mounted() {
    var navbar = this.$refs.navbar.$el;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  },
};
</script>

<style scoped>
</style>