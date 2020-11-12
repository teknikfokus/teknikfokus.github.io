<template>
  <div id="faq">
    <div class="container pt-5 pb-5">
      <h2 class="text-capitalize text-center mb-4">Frequently asked questions</h2>
      <div class="row">
        <div class="col d-none d-lg-block"></div>
        <div class="col col-lg-8">
          <div id="faq-accordion">
            <div class="question" v-for="[index, question] of questions.entries()" :key="'header'+index">
              <i class="fas fa-question-circle mr-2"></i>
              <div class="question-header" @mouseover="currentHover = index">
                  <a data-toggle="collapse" :data-target="'#collapse'+index" aria-expanded="false" aria-controls="collapseTwo" v-html="question.header">
                  </a>
              </div>
              <div :id="'collapse'+index" class="collapse" :aria-labelledby="'header'+index" data-parent="#faq-accordion" >
                <div class="question-body" v-html="question.answer">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col d-none d-lg-block"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FAQ',
  components: {
  },
  data() {
    return {
      currentHover: -1,
      questions: [
        {
          "header": "What is Teknikfokus?",
          "answer": "Teknikfokus is a career fair arranged på the E- and D-guild at Lunds Tekniska Högskola. The fair is dedicated towards students who study Information and Communication Science, Computer science, Electrical engineering and Biomedical engineering.\n\nOur goal is to provide a platform where students and companies can network and build relations for the future, but also to inspire students in the fields of their future jobs.\n\nDo you have any questions about the fair? Contact our project leaders, Emil Holm, emil@teknikfokus.se or Jonna Fahrman, jonna@teknikfokus.se."
        },
        {
          "header": "What dates are Teknikfokus?",
          "answer": "The fair will take place between 10:00 and 16:00, the 17th of February."
        },
        {
          "header": "Who organizes Teknikfokus?",
          "answer": "Teknikfokus is arranged by a project group consisting of students from our four programs, who parallel with their studies prepare the fair and all our events. The goal is a fair where everyone feels welcome, and where all attendees feel satisfied with the fair.\n\nIn addition, the fair would never be able to take place if it wasn’t for all the students that  volunteer at the fair.\n\nIf you have any questions regarding the project group or our volunteers you can contact  our project leaders, Emil Holm, emil@teknikfokus.se or Jonna Fahrman, jonna@teknikfokus.se. You can read about everyone in the project group under \"About us\"."
        },
        {
          "header": "Which companies will be present on Teknikfokus?",
          "answer": "You can find all the companies attending by visiting our digital platform, which you can reach by clicking \"Fair\" above."
        },
        {
          "header": "Where will Teknikfokus be?",
          "answer": "Teknikfokus will be completely digital this year due to the current circumstances regarding Covid-19."
        },
        {
          "header": "What does the kontaktsamtal/student sessions mean?",
          "answer": "Student Sessions provide companies a possibility to have a private sit down with students on the days of the fair, to talk about summer jobs, internships, exam work or future employment. Interested students send in their resumes and which companies they are interested in before the fair. The resumes are sent to the companies who are interested in student sessions. The Student Sessions will take place over zoom.\n\nIf you have questions about student sessions, contact our host manager. Contact information can be found under \"About us\"."
        },
        {
          "header": "Who should you contact if you have questions about the companies?",
          "answer": "If you have questions about the companies attending contact one of our Business managers. Contact information can be found under \"About us\".\n\nIf you have comments about the companies invited, or feel that a company doesn’t represent Teknikfokus in a good way, contact our information desk."
        },
        {
          "header": "Have you been treated badly by a participant?",
          "answer": "If you or anyone you know has been treated badly during the fair we ask you to contact the information desk who will put you in contact with the right person.\n\nIf you are a student at LTH we recommend you to also contact your guilds likabehandlingsombud or trivselmästare."
        }
      ]
    }
  }
}
</script>

<style scoped>
  .faq-accordion {

  }

  .faq-accordion ul {
    /* padding-left: 0; */
  }

  .question {
    /* list-style: none; */
    padding: 0;
  }

  .question i {
    font-size: 1em;
  }

  .question-header {
    display: inline-block;
    position: relative;

    background: none;
    cursor: pointer;
    transition: padding 0.2s;

    font-size: 1.2em;
    font-weight: 600;
  }

  .question-header:hover {
    text-decoration: none;;
    padding-left: 5px;
  }

  .question-header a {
    color: black;
    width: 100%;
    display: block;
  }

  .question-body {
    padding-left: 20px;
    color: #444;
  }

</style>
