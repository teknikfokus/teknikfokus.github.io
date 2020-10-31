<template>
    <div id="company-carousel">
        <transition-group name="list" tag="div">
            <div class="company list-item" v-for="(company, index) in companies" :key="company.name"
                :style="{'background-image': `url('${company.logo}')`}"
                :class="{'center': (index == (companies.length-1)/2)}">
                
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "CompanyCarousel",
    data() {
        return {
        companies: []
        }
    },
    methods: {
        moveForward() {
            if (this.companies.length > 1) {
                let last = this.companies.pop()
                this.companies.unshift(last);
            }
        }
    },
    created() {
        // TODO: LOAD COMPANIES
        setInterval(this.moveForward, 1500);
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
    margin: 0 20px !important;
    z-index: 10;
}

.list-item {
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