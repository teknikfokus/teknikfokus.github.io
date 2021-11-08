<template>
    <div class="text-6xl py-14">
        <span v-if="timeLeft > 0">
            {{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}
        </span>
        <div v-else>
            <span v-if="date(firstDate, 'end') > Date.now()">
                Open to {{ clockTime(date(firstDate, 'end')) }} today!
                <span class="text-3xl text-gray-200 block mt-6">({{ clockTime(date(secondDate)) }} to {{ clockTime(date(secondDate, 'end')) }} tomorrow)</span>
            </span>
            <span v-else-if="date(secondDate) > Date.now()">
                <span>
                    Thanks for {{ date(firstDate).getDay() == new Date().getDay() ? 'today' : 'yesterday' }}!
                </span>
                <span class="block mt-1 text-5xl text-gray-200">
                    We open {{ date(firstDate).getDay() == new Date().getDay() ? 'tomorrow' : 'today' }} again {{ clockTime(date(secondDate)) }}
                </span>
            </span>
            <span v-else-if="date(secondDate, 'end') > Date.now()">
                Last day, open untill {{ clockTime(date(secondDate, 'end')) }}!
            </span>
            <span v-else-if="date(secondDate, 'end') < Date.now()">
                Thank you for this year!
            </span>
        </div>
    </div>
</template>

<script>
import OpenHours from '/src/types'

export default {
    name: "CountDown",
    props: {
        firstDate: OpenHours,
        secondDate: OpenHours,
    },
    data() {
        return {
            timeLeft: this.dateInMillis(this.firstDate) - Date.now(),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    },
    beforeMount(){
        this.calculateTime();
    },

    watch: {

        timeLeft: {
            handler(value) {

                if (value > 0) {
                    setTimeout(() => {
                        this.timeLeft -= 1000;
                        this.calculateTime();
                    }, 1000);
                }

            },
            immediate: true // This ensures the watcher is triggered upon creation
        }

    },
    methods: {
        dateInMillis(openHours) {
            return this.date(openHours).getTime();
        },

        date(openHours, time = "start") {
            return new Date(
                openHours.date.year, 
                openHours.date.month - 1,  //Month starts at 0
                openHours.date.day, 
                openHours.time[time].hour, 
                openHours.time[time].minute ?? 0
            );
        },

        calculateTime() {
            this.days = this.addZero(Math.floor(this.timeLeft / (1000 * 60 * 60 * 24)));
            this.hours = this.addZero(Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            this.minutes = this.addZero(Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
            this.seconds = this.addZero(Math.floor((this.timeLeft % (1000 * 60)) / 1000));
        },

        addZero(n) {
            return (n < 10) ? ("0" + n) : n;
        },

        clockTime(date) {
            return this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes());
        }
    }
}
</script>

<style scoped>
</style>