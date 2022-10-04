<template>
    <div id="faq" class="pt-5 pb-5">
        <div class="max-w-2xl mx-auto" >
            <div id="faq-accordion" class="divide-y-2 divide-gray-200">
                <Question v-for="(question, index) in questions" :key="index" :info="question" :index="index"></Question>
                <ErrorMessage v-if="questions <= 0" text="No frequently asked questions found." />
            </div>
        </div>
    </div>

    <div class="card text-center m-3">
        <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3>
        <div class="py-0 bg-center bg-cover text-center text-xl md:text-2xl text-white text-shadow-lg">
                <div class="mt-0 max-w-xl mx-auto grid sm:grid-cols-4 gap-6 px-1 md">
                    
                    <a @click="say('hello')" class="relative block justify-center align-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        Datateknik
                    </a>

                    <a href="https://www.lth.se/utbildning/informations-och-kommunikationsteknik/kurser"  target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        Informations- och kommunikationsteknik
                    </a>

                    <a href="https://www.lth.se/utbildning/elektroteknik/kurser/"  target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        Elektroteknik
                    </a>

                    <a href="https://www.lth.se/utbildning/medicin-och-teknik/kurser/"  target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        Medicin och Teknik
                    </a>
                </div>
            </div>S
        <button onclick="myFunction()">Click me</button> 
        <div class="card-body">
            <div v-for="item in pageOfItems" :key="item.id">{{item.name}}</div>
        </div>
    </div>
</template>

<script>

import Question from '../components/Question'
import ErrorMessage from '../components/ErrorMessage'

const questions = [
            {
                question: "What is Teknikfokus?",
                answer: "Teknikfokus is a career fair arranged by the E- and D-faculties at Lunds Tekniska Högskola. The fair is dedicated towards students who study Computer Science and Engineering, Information and Communication Engineering, Electrical Engineering and Biomedical Engineering. Our goal is to provide a platform where students and companies can network and build relations for the future, but also to inspire students in the fields of their future jobs. Do you have any questions about the fair? Contact our project leaders, Tove Hector, tove@teknikfokus.se or Fredrik Hessner, fredrik@teknikfokus.se."
            },
            {
                question: "When is Teknikfokus?",
                answer: "The fair will take place between 08:00 and 17:00, the 15th & 16th of February. Check out the companies' profiles for more information."
            },
            {
                question: "Who organizes Teknikfokus?",
                answer: "Teknikfokus is arranged by a project group consisting of students from the four programs at the E- and D-faculties  at LTH, who in parallel with their studies prepare the fair and all our events. The goal is to have a fair where everyone feels welcome, and where all attendees feel satisfied with the fair. In addition, the fair would never be able to take place if it wasn’t for all the students that volunteer at the fair. If you have any questions regarding the project group or our volunteers you can contact our project leaders, Tove Hector, tove@teknikfokus.se or Fredrik Hessner, fredrik@teknikfokus.se. You can read about everyone in the project group under ”About us”."
            },
            {
                question: "Which companies will be present at Teknikfokus?",
                answer: "You can find all the companies attending by going to the Companies tab."
            },
            {
                question: "What are students studying at the E- and D-faculties at LTH?",
                answer: "Students at the E- and D- faculties are studying to get a Master of Science in Engineering at the four respective areas: Computer Science and Engineering Information and Communication Engineering Electrical Engineering Biomedical Engineering."
            },
            {
                question: "Where will Teknikfokus be?",
                answer: "E-huset LTH Ole Römers väg 3."
            },
            {
                question: "What does the kontaktsamtal/student sessions mean?",
                answer: "Student Sessions provide companies a possibility to have a private sit down with students on the days of the fair, to talk about summer jobs, internships, exam work or future employment. Interested students can register at the company booth and a link to the student profile and their resume will be available to the company who will schedule a meeting. If you have questions about student sessions, contact one of our project managers. Contact information can be found under ”About us”."
            },
            {
                question: "Who should you contact if you have questions about the companies?",
                answer: "If you have questions about the companies attending Teknikfokus, contact one of our Business managers. Contact information can be found under ”About us”. If you have comments about the companies invited, or feel that a company doesn’t represent Teknikfokus in a good way, contact one of our project managers."
            },
            {
                question: "Have you been treated badly by a participant?",
                answer: "If you or anyone you know has been treated badly during the fair we ask you to contact one of our project managers. If you are a student at LTH we recommend you to also contact your faculties  likabehandlingsombud or trivselmästare. "
            }
      ];

export default {
  name: 'FAQ',
  components: {
    Question,
    ErrorMessage,
},
  setup() {
    return {
      questions,
    }
  }
}
</script>

<style scoped>
</style>
