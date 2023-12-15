<!-- <template>
    <div class="background-component">
    </div>
</template>
  
<script>

export default {
    name: 'BackgroundComponent',

};
</script>
  
<style scoped>
.background-component {
    background-image: url('../assets/images/newbgmassa20.jpg');

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-position: center;
    background-size: cover;
    z-index: -1;
}
</style>
   -->


<template>
    <div :class="['background-component', customClass]">
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-position: center;
    background-size: cover;
    z-index: -1;
}
</style>
