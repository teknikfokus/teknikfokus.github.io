<template>
  <div id="for-companies" class="py-4 scroll-smooth">
    <div class="mx-auto grid sm:grid-cols-3 gap-4 md text-2xl text-center font-semibold">
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
      answer: "<p>text explaining company host</p>"
    },
    {
      question: "Night Watch",
      answer: "<p>Jar Jar Binks is a sith Lord</p>"
    },
    {
      question: "Garderob/Lounge/FrukostVärd(TODO FIX NAME)",
      answer: "<p>TODO</p>"
    },
    {
      question: "Electricity/Internet(TODO FIX NAME)",
      answer: "<p>Data X Electricity elctric boogalo edition</p>"
    },
    {
      question: "Shuttle Host(TODO FIX NAME)",
      answer: "<p>TODO</p>"
    },
    {
      question: "Photographer(TODO FIX NAME)",
      answer: "<p>TODO</p>"
    },
    {
      question: "Kontaktsamtal Koordinator(TODO FIX NAME)",
      answer: "<p>TODO</p>"
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
