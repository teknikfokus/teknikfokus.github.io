<template>
    <div id="event-list">
        <div class="event" v-for="event in events" :key="event.title">
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
    },
}
</script>

<style scoped>
</style>       