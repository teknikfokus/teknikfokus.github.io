<template>
    <div class="hidden xl:grid xl:w-1/2 mx-auto">
        <div class="flex flex-wrap justify-around items-center p-10 hidMe">
            <img v-for="(image, index) in images" :key="index" :src="image.src"
                class="w-1/3 mt-2 rotate-3 drop-shadow-md border-6 border-b-12 border-classic-white hover:scale-[200%] hover:z-10 transition-transform duration-500 "
                :alt="image.alt" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'VintageGallery',
    data() {
        return {
            images: [
                { src: require('@/assets/images/mpg6.jpg'), alt: 'Group of attendees' },
                { src: require('@/assets/images/mpg1.jpg'), alt: 'Group of attendees' },
                { src: require('@/assets/images/mpg2.jpg'), alt: 'Group of attendees' },
                { src: require('@/assets/images/mpg3.jpg'), alt: 'Group of attendees' },
                { src: require('@/assets/images/mpg4.jpg'), alt: 'Group of attendees' },
                { src: require('@/assets/images/mpg5.jpg'), alt: 'Group of attendees' }
            ]
        }
    }
}
</script>

<style scoped></style>
