<template>
  <div id="for-companies" class="py-4 scroll-smooth">
    <div class="mx-auto grid sm:grid-cols-3 gap-4 md text-2xl text-center font-semibold">
      <a href="#About-teknikfokus" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
        <div>About Teknikfokus</div>
      </a>
      <a href="#Company-host" class="bg-blue-primary text-white p-6 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
        <div>Company Hosts</div>
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

    <div id="Company-host" class="py-6 content-center"></div>
    <div class="flex flex-col mx-auto text-lg">
      <h1 class="mt-12 text-5xl text-center font-bold">Company Host</h1>
      <h2 class="mt-12 text-center">
        During the fair the companies will need help when setting up their showcase area. As some companies have not been at LTH before they might also have other questions regarding E-huset. The job of a company host is to be their contact person prior to and during the fair as well as to help their company representatives while attending the fair.
      </h2>
      <h2 class="mt-12 text-center">
        To show our thanks to everyone who contributed to Teknikfokus every host will get a ticket to our annual banquet. The work of a Company Host is greatly appreciated by the companies and is a great way to get in contact with those you are helping.
      </h2>
      <button class="mt-6 mx-auto bg-blue-primary text-white text-xl font-bold p-8 rounded-xl shadow-lg hover:bg-blue-primary-lightest">
        🎉 Apply for Company Host 🎉
      </button>
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
  export default {
    name: 'ForStudents'
  }
</script>
