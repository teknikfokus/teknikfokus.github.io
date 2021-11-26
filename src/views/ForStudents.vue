<template>
    <div class="mx-auto xl:flex py-10">
      <div class="py-10 xl:py-0">
        <div class="mx-auto max-w-xl bg-blue-primary rounded-xl shadow-lg text-white p-6 md:p-10 py-14 relative overflow-hidden">
          <h4 class="text-2xl">Functionary</h4>
          <div class ="text-gray-200">
            <p>Do you wanna get in touch companies and at the same time go to fun events and hang with wonderful people from the E- and D-section? Then you should apply as a functionary to our job fair.</p>
            <p>You will meet company represantives and together with other volunteers go to the very exclusive banquet for free! After the fair is over, there is also a thank you event to all the functionaries that has made Teknikfokus possible.</p>
            <p class="mt-2"><a href="https://forms.gle/uHLUFTqWVD4WhQLL6">Apply to be a functionary here</a>!</p>
          </div>
        </div>
      </div>
      
      <div class="mx-auto max-w-xl bg-blue-primary rounded-xl shadow-lg text-white p-6 md:p-10 py-14 relative overflow-hidden">
        <h4 class="text-2xl">Coordinator</h4>
        <div class="text-gray-200">
        <p>Do you think that it sounds fun to be a functionary but at the same time feel ready for some extra responsibilites?</p>
        <p>Then you should apply to be a coordinator instead. You will get the same benefits as a functionary but you will also develop skills which  are attractiv in the job market.</p>
        <p class="mt-2"><a href="https://forms.gle/972okUNiaDMqNmk37">Apply to be a coordinator here</a>!</p>
        
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

p {
  margin-bottom: 40px;
}

h3 {
  color: var(--primary);
}

h5, h4{
  color: var(--primary-dark)
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