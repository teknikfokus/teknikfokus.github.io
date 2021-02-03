<template>
    <div id="event" class="event-details">
        <div class="banner" v-if="bannerExists" :style="{'background-image': `url(${endpoint + info.banner._jv.links.image})`}"></div>
        <div class="title">{{info.title}}</div>
        <div class="host" v-if="info.host && info.host.name !== ''">
            Hosted by {{info.host.name}} 
            <img class="host-logo" v-if="logoExists" :src="logoExists ? (endpoint + info.host.logo._jv.links.image) : ''" :alt="info.host.name + ' logo'">
        </div>
        <div class="time">{{dayString}} {{date}} {{startTime}}-{{endTime}} </div>
        <div class="description">{{info.description}}</div>
        <div class="body" v-html="sanitizedBody"></div>

        <div class="spots" v-if="!info.signedUp && availableSpots != '-'" >
            <!-- ICON OF EMPTY SEAT HERE --> 
            <span :class="{'few-left': (availableSpots/maxSpots) < 0.2 && availableSpots > 0}">{{availableSpots}}</span>/{{maxSpots}}
        </div>
        <div class="buttons">
            <!-- <button class="toggle" v-if="info.bookable">{{info.signedUp ? "Withdraw" : "Sign up"}}</button> -->
            <!-- Toggle button above emits two different strings, instead of just 'toggle, to make sure user does what they see on the button. -->
        </div>
    </div>
</template>

<script>
import {endpoint} from '../../store/store.js'

export default {
    name: "EventList",
    props: {
        info: Object
    },
    data() {
        return {
            endpoint
        }
    },
    computed: {
        startTime() {
            const start = this.info.time.start;
            return this.timeString(start.hour, start.minute)
        },
        endTime() {
            const end = this.info.time.end;
            return this.timeString(end.hour, end.minute)
        },
        date() {
            const stylized = (str) => {return (((str+'').length < 2) ? '0' : '') + str+''}
            return `${stylized(this.info.date.day)}/${stylized(this.info.date.month)}`
        },
        availableSpots() {
            const spots = this.info.spots;
            return (spots.available < 0) ? '-' : spots.available;
        },
        maxSpots() {
            const spots = this.info.spots;
            return (spots.max < 0) ? '-' : spots.max;
        },
        sanitizedBody() {
            return [...this.info.body].map(c => (c === '\n') ? '<br>' : c).join('')
        },
        logoExists() {
            return this.info.host.logo && this.info.host.logo._jv && this.info.host.logo._jv.links && this.info.host.logo._jv.links.image
        },
        bannerExists() {
            return this.info.banner && this.info.banner._jv && this.info.banner._jv.links && this.info.banner._jv.links.image
        },
        dayString() {
            if (this.info.startTime === undefined) return '';
            const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            return names[(new Date(this.info.startTime).getDay()+6)%7];
        }
    },
    methods: {
        timeString(hour, minute) {
            const stylized = (str) => {return (((str+'').length < 2) ? '0' : '') + str}
            return `${stylized(hour)}:${stylized(minute)}`
        }
    },
}
</script>

<style scoped>
#event {
    position: relative;
    max-width: 100%;
    width: 600px;
    margin: 0 auto;
    margin-bottom: 30px;
    overflow: hidden;

    background: white;
    border-radius: 20px;
    padding: 30px;
    padding-bottom: 50px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
}
</style>       