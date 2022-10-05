<template>
    <div id="for-companies" class="py-12 scroll-smooth">
        <div class="xl:flex space-x-0 text-2xl text-center justify-evenly font-semibold">
            <a href="#About-us" class="bg-blue-primary text-white mx-2 p-8 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>About us</div>
            </a>
            <a href="#Packages" class="bg-blue-primary text-white mx-2 p-8 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>Packages</div>
            </a>
            <a href="#FAQ" class="bg-blue-primary text-white mx-2 p-8 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>FAQ</div>
            </a>
            <a href="#How-to-apply" class="bg-blue-primary text-white mx-2 p-8 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>How to apply</div>
            </a>
        </div>
        
        <div id="About-us" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">About us</h1>
        <div class="xl:flex xl:items-center mt-12">
            <h2>We are teknikfokus</h2>
           <!--
            TODO
           -->
        </div>
        


        <div id="Packages" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">Packages</h1>
        <div class="xl:flex xl:items-center">
            <div class="xl:w-3/5">
                <!-- Righty stuff -->
                <div class="xl:flex mt-12 text-white text-lg font-semibold border-b-2 border-white border-solid">
                    <button @click="setPackage('full-day')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Full day</button>
                    <button @click="setPackage('two-day')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Two days</button>
                    <button @click="setPackage('all-in')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">All in</button>
                </div>
                <PackageDeal :info="currentPackage"></PackageDeal>
            </div>
            <div class="xl:w-2/5 align-center">
                <!-- Lefty stuff -->
            <div class="mt-6 xl:mt-0 p-6 xl:p-12">
                <h1 class="mt-6">-For more information of the signup and the unicorns please visit someLink where Foo and bar are eating squirrels</h1>
                <h1 class="mt-6">There has been a giant mistake made regarding the candy bar there should have been candy and not credit</h1>
                <h1 class="mt-6">some pamphlet link - FOOO BAR BAR FOO</h1>
                <h1 class="mt-6">-Maybe some contact link-</h1>
                <h1 class="px-6">-exampleMail@technofocus.cn-</h1>
                <h1 class="px-6">-exampleMail@area51.gov-</h1>
            </div>
            </div>
        </div>

        <div id="FAQ" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">FAQ</h1>

        <div id="faq" class="pt-5 pb-5">
                <div class="max-w-5´10xl mx-auto" >
                    <div id="faq-accordion" class="divide-y-2 divide-gray-200">
                        <Question v-for="(question, index) in questions" :key="index" :info="question" :index="index"></Question>
                        <ErrorMessage v-if="questions <= 0" text="No frequently asked questions found." />
                    </div>
                </div>
            </div>
        <!--    TODO    -->
        <div class="xl:flex xl:items-center mt-12">
            <div class="xl:w-1/2 xl:px-8 space-y-4">
                <h3 class="text-xl font-semibold">What do the different programmes specialize in?</h3>
                <h2>We kindly refer to their programme pages</h2>
            </div>
            <div class="xl:w-1/2 bg-center bg-cover text-center text-xl p-0 md:text-2xl text-white text-shadow-lg">
                <div class="mt-20 mx-auto grid sm:grid-cols-2 gap-6 md">
                    <a href="https://www.lth.se/utbildning/datateknik300/kurser" target="_blank" class="relative block justify-center align-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        <div>Computer Science and Engineering</div>
                    </a>

                    <a href="https://www.lth.se/utbildning/informations-och-kommunikationsteknik/kurser" target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        <div>Information and Communication Engineering</div>
                    </a>

                    <a href="https://www.lth.se/utbildning/elektroteknik/kurser/" target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        <div>Electrical Engineering</div>
                    </a>

                    <a href="https://www.lth.se/utbildning/medicin-och-teknik/kurser/" target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        <div>Biomedical Engineering</div>
                    </a>
                </div>
            </div>
        </div>

        <div id="How-to-apply" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">How to apply</h1>
        <!--    TODO    -->
        <div class="text-center mt-20">
            <h3 class="text-2xl md:text-4xl font-bold">Other ideas on marketing<br/>your company through Teknikfokus?</h3>
            <p class="text-lg md:text-xl mt-4 text-gray-600">Contact <a href="mailto:events@teknikfokus.se">events@teknikfokus.se</a> and we can discuss your ideas further. <br />We look forward to your suggestions!</p>
        </div>

    </div>
</template>

<script>
import PackageDeal from '../components/PackageDeal'
import ErrorMessage from '../components/ErrorMessage'
import Question from '../components/Question'
const packages = {
    "full-day": {
        packageName: "Full-day package",
        price: "22 000 SEK",
        perks: [
            "Showcase area of 3x2 m²",
            "A stand-up table",
            "Power outlets",
            "Internet connection",
            "Wardrobe",
            "Parking tickets for our guest parking slots",
            "A company host to help you upon arrival and during the fair",
            "Breakfast and lunch for your company representatives",
            "Access to our fair lounge which will provide coffee and fika",
            "2 tickets to the Teknikfokus banquet",
            "Display and presentation of your company on teknikfokus.se",
            "Attendance in the fair's advertisement"
        ]
    },
    "two-day": {
        packageName: "Two days package",
        price: "31 000 SEK",
        perks: [
            "All the perks from the Full-day package extended over 2 days",
        ]
    },
    "all-in": {
        packageName: "All in package",
        price: "50 000 SEK",
        perks: [
            "All the perks from the Two days package",
            "Some other stuff",
        ]
    }
}

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
var currentPackage = packages["full-day"]
export default {
  name: 'ForCompanies',
  components: {
    PackageDeal,
    Question,
    ErrorMessage,
    
  },
  setup(){
    return {packages, questions};
  },
  data(){
    return {currentPackage};
  },
  methods: {
    setPackage(key){
        this.currentPackage = packages[key]
    }
  }
}
</script>
