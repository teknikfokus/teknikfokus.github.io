<template>
  <div id="faq">
    <div class="container pt-5 pb-5">
      <h2 class="text-capitalize text-center mb-4">Frequently asked questions</h2>
      <div class="container pt-5">
      <div class="row text-center mb-3">
        <i class="d-block mx-auto fas fa-tools fa-3x"></i>
      </div>
      <div class="row text-center">
        <p class="d-block mx-auto">This site is being set up</p>
      </div>
      <div class="row">
        <div class="col d-none d-lg-block"></div>
        <div class="col col-lg-8" >
          <div id="faq-accordion" v-if="!isLoading && !isError">
            <Question v-for="[index, question] of Object.values(questions).entries()" :key="'header'+index" :info="question" :index="index"></Question>
            <ErrorMessage v-if="Object.values(questions).length <= 0" text="No frequently asked questions found." />
          </div>
          <Loader v-if="isLoading" />
          <ErrorMessage v-if="isError && !isLoading" text="Unable to load FAQ, try again in a moment.<br>If the error persists, feel free to contact us." />
        </div>
        <div class="col d-none d-lg-block"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { status } from 'jsonapi-vuex'
import Question from '../components/Question'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default {
  name: 'FAQ',
  components: {
    Question,
    Loader,
    ErrorMessage
  },
  data() {
    return {
      isLoading: true,
      isError: false,
    }
  },
  created() {
    this.reloadQuestions()
  },
  methods: {
    reloadQuestions() {
      this.isLoading = true;
      const onResponse = () => {
          const statuses = Object.values(status.status);
          this.isLoading= statuses.includes(0)
          this.isError = statuses[statuses.length-1] === -1
        }
      status
        .run(() => this.$store.dispatch('jv/get', 'faq'))
        .then(onResponse).catch(onResponse)
    },
  },
  computed: {
    questions() {
      return this.$store.getters['jv/get']('faqs')
    },
  }
}
</script>

<style scoped>
</style>
