<template>
    <div id="company-carousel">
        <Loader v-if="isLoading && !isError" />
        <transition-group name="list-complete" tag="div" v-if="!isLoading && !isError" :class="{'even': evenLength}">
            <div class="company list-item" v-for="(logo, index) in logos" :key="logo"
                :style="{'background-image': `url('${endpoint+logo}')`}"
                :class="{'center': (index == (logos.length-(evenLength ? 2 : 1))/2)}">
                
            </div>
        </transition-group>
    </div>
</template>

<script>
import { status } from 'jsonapi-vuex'
import {endpoint} from '../store/store.js'
import Loader from '../components/Loader'

export default {
    name: "CompanyCarousel",
    components: {
        Loader
    },
    data() {
        return {
            isLoading: true,
            isError: false,
            logos: [],
            evenLength: false, // True if logos length is even
            endpoint
        }
    },
    created() {
        this.reloadCompanies()
        this.loadLogos();
        setInterval(this.moveForward, 2500);
    },
    methods: {
        moveForward() {
            if (this.logos.length > 1) {
                let last = this.logos.pop()
                this.logos.unshift(last);
            }
        },
        reloadCompanies() {
            this.isLoading = true;
            const onResponse = () => {
                const statuses = Object.values(status.status);
                this.isLoading= statuses.includes(0)
                this.isError = statuses[statuses.length-1] === -1
                }
            status
                .run(() => this.$store.dispatch('jv/get', 'companies'))
                .then(onResponse).catch(onResponse)
        },
        // Load local copy of state logos
        loadLogos(iteration=0) {
            let logosCopy = [].concat(this.stateLogos)
            if ((logosCopy === undefined || logosCopy.length === 0) && iteration < 20) {
                setTimeout(() => {this.loadLogos(iteration+1)}, 50)
            } else {
                this.evenLength = logosCopy.length % 2 == 0;
                this.logos = logosCopy;
            }
        }
    },
    computed: {
        companies() {
            return this.$store.getters['jv/get']('companies')
        },
        stateLogos() {
            if (!Object.values(this.companies) || Object.values(this.companies).length <= 0) {
                return []
            }

            return Object.values(this.companies).map(c => (c && c.logo && c.logo._jv && c.logo._jv.links) ? c.logo._jv.links.image : undefined).filter(l => l !== undefined)
        }
    }
}
</script>

<style scoped>
/* Carousel */
#company-carousel > div{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;


    position: relative;
    height: 160px;
    margin: 0 auto;
    white-space: nowrap;
    position: relative;

    margin-bottom: 50px;
    margin-top: 20px;
    box-sizing: content-box;
}

#company-carousel > div.even .company {
    left: 75px; /* Width + Margin */
}

.company {
    display: inline-block;
    position: relative;
    flex-shrink: 0;
    margin: 0 15px;

    width: 120px;
    height: 60px;
    opacity: 1;
    left: 0;
    cursor: normal;
    opacity: 0.4;
    z-index: 2;

    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.company:first-child, .company:last-child {
    opacity: 0;
    
}

.company.center {
    opacity: 1;
    width: 200px;
    height: 90px;
    /* transform: scale(1.7); */
    margin: 0 20px !important;
    z-index: 10;
}

.list-item {
    transform: scale(1);
    transition-property: all;
    transition-duration: 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.list-leave-active {
  position: absolute;
}

</style>