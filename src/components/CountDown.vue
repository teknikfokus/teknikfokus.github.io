<template>
    <div class="text-3xl md:text-5xl mt-10">
        <div v-if="timeLeft > 0" class="mt-6 flex justify-center space-x-5" >
            <div>
                <div class="leading-4">{{ days }}</div>
                <span class="text-base md:text-xl ">{{ addPluralCharS(days, 'Day') }}</span>
            </div>
            <div>
                <div class="leading-4">{{ hours }}</div>
                <span class="text-base md:text-xl ">{{ addPluralCharS(hours, 'Hour') }}</span>
            </div>
            <div>
                <div class="leading-4">{{ minutes }}</div>
                <span class="text-base md:text-xl ">{{ addPluralCharS(minutes, 'Minute') }}</span>
            </div>
            <div>
                <div class="leading-4">{{ seconds }}</div>
                <span class="text-base md:text-xl ">{{ addPluralCharS(seconds, 'Second') }}</span>
            </div>

        </div>
        <div v-else>
            <div v-if="date(firstDate, 'end') > Date.now()">
                Open to {{ clockTime(date(firstDate, 'end')) }} today!
                <div class="text-3xl text-gray-200 block mt-6">({{ clockTime(date(secondDate)) }} to {{ clockTime(date(secondDate, 'end')) }} tomorrow)</div>
            </div>
            <div v-else-if="date(secondDate) > Date.now()">
                <div>
                    Thanks for {{ date(firstDate).getDay() == new Date().getDay() ? 'today' : 'yesterday' }}!
                </div>
                <div class="block mt-1 text-5xl text-gray-200">
                    We open {{ date(firstDate).getDay() == new Date().getDay() ? 'tomorrow' : 'today' }} again {{ clockTime(date(secondDate)) }}
                </div>
            </div>
            <div v-else-if="date(secondDate, 'end') > Date.now()">
                Last day, open untill {{ clockTime(date(secondDate, 'end')) }}!
            </div>
            <div v-else-if="date(secondDate, 'end') < Date.now()">
                Thank you for this year!
            </div>
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
        },

        addPluralCharS(number, string) {
            return number == 1 ? string : string + 's';
        }
    }
}
</script>

<style scoped>
</style>