<template>
    <div id="footer" class="w-100 pt-5 pb-3">
      <div class="container py-4">
        <div class="mx-auto d-block text-center mb-5">
            <a class="social-media-icon" href="https://www.facebook.com/teknikfokus/"><i class="fab fa-facebook-f"></i></a>
            <a class="social-media-icon" href="https://www.linkedin.com/company/teknikfokus/"><i class="fab fa-linkedin-in"></i></a>
            <a class="social-media-icon" href="https://www.instagram.com/teknikfokus/"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="row">
          <div class="col d-none d-lg-block"></div>
          <div class="text-center col-12 col-md-6 col-lg-4 contact-info mb-4">
            <span>Emil Holm, Project manager</span><br>
            <a href="mailto:emil@teknikfokus.se">emil@teknikfokus.se</a><br>
          </div>
          <div class="text-center col-12 col-md-6 col-lg-4 contact-info">
            <span>Jonna Fahrman, Project manager</span><br>
            <a href="mailto:jonna@teknikfokus.se">jonna@teknikfokus.se</a><br>
          </div>
          <div class="col d-none  d-lg-block"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
#footer {
  background: var(--footer-color);
}

.social-media-icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: var(--footer-color);
  font-size: 30px;
  text-align: center;
  line-height: 56px;
  box-sizing: border-box;
  margin: 0 5px;
  
  transition: background 0.2s;
}

.social-media-icon:hover {
  background: var(--primary);
}

.contact-info span {
  color: white;
  font-weight: bold;
}
</style>