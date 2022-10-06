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
                <div>Application of interest</div>
            </a>
        </div>
        
        <div id="About-us" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">About us</h1>
        <div class="xl:flex xl:items-center mt-12">
            <h2 class ="text-center text-lg">
                Teknikfokus is the largest career fair within Biomedical, Computer Science, Communication, Electrical and Information technologies engineering in the Nordics. With a yearly participation rate of 60 to 80 companies, and a collective student population of over 1000 students, TeknikFokus strives to be at the forefront of building student-customer relations within the areas of our specialty. We are where talent meets opportunity. We are where the present meets the future.
            </h2>
        </div>
        
        <div id="Our-offers" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">Our offers</h1>
        <div class="xl:flex flex-row-reverse xl:items-center">
            <div class="xl:w-2/5 align-center">
                <!-- Lefty stuff -->
                <div class="xl:mt-0 pl-8 py-4 text-base">
                    <h2 class="text-4xl font-bold text-center">Exhibition Packages</h2>
                    <h3 class="mt-6">In order to atttend the fair one of our three packages must be purchased, with the option for complimentary add-ons.</h3>
                    <h3 class="mt-6">If our add-ons do not cover your needs please contact <a href="mailto:event@teknikfokus.se">event@teknikfokus.se</a> for a custom tailored add-on</h3>
                </div>
            </div>
            <div class="xl:w-3/5">
                <!-- Righty stuff -->
                <div class="xl:flex mt-8 text-white text-lg font-semibold border-b-2 border-white border-solid">
                    <button @click="setPackage('1-day')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">1-day</button>
                    <button @click="setPackage('2-day')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">2-day</button>
                    <button @click="setPackage('all-in')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">All-in</button>
                    <button @click="setPackage('Addons')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Add-ons</button>
                </div>
                <PackageDeal :info="currentPackage"></PackageDeal>
            </div>
        </div>
    
        <div class="xl:flex xl:items-center mt-8">
            <div class="xl:w-2/5">
                <!-- Lefty stuff -->
                <div class="mt-6 xl:mt-0 pr-8">
                    <h2 class="text-4xl font-bold text-center">Event Packages</h2>
                    <h3 class="mt-6">Event packages are great way for you and your company to increase your chances at finding the best talent we can offer.</h3>
                    <h3 class="mt-6">The pub and the lunch lecture takes place prior to the fair, while the student sessions will be held during the fair.</h3>
                    <h3 class="mt-6">If you have an idea for an event you may contact <a href="mailto:logistics@teknikfokus.se">logistics@teknikfokus.se</a> and discuss the possibility of bringing your idea to life.</h3>
                </div>
            </div>
            <div class="xl:w-3/5 align-center">
                <!-- Righty stuff -->
                <div class="xl:flex justify-end mt-12 text-white text-lg font-semibold border-b-2 border-white border-solid">
                    <button @click="setEventPackage('Lunch Lecture')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Lunch Lecture</button>
                    <button @click="setEventPackage('Pub')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Pub</button>
                    <button @click="setEventPackage('Student Sessions')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Student Sessions</button>
                    <button @click="setEventPackage('Special Event')" class="px-2 p-4 bg-blue-primary rounded-t-xl border-l-2 border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold">Special Event</button>
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
        <h1 class="mt-12 text-5xl text-center font-bold">Aplication of interest</h1>
        <div class="pt-12 align-center flex-1">
            <h3 class="text-center">For any question or additional inquiries contact <a href="mailto:relations@teknikfokus.se">relations@teknikfokus.se</a>.</h3>
            <iframe class="max-w-3xl mx-auto" src="https://docs.google.com/forms/d/e/1FAIpQLSc2Sg-olyVL_JETCbBIAqEJUxbUr_ZU_HFu5jAmMaQZzVw00Q/viewform?embedded=true" width="720" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        
        <div class="text-center mt-20">
            <h3 class="text-2xl md:text-4xl font-bold">Other ideas on marketing<br/>your company through Teknikfokus?</h3>
            <p class="text-lg md:text-xl mt-4 text-gray-600">Contact <a href="mailto:event@teknikfokus.se">event@teknikfokus.se</a> and we can discuss your ideas further. <br />We look forward to your suggestions!</p>
        </div>

    </div>
</template>

<script>
import PackageDeal from '../components/PackageDeal'
import PackageDealWithText from '../components/PackageDealWithText'
import ErrorMessage from '../components/ErrorMessage'
import Question from '../components/Question'
const packages = {
    "1-day": {
        packageName: "1-day package",
        price: "21 000 SEK",
        perks: [
            "Showcase area of 3x2 m²",
            "Attendance in the fair's advertisement",
            "Display and presentation of your company on teknikfokus.se",
            "A company host to help you upon arrival and during the fair",
            "Breakfast and lunch for your company representatives",
            "Access to our fair lounge which will provide coffee and fika",
            "One (1) parking ticket for our guest parking slots",
            "Two (2) tickets to the Teknikfokus banquet",
            "One (1) bar table",
            "Power outlets",
            "Internet connection",
            "Wardrobe",
        ]
    },
    "2-day": {
        packageName: "2-day package",
        price: "31 000 SEK",
        perks: [
            "All the perks from the 1-day package extended over 2 days",
        ]
    },
    "all-in": {
        packageName: "All-in package",
        price: "50 000 SEK",
        perks: [
            "Two-day package",
            "One (1) extra bar table",
            "Two (2) bar chairs",
            "One (1) 50\" TV",
            "One (1) Lunch lecture",
            "One (1) day of Student sessions",
        ]
    },
    "Addons": {
        packageName: "Add-ons",
        price: "",
        perks: ["Bar table 400kr/pc", "Bar chair 300 kr/pc", "TV 40\" + including floor stand 2800kr/pc", "TV 50\" + including floor stand 3400kr/pc"],
    }
}

const eventPackages = {
    "Lunch Lecture": {
        packageName: "Lunch Lecture",
        price: "14 000 kr plus 70 kr or 90 kr / attending studen",
        text: ["A Lunch Lecture is a perfect opportunity for you to display your most recent technologies, your work environment or your most interesting projects.", "Lunch Lectures at TeknikFokus are known for their high level of attendance and positive reception by students, and will help you become a more prominent attendee during the fair.", "We strongly recommend that you also offer our dear students a complimentary lunch, as it has proven to significantly increase attendance.  The prices for the offered lunches are:70 kr/attendee for a cold meal & one (1) drinkor 90 kr/attendee for a warm meal & one (1) drink."],
        perks: ["Your choice of lecture up to 45 minutes in one of E-husets lecture halls.", "Food and drink for the students attending the lecture."]
    },
    "Pub": {
        packageName: "Pub",
        price: "20 000 kr plus costs for food sold during the event (optional)",
        text: ["At Teknikfokus we offer your company to host a Pub at one of our student spaces where food and drinks will be served by other students from the D or E guilds*. Here you have an excellent opportunity to mingle and present yourselves in a more personal manner. In addition to that, competitions and games can be held to increase the student involvement." ,"Pubs tend to be very popular among our students and will give you the opportunity to meet them in a more relaxed, cozy setting."],
        perks: ["A pub held in E-huset", "Organized by our students"]
    },
    "Student Sessions": {
        packageName: "Student Sessions",
        price: "7000kr for one (1) day and 12 000 for two (2) days.",
        text: ["Are you looking for Master’s thesis writers, summer workers, or perhaps a future colleague or collaborator?", "Student Sessions is the perfect platform for you to have one-on-one meetings, discussions or interviews with our students, where you can discuss anything from future employment to collaborative projects and other prospects." ,"Prior to the fair, students register their interests in your company and apply with a CV and cover letter. You may thereafter handpick which students among the applicants you are interested in meeting. Teknikfokus will thereafter contact all the chosen students, schedule appointments and arrange rooms on your behalf. Each session is scheduled for 30-45 minutes. Pricing above refers to one (1) meeting room."],
        perks: ["Private room"]
    },
    "Special Event": {
        packageName: "Special Event",
        price: "Price: Negotiable",
        text: ["Do you have the perfect idea and would like to create something unique for our students?", "Would you perhaps like to host a workshop or an interactive product demonstration?", "Do not hesitate to contact us at event@teknikfokus.se and let us know what you’re thinking! We are open to all ideas and will do our best to help you create an event that stands out!"],
        perks: ["Anything within the bounds of your imagination(within our abilities)."]
    }
}

const questions = [
    {
        question: "Why Teknikfokus?",
        answer: "What makes us stand out is not our banquette or lounges, it is our students. Here at E-huset*, we pride ourselves in our desire to learn, our desire to specialize and our desire to develop and create. This is the place for you to meet the future’s brightest engineers in software, biomedicine, electronics, computer science, communications- and informational-technologies as well as other amazing specialists. This is the fair for those who want to reach new levels in the world of engineering.",
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
        answer: "Teknikfokus is arranged by a project group consisting of students from the four programs at the E- and D-faculties  at LTH, who in parallel with their studies prepare the fair and all our events. The goal is to have a fair where everyone feels welcome, and where all attendees feel satisfied with the fair. In addition, the fair would never be able to take place if it wasn’t for all the students that volunteer at the fair. If you have any questions regarding the project group or our volunteers you can contact our project leaders, Leo Guldåker, leo@teknikfokus.se or Yazan Al-Aswad, yazan@teknikfokus.se. You can read about everyone in the project group under ”About us”.",
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
var currentPackage = packages["1-day"]
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
