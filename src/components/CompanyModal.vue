<template>
    <div id="company-modal">
        <div class="content-wrapper" v-if="info !== undefined">
            <div class="logo" v-if="info.logo && 
                                    info.logo._jv && 
                                    info.logo._jv.links &&
                                    info.logo._jv.links.image" :style="{'background-image': 'url('+endpoint+info.logo._jv.links.image+')'}">
            </div>
            <div class="name">{{info.name}}</div>
            <div class="description" v-html="sanitizedBody"></div>
            <button class="close" @click="$emit('close')">Close</button>
        </div>
    </div>
</template>

<script>
import {endpoint} from '../store/store.js'

export default {
    name: "CompanyModal",
    props: {
        info: Object
    },
    data() {
        return {
            endpoint
        }
    },
    computed: {
        sanitizedBody() {
            return [...this.info.body].map(c => (c === '\n') ? '<br>' : c).join('')
        }
    }
}
</script>

<style scoped>
#company-modal {
    position: absolute;
    top: 500px;
    left: 50%;
    transform: translate(-50%, 0);

    max-width: 85%;
    width: 600px;
    /* min-height: 400px; */

    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    z-index: 500;
    overflow: hidden;
}

.content-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}

.logo {
    max-width: 70%;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    margin-bottom: 15px;
}

.name {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.description {
    font-size: 1.2rem;
    line-height: 1.5em;
    margin-bottom: 30px;
}

.buttons {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
}

button {
    border: none;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    transition: all 0.2s;
}

button:hover { color: #000; }
</style>