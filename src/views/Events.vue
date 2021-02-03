<template>
  <div id="events">
    <div class="container pt-5 pb-5">
      <div class="todays-event" v-if="todaysEvents !== undefined && todaysEvents.length > 0">
        <h1>Today's events</h1>
        <Event v-for="todaysEvent in todaysEvents" :info="todaysEvent" :key="todaysEvent.title"/>
        <h1>All events</h1>
      </div>
      <Calendar class="d-none d-lg-block" :events="formattedEvents" :class="{'show': !isLoading && !isError}" @select="handleSelect"/>
      <EventList class="d-block d-lg-none" :events="formattedEvents" :class="{'show': !isLoading && !isError}"/>
      <Loader v-if="isLoading" />
      <ErrorMessage v-if="isError && !isLoading" text="Unable to load events, try again in a moment.<br>If the error persists, feel free to contact us." />
      <EventModal :info="selectedEvent" :class="{'show': showModal}" @close="handleClose" @register="handleRegister" @withdraw="handleWithdraw"/>
      <div class="dark-backdrop" :class="{'show': showModal}" @click="handleClose"></div>
    </div>
  </div>
</template>

<script>
import { status } from 'jsonapi-vuex'
import Calendar from '../components/Calendar/Calendar'
import EventList from '../components/EventList/EventList'
import EventModal from '../components/EventModal'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Event from '../components/EventList/Event'

export default {
  name: 'Events',
  components: {
    Calendar,
    EventList,
    EventModal,
    Loader,
    ErrorMessage,
    Event,
  },
  data() {
    return {
      isLoading: true,
      isError: false,
      selectedEvent: undefined,
      showModal: false
    }
  },
  created() {
    this.reloadEvents()
  },
  methods: {
    formatEvent(jvEvent) {
        let eventStart = new Date(jvEvent.start_time*1000)
        let eventEnd = new Date(jvEvent.end_time*1000)
        return {
            title: jvEvent.title || "",
            description: jvEvent.description || "",
            body: jvEvent.body || "",
            spots: {
                available: -1,
                max: jvEvent.max_attendess || -1
            },
            signedUp: false,
            bookable: jvEvent.bookable,
            banner: jvEvent.banner,
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
            host: (jvEvent.company)
        }
    },
    reloadEvents() {
      this.isLoading = true;
      const onResponse = () => {
          const statuses = Object.values(status.status);
          this.isLoading= statuses.includes(0)
          this.isError = statuses[statuses.length-1] === -1
        }
      status
        .run(() => this.$store.dispatch('jv/get', 'events'))
        .then(onResponse).catch(onResponse)
    },
    handleSelect(event) {
      this.selectedEvent = event;
      this.showModal = true;
    },
    handleClose() {
      this.showModal = false;
    },
    handleRegister() {
      // To be implemented
    },
    handleWithdraw() {
      // To be implemented
    },
  },
  computed: {
    events() {
      return this.$store.getters['jv/get']('events')
    },
    formattedEvents() {
        let events = []
        for (let event of Object.values(this.events)) {
            let formattedEvent = this.formatEvent(event)
            events.push(formattedEvent)
        }
        return events.sort((a,b) => {
          return a.startTime-b.startTime
        })
    },
    todaysEvents() {
      let currentDate = new Date();
      return this.formattedEvents.filter(e => e.date.day == currentDate.getDate() && e.date.month == currentDate.getMonth()+1) 
      // return this.formattedEvents.filter(e => e.date.day == currentDate.getDate() && e.date.month == currentDate.getMonth()) 
    }
  }
  
}
</script>


<style scoped>

h1 {
  text-align: center;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 30px;
  text-transform: capitalize;
}

.dark-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  width: 100vw;
  height: 100vh;

  background: black;
  opacity: 0;
  transition: opacity 0.2s;

  z-index: 400;
  pointer-events: none;
}
.dark-backdrop.show { opacity: 0.2; }

#event-modal {
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}
#event-modal.show { opacity: 1; }


#loader {
  margin-top: 120px;
}

#calendar {
  opacity: 0;
  height: 0;
  transition: opacity 0.2s;
}
#calendar.show { opacity: 1; height: auto;}

.show {
  pointer-events: auto !important;
}
</style>