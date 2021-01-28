<template>
    <div id="company-carousel">
        <Loader v-if="isLoading && !isError" />
        <transition-group name="list-complete" tag="div" v-if="!isLoading && !isError" :class="{'even': evenLength}">
            <div class="company list-item" v-for="(logo, index) in logos" :key="logo"
                :class="{'center': (index == (logos.length-(evenLength ? 2 : 1))/2)}">
                <img :data-src="endpoint+logo" class="lazyload" />
            </div>
        </transition-group>
    </div>
</template>

<script>
import { status } from 'jsonapi-vuex'
import {endpoint} from '../store/store.js'
import Loader from '../components/Loader'
import 'lazysizes'

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
                let first = this.logos.shift()
                this.logos.push(first);
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
            if (!this.shuffledCompanies || this.shuffledCompanies.length <= 0) {
                return []
            }

            return this.shuffledCompanies.map(c => (c && c.logo && c.logo._jv && c.logo._jv.links) ? c.logo._jv.links.image : undefined).filter(l => l !== undefined)
        },
        filteredCompanies() {
            return Object.values(this.companies).filter(company => company.days_attending && Object.values(company.days_attending).length > 0 && company.name.toLowerCase() !== 'teknikfokus')
        },
        shuffledCompanies() {
            let shuffledArr = [...this.filteredCompanies]
            for (let i = shuffledArr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
            }
            return shuffledArr
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
}

.company img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    max-width: 100%;
    max-height: 100%;
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