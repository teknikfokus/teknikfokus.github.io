<template>
  <div id="how-to">
    <div class="container pt-5">
      <h3>Gå med på Teknikfokus med din LU-mail</h3>
      <div class="paragraph">
        Teknikfokus 2021 äger rum helt digitalt den 17 februari 2021 kl.10.00-16.00!
        <br><br>
        Mässan hittar du på fair.teknikfokus.se och för att vara med på mässan behöver du bara skapa en användare: klicka på Visa event > Registrera > Skapa en profil med LU studentkonto och gå igenom de snabba stegen för att skapa din profil! Du kan nu börja utforska de deltagande företagen! 
        <br><br>
        <b>Registrera dig här</b>: <a href="https://fair.teknikfokus.se/sv/event/4728" target="_blank" class="btn link-button ml-3">Registrera</a>
      </div>

      <h3>Vad kan jag göra på mässan?</h3>
      <div class="paragraph">
        <span class="highlighted">Läsa om företagen</span> - I företagens montrar finns det möjlighet att läsa om företagets verksamhet och hur det är att vara anställd. Det visas också vilka jobb de har att erbjuda, och du kan boka in ett kontaktsamtal med video eller starta en chatt.
        <br><br>
        <span class="highlighted">Söka jobb</span> - För att se vilka jobb som finns att söka under mässan kan du antingen använda sidan jobb eller gå in på individuella företag som du är intresserad av för att se om de erbjuder några jobb som skulle passa dig. 
        <br><br>
        <span class="highlighted">Chatta med företag</span> - Chatta kan du göra under mässan genom företagets monter. du kan även fortsätta påbörjade chattar efter mässan. Ställ specifika frågor om jobbtillfällen eller småprata med företagsrepresentanterna för att utforska och skapa kontakter, beroende på vad ditt mål på mässan är. Du kan ha flera chattar igång samtidigt, så om företagsrepresentanterna har mycket att göra så kan du börja chatta med någon annan så länge eller boka ett kontaktsamtal!
        <br><br>
        <span class="highlighted">Kontaktsamtal</span> - Ett kontaktsamtal är ett direktsamtal med en representant på ett företag då ni båda har avsatt tid speciellt för varandra och det behöver därför inte vara någon stress eller press på grund av kö! Kontaktsamtal kan bokas i företagets monter och du också tillgång till samtalet på samma ställe. När du har bokat ett kontaktsamtal kan du fortsätta utforska mässan i lugn och ro och komma tillbaka när det är din tur. Se till att din profil är så komplett som möjligt för att få en tid för kontaktsamtal!
        <br><br>
        <span class="quote"><span class="quote-text">“But have you completed your profile?” … “Immediately after I had saved my new complete profile I got in contact with several different companies.”</span><br>
        - Evelina
        </span>
      </div>

      <h3>Tips!</h3>
      <div class="paragraph">
        Det finns olika sätt att förbereda sig för mässan. En av de viktigaste sakerna du kan göra för att få ut så mycket som möjligt av din upplevelse är att <span class="highlighted">skapa en stark profil</span>.  Ju mer info du har om dig själv desto större chans är det att ett <span class="highlighted">företag kontaktar dig</span>. Lägg gärna upp bild, CV, erfarenheter och kompetenser för att ge ett så komplett intryck som möjligt så att företagen vet att de ska kontakta just dig! 
        <br><br>
        Läs igenom företagslistan på teknikfokus.se eller klicka runt på mässan i förväg och bekanta dig med företagen innan mässan så att du vet vilka som just du är intresserad av. 
        <br><br>
        Är det något företag du är extra intresserad av, förbered frågor så att du kan få ut så mycket som möjligt av ditt samtal! Om du inte har några frågor utan bara är nyfiken är det helt okej det med! Gå in och chatta med företag, de vill jättegärna prata med er! Våga ta kontakt! 
        <br><br>
        Pssst… Företagsrepresentanter kan starta ett videosamtal i en chatt. Om du tycker att det är mer givande att prata än att skriva så kan du fråga om de vill starta ett samtal.
      </div>

      <div class="paragraph quote-block">
        <!--
        <div class="headshot-wrapper">
          <div class="headshot">
            <img src="@/assets/images/project_group/placeholder-person.png" alt="Image of Evelina Danielsson">
          </div>
          <div class="caption">Evelina Danielsson</div>
        </div>
        -->
        “A couple of months ago I attended ARKAD, a two-day long career fair arranged by TLTH. It was the first time that I attended a virtual career fair, so I did not know what to expect. I had registered and had an account ready for the fair, or so I thought.
        <br><br>
        The first day of the fair I visited some company stalls. It was nice to read about the companies and I could take my time to look through all the different openings that the companies offered. However, I did not come in contact with any of the company staff that were online.
        <br><br>
        The second day, I met some of my classmates who told me that people from several companies had started chatting with them. I was surprised to hear that they got in contact with the companies when I didn’t! “But have you completed your profile?”, one of them asked me. Then it hit me, I was just a profile with nothing but name and some basic contact info. The companies could not see me, so no wonder why they did not write to me. I quickly added my resume, a profile picture, and wrote a small presentation about myself and what I was looking to achieve at the fair. Immediately after I had saved my new complete profile I got in contact with several different companies.
        <br><br>
        Teknikfokus is just around the corner and this time I have already started building my profile to make sure that I get the most out of the fair!”
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'HowTo',
  components: {
  }
}
</script>

<style scoped>
#how-to {
  font-size: 1.05em;
}
.paragraph {
  margin-top: 1em;
  margin-bottom: 4em;
}

h3 {
  color: var(--primary);
}

.quote {
  color: var(--primary-dark);
  font-size: 1.2em;
}

.quote-text {
  font-style: italic;
  color: var(--primary);
  font-size: 1.4em;
}

.quote-block {
  color: var(--primary-darker);
}

.highlighted {
  font-weight: bold;
  color: darkred;
}

.headshot-wrapper {
  display: inline-block;
  float: left;
  width: 140px;
  height: 180px;
  margin: 20px;
  margin-left: 0;
  margin-top: 0;
}

.headshot {
  width: 140px;
  height: 168px;
  background: #888;
}

.headshot-wrapper .caption {
  width: 100%;
  text-align: center;
  font-size: 0.9em;
}
</style>