<template>
    <div id="event-list">
        <div class="event" v-for="event in nonTodayEvents" :key="event.title+event.startTime">
            <Event :info="event" v-if="event !== undefined"/>
        </div>
    </div>
</template>

<script>
import Event from './Event'

export default {
    name: "EventList",
    components: {
        Event
    },
    props: {
        events: Array
    },
    computed: {
        nonTodayEvents() {
            let currentDate = new Date();
            return this.events.filter(e => e.date.day != currentDate.getDate() || e.date.month != currentDate.getMonth()+1) 
        }
    },
}
</script>

<style scoped>
</style>       