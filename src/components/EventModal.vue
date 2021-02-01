<template>
    <div id="event-modal" class="event-details">
        <div class="content-wrapper" v-if="info !== undefined">
            <div class="banner" v-if="bannerExists" :style="{'background-image': `url(${endpoint + info.banner._jv.links.image})`}"></div>
            <div class="title">{{info.title}}</div>
            <div class="host" v-if="info.host && info.host.name !== ''">
                Hosted by {{info.host.name}} 
            <img class="host-logo" v-if="logoExists" :src="logoExists ? (endpoint + info.host.logo._jv.links.image) : ''" :alt="info.host.name + ' logo'">
            </div>
            <div class="time">{{date}} {{startTime}}-{{endTime}} </div>
            <div class="description">{{info.description}}</div>
            <div class="body" v-html="sanitizedBody"></div>

            <div class="spots" v-if="!info.signedUp && availableSpots != '-'" >
                <!-- ICON OF EMPTY SEAT HERE --> 
                <span :class="{'few-left': (availableSpots/maxSpots) < 0.2 && availableSpots > 0}">{{availableSpots}}</span>/{{maxSpots}}
            </div>
            <div class="buttons">
                <button class="close" @click="$emit('close')">Close</button>
                <!-- <button class="toggle" v-if="info.bookable" @click="$emit((info.signedUp ? 'withdraw' : 'register'))">{{info.signedUp ? "Withdraw" : "Sign up"}}</button> -->
                <!-- Toggle button above emits two different strings, instead of just 'toggle, to make sure user does what they see on the button. -->
            </div>
        </div>
    </div>
</template>

<script>
import { Event } from '../types'
import {endpoint} from '../store/store.js'

export default {
    name: "EventModal",
    props: {
        info: Event
    },
    data() {
        return {
            endpoint
        }
    },
    methods: {
        timeString(hour, minute) {
            const stylized = (str) => {return (((str+'').length < 2) ? '0' : '') + str}
            return `${stylized(hour)}:${stylized(minute)}`
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
    }
}
</script>

<style>
#event-modal {
    position: absolute;
    top: 500px;
    left: 50%;
    transform: translate(-50%, 0);

    max-width: 85%;
    width: 600px;
    /* min-height: 400px; */

    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    z-index: 500;
    overflow: hidden;
}

.event-details .content-wrapper {
    width: 100%;
    height: 100%;
    padding-bottom: 100px;
    position: relative;
}

.event-details .banner {
    max-height: 340px;
    height: 50vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: -35px;
    margin-bottom: 15px;
}

.event-details .title {
    font-size: 1.6em;
    font-weight: 600;
}

.event-details .description {
    font-size: 1.2em;
    margin-bottom: 0.8rem;
}


.event-details .time {
    font-size: 1em;
    color: var(--primary-dark);
    margin-bottom: 0.5em;
}

.event-details .host {
    color: var(--primary-dark);
    font-size: 1.2em;
}
.event-details .host .host-logo {
    position: relative;
    top: -0.1em;
    max-height: 1.4em;
    max-width: 2em;
}

.event-details .spots {
    position: absolute;
    bottom: 5px;
    left: 20px;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 10px;
}

.event-details .spots .few-left {
    font-size: 1.2em;
    font-weight: 700;
}

.event-details .buttons {
    display: inline-flex;
    position: absolute;
    justify-content: flex-end;

    width: 50%;
    bottom: 15px;
    right: 30px;
}

.event-details .buttons button {
    border: none;
    font-size: 1.5em;
    font-weight: 600;
    transition: color 0.2s, background 0.2s;
}

.event-details .buttons .close {
    color: #333;
}

.event-details .buttons .close:hover { color: #000; }

.event-details .buttons .toggle {
    background: var(--primary);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 20px;
}

.event-details .buttons .toggle:hover { background: var(--primary-dark) };
</style>       