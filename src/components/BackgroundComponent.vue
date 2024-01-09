


<template>
    <div :class="['background-component ', customClass]">
    </div>
</template>

<script>
export default {
    name: 'BackgroundComponent',
    props: {
        customClass: {
            type: String,
            default: ''
        },

    }
};
</script>

<style scoped>
.background-component {
    /* background-image: url('../assets/images/massa2020blur_large.jpg');

    position: fixed;

    left: 0;
    top: 0;

    min-width: 100%;
    min-height: 100%;

    z-index: -1;



    background-size: cover;
    background-position: bottom; */
    /* background-image: url('../assets/images/massa2020blur_large.jpg'); */

    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;


}

@media (max-width: 1257px) {
    .background-component {
        position: absolute;

    }
}
</style>