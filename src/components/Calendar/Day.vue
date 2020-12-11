<template>
    <div id="day">
        <div class="date">{{dateString}}</div>
        <div class="events" :class="{'end': info.events.length == 1 && info.events[0].time.start.hour > 15}">
            <Event :info="event" v-for="[index, event] in info.events.entries()" :key="dateString+index" @select="$emit('select', event)"/>
        </div>
    </div>
</template>

<script>
import Event from './Event'

export default {
    name: "Day",
    components: {
        Event
    },
    props: {
        info: {
            date: {
                day: Number,
                month: Number
            },
            events: Array
        }
    },
    computed: {
        dateString() {
            return this.info.date.day + '/' + this.info.date.month
        }
    }
}
</script>

<style scoped>
#day {
    display: inline-block;
    position: relative;
    width: 1px;
    flex-grow: 1;
    height: 150px;
    margin-left: -1px; /* For border */
    margin-top: -1px; /* For border */
    border: 1px solid var(--footer-color);
    background: #eee;
}

#day:last-child { margin-right: -1px; }

.date {
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    color: var(--primary)
}
.events {
    margin-top: 30px;
    height: 100%;
    height: calc(100% - 30px);


    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.events.end {
    justify-content: flex-end;
}
</style>       