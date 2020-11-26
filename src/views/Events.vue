<template>
  <div id="events">
    <div class="container pt-5">
      <Calendar :events="events" @select="handleSelect"/>
      <EventModal :info="selectedEvent" :class="{'show': showModal}" @close="handleClose" @register="handleRegister" @withdraw="handleWithdraw"/>
      <div class="dark-backdrop" :class="{'show': showModal}" @click="handleClose"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calendar from '../components/Calendar/Calendar'
import EventModal from '../components/EventModal'

export default {
  name: 'Events',
  components: {
    Calendar,
    EventModal
  },
  data() {
    return {
      selectedEvent: undefined,
      showModal: false
    }
  },
  methods: {
    handleSelect(event) {
      this.selectedEvent = event;
      this.showModal = true;
    },
    handleClose() {
      this.showModal = false;
      setTimeout(() =>
        this.selectedEvent = undefined, 400);
    },
    handleRegister() {
      // To be implemented
    },
    handleWithdraw() {
      // To be implemented
    }
  },
  computed: {
    ...mapState({
      events: state => state.events.events
    })
  }
}
</script>


<style scoped>
.dark-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
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

.show {
  pointer-events: auto !important;
}
</style>