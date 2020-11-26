<template>
    <div id="event-modal">
        <div class="content-wrapper" v-if="info !== undefined">
            <div class="banner" v-if="info.banner !== '' && info.banner !== undefined" :style="{'background-image': `url(${info.banner})`}"></div>
            <div class="title">{{info.title}}</div>
            <div class="time">{{startTime}}-{{endTime}}</div>
            <div class="description" v-html="info.description"></div>

            <div class="spots" v-if="!info.signedUp && availableSpots != '-'" >
                <!-- ICON OF EMPTY SEAT HERE --> 
                <span :class="{'few-left': (availableSpots/maxSpots) < 0.2 && availableSpots > 0}">{{availableSpots}}</span>/{{maxSpots}}
            </div>
            <div class="buttons">
                <button class="close" @click="$emit('close')">Close</button>
                <button class="toggle" @click="$emit((info.signedUp ? 'withdraw' : 'register'))">{{info.signedUp ? "Withdraw" : "Sign up"}}</button>
                <!-- Toggle button above emits two different strings, instead of just 'toggle, to make sure user does what they see on the button. -->
            </div>
        </div>
    </div>
</template>

<script>
import { Event } from '../types'

export default {
    name: "EventModal",
    props: {
        info: Event
    },
    methods: {
        timeString(hour, minute) {
            let stylized = (str) => {return ((str.length < 2) ? '0' : '') + str}
            return (stylized(hour+'') + ":" + stylized(minute+''))
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
        availableSpots() {
            const spots = this.info.spots;
            return (spots.available < 0) ? '-' : spots.available;
        },
        maxSpots() {
            const spots = this.info.spots;
            return (spots.max < 0) ? '-' : spots.max;
        }
    }
}
</script>

<style scoped>
#event-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 85%;
    width: 600px;
    /* min-height: 400px; */

    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    z-index: 2000;
    overflow: hidden;
}

.content-wrapper {
    width: 100%;
    height: 100%;
    padding-bottom: 100px;
    position: relative;
}

.banner {
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: -35px;
    margin-bottom: 15px;
}

.title {
    font-size: 1.5rem;
    font-weight: 600;
}

.description {
    font-size: 1.2rem;
}

.time {
    font-size: 1.2rem;
    color: var(--primary-dark);
    margin-bottom: 20px;
}

.spots {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 10px;
}

.spots .few-left {
    font-size: 1.2em;
    font-weight: 700;
}

.buttons {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
}

.buttons button {
    border: none;
    font-size: 1.5rem;
    font-weight: 600;
    transition: color 0.2s, background 0.2s;
}

.buttons .close {
    color: #333;
}

.buttons .close:hover { color: #000; }

.buttons .toggle {
    background: var(--primary);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 20px;
}

.buttons .toggle:hover { background: var(--primary-dark) };
</style>       