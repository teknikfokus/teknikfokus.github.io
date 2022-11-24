<template>
  <div id="for-companies" class="py-4 scroll-smooth">
    <div id="About-teknikfokus" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">About Teknikfokus</h1>
    <div class="xl:flex flex-col xl:items-center mt-12 text-center text-lg">
      <h2>
        Teknikfokus is the largest career fair within Biomedical, Computer Science, Communication, Electrical and Information technologies engineering in the Nordics and will take place at LTH on the 15:th and 16:th of February, 2023. With a yearly participation rate of 60 to 80 companies, and a collective student population of over 1000 students, Teknikfokus strives to be at the forefront of building student-customer relations within the areas of our speciality. We are where talent meets opportunity. We are where the present meets the future.
      </h2>
    </div>
      
    <div id="Our-offers" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">Our offers</h1>
    <div class="xl:flex flex-row-reverse xl:items-center">
      <div class="xl:w-2/5 align-center">
        <!-- Righty stuff -->
        <div class="xl:mt-0 pl-8 py-4 text-lg">
          <h2 class="text-4xl font-bold text-center">Exhibition Packages</h2>
          <h3 class="mt-6">In order to attend the fair one of our three packages must be purchased, with the option for complimentary add-ons.</h3>
          <h3 class="mt-6">If our add-ons do not cover your needs please contact <a class="font-bold" href="mailto:relations@teknikfokus.se">relations@teknikfokus.se</a> for a custom tailored add-on</h3>
        </div>
      </div>
      <div class="xl:w-3/5">
        <!-- Lefty stuff -->
        <div class="grid grid-cols-4 mt-8 text-white text-base md:text-lg font-semibold border-b-2 border-white border-solid">
          <button
            v-for="item in Object.values(this.packages)"
            :key="item.packageName"
            @click="setPackage(item.packageName)"
            v-bind:class="{ 'bg-blue-primary-lightest': this.currentPackage.packageName === item.packageName }"
            class="p-2 bg-blue-primary rounded-t-xl border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold"
          >
            {{item.packageName}}
          </button>
        </div>

        <PackageDeal :info="currentPackage" />
      </div>
    </div>
  
    <div class="xl:flex xl:items-center mt-8">
      <div class="xl:w-2/5">
        <!-- Lefty stuff -->
        <div class="mt-6 xl:mt-0 pr-8 text-lg">
          <h2 class="text-4xl font-bold text-center">Event Packages</h2>
          <h3 class="mt-6">An event package is a great way for you and your company to increase your chances at finding the talents you seek.</h3>
          <h3 class="mt-6">The pub and the lunch lecture takes place prior to the fair, while the student sessions will be held during the fair.</h3>
          <h3 class="mt-6">If you have an idea for an event you may contact <a class="font-bold" href="mailto:event@teknikfokus.se">event@teknikfokus.se</a> and discuss the possibility of bringing your idea to life.</h3>
        </div>
      </div>
      <div class="xl:w-3/5 align-center">
        <!-- Righty stuff -->
        <div class="grid grid-cols-4 mt-8 text-white text-base md:text-lg font-semibold border-b-2 border-white border-solid">
          <button
            v-for="item in Object.values(this.eventPackages)"
            :key="item.packageName"
            @click="setEventPackage(item.packageName)"
            v-bind:class="{'bg-blue-primary-lightest': this.currentEventPackage.packageName === item.packageName }"
            class="p-2 bg-blue-primary rounded-t-xl border-r-2 border-white border-solid hover:bg-blue-primary-lightest focus:outline-none font-semibold"
          >
            {{item.packageName}}
          </button>
        </div>

        <PackageDealWithText :info="currentEventPackage" />
      </div>
    </div>

    <div id="How-to-apply" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">Application</h1>
    <h3 class="pt-4 text-center text-xl">The final application is now open and will stay open until <text class="underline">December 20th</text>.
    <br>
    Contact <a class="font-bold" href="mailto:relations@teknikfokus.se">relations@teknikfokus.se</a> to apply or to get more information.</h3>

    <div id="Companies-FAQ" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">FAQ</h1>
    <div id="companies-faq" class="pt-5 pb-5">
      <div class="max-w-510xl mx-auto" >
        <div id="companies-faq-accordion" class="divide-y-2 divide-gray-200">
          <Question v-for="(question, index) in questions" :key="index" :info="question" :index="index"></Question>
          <ErrorMessage v-if="questions <= 0" text="No frequently asked questions found." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { MenuIcon, XIcon } from '@heroicons/vue/outline'
  import scroll_to_hash from '../router/scroll_to_hash'
  import PackageDeal from '../components/PackageDeal'
  import PackageDealWithText from '../components/PackageDealWithText'
  import ErrorMessage from '../components/ErrorMessage'
  import Question from '../components/Question'

  const packages = {
    "1-day": {
      packageName: "1-day",
      price: "21 000 SEK",
      perks: [
        "Showcase area of 3x2 m²",
        "Attendance in the fair's advertisement",
        "Display and presentation of your company on teknikfokus.se",
        "A company host to help you upon arrival and during the fair",
        "Lunch and breakfast for two (2)",
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
      packageName: "2-day",
      price: "31 000 SEK",
      perks: [
        "All the perks from the 1-day package extended over 2 days",
      ]
    },
    "All-in": {
      packageName: "All-in",
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
      packageName: "Addons",
      price: "",
      perks: ["Bar table 400kr/pc", "Bar chair 300 kr/pc", "TV 40\" & floor stand 2800kr/pc", "TV 50\" & floor stand 3400kr/pc"],
    }
  }

  const eventPackages = {
    "Lunch Lecture": {
      packageName: "Lunch Lecture",
      price: "14 000 kr plus 70 kr or 90 kr / attending student",
      text: ["A Lunch Lecture is a perfect opportunity for you to display your most recent technologies, your work environment or your most interesting projects.", "Lunch Lectures at Teknikfokus are known for their high level of attendance and positive reception by students, and will help you become a more prominent attendee during the fair.", "We strongly recommend that you also offer our dear students a complimentary lunch, as it has proven to significantly increase attendance. The prices for the offered lunches are: 70 kr/attendee for a cold meal & one (1) drink or 90 kr/attendee for a warm meal & one (1) drink."],
      perks: ["Your choice of lecture up to 45 minutes in one of E-husets lecture halls."]
    },
    "Pub": {
      packageName: "Pub",
      price: "20 000 kr plus costs for food sold during the event (optional)",
      text: ["At Teknikfokus we offer your company to host a Pub at one of our student spaces where food and drinks will be served by other students from the D or E guilds. Here you have an excellent opportunity to mingle and present yourselves in a more personal manner. In addition to that, competitions and games can be held to increase the student involvement." ,"Pubs tend to be very popular among our students and will give you the opportunity to meet them in a more relaxed, cozy setting."],
      perks: ["A pub held in E-huset", "Organized by our students"]
    },
    "Student Sessions": {
      packageName: "Student Sessions",
      price: "7000kr for one (1) day and 12 000 for two (2) days.",
      text: ["Are you looking for Master’s thesis writers, summer workers, or perhaps a future colleague or collaborator?", "Student Session is the perfect platform for you to have one-on-one meetings, discussions or interviews with students, where you can discuss anything from future employment to collaborative projects and other prospects." ,"Prior to the fair, students register their interests in your company and apply with a CV and cover letter. You may thereafter handpick which students among the applicants you are interested in meeting. Teknikfokus will then contact all the chosen students, schedule appointments and arrange rooms on your behalf. Each session is scheduled for 30-45 minutes. Pricing above refers to one (1) meeting room."],
      perks: ["Meeting room", "Student CVs", "Student personal letters"]
    },
    "Special Event": {
      packageName: "Special Event",
      price: "Price: Negotiable",
      text: ["Do you have the perfect idea and would like to create something unique for our students?", "Would you perhaps like to host a workshop or an interactive product demonstration?", "Do not hesitate to contact us at <a href=\"mailto:event@teknikfokus.se\" class=\"font-bold\">event@teknikfokus.se</a> and let us know what you’re thinking! We are open to all ideas and will do our best to help you create an event that stands out!"],
      perks: ["Anything within the bounds of your imagination (and within our capabilities)."]
    }
  }

  const questions = [
    {
      question: "Why Teknikfokus?",
      answer: "<p>What makes us stand out is not our banquette or lounges, it is our students. Here at E-huset we pride ourselves in our desire to learn, our desire to specialize and our desire to develop and create. This is the place for you to meet the future’s brightest engineers in software, biomedicine, electronics, computer science, communications- and informational-technologies as well as other amazing specialists. This is the fair for those who want to reach new levels in the world of engineering.</p>"
    },
    {
      question: "When is Teknikfokus?",
      answer: "<p>The fair will take place between 09:00 and 16:30, the 15th & 16th of February.</p>"
    },
    {
      question: "Where will Teknikfokus take place?",
      answer: '<iframe class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001.2498072316307!2d13.209636197891264!3d55.711069045083036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465397ca158a6165%3A0x7f9339d3824e88ee!2sOle%20R%C3%B6mers%20v%C3%A4g%203%2C%20223%2063%20Lund!5e0!3m2!1ssv!2sse!4v1665410976182!5m2!1ssv!2sse" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">E-huset LTH Ole Römers väg 3.</iframe>'
    },
    {
      question: "Who will be attending?",
      answer: "<p>Bachelors, Masters and PhD-Students from the respective forementioned engineering programs, as well as 60 to 80 different companies within the relevant fields.</p>"
    },
    {
      question: "What are students studying at the E- and D-faculties at LTH?",
      answer: `
        <p>Students at the E- and D- faculties are studying to get a Master of Science in Engineering at the four respective areas: Computer Science and Engineering, Information and Communication Engineering, Electrical Engineering and Biomedical Engineering. Click below to view the course syllabus for each programme.</p>
        <div v-if="info.id == 4" class="mt-8 mx-auto grid sm:grid-cols-2 gap-6 md">
          <a href="https://www.lth.se/utbildning/datateknik300/kurser" target="_blank" class="relative block justify-center align-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
              <p class="text-center">Computer Science and Engineering</p>
          </a>

          <a href="https://www.lth.se/utbildning/informations-och-kommunikationsteknik/kurser" target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
              <p class="text-center">Information and Communication Engineering</p>
          </a>

          <a href="https://www.lth.se/utbildning/elektroteknik/kurser/" target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
              <p class="text-center">Electrical Engineering</p>
          </a>

          <a href="https://www.lth.se/utbildning/medicin-och-teknik/kurser/" target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
              <p class="text-center">Biomedical Engineering</p>
          </a>
        </div>`
    },
    {
      question: "Who organizes Teknikfokus?",
      answer: "<p>Teknikfokus is arranged by a project group consisting of students from the four programs at the E- and D-faculties  at LTH, who in parallel with their studies prepare the fair and all our events. The goal is to have a fair where everyone feels welcome, and where all attendees feel satisfied with the fair. In addition, the fair would never be able to take place if it wasn’t for all the students that volunteer at the fair. If you have any questions regarding the project group or our volunteers you can contact our project leaders, Leo Guldåker, <a class=\"font-bold\" href=\"mailto:leo@teknikfokus.se\">leo@teknikfokus.se</a> or Yazan Al-Aswad, <a class=\"font-bold\" href=\"mailto:yazan@teknikfokus.se\">yazan@teknikfokus.se</a>. You can read about everyone in the project group under <a class=\"font-bold\" target=\"_blank\" href=https://www.teknikfokus.se/about>About us</a>.</p>"
    },
    {
      question: "What does the kontaktsamtal/student sessions mean?",
      answer: "<p>Student Sessions provide companies a possibility to have a private sit down with students on the days of the fair, to talk about summer jobs, internships, exam work or future employment. Interested students can register at the company booth and a link to the student profile and their resume will be available to the company who will schedule a meeting. If you have questions about student sessions, contact one of our project managers. Contact information can be found under <a class=\"font-bold\" target=\"_blank\" href=https://www.teknikfokus.se/about>About us</a>.</p>"
    },
    {
      question: "When should company representatives arrive?",
      answer: '<p>As the fair will start at 09:00 it is recommended to arrive at 08:00 to setup your stand, but it is also possible to deliver any items the day before if needed. A company host will also be there to help during the fair.</p>'
    },
    {
      question: "When and where is the banquet?",
      answer: '<p>We are still in the process of arranging the banquet, but we will put up information as soon as we have a confirmed date and place.</p>'
    },
    {
      question: "Who should you contact if you have questions about the companies?",
      answer: "<p>If you have questions as a company or regarding a company attending Teknikfokus, please contact us at <a class=\"font-bold\" href=\"mailto:relations@teknikfokus.se\">relations@teknikfokus.se</a>. Also, feel free to reach out to us using contact information under <a class=\"font-bold\" target=\"_blank\" href=https://www.teknikfokus.se/about>About us</a>. If you have comments about the companies invited, or feel that a company doesn’t represent Teknikfokus in a good way, contact one of our project managers at <a class=\"font-bold\" href=\"mailto:projektledare@teknikfokus.se\">projektledare@teknikfokus.se</a>.</p>"
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
      Popover,
      PopoverButton,
      PopoverPanel,
      MenuIcon,
      XIcon
    },
    setup() {
      return {packages, eventPackages,questions};
    },
    data() {
      return {currentPackage, currentEventPackage};
    },
    mounted() {
      scroll_to_hash();
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
