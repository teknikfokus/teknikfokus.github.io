<template>
    <div id="About-teknikfokus" class="py-20 bg-blue-primary">
        <div class="flex content container xl:px-24">
            <div class="align-center xl:w-1/2">
                <div class="p-10 text-lg xl:pr-8">
                    <h1 class="text-4xl text-white text-left font-bold hidMe">{{ title }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'UnderNav',
    props: {
        title: {
            type: String,
            default: 'For '
        }
    }
}
</script>
  
<style scoped>
/* CSS-stil om det behövs */
</style>
  