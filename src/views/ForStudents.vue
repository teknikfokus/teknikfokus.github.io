<template>
  <div id="for-companies" class="py-4 scroll-smooth">
    <div class="mx-auto grid sm:grid-cols-4 gap-4 md text-2xl text-center font-semibold">
      <a href="#About-teknikfokus" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
        <div>About Teknikfokus</div>
      </a>
      <a href="#Jobs" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
        <div>Jobs</div>
      </a>
      <a href="#FAQ" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
        <div>FAQ</div>
      </a>
      <a href="#Student-session" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
        <div>Student Sessions</div>
      </a>
    </div>

    <div id="About-teknikfokus" class="py-6"></div>
    <div class="mx-auto text-lg">
      <h1 class="mt-12 text-5xl text-center font-bold">About Teknikfokus</h1>
      <h2 class="mt-12 text-center">
        Teknikfokus is a career fair aimed towards students studying at the E and D guilds. During the 15:th and 16:th of February ~70 companies will be at E-huset to present what they are all about. This is your chance to get in contact with future employers through summer jobs, master's theses and much more.
      </h2>
      <h2 class="mt-4 text-center">
        Along with the event there will also be lunch lectures, pubs and student sessions happening all around E-huset. For those who take part as <a class="font-bold" href="#Company-host">Company Hosts</a> there will be a large banquet. So make sure to apply as Company Host and have fun while attending Teknikfokus 2023!
      </h2>
    </div>

    <div id="Jobs" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">Official job decriptions</h1>
    
    <div class="pt-5 pb-5">
      <div class="max-w-510xl mx-auto" >
        <div id="faq-accordion" class="divide-y-2 divide-gray-200">
          <Question v-for="(question, index) in jobs" :key="index" :info="question" :index="index"></Question>
          <ErrorMessage v-if="questions <= 0" text="No frequently asked questions found." />
        </div>
      </div>
    </div>
    <div id="How-to-apply" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">Aplication of interest</h1>
    <h3 class="pt-4 text-center text-xl">For any questions or additional inquiries please contact <a class="font-bold" href="mailto:relations@teknikfokus.se">relations@teknikfokus.se</a>.</h3>
    <div class="pt-4 max-w-5xl h-700 mx-auto">
      <iframe class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" src="https://docs.google.com/forms/d/e/1FAIpQLSdp6eWNkCvD-14nRp5shKeSuzMV1pI78jmycoNp5SwML5lUKg/viewform?embedded=true" width="500" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
    <div id="Student-session" class="py-6 content-center"></div>
    <div class="flex flex-col mx-auto text-lg">
      <h1 class="mt-12 text-5xl text-center font-bold">Student Sessions</h1>
      <h2 class="mt-12 text-center">
        A Student Session is a chance for companies to get to know you personally. Prior to the fair CV:s will be gathered from students who would like participate and discuss future opportunities with attending companies. Attending companies may then ask for a personal meeting with students they find particularly interesting in a meeting room at E-huset. Please apply below if you want to participate in the Student Sessions.
      </h2>
      <button class="mt-6 mx-auto bg-blue-primary text-white text-xl font-bold p-8 rounded-xl shadow-lg hover:bg-blue-primary-lightest">
        🫱‍🫲 Apply for Student Sessions 🫱‍🫲
      </button>
    </div>
  </div>
</template>
<script>
import Question from '../components/Question'
const jobs = [
    {
      question: "Company Host",
      answer: `
          <p>Do you want to get the opportunity to network with 1-2 of the companies attending Teknikfokus 2023? Then you should apply for Company Host!</p>
          <br>
          <p>During the fair you will have responsibility for 1-2 companies. Your foremost tasks will be to ensure that the company representatives gets all the information needed prior to the fair, help with setting up their booths as well as being helpful if the company needs anyhing or are unsure about anything during the fair.</p>
        `
    },
    {
      question: "Night Watch",
      answer: `
          <p>Are you a nightowl who likes free food? Then you should apply for Night Watch!</p>
          <br>
          <p>During the night the companies personal belongings and other stuff will be kept in the E-House. For the companies to feel confident in leaving their belongings we will need Night Watchers who make sure that nothing disappears. During the night you will be able to order food which Teknikfokus will pay for and you will be able to spend the time doing what you feel like as long as the companies belongings are supervised by you.</p>
        `
    },
    {
      question: "Info Desk",
      answer: `
        <p>Are you social and would like to help by answering all types of questions about the fair while being the face for Teknikfokus? Then you should apply for Info Desk!</p>
        <br>
        <p>This is one of the fairs most social posts. During the fair companies, hosts and visitors will be able to go to you for any questions regarding the fair. Companies will also be able to come to the info desk to borrow various items such as tools, which will then need to be returned.</p>
      `
    },
    {
      question: "Wardrobe/Lounge/Breakfast Host",
      answer: `
        <p>Are you passionate about service and would like to have a more varied role during Teknikfokus 2023? Then you should apply for Wardrobe/Lounge/Breakfast Host!</p>
        <br>
        <p>During the fair you will help with several diferent aspects. You will for example be helping with taking care of peoples outerwear when arriving to the fair. Youy will also be making sure that the lounge looks nice and that there is coffee and other things available to create a cozy and comfortable environment where company representatives can relax. A perfect opportunity to get to know them!</p>
        <p>You will also be making sure that there is breakfast available in the lounge during the morning for both hosts and company representatives.</p>
      `
    },
    {
      question: "Electricity/Internet Host",
      answer: `
        <p>Are you the one assisting when anything technical fails? Then you should apply for Electricity/Internet Host!</p>
        <br>
        <p>During the fair you will make sure the companies have internet, electricity and other cables necessary. If anything related to electricity/internet is failing during the fair it is you the companies will come to for help.</p>
      `
    },
    {
      question: "Lunch Host",
      answer: `
        <p>Do you love making food and meeting new people? Then you should apply for Lunch Host!</p>
        <br>
        <p>During the fair your main task will be to make food for the lunches for hosts and company representatives as well as organize food for the lunch lectures. During the lunch a large portion of the attendees of the fair will be there, so you will get the chance to meet a lot of people! A big plus is if you have prior experience of making food for a large amount of people.</p>
      `
    },
    {
      question: "Shuttle Host",
      answer: `
        <p>Do you know the streets of Malmö & Lund and would like to have the chance to connect with company representatives during a nice car ride? Then you should apply for Shuttle Host!</p>
        <br>
        <p>Your task will be to pick up and deliver company representatives who are attending Teknikfokus. The ride will be a great opportunity to meet and network with the representatives you are driving! As you most likely will operate in Lund and Malmö it is preferable if you know the streets of Lund and Malmö somewhat. To be a Shuttle Host during Teknikfokus 2023 it is required to have a driver's license and drive safely.</p>
      `
    },
    {
      question: "Photographer",
      answer: `
        <p>Are you passionate about taking great pictures and want to show how awesome Teknikfokus 2023 will be? Then you should apply for Photographer!</p>
        <br>
        <p>As photograper during Teknikfokus you will take pictures of the fair, the banquet, events and other things related to the fair. The pictures will then be used for Teknikfokus 2023 but also for following years. It is plus to have prior experience of photography.</p>
      `
    },
    {
      question: "Student Session Coordinator",
      answer: `
        <p>Do you want to be the person who makes sure the right student is matched with the right company for Student Sessions during Teknikfokus 2023? Then you should apply for Student Session Coordinator!</p>
        <br>
        <p>This role is only a coordinator role because there will be more responsibility required for you then for a host. Before the fair the students will send in their CV which the companies will then be able to view and pick which students they would like to meet during a student sessions. To make this happen a Student Session Coordinator is needed to keep track of our student portal and make sure that the right students are matched with the right companies. You will also help the company representatives and students to find the right rooms during the fair.</p>
      `
    },
  ];

  const questions = [
    {
      question: "I wonder about icecream and stuffs",
      answer: "<p>text explaining company host</p>"
    },
    {
      question: "Where can I get a cool hat like Felixs??!?!",
      answer: "<p>Jar Jar Binks is a sith Lord</p>"
    },
  ];
  export default {
    name: 'ForStudents',
    components: {
      Question
    },
    setup() {
      return {jobs, questions}
    }
  }
</script>
