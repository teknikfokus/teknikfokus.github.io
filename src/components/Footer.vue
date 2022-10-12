<template>
  <footer class="absolute w-full bottom-0 text-white bg-blue-primary">
    <div class="max-w-xxs mx-auto mt-5 mb-1 ">
      <div class="grid grid-cols-3 gap-5">
        <a class="bg-[#ffffff] hover:bg-blue-primary-lightest transition-colors rounded-full h-x w-x flex items-center justify-center text-4xl px-3 hover:no-underline" href="https://www.facebook.com/teknikfokus" target="_blank"><i class="text-blue-primary fab fa-facebook-f "></i></a>
        <a class="bg-[#ffffff] hover:bg-blue-primary-lightest transition-colors rounded-full h-x w-x flex items-center justify-center text-4xl px-3 hover:no-underline" href="https://www.linkedin.com/company/teknikfokus/" target="_blank"><i class="text-blue-primary fab fa-linkedin-in"></i></a>
        <a class="bg-[#ffffff] hover:bg-blue-primary-lightest transition-colors rounded-full h-x w-x flex items-center justify-center text-4xl px-3 hover:no-underline" href="https://www.instagram.com/teknikfokus/" target="_blank"><i class="text-blue-primary fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="mx-auto max-w-xl bg-blue-primary pb-5 text-base">
      <div class="grid grid-cols-1 sm:grid-cols-2 text-center">
        <div class="mx-auto my-6">
          <span class="font-bold"> Leo Guldåker, Project manager</span><br>
          <a class="text-white" href="mailto:leo@teknikfokus.se">leo@teknikfokus.se</a>
        </div>
        <div class="mx-auto my-6">
          <span class="font-bold"> Yazan Al-Aswad, Project manager</span><br>
          <a class="text-white" href="mailto:yazan@teknikfokus.se">yazan@teknikfokus.se</a>
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