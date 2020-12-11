<template>
    <div id="errorMsg">
        <div class="msg" v-if="text" v-html="text"></div>
        <div class="code" v-if="code">(Error code: {{code}})</div>
    </div>
</template>

<script>
export default {
    name: "ErrorMessage",
    props: {
        text: undefined,
        code: undefined
    }
}
</script>

<style scoped>
</style>