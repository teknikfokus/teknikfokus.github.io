<template>
  <div id="how-to">
    <div class="container pt-5">
      <h3>Join Teknikfokus with your LU email</h3>
      <div class="paragraph">
        Teknikfokus 2021 will be completely digitally this year and takes place on February17th 2021 between 10.00-16.00!
        <br><br>
        You can find the fair at fair.teknikfokus.se and to participate in the fair you only need to create a user profile: click on View event> Register> Sign up with LU student account and go through the quick steps to create your profile! You can now start exploring the profiles of the participating companies!
        <br><br>
        <b>Register here</b>: <a href="https://fair.teknikfokus.se/sv/event/4728" target="_blank" class="btn link-button ml-3">Register</a>
      </div>

      <h3>What can I do at the fair?</h3>
      <div class="paragraph">
        <span class="highlighted">Read about the companies</span> - In the company stalls, you can read about the company, what they are doing, what it is like to be an employee there and any jobs they're offering. You can also chat with the company hosts or book an interview. 
        <br><br>
        <span class="highlighted">Applying for a job</span> - To see which jobs are available to apply for during the fair, you can either use the jobs page or go to the stalls of individual companies that you are interested in to see if they offer any jobs that would suit you.
        <br><br>
        <span class="highlighted">Chat with companies</span> - You can chat with a company recruiter during the fair by visiting the company's stall. You can also continue ongoing chats started during the fair, after the fair has ended. You can ask specific questions about job opportunities or chat with a recruiter to network and make contacts, all depending on what your goal of the fair is. You can have several chats running at the same time, so if the recruiter has a lot to do, you can start chatting with someone else in the meantime or book an interview!
        <br><br>
        <span class="highlighted">Interview/Video call</span> - You can book a video call with a recruiter from a company where both of you have set aside time especially for each other and there is no stress or pressure due to people waiting! You can sign up for an interview in the company stall, and you will also join the call at the company stall. Once you have booked an interview, you can continue to explore the fair in peace and quiet and come back when it's your turn. Make sure your profile is as complete as possible to get an interview!
        <br><br>
        <span class="quote"><span class="quote-text">"But have you completed your profile?" … “Immediately after I had saved my new complete profile I got in contact with several different companies.”</span><br>
        - Evelina
        </span>
      </div>

      <h3>But how do I gain the most of my time at the fair?</h3>
      <div class="paragraph">
        There are several different ways to prepare for the fair. One of the most important things you can do to get the most out of your experience is to <span class="highlighted">create a strong profile</span>.  The more info you have about yourself, the greater the chance is that a <span class="highlighted">company will contact you</span>. Feel free to upload a photo, CV, personal presentational text, work experience and skills to give an impression of yourself that is as complete as possible. Then the companies will know that they should contact you!
        <br><br>
        Read the list of companies on teknikfokus.se or click around on the fair in advance to get to know the companies before the fair so that you know which ones you are interested in.
        <br><br>
        If there is a company that you are particularly interested in, prepare questions so that you can get the most out of your conversation with them! If you have no questions and are just curious, that’s all right! Go in and chat with companies, they really want to talk to you! Don’t be scared to contact them!
        <br><br>
        Pssst… Company recruiters can start a video call in a chat. If you think it is more rewarding to talk than to write, you can always ask if they want to start a video call.
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