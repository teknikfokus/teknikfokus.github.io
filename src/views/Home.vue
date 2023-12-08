<template >
  <div id="home">


    <div class=" py-5 hero-background   text-center text-xl md:text-2xl text-white  uppercase">




      <CountDown :firstDate="firstDate" :secondDate="secondDate" />


      <div class=" my-20    xl:px-0 container  flex  ">



        <div class=" xl:w-1/2  container   xl:px-0  flex-1 flex-col items-center justify-center    ">

          <div class=" container  flex flex-col   items-center  justify-center py-2 ">
            <div class="xl:w-1/2  ">
              <img src="../assets/logo/svg/white-logo-white-text.svg" class="max-w-full " alt="Teknikfokus" />
            </div>

            <div class=" py-2">
              <h2 class=" py-2 font-normal  text-1xl  text-center">Career fair</h2>
              <h2 class="  py-2 text-1xl font-normal  text-center">Where the present meets the future</h2>
            </div>


          </div>


        </div>









        <div class="  xl:w-1/2   flex-1   container flex  flex-col items-center justify-center    ">

          <h1 class=" font-normal   text-5xl py-2 ">Next fair</h1>
          <h2 class="text-1xl font-normal py-2"> 15th &amp; 16th of February, 2024!</h2>
          <h2 class="text-1xl font-normal   py-2">09:00-16:30</h2>
          <h2 class="text-1xl font-normal  py-2"> E-huset LTH, Ole Römers väg 3, Lund</h2>
          <div class=" py-2 container  social-icons">
            <a href="https://www.linkedin.com/company/teknikfokus/" target="_blank"
              class="fa fa-linkedin p-2 no-underline hover:no-underline focus:no-underline active:no-underline"></a>
            <a href="https://www.instagram.com/teknikfokus/" target="_blank"
              class="fa fa-instagram p-2 no-underline hover:no-underline focus:no-underline active:no-underline"></a>
            <a href="https://www.facebook.com/teknikfokus/" target="_blank"
              class="fa fa-facebook p-2 no-underline hover:no-underline focus:no-underline active:no-underline"></a>
          </div>


          <div class=" content  container  py-2">
            <button
              class=" responsive-button  bg-white  text-black font-normal  py-2 px-4 rounded-full focus:outline-none"
              @click="goToForStudents">
              For Students
            </button>


            <button class=" responsive-button bg-white  text-black font-normal py-2 px-3 rounded-full focus:outline-none"
              @click="goToForCompany">
              For Companies
            </button>

          </div>


        </div>


      </div>





    </div>


  </div>
</template>
  
<script>
import CompanyCarousel from '@/components/CompanyCarousel.vue';
import CountDown from '@/components/CountDown.vue';

export default {
  name: 'Home',
  components: {
    CompanyCarousel,
    CountDown

  },

  data() {
    return {
      scrolled: false,
      show_menu: null,
      firstDate: {
        date: {
          day: 13,
          month: 2,
          year: 2024,
        },
        time: {
          start: {
            hour: 9,
          },
          end: {
            hour: 16,
            minute: 30,
          }
        }
      },
      secondDate: {
        date: {
          day: 14,
          month: 2,
          year: 2024,
        },
        time: {
          start: {
            hour: 9,
          },
          end: {
            hour: 16,
            minute: 30,
          }
        }
      },
    }
  },
  methods: {
    goToForStudents() {

      this.$router.push('/ForStudents');
    },
    goToForCompany() {

      this.$router.push('/ForCompanies');
    }
  },


};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.hero-background {
  background-image: url('../assets/images/tek33.jpg');
  background-position: center;
  background-size: cover;


  min-height: 100vh;
}


@media (min-width: 768px) {
  .responsive-button {

    margin: 10px;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {

  .responsive-button {

    margin: 5px;
    font-size: 0.875rem;
  }

  .hero-background {
    height: auto;
    padding: 20px;
  }

  .max-w-xs {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
  }


  .container.flex {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
  }


  .text-left,
  .py-20 {
    width: 100%;
    padding: 10px;

  }

  .social-icons a,
  button {
    margin: 5px;
  }

  h1,
  h2,
  h3 {
    text-align: center;
    font-size: clamp(1rem, 3vw, 2rem);
  }

}
</style>
  
  

  