<template>
  <div id="host" class="scroll-smooth">
    <div id="About-hosts" class="py-6"></div>
    <h1 class="my-12 text-5xl text-center font-bold">About Hosts</h1>
    <h3 class="text-lg text-center">To make the fair function as intended we will need hosts who can help with setting things up for the fair, we will need hosts that can answer all kinds of questions about the fair in the info desk and we will need hosts that welcome the companies as company hosts. There are many more things roles that hosts can have and there is something for everyone. You can find the descriptions for all the roles for Teknikfokus 2023 below. Those who take part as Hosts will receive many benefits such as attending the Teknikfokus Banquet, merch and other festivities. So apply to be a host for Teknikfokus, together we will make Teknikfokus possible!</h3>
  
    <div id="How-to-apply" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">Apply for Host</h1>
    <h3 class="pt-4 text-center text-lg">Host application for 2023 has closed. For any questions or additional inquiries please contact <a class="font-bold" href="mailto:hosts@teknikfokus.se">hosts@teknikfokus.se</a>.</h3>

    <div id="Descriptions" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">Host Descriptions</h1>
    <div class="pt-5 pb-5">
      <div class="max-w-510xl mx-auto" >
        <div id="students-faq-accordion" class="divide-y-2 divide-gray-200">
          <Question v-for="(question, index) in jobs" :key="index" :info="question" :index="index"></Question>
          <ErrorMessage v-if="questions <= 0" text="No frequently asked questions found." />
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
  import Question from '../components/Question'
  import scroll_to_hash from '../router/scroll_to_hash'

  const jobs = [
    {
      question: "Company Host",
      answer: `
          <p>Do you want to get the opportunity to network with 1-2 of the companies attending Teknikfokus 2023? Then you should apply for Company Host!</p>
          <br>
          <p>During the fair you will have responsibility for 1-2 companies. Your foremost tasks will be to ensure that the company representatives get all the information needed prior to the fair, help with setting up their booths as well as being helpful if the company needs anyhing or are unsure about anything during the fair.</p>
        `
    },
    {
      question: "Night Watch",
      answer: `
          <p>Are you a nightowl who likes free food? Then you should apply for Night Watch!</p>
          <br>
          <p>During the night the personal belongings of the companies and other stuff will be kept in the E-House. For the companies to feel confident in leaving their belongings we will need Night Watches who make sure that nothing disappears.</p>
          <br>
          <p>Unfortunately there is a possibility that this will clash with the time of the Teknikfokus Banquet. Instead you will be able to order food and buy snacks/soft drinks during the night that Teknikfokus will pay for. You will also be able to spend the time doing whatever you feel like as long as the companies' belongings are supervised by you.</p>
        `
    },
    {
      question: "Info Desk",
      answer: `
        <p>Are you social and would like to help by answering all types of questions about the fair while being the face for Teknikfokus? Then you should apply for Info Desk!</p>
        <br>
        <p>This is one of the most social posts of the fair. During the fair companies, hosts and visitors will be able to go to you for any questions regarding the fair. Companies will also be able to come to the info desk to borrow various items such as tools, which will then need to be returned.</p>
      `
    },
    {
      question: "Wardrobe/Lounge/Breakfast Host",
      answer: `
        <p>Are you passionate about service and would like to have a more varied role during Teknikfokus 2023? Then you should apply for Wardrobe/Lounge/Breakfast Host!</p>
        <br>
        <p>During the fair you will help with several diferent aspects. You will for example be helping with taking care of the company representatives’ outerwear when arriving to the fair. You will also be making sure that the lounge looks nice and that there is coffee and other things available to create a cozy and comfortable environment where company representatives can relax. A perfect opportunity to get to know them!</p>
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
      question: "Lunch/Food Host",
      answer: `
        <p>Do you love making food and meeting new people? Then you should definitely apply for Lunch/Food Host!</p>
        <br>
        <p>Your main task during the fair will be to make food for the lunches for hosts and company representatives. During lunch a large portion of the attendees of the fair will be there, so you will get the chance to meet a lot of people! Teknikfokus will also be hosting a couple of lunch lectures and company pubs outside of the fair days that we will need help to prepare the food for. These events will take place during January and February but the dates are not yet decided. For this role it is a big plus if you have prior experience of making food for a large number of people, BUT it is definitely not a requirement!</p>
      `
    },
    {
      question: "Shuttle Host",
      answer: `
        <p>Do you know the streets of Malmö & Lund and would like to have the chance to connect with company representatives during a nice car ride? Then you should apply for Shuttle Host!</p>
        <br>
        <p>Your task will be to pick up and deliver company representatives who are attending Teknikfokus. The ride will be a great opportunity to meet and network with the representatives you are driving! As you most likely will operate in Lund and Malmö it is preferable if you know the streets of Lund and Malmö somewhat. To be a Shuttle Host during Teknikfokus 2023 it is required to have a driver’s license and drive safely.</p>
      `
    },
    {
      question: "Photographer",
      answer: `
        <p>Are you passionate about taking great pictures and want to show how awesome Teknikfokus 2023 will be? Then you should apply for Photographer!</p>
        <br>
        <p>As photograper during Teknikfokus you will take pictures of the fair, the Teknikfokus Banquet, events and other things related to the fair. The pictures will then be used for Teknikfokus 2023 but also for following years. It is plus to have prior experience of photography.</p>
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
      question: "What do I get for working at Teknikfokus?",
      answer: `
        <p>As a host at Teknikfokus you will get an exclusive patch to your ouvve, you will get free fika and lunch during the fair, and you will get in closer contact with the company representatives from companies both here in Lund and from other places.</p>
        <br>
        <p>As a host you will also be able to attend events before the fair, a thank you party after the fair, and get a ticket to the Teknikfokus Banquet for free!
        </p>
      `
    },
    {
      question: "What is the Teknikfokus Banquet, and when is it?",
      answer: `
      <p>The Teknikfokus Banquet is the formal large meal that Teknikfokus organizes for all the company representatives and hosts that have been engaged in Teknikfokus. Delicious food is promised and all the hosts that have been engaged at Teknikfokus will get a free ticket to the Teknikfokus Banquet.</p>
      <br>
      <p>The banquet will be held  February 13th at AF-Borgen, Sandgatan 2, 223 50 Lund. We have not yet determined at what time the doors will open, but more information is to come!</p>
      `
    },
    {
      question: "What is a coordinator?",
      answer: `
        <p>A coordinator will work just as any host during the fair, but they will also have more resposibility. This is because the coordinators will be responsible for a group of hosts during the fair and more responsibility will then be required to make the fair function as intended. If the hosts have any questions, their coordinator is the one they should make first contact with. The coordinators will thus function a bit like a team leader which will give you valuable experience!</p>
      `
    },
    {
      question: "How much work is expected of a host?",
      answer: `
        <p>Overall there is not a lot of work as a host during Teknikfokus since most of the work will be done during the two fair days. However, the work intensity can vary depending on what kind of host you are. Some hosts will work during longer periods of time, but at the same time a little calmer, for example the night watch, while some will work for a shorter period of time but more intensively, for example the lunch host. While you are expected to be able to work both days during the fair, you will of course not have to be at your post the entire time.</p>
      `
    },
    {
      question: "Who gets to apply for host at Teknikfokus?",
      answer: `
        <p>All students from the E and D-faculties are welcome to apply to be a host!</p>
      `
    }
  ];
  export default {
    name: 'Host',
    components: {
      Question
    },
    setup() {
      return {jobs, questions}
    },
    mounted() {
      scroll_to_hash();
    }
  }
</script>