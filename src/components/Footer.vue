<template>
  <footer class="absolute w-100 justify-center text-white bg-blue-primary py-8">
    <div class="col-span-1 w-40 m-auto">
      <img class="pt-2" src="@/assets/logo/svg/white-logo-white-text.svg" alt="Teknikfokus logo"/>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">

      <div class="max-w-xxs m-auto pt-6">
        <h1 class="text-2xl font-bold underline text-center">Social Media</h1>
        <div class="grid grid-cols-3 gap-5 pt-4">
          <a class="h-x w-x bg-[#ffffff] hover:bg-blue-primary-lightest transition-colors rounded-full flex items-center justify-center text-4xl hover:no-underline" href="https://www.facebook.com/teknikfokus" target="_blank"><i class="text-blue-primary fab fa-facebook-f "></i></a>
          <a class="h-x w-x bg-[#ffffff] hover:bg-blue-primary-lightest transition-colors rounded-full flex items-center justify-center text-4xl hover:no-underline" href="https://www.linkedin.com/company/teknikfokus/" target="_blank"><i class="text-blue-primary fab fa-linkedin-in"></i></a>
          <a class="h-x w-x bg-[#ffffff] hover:bg-blue-primary-lightest transition-colors rounded-full flex items-center justify-center text-4xl hover:no-underline" href="https://www.instagram.com/teknikfokus/" target="_blank"><i class="text-blue-primary fab fa-instagram"></i></a>
        </div>
      </div>

      <div class="mx-auto bg-blue-primary text-base pt-6">
        <h1 class="text-2xl font-bold underline text-center">Contact us</h1>
        <div class="grid grid-cols-1 2xl:grid-cols-2">
          <div>
            <h2 class="text-lg font-bold text-center pt-2">Project managers</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 text-center">
              <div class="mx-auto p-2">
                <span class="font-bold">Leo Guldåker</span><br>
                <a class="text-white" href="mailto:leo@teknikfokus.se">leo@teknikfokus.se</a>
              </div>
              <div class="mx-auto p-2">
                <span class="font-bold">Yazan Al-Aswad</span><br>
                <a class="text-white" href="mailto:yazan@teknikfokus.se">yazan@teknikfokus.se</a>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-lg font-bold text-center pt-2">Webpage maintainers</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 text-center">
              <div class="mx-auto p-2">
                <span class="font-bold">David Bergh</span><br>
                <a class="text-white" href="mailto:david@teknikfokus.se">david@teknikfokus.se</a>
              </div>
              <div class="mx-auto p-2">
                <span class="font-bold">Pontus Sjöstedt</span><br>
                <a class="text-white" href="mailto:pontus@teknikfokus.se">pontus@teknikfokus.se</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>
