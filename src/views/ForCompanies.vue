<template>
    <div id="for-companies" class="py-4 scroll-smooth">
        <div class="mx-auto grid sm:grid-cols-4 gap-4 md text-2xl text-center font-semibold">
            <a href="#About-us" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>About us</div>
            </a>
            <a href="#Our-offers" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>Our offers</div>
            </a>
            <a href="#FAQ" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>FAQ</div>
            </a>
            <a href="#How-to-apply" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>How to apply</div>
            </a>
        </div>
        
        <div id="About-us" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">About us</h1>
        <div class="xl:flex xl:items-center mt-12">
            <h2 class ="text-center text-lg">TeknikFokus is the largest carrier fair within Biomedical, ComputerScience, Communication, Electrical and Information technologies engineering in the Nordics. With a yearly participation rate of 60 to 80 companies, you can be certain that you will meet the talent neccessary to raise your goal post.</h2>
           <!--
            TODO
           -->
        </div>
        
        <div id="Our-offers" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">Our offers</h1>
        <div class="xl:flex flex-row-reverse xl:items-center">
            <div class="xl:w-2/5 align-center">
                <!-- Lefty stuff -->
                <div class="xl:mt-0 pl-8 py-4 text-base">
                    <h2 class="text-4xl font-bold text-center">Packages</h2>
                    <h3 class="mt-6">-For more information of the signup and the unicorns please visit someLink where Foo and bar are eating squirrels</h3>
                    <h3 class="mt-6">There has been a giant mistake made regarding the candy bar there should have been candy and not credit</h3>
                    <h3 class="mt-6">some pamphlet link - FOOO BAR BAR FOO</h3>
                    <h3 class="mt-6">-Maybe some contact link-</h3>
                    <h3 class="px-6">-exampleMail@technofocus.cn-</h3>
                    <h3 class="px-6">-exampleMail@area51.gov-</h3>
                </div>
            </div>
            <div class="xl:w-3/5">
                <!-- Righty stuff -->
                <div class="xl:flex mt-8 text-white text-lg font-semibold border-b-2 border-white border-solid">
                    <button @click="setPackage('full-day')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Full day</button>
                    <button @click="setPackage('two-day')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Two days</button>
                    <button @click="setPackage('all-in')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">All in</button>
                </div>
                <PackageDeal :info="currentPackage"></PackageDeal>
            </div>
        </div>
    
        <div class="xl:flex xl:items-center mt-8">
            <div class="xl:w-2/5">
                <!-- Lefty stuff -->
                <div class="mt-6 xl:mt-0 pr-8">
                    <h2 class="text-4xl font-bold text-center">Addons</h2>
                    <h3 class="mt-6">-For more information of the signup and the unicorns please visit someLink where Foo and bar are eating squirrels</h3>
                    <h3 class="mt-6">There has been a giant mistake made regarding the candy bar there should have been candy and not credit</h3>
                    <h3 class="mt-6">some pamphlet link - FOOO BAR BAR FOO</h3>
                    <h3 class="mt-6">-Maybe some contact link-</h3>
                    <h3 class="px-6">-exampleMail@technofocus.cn-</h3>
                    <h3 class="px-6">-exampleMail@area51.gov-</h3>
                </div>
            </div>
            <div class="xl:w-3/5 align-center">
                <!-- Righty stuff -->
                <div class="xl:flex justify-end mt-12 text-white text-lg font-semibold border-b-2 border-white border-solid">
                    <button @click="setEventPackage('Lunch Lecture')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Lunch Lecture</button>
                    <button @click="setEventPackage('Pub')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Pub</button>
                    <button @click="setEventPackage('Student Sessions')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Student Sessions</button>
                </div>
                <PackageDealWithText :info="currentEventPackage"></PackageDealWithText>
            </div>
        </div>

        <div id="FAQ" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">FAQ</h1>

        <div id="faq" class="pt-5 pb-5">
                <div class="max-w-510xl mx-auto" >
                    <div id="faq-accordion" class="divide-y-2 divide-gray-200">
                        <Question v-for="(question, index) in questions" :key="index" :info="question" :index="index"></Question>
                        <ErrorMessage v-if="questions <= 0" text="No frequently asked questions found." />
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
import PackageDealWithText from '../components/PackageDealWithText'
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

const eventPackages = {
    "Lunch Lecture": {
        packageName: "Lunch Lecture",
        price: "14 000 kr plus 70 kr or 90 kr / attending studen",
        text: ["At TeknikFokus we offer your company to arrange a lunch lecture. This is a splendid opportunity to present yourselves towards the students during 45 minutes. We offer up to 100 lunches, through the following two different levels of payment per attendee. Where 70 kr/attendee corresponds to a cold-food dish plus one (1) drink, and 90 kr/attendee corresponds to a hot-food dish plusone (1) drink.", "Lunch lectures usually are very popular among the students and will give you the exposure that you desire."],
        perks: ["foo", "bar"]
    },
    "Pub": {
        packageName: "Pub",
        price: "20 000 kr plus costs for food sold during the event optional",
        text: ["At TeknikFokus we offer your company to arrange a Pub. This is a splendid opportunity to present yourselves towards the students, possibly have some competition or have a chat and mingle around with the attendees.", "Pubs tend to be very popular among the students and will give you the opportunity to meet the students in a more relaxed atmosphere."],
        perks: ["Private session with a very romantic lamp found in Edekvata", "Bob"]
    },
    "Student Sessions": {
        packageName: "Student Sessions",
        price: "One day - 7 000 kr     Two days - 12 000 kr",
        text: ["During your visit at TeknikFokus we have the possibility to offer Student Sessions for your company. This is tailored for your company if you would like one-on-one discussions with students. In advance of the fair, students will register their interest and apply with relevant documents. Hence, your company selects those of whom you are interested on having a discussion with. Later, TeknikFokus will arrange rooms and schedules for these meetings, as well as informing the attending students.", "This provides the opportunity for a more personal meeting between both parties. Each session is scheduled for 30 minutes. Pricing above refers to one (1) meeting room."],
        perks: ["FLYING SAUCERS AND STUFF"]
    }
}

const questions = [
    {
        question: "Why Teknikfokus?",
        answer: "With LTH being one of the most prolific technical schools in the Nordics and considering how active D && E students are, makes TeknikFokus the perfect place for innovators to meet the exact talent and future employees they need.",
        id: 0
    },
    {
        question: "When is Teknikfokus?",
        answer: "The fair will take place between 08:00 and 17:00, the 15th & 16th of February.",
        id: 1
    },
    {
        question: "Where will Teknikfokus be?",
        answer: "E-huset LTH Ole Römers väg 3.",
        id: 2
    },
    {
        question: "Who will be attending?",
        answer: "Bachelors, Masters and PhD-Students from the respective forementioned engineering programs, as well as 60 to 80 different companies within the relevant fields.",
        id: 3
    },
    {
        question: "What are students studying at the E- and D-faculties at LTH?",
        answer: "Students at the E- and D- faculties are studying to get a Master of Science in Engineering at the four respective areas: Computer Science, Engineering Information and Communication Engineering, Electrical Engineering and Biomedical Engineering. Click below to view the course syllabus for each programme.",
        id: 4
    },
    {
        question: "Who organizes Teknikfokus?",
        answer: "Teknikfokus is arranged by a project group consisting of students from the four programs at the E- and D-faculties  at LTH, who in parallel with their studies prepare the fair and all our events. The goal is to have a fair where everyone feels welcome, and where all attendees feel satisfied with the fair. In addition, the fair would never be able to take place if it wasn’t for all the students that volunteer at the fair. If you have any questions regarding the project group or our volunteers you can contact our project leaders, Leo Guldåker, leo@teknikfokus.se or Yazan Al-Aswadi, yazan@teknikfokus.se. You can read about everyone in the project group under ”About us”.",
        id: 5
    },
    {
        question: "What does the kontaktsamtal/student sessions mean?",
        answer: "Student Sessions provide companies a possibility to have a private sit down with students on the days of the fair, to talk about summer jobs, internships, exam work or future employment. Interested students can register at the company booth and a link to the student profile and their resume will be available to the company who will schedule a meeting. If you have questions about student sessions, contact one of our project managers. Contact information can be found under ”About us”.",
        id: 6
    },
    {
        question: "Who should you contact if you have questions about the companies?",
        answer: "If you have questions as a company or regarding a company attending Teknikfokus, please contact us at relations@teknikfokus.se. Also, feel free to reach out to us using contact information under ”About us”. If you have comments about the companies invited, or feel that a company doesn’t represent Teknikfokus in a good way, contact one of our project managers at projektledare@teknikfokus.se.",
        id: 7
    }
];
var currentPackage = packages["full-day"]
var currentEventPackage = eventPackages["Lunch Lecture"]
export default {
  name: 'ForCompanies',
  components: {
    PackageDeal,
    Question,
    ErrorMessage,
    PackageDealWithText,
  },
  setup(){
    return {packages, eventPackages,questions};
  },
  data(){
    return {currentPackage, currentEventPackage};
  },
  methods: {
    setPackage(key){
        this.currentPackage = packages[key]
    },
    setEventPackage(key){
        this.currentEventPackage = eventPackages[key]
    }
  }
}
</script>
