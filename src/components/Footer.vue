<template>
  <footer class="absolute w-100 justify-center text-white bg-blue-primary py-8">

    <div class="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-8 grid-flow-row gap-2 px-4">

      <div class="flex flex-col xl:flex-row mx-auto col-span-2">
        <img class="mx-auto w-32" src="@/assets/logo/svg/white-logo-white-text.svg" alt="Teknikfokus logo"/>
        <div class="w-0 my-1 mx-12 border-2 border-white hidden xl:grid"></div>
        <div class="h-0 px-1 mt-3 mb-2 border-2 border-white grid xl:hidden"></div>
        <div class="flex flex-col justify-center text-center">
          <a class="mx-auto text-xl font-bold underline" href="https://www.iternio.com/" target="_blank">Shuttle Provider</a>
          <img class="pt-3 w-24 mx-auto" src="@/assets/logo/svg/companies/Iternio.png" alt="Iternio Logo"/>
        </div>
      </div>

      <div class="mx-auto text-base md:col-span-3 lg:col-span-4">
        <h1 class="text-xl font-bold underline text-center">Contact us</h1>
        <div class="grid grid-cols-1 xl:grid-cols-2">
          <div>
            <h2 class="text-lg font-bold text-center pt-2">Project managers</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 text-center">

              <div class="mx-auto p-2 px-4">
                <span class="font-bold">Samuel Högfeldt</span><br>
                <a class="text-white" href="mailto:samuel@teknikfokus.se">samuel@teknikfokus.se</a>
              </div>
              <div class="mx-auto p-2 px-4">
                <span class="font-bold">Alen Mahmutovic</span><br>
                <a class="text-white" href="mailto:alen@teknikfokus.se">alen@teknikfokus.se</a>
              </div>


              
            </div>
          </div>

          <div>
            <h2 class="text-lg font-bold text-center pt-2">Webpage maintainers</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 text-center">
              <div class="mx-auto p-2 px-4">
                <span class="font-bold">Daniel Adu-Gyan	</span><br>
                <a class="text-white" href="mailto:daniel@teknikfokus.se">daniel@teknikfokus.se</a>
              </div>
              <div class="mx-auto p-2 px-4">
                <span class="font-bold">Noor Mustafa</span><br>
                <a class="text-white" href="mailto:noor@teknikfokus.se">noor@teknikfokus.se</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-span-2">
        <div class="m-auto px-8 2xl:px-16">
          <h1 class="text-xl font-bold underline text-center">Social Media</h1>
          <div class="grid grid-cols-3 gap-5 pt-4 h-100">
            <a class="mx-auto h-x w-x bg-[#ffffff] hover:bg-blue-primary-lightest transition-colors rounded-full flex items-center justify-center text-4xl hover:no-underline" href="https://www.facebook.com/teknikfokus" target="_blank"><i class="text-blue-primary fab fa-facebook-f "></i></a>
            <a class="mx-auto h-x w-x bg-[#ffffff] hover:bg-blue-primary-lightest transition-colors rounded-full flex items-center justify-center text-4xl hover:no-underline" href="https://www.linkedin.com/company/teknikfokus/" target="_blank"><i class="text-blue-primary fab fa-linkedin-in"></i></a>
            <a class="mx-auto h-x w-x bg-[#ffffff] hover:bg-blue-primary-lightest transition-colors rounded-full flex items-center justify-center text-4xl hover:no-underline" href="https://www.instagram.com/teknikfokus/" target="_blank"><i class="text-blue-primary fab fa-instagram"></i></a>
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
