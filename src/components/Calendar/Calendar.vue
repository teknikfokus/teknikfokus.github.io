<template>
    <div id="calendar">
        <div class="headers">
            <div class="weekday d-none d-md-block" v-for="weekday in weekdays.slice(0,5)" :key="weekday">
                {{weekday}}
            </div>
            <div class="weekday d-block d-md-none" v-for="weekday in abbreviatedWeekdays.slice(0,5)" :key="weekday">
                {{weekday}}
            </div>
        </div>
        <div class="calendar">
            <div class="week" v-for="week in weeks" :key="week.weekIndex">
                <Day :info="day" v-for="day in week.days.slice(0,5)" :key="day.date.day+'/'+day.date.month" @select="handleSelect"/>
            </div>
        </div>
    </div>
</template>

<script>
import Day from './Day';

export default {
    name: "Question",
    props: {
        events: {
            type: Array,
            default: () => []
        }
    },
    components: {
        Day
    },
    data() {
        return {
            weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            abbreviatedWeekdays: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            startingDay: 1, //Change this to the day of the month the first monday is
            startingMonth: 2, // Change this to starting month
            numberOfWeeks: 3, // Change this to whatever you need
            fairDate: {
                day: 17,
                month: 2
            }
        }
    },
    methods: {
        handleSelect(event) {
            this.$emit('select', event)
        }
    },
    computed: {
        weeks() {
            console.log(this.events);
            const weeks = [];
            let date = {
                day: this.startingDay,
                month: this.startingMonth
            }
            let incrementDate = () => {
                date.day++;
                if (date.day > this.daysInMonth[date.month-1]) {
                    date.day = 1;
                    date.month++;
                }
            }/*
            let timeToInt = (time) => {
                time.hour*100+time.minute;
            }*/
            for (let weekIndex = 0; weekIndex < this.numberOfWeeks; weekIndex++) {
                const week = {
                    days: [],
                    index: weekIndex
                };
                for (let dayIndex = 0; dayIndex < this.weekdays.length; dayIndex++) {
                    const events = this.events.filter(e => (e.date.day == date.day && e.date.month == date.month))
                    week.days.push({
                        events: events,
                        date: {...date}
                    })
                    incrementDate()
                }
                weeks.push(week)
            }
            return weeks;
        }
    }
}
</script>

<style scoped>
#calendar {
    border: 3px solid var(--footer-color);
}
.headers {
    display: flex;
    background: var(--primary);
    padding: 15px 0;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
}
.weekday {
    flex-grow: 1;
    width: 0;
    /* display: inline-block; */
}
.week {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.week:first-child #day {
    border-top: none;
}

</style>