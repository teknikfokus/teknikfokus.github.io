<template>
    <div id="event">
        <div class="title">{{info.title}}</div>
        <div class="host" v-if="info.host && info.host.name !== ''">
            Hosted by {{info.host.name}} 
            <img class="host-logo"  :src="endpoint + info.logo._jv.links.image" 
            v-if="info.host.logo && info.host.logo._jv && info.host.logo._jv.links && info.host.logo._jv.links.image">
        </div>
        <div class="time">{{startTime}}-{{endTime}}</div>
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

export default {
    name: "EventList",
    props: {
        info: Object
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
        },
        sanitizedBody() {
            return [...this.info.body].map(c => (c === '\n') ? '<br>' : c).join('')
        }
    },
    methods: {
        timeString(hour, minute) {
            let stylized = (str) => {return ((str.length < 2) ? '0' : '') + str}
            return (stylized(hour+'') + ":" + stylized(minute+''))
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

    background: white;
    border-radius: 20px;
    padding: 30px;
    padding-bottom: 50px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
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
    margin-bottom: 0.8rem;
}


.time {
    font-size: 1.2rem;
    color: var(--primary-dark);
    margin-bottom: 0.5rem;
}

.host {
    color: var(--primary-dark);
}
.host .host-logo {
    position: relative;
    top: -0.05rem;
    height: 1.5rem;
}

.spots {
    position: absolute;
    bottom: 5px;
    left: 20px;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 10px;
}

.spots .few-left {
    font-size: 1.2em;
    font-weight: 700;
}

.buttons {
    display: inline-flex;
    position: absolute;
    justify-content: flex-end;

    width: 50%;
    bottom: 15px;
    right: 30px;
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