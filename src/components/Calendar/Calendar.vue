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
        events: Object
    },
    components: {
        Day
    },
    data() {
        return {
            weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            abbreviatedWeekdays: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            fairDate: {
                day: 17,
                month: 2
            },
            defaultStartingDate: new Date(2021, 1, 1)
        }
    },
    methods: {
        handleSelect(event) {
            this.$emit('select', event)
        },
        formatEvent(jvEvent) {
            let eventStart = new Date(jvEvent.start_time*1000)
            let eventEnd = new Date(jvEvent.end_time*1000)
            return {
                title: jvEvent.title || "",
                description: jvEvent.description || "",
                spots: {
                    available: -1,
                    max: jvEvent.max_attendess || -1
                },
                signedUp: false,
                bookable: jvEvent.bookable,
                banner: (jvEvent.banner) ? jvEvent.banner.image_uri || "" : "",
                startTime: eventStart.getTime(),
                endTime: eventEnd.getTime(),
                date: {
                    day: eventStart.getDate(),
                    month: eventStart.getMonth()+1
                },
                time: {
                    start: {
                        hour: eventStart.getHours(),
                        minute: eventStart.getMinutes()
                    },
                    end: {
                        hour: eventEnd.getHours(),
                        minute: eventEnd.getMinutes()
                    }
                },
                host: (jvEvent.company) ? {
                    name: jvEvent.company.name || ""
                } : undefined
            }
        }
    },
    computed: {
        weeks() {
            const weeks = [];
            let formattedEvents = this.formattedEvents

            const millisecondsInDay = 86400000
            let firstEventDate = this.defaultStartingDate
            let startDate = new Date(firstEventDate.getTime() - (firstEventDate.getDay())*millisecondsInDay + millisecondsInDay)
            let numberOfWeeks = 3;
            if (formattedEvents.length > 0 ) {
                firstEventDate = new Date(formattedEvents[0].startTime)
                startDate = new Date(firstEventDate.getTime() - (firstEventDate.getDay())*millisecondsInDay + millisecondsInDay)
                let lastEventDate = new Date(formattedEvents[formattedEvents.length-1].endTime)
                let endDate = new Date(lastEventDate.getTime() + (7-lastEventDate.getDay())*millisecondsInDay + millisecondsInDay)
                numberOfWeeks = Math.round((endDate.getTime()-startDate.getTime())/(7*millisecondsInDay))
            } 

            let date = {
                day: startDate.getDate(),
                month: startDate.getMonth()+1,
                year: startDate.getFullYear(),
            }
            let incrementDate = () => {
                date.day++;
                if (date.day > this.daysInMonth[date.month-1]) {
                    date.day = 1;
                    date.month = (date.month+1)%12
                    if (date.month === 0) date.year++;
                }
            }/*
            let timeToInt = (time) => {
                time.hour*100+time.minute;
            }*/
            for (let weekIndex = 0; weekIndex < numberOfWeeks; weekIndex++) {
                const week = {
                    days: [],
                    index: weekIndex
                };
                for (let dayIndex = 0; dayIndex < this.weekdays.length; dayIndex++) {
                    const events = formattedEvents.filter(e => (e.date.day == date.day && e.date.month == date.month))
                    events.sort((a,b) => a.startTime-b.startTime)
                    week.days.push({
                        events: events,
                        date: {...date}
                    })
                    incrementDate()
                }
                weeks.push(week)
            }
            return weeks;
        },
        formattedEvents() {
            let events = []
            for (let event of Object.values(this.events)) {
                let formattedEvent = this.formatEvent(event)
                events.push(formattedEvent)
            }

            return events
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