<template>
  <div id="events">
    <div class="container pt-5">
      <Calendar :events="events" :class="{'show': !isLoading && !isError}" @select="handleSelect"/>
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
import EventModal from '../components/EventModal'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default {
  name: 'Events',
  components: {
    Calendar,
    EventModal,
    Loader,
    ErrorMessage
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
  }
  
}
</script>


<style scoped>
.dark-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  width: 100%;
  height: 100vh;

  background: black;
  opacity: 0;
  transition: opacity 0.2s;

  z-index: 1000;
  pointer-events: none;
}
.dark-backdrop.show { opacity: 0.2; }

#event-modal {
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}
#event-modal.show { opacity: 1; }


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