<template>
  <div id="faq">
    <div class="container pt-5 pb-5">
      <h2 class="text-capitalize text-center mb-4">Frequently asked questions</h2>
      <router-link to='/about'>About Us</router-link>
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
          "fraga": "Vad är Teknikfokus?",
          "svar": "Teknikfokus är en arbetsmarknadsmässa anordnad av E- och D-sektionen vid Lunds Tekniska Högskola. Mässan riktar sig främst till studenter som går Informations- och kommunikationsteknik, Datateknik, Elektroteknik samt Medicin och teknik. Målet med mässan är att ge medverkande studenter och företag ett tillfälle att knyta kontakter inför framtiden, men också att ge studenter en möjlighet att inspireras samt få en bild av inom vilka områden de kommer kunna arbeta efter examen.\n\nHar du frågor angående mässan? Kontakta Teknikfokus projektledare Alexander Wik, alexander@teknikfokus.se, eller Niklas Hedström, niklas@teknikfokus.se.",
          "header": "What is Teknikfokus?",
          "answer": "Teknikfokus is a career fair arranged på the E- and D-guild at Lunds Tekniska Högskola. The fair is dedicated towards students who study Information and Communication Science, Computer science, Electrical engineering and Biomedical engineering.\n\nOur goal is to provide a platform where students and companies can network and build relations for the future, but also to inspire students in the fields of their future jobs.\n\nDo you have any questions about the fair? Contact our project leaders, Emil Holm, emil@teknikfokus.se or Jonna Fahrman, jonna@teknikfokus.se."
        },
        {
          "fraga": "Vilka datum är Teknikfokus?",
          "svar": "Mässan hålls 10:00-16:00 den 18:e och 19:e februari, 2020.\nTeknikfokus Banketten hålls den 18:e februari, med start kl 18:00.",
          "header": "What dates are Teknikfokus?",
          "answer": "The fair will take place during 8am and 5pm, the 17th of February."
        },
        {
          "fraga": "Vem anordnar Teknikfokus?",
          "svar": "Mässan anordnas av en projektgrupp som består av studenter från C-, D-, E- och BME-programmet, som vid sidan av studierna jobbat för att få ihop en fantastisk mässa. Målet har alltid varit att göra en mässa där alla känner sig välkomna, och där samtliga deltagare ska gå från mässan och känna sig nöjda.\n\nMässan hade dessutom aldrig blivit av om det inte vore för de funktionärer som frivilligt hjälper till under mässan. Det är funktionärerna som ser till att varje företag har det bra och är nöjda, serverar lunch, frukost, riggar upp/ned samt vaktar allt värdefullt under nätterna.\n\nHar man frågor angående projektgruppen kan man ta kontakt med Teknikfokus projektledare Alexander Wik, alexander@teknikfokus.se, eller Niklas Hedström, niklas@teknikfokus.se. Du kan också se samtliga i projektgruppen under \"About us\" på hemsidan.",
          "header": "Who organizes Teknikfokus?",
          "answer": "Teknikfokus is arranged by a project group consisting of students from our four programs, who parallel with their studies prepare the fair and all our events. The goal is a fair where everyone feels welcome, and where all attendees feel satisfied with the fair.\n\nIn addition, the fair would never be able to take place if it wasn’t for all the students that  volunteer at the fair.\n\nIf you have any questions regarding the project group or our volunteers you can contact  our project leaders, Emil Holm, emil@teknikfokus.se or Jonna Fahrman, jonna@teknikfokus.se. You can read about everyone in the project group under <router-link to='/about'>About us</router-link>."
        },
        {
          "fraga": "Vilka företag kommer att vara närvarande på Teknikfokus?",
          "svar": "Du hittar alla företag som närvarar vid mässan under \"Attending\".",
          "header": "Which companies will be present on Teknikfokus?",
          "answer": "You can find all the companies attending by visiting our digital platform, which you can reach by clicking \"Fair\" above."
        },
        {
          "fraga": "Var kommer Teknikfokus att vara?",
          "svar": "Teknikfokus kommer att hållas i E-huset, Ole Römers väg 3, 223 63 Lund, på Lunds Tekniska Högskolas campusområde. Mässan hålls främst i husets huvudentré samt i de större lässalarna på entréplan.",
          "header": "Where will Teknikfokus be?",
          "answer": "Teknikfokus will be completely digital this year due to the current circumstances regarding Covid-19. You can visit it <a href='#'>here</a>."
        },
        {
          "fraga": "Vad innebär kontaktsamtal/student sessions?",
          "svar": "Kontaktsamtalen ger företag möjligheten att under mässdagarna få prata enskilt med studenter angående t.ex. sommarjobb, praktik, extrajobb, examensarbeten eller anställning efter studierna.\n\nIntresserade studenter får i förväg ha skicka in CV till oss samt meddela vilka företagen de är intresserade av. Dessa vidarebefordras vi sedan till de företag som anmält intresse för kontaktsamtal. Därefter försöker vi matcha rätt student till rätt företag utifrån de åsikter som båda har uttryckt.\n\nKontaktsamtalen sker under mässan i mindre rum i E-huset, utifrån ett förutbestämt schema.\n\nVid frågor angående kontaktsamtalen och dess utformning ber vi er maila vår funktionärsansvariga. Kontaktuppgifter hittar ni under <router-link to='/about'>About us</router-link> på hemsidan.",
          "header": "What does the kontaktsamtal/student sessions mean?",
          "answer": "Student Sessions provide companies a possibility to have a private sit down with students on the days of the fair, to talk about summer jobs, internships, exam work or future employment. Interested students send in their resumes and which companies they are interested in before the fair. The resumes are sent to the companies who are interested in student sessions. The Student Sessions will take place over zoom.\n\nIf you have questions about student sessions, contact our host manager. Contact information can be found under <router-link to='/about'>About us</router-link>."
        },
        {
          "fraga": "Vem ska man kontakta om man har frågor om företagen?",
          "svar": "Vid frågor angående mässans företag ber vi er att maila någon av våra företagsansvariga. Kontaktuppgifter hittar ni under \"About us\" på hemsidan.\n\nOm du har synpunkter på vilka företag vi bjudit in, eller känner att något företag inte representerar det Teknikfokus står för, ta kontakt med vår infodisk så hänvisas du rätt.",
          "header": "Who should you contact if you have questions about the companies?",
          "answer": "If you have questions about the companies attending contact one of our Business managers. Contact information can be found under <router-link to='/about'>About us</router-link>.\n\nIf you have comments about the companies invited, or feel that a company doesn’t represent Teknikfokus in a good way, contact our information desk."
        },
        {
          "fraga": "Har du blivit illa behandlad av en mässdeltagare?",
          "svar": "Om du eller någon av din omgivning har blivit illa behandlad av någon under mässan ber vi dig att kontakta informationsdisken som kan hänvisa dig vidare till rätt person.\n\nOm du är studerande på LTH rekommenderar vi dig också att ta kontakt med din respektive sektions likabehandlingsombud eller trivselmästare.",
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
    font-size: 1.2em;
    position: relative;
    top: 1px;
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
