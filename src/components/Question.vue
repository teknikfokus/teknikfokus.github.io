<template>
    <div id="question">
        <div class="header" @mouseover="currentHover = index">
            <a data-toggle="collapse" :data-target="'#collapse'+index" aria-expanded="false" aria-controls="collapseTwo" 
                v-html="`<i class='fas fa-question-circle mr-2'></i>${info.q_en}`">
            </a>
        </div>
        <div :id="'collapse'+index" class="collapse" :aria-labelledby="'header'+index" data-parent="#faq-accordion" >
            <div class="body" v-html="info.a_en"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Question",
    props: {
        info: {
            a_en: String,
            q_en: String
        },
        index: Number
    }
}
</script>

<style scoped>
  #question {
    /* list-style: none; */
    padding: 0;
  }

   i {
    font-size: 1em;
  }

  .header {
    display: inline-block;
    position: relative;

    background: none;
    cursor: pointer;
    transition: padding 0.2s;

    font-size: 1.2em;
    font-weight: 600;
  }

  .header:hover {
    text-decoration: none;;
    padding-left: 5px;
  }

  .header a {
    color: black;
    width: 100%;
    display: block;
  }

  .body {
    padding-left: 20px;
    color: #444;
  }
</style>