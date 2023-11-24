
<template>
  <div id="host" class="scroll-smooth">
    <div id="About-hosts" class="py-6"></div>
    <h1 class="my-12 text-5xl text-center font-bold">About Hosts</h1>
    <h3 class="text-lg text-center max-w-[80ch] mx-auto">Every great career fair needs awesome hosts and Teknikfokus is no
      different. We will need lots of help with setting things up for the fair and with answering all kinds
      of questions about the fair in the info desk. We will also need company host that ensure that the companies
      feel welcome. There are many more roles that hosts can have and there is something for everyone. You can find the
      descriptions for all the roles for Teknikfokus 2024 below. Those who take part as hosts will receive many benefits
      such as attending the Teknikfokus Banquet, merch and other festivities. So apply to be a host for Teknikfokus,
      together we will make Teknikfokus possible!</h3>

    <div id="How-to-apply" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">Apply for Host</h1>
    <!-- <h3 class="pt-4 text-center text-lg">Host application for 2024 has closed. For any questions or additional inquiries please contact <a class="font-bold" href="mailto:hosts@teknikfokus.se">hosts@teknikfokus.se</a>.</h3> -->
    <button class="apply-button" @click="openForm">Apply for Host</button>

    <div id="Descriptions" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">Host Descriptions</h1>
    <div class="pt-5 pb-5">
      <div class="max-w-510xl mx-auto">
        <div id="students-faq-accordion" class="divide-y-2 divide-gray-200">
          <Question v-for="(question, index) in jobs" :key="index" :info="question" :index="index"></Question>
          <ErrorMessage v-if="questions <= 0" text="No frequently asked questions found." />
        </div>
      </div>
    </div>

    <div id="Students-FAQ" class="py-6"></div>
    <h1 class="mt-12 text-5xl text-center font-bold">FAQ</h1>
    <div id="students-faq" class="pt-5 pb-5">
      <div class="max-w-510xl mx-auto">
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
          <p>Would you like the chance to converse and network with one or two of the companies participating in Teknikfokus 2024? If so, consider applying to be a company host!</p>
          <br>
          <p>As a company host, you'll be tasked with overseeing one to two companies during the event. Your primary responsibilities will include ensuring that company contacts receive all necessary information prior to the fair, assisting in the setup of company booths, and providing support if the company requires assistance or has inquiries during the event.</p>
        `
  },
  {
    question: "Night Watch",
    answer: `
          <p>Are you a true night owl who enjoys the taste of free food? If so, consider applying to be a night guard!</p>
          <br>
          <p>On the night between the exhibition days, companies' belongings and other items will be stored in the E-house. To ensure the companies feel secure enough to leave their items there, we need night guards to keep a watchful eye and prevent any losses.</p>
          <br>
          <p>Unfortunately, there is a possibility that this may coincide with the time of the Banquet. Instead, you will have the option to order pizza, snacks, and soft drinks during the night, with Teknikfokus covering the cost. You'll also have the flexibility to spend your time as you wish, as long as you are supervising the company's belongings.</p>
        `
  },
  {
    question: "Info Desk",
    answer: `
        <p>Are you a sociable and service minded individual who enjoys answering a variety of questions and being one of the faces of Teknikfokus? Then you should apply for info-desk host!</p>
        <br>
        <p>This is one of the most social positions at the fair. Throughout the event, companies, hosts, and visitors will be able to approach you with questions related to the fair. Besides being at service on the fair, you will be responsible for items that 
          companies eventually could borrow for their booths and more.</p>
      `
  },
  {
    question: "Food and wardrobe host",
    answer: `
        <p>Do you have a passion for service and seek a diverse role during Teknikfokus 2024? Then you should apply for the food and wardrobe host!</p>
        <br>
        <p>In this post, you will be responsible for breakfast, lunch, lounges and the wardrobe during the fair. You will assist with various tasks, such as taking care of attendees' outerwear upon their arrival. You will also be responsible for maintaining the lounge area, ensuring it looks inviting with amenities like coffee, creating a cozy environment where company representatives can unwind. It's an ideal opportunity for engaging with different companies!
  Additionally, you will ensure that breakfast is available in the lounge each morning for both hosts and company representatives.
  </p>
      `
  },
  {
    question: "Banquet host",
    answer: `
        <p>Are you an organized and cheerful person who loves decorating? Then you should consider applying for Banquet Host!</p>
        <br>
        <p>Join us in making the first day of the fair, February 13th, truly exceptional! We're hosting a Banquet, and your assistance is crucial in transforming the hall into a stunning setting for the evening. Your team will be responsible for decorations and ensuring that everything is perfectly arranged. Although you'll miss a portion of the first day's events while preparing, you'll have the chance to change and participate in the Banquet before the guests arrive. Your contribution will help set the stage for an unforgettable evening.</p>
      `
  },
  // {
  //   question: "Lunch/Food Host",
  //   answer: `
  //     <p>Do you love making food and meeting new people? Then you should definitely apply for Lunch/Food Host!</p>
  //     <br>
  //     <p>Your main task during the fair will be to make food for the lunches for hosts and company representatives. During lunch a large portion of the attendees of the fair will be there, so you will get the chance to meet a lot of people! Teknikfokus will also be hosting a couple of lunch lectures and company pubs outside of the fair days that we will need help to prepare the food for. These events will take place during January and February but the dates are not yet decided. For this role it is a big plus if you have prior experience of making food for a large number of people, BUT it is definitely not a requirement!</p>
  //   `
  // },
  // {
  //   question: "Shuttle Host",
  //   answer: `
  //     <p>Do you know the streets of Malmö & Lund and would like to have the chance to connect with company representatives during a nice car ride? Then you should apply for Shuttle Host!</p>
  //     <br>
  //     <p>Your task will be to pick up and deliver company representatives who are attending Teknikfokus. The ride will be a great opportunity to meet and network with the representatives you are driving! As you most likely will operate in Lund and Malmö it is preferable if you know the streets of Lund and Malmö somewhat. To be a Shuttle Host during Teknikfokus 2023 it is required to have a driver’s license and drive safely.</p>
  //   `
  // },
  {
    question: "Photographer",
    answer: `
        <p>Do you have a passion for capturing the best moments and want to showcase how amazing Teknikfokus 2024 will be? Then you should apply to be a photographer!</p>
        <br>
        <p>As a photo host for Teknikfokus, your role will involve taking pictures of the exhibition, the Banquet and other events related to the fair. The photos will be used both for Teknikfokus 2024 and possibly for future years. Having prior experience in photography is favorable but not required.
</p>
      `
  },
  {
    question: "Student Session Coordinator",
    answer: `
        <p>Do you want to be the person ensuring a compatible match between students and companies for contact meetings during Teknikfokus 2024? Then you should apply to be a contact meeting coordinator!</p>
        <br>
        <p>This role is specifically a coordinating position, as it involves a bit more responsibility than that of a host. It's worth noting that this type of coordinator will not be responsible for an own group of hosts, distinguishing it from other coordinators. 
Before the fair, students will have the opportunity to submit their resumes, which companies will review to select the students they wish to speak with. To facilitate this process, a student sessions coordinator is needed to oversee our student portal and ensure that the right individuals are matched with the right companies. You will also assist both company representatives and students in finding their way to the contact meetings during the fair.
</p>
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
        <p>A coordinator will work just as any other host during the fair, but they will also have additional resposibility. The coordinators will be responsible for a group of hosts during the fair and make sure everything runs smoothly. If the hosts have any questions, their coordinator is the one they should first make contact with. Thus, they will function a bit like a team leader which will be a valuable experience!</p>
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
//fick en varning och därför importerar jag den o
import ErrorMessage from '../components/ErrorMessage'

export default {
  name: 'Host',
  components: {
    Question,
    ErrorMessage
  },
  setup() {
    return { jobs, questions }
  },
  mounted() {
    scroll_to_hash();
  },

  methods: {
    openForm() {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSdB2UstHt6vg5SYvJC7NU1qOFqG81XsKvV-L8bJkrLTAb8egQ/viewform', '_blank');
    }
  }


}
</script>
<style>
.apply-button {
  background-color: #14273E;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  /* Ensure the button is a block-level element */
  font-size: 16px;
  margin: 20px auto 4px;
  /* Add top margin */
  cursor: pointer;
}
</style>