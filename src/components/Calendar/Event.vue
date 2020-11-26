<template>
    <div id="event" ref="root" @click="$emit('select')">
        <div class="title">
            {{info.title}}
        </div>
        <div class="time">
            {{startTime}}-{{endTime}}
        </div>
        <div class="spots d-none d-md-block" v-if="!info.signedUp && availableSpots != '-'" >
            <!-- ICON OF EMPTY SEAT HERE --> 
            <span :class="{'few-left': (availableSpots/maxSpots) < 0.2 && availableSpots > 0}">{{availableSpots}}</span>/{{maxSpots}}
        </div>
        <div class="going d-none d-md-block" v-if="info.signedUp">
            <!-- ICON HERE -->Going
        </div>
    </div>
</template>

<script>
import { Event } from '../../types'

export default {
    name: "Event",
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
#event {
    display: block;
    width: 100%;
    height: 55px;
    /* overflow: hidden; */
    position: relative;

    /* padding: 2px; */
    padding: 5px;
    padding-top: 10px;
    background: var(--primary);
    color: white;

    cursor: pointer;
    transition: background 0.2s;
    box-sizing: border-box;
}

#event.signedUp {
    border: 2px solid green;
}

#event:hover {
    background: var(--primary-dark);
}

.title {
    line-height: 1.1;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 25px;
    overflow: hidden;
}

.spots, .time , .going{
    position: absolute;
    bottom: 0;
    padding: 5px;
    line-height: 1;
    /* background: inherit; */
}

.spots, .going { right: 0; }

.time { left: 0; }

.spots .few-left {
    /* color: #f00; */
    font-weight: bold;
    font-size: 1.2rem;
}
</style>       