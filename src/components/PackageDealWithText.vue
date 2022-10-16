<template>
  <div id="packageDealWithText" class="packageDealClass">
    <div class="relativeblock justify-center align-center py-6 px-6 text-lg font-medium rounded-b-md rounded-tr-md text-white bg-blue-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
      <span class="position text-3xl">{{info.packageName}}</span>
      <h1 class="text-xl pl-2">{{info.price}}</h1>
      <h1 class="text-2xl mt-2">Includes:</h1>
      <div class="justify-center align-center">
        <li v-for="item in info.perks" :key="item">
          {{item}}
        </li>
      </div>
      <div
        v-for="item in info.text"
        :key="item"
        class="py-2"
        v-html="item">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PackageDealWithText",
    props: {
      info: {
        packageName: String,
        price: String,
        text: [String],
        perks: [String],
      },
    },
    methods: {
      setInfo(newInfo) {
        alert(newInfo)
      }
    }
  }
</script>

<style scoped>
  .relativeblock {
    min-height: 650px;
  }
</style>
