<template>
  <div id="for-companies" class="scroll-smooth">
    <div id="About-teknikfokus" class="py-6"></div>
    <h1 class="my-12 text-5xl text-center font-bold">About Teknikfokus</h1>
    <div class="flex-row xl:flex xl:items-center">
      <!-- Lefty stuff -->
      <div class="align-center xl:w-1/2">
        <div class="py-4 text-lg xl:pr-8">
          <h1 class="text-4xl font-bold text-center">What is Teknikfokus?</h1>
          <h2 class="mt-6">
            Teknikfokus is a career fair aimed towards students studying at the E and D guilds. During the 13:th and 14:th of February ~70 companies will be at E-huset to present what they are all about. This is your chance to get in contact with future employers through summer jobs, master’s theses and much more.
          </h2>
          <br>
          <h2>
            Along with the fair there will also be lunch lectures, pubs and student sessions happening all around E-huset. Follow the links below to read more about participating in Student Sessions and applying for Host.</h2>
          <br>
          <h2>See you at the fair!</h2>
            
          <h2 class="text-4xl font-bold text-center m-2">Host Application is opening soon!</h2>

          <!-- <div class="flex flex-col pt-8 md center xl:w-96 xl:align-left">
            <div class="py-2 hidden xl:grid">
              <cool-button class="" text="Host Application" href="https://www.teknikfokus.se/host"/>
            </div>
            <div class="py-2 grid xl:hidden">
              <cool-button2 text="Host Application" href="https://www.teknikfokus.se/host"/>
            </div>
            <div class="py-2 hidden xl:grid">
              <cool-button text="Student Sessions" href="https://www.teknikfokus.se/sessions"/>
            </div>
            <div class="py-2 grid xl:hidden">
              <cool-button2 text="Student Sessions" href="https://www.teknikfokus.se/sessions"/>
            </div>
          </div> -->
        </div>
      </div>

      <!-- Righty stuff -->
      <div class="hidden xl:grid xl:w-1/2">
        <div class="max-w-full mx-auto xl:visible">
          <img src="../assets/images/massa2.jpg" class="max-w-full" alt="Group of attendees" />
        </div>
      </div>
    </div>

    <div id="Students-FAQ" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">FAQ</h1>
    <div id="students-faq" class="pt-5 pb-5">
      <div class="max-w-510xl mx-auto" >
        <div id="students-faq-accordion" class="divide-y-2 divide-gray-200">
          <Question v-for="(question, index) in questions" :key="index" :info="question" :index="index"></Question>
          <ErrorMessage v-if="questions <= 0" text="No frequently asked questions found." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Question from '../components/Question';
  import CoolButton from '../components/CoolButton.vue';
  import CoolButton2 from '../components/CoolButton2.vue';
  import ErrorMessage from '../components/ErrorMessage'
  import scroll_to_hash from '../router/scroll_to_hash';

  const questions = [
    {
      question: "Who organizes Teknikfokus?",
      answer: "<p>Teknikfokus is arranged by a project group consisting of students from the four programs at the E- and D-faculties  at LTH, who in parallel with their studies prepare the fair and all our events. The goal is to have a fair where everyone feels welcome, and where all attendees feel satisfied with the fair. In addition, the fair would never be able to take place if it wasn’t for all the students that volunteer at the fair. If you have any questions regarding the project group or our volunteers you can contact our project leaders, Samuel Högfeldt, <a class=\"font-bold\" href=\"mailto:samuel@teknikfokus.se\">samuel@teknikfokus.se</a> or Alen Mahmutovic, <a class=\"font-bold\" href=\"mailto:alen@teknikfokus.se\">alen@teknikfokus.se</a>. You can read about everyone in the project group under <a class=\"font-bold\" target=\"_blank\" href=https://www.teknikfokus.se/about#PG>About us</a>.</p>"
    },
    {
      question: "When is Teknikfokus?",
      answer: "<p>The fair will take place between 09:00 and 16:30, the 13th & 14th of February.</p>"
    },
    {
      question: "Where will Teknikfokus take place?",
      answer: `
        <p>At Ole Römers väg 3, inside E-huset.</p>
        <iframe class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001.2498072316307!2d13.209636197891264!3d55.711069045083036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465397ca158a6165%3A0x7f9339d3824e88ee!2sOle%20R%C3%B6mers%20v%C3%A4g%203%2C%20223%2063%20Lund!5e0!3m2!1ssv!2sse!4v1665410976182!5m2!1ssv!2sse" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">E-huset LTH Ole Römers väg 3.</iframe>
      `
    },
    {
      question: "Who will be attending?",
      answer: "<p>Bachelors, Masters and PhD-Students from the respective forementioned engineering programs, as well as 60 to 80 different companies within the relevant fields. All attending companies are displayed at the <a target='_blank' class='font-bold' href='https://www.teknikfokus.se/attending'>Attending Companies</a> page.</p>"
    },
    {
      question: "Who should you contact if you have questions about the companies?",
      answer: "<p>If you have questions as a company or regarding a company attending Teknikfokus, please contact us at <a class=\"font-bold\" href=\"mailto:relations@teknikfokus.se\">relations@teknikfokus.se</a>. Also, feel free to reach out to us using contact information under <a class=\"font-bold\" target=\"_blank\" href=https://www.teknikfokus.se/about#PG>About us</a>. If you have comments about the companies invited, or feel that a company doesn’t represent Teknikfokus in a good way, contact one of our project managers at <a class=\"font-bold\" href=\"mailto:projektledare@teknikfokus.se\">projektledare@teknikfokus.se</a>.</p>"
    }
  ];
  export default {
    name: 'ForStudents',
    components: {
      Question,
      ErrorMessage,
      CoolButton,
      CoolButton2
    },
    setup() {
      return {questions}
    },
    mounted() {
      scroll_to_hash();
    }
  }
</script>
