<template>
  <footer class="absolute w-full bottom-0 text-white bg-blue-primary">
    <div class="max-w-xxs mx-auto mt-5 mb-1 ">
      <div class="grid grid-cols-3 ">
        <a class="bg-white rounded-full h-x w-x flex items-center justify-center text-4xl mx-auto px-3 mx-10" href="https://www.facebook.com/teknikfokus"><i class="text-blue-primary fab fa-facebook-f "></i></a>
        <a class="bg-white rounded-full h-x w-x flex items-center justify-center text-4xl mx-auto px-3 mx-10" href="https://www.linkedin.com/company/teknikfokus/"><i class="text-blue-primary fab fa-linkedin-in"></i></a>
        <a class="bg-white rounded-full h-x w-x flex items-center justify-center text-4xl mx-auto px-3 mx-10" href="https://www.instagram.com/teknikfokus/"><i class="text-blue-primary fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="mx-auto max-w-xl bg-blue-primary pb-5 text-base">
      <div class="grid grid-cols-1 sm:grid-cols-2 text-center">
        <div class="mx-auto my-6">
          <span class="font-bold">Fredrik Hessner, Project manager</span><br>
          <a class="text-white" href="mailto:fredrik@teknikfokus.se">fredrik@teknikfokus.se</a>
        </div>
        <div class="mx-auto my-6">
          <span class="font-bold"> Tove Hector, Project manager</span><br>
          <a class="text-white" href="mailto:tove@teknikfokus.se">tove@teknikfokus.se</a>
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