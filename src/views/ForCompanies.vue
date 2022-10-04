<template>
    <div id="for-companies" class="py-12 scroll-smooth">
        <div class="xl:flex space-x-0 text-2xl text-center justify-evenly font-semibold">
            <a href="#About" class="bg-blue-primary text-white mx-2 p-8 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>About</div>
            </a>
            <a href="#Packages" class="bg-blue-primary text-white mx-2 p-8 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>Packages</div>
            </a>
            <a href="#FAQ" class="bg-blue-primary text-white mx-2 p-8 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>FAQ</div>
            </a>
            <a href="#How-to-apply" class="bg-blue-primary text-white mx-2 p-8 rounded-xl shadow-lg flex-1 hover:bg-blue-primary-lightest">
                <div>How to apply</div>
            </a>
        </div>
        
        <div id="About" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">About</h1>
        <div class="xl:flex xl:items-center mt-12">
            <h2>We are teknikfokus</h2>
           <!--
            TODO
           -->
        </div>
        
        <div id="Packages" class="py-6"></div>
        <div>
            <PackageDeal :info="currentPackage"></PackageDeal>
        </div>


        <h1 class="mt-12 text-5xl text-center font-bold">Packages</h1>
        <div class="xl:flex xl:items-center mt-12">
            <div class="xl:w-1/2 xl:px-8 space-y-4">
                <h3 class="text-xl font-semibold">How can you as a company take part?</h3>
                <p>With our one-day package you are guaranteed a spot on one of the days of the fair. Please note that there are a limited number of spots at the fair, so make sure to sign up as early as possible.</p>
                <p>To sign up, please contact: <a href="mailto:relations@teknikfokus.se" class="font-semibold">relations@teknikfokus.se</a></p>
            </div>
            <div class="mt-6 xl:mt-0 xl:w-1/2 p-6 xl:p-12 bg-blue-primary text-white rounded-xl shadow-lg">
                <h3 class="text-3xl font-semibold text-center">- SEK</h3>
                <h1 class="mt-6 font-semibold text-center">Note: Specifics will soon be visible</h1>
                <p class="mt-6">The full-day package includes:</p>
                <ul class="mt-2 list-disc pl-6">
                    <li>Showcase area of _m<sup>2</sup></li>
                    <li>A stand-up table</li>
                    <li>Parking tickets for our guest parking slots</li>
                    <li>Power outlets</li>
                    <li>Internet connection</li>
                    <li>Wardrobe</li>
                    <li>A company host to help you upon arrival and during the fair</li>
                    <li>Access to our fair lounge with coffee and fika</li>
                    <li>The ability to display and present your company on our website: teknikfokus.se</li>
                    <li>Attendance in the fair's advertisement</li>
                    <!--
                        <li>Breakfast and lunch for your company representatives</li>
                        <li>TODO 2 tickets to the Teknikfokus banquet which will take place on day 1 (the 16th).
                            Another opportunity to mingle with the company hosts and the project group</li>
                    -->
                </ul>
            </div>
        </div>

        <div id="FAQ" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">FAQ</h1>
        <!--    TODO    -->
        <div class="xl:flex xl:items-center mt-12">
            <div class="xl:w-1/2 xl:px-8 space-y-4">
                <h3 class="text-xl font-semibold">What do the different programmes specialize in?</h3>
                <h2>We kindly refer to their programme pages</h2>
            </div>
            <div class="mt-4 bg-center bg-cover text-center text-xl md:text-2xl text-white text-shadow-lg">
                <div class="mt-20 max-w-xl mx-auto grid sm:grid-cols-2 gap-6 px-4 md">
                    <a href="https://www.lth.se/utbildning/datateknik300/kurser"  target="_blank" class="relative block justify-center align-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        <div>Datateknik</div>
                    </a>

                    <a href="https://www.lth.se/utbildning/informations-och-kommunikationsteknik/kurser"  target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        <div>Informations- och kommunikationsteknik</div>
                    </a>

                    <a href="https://www.lth.se/utbildning/elektroteknik/kurser/"  target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        <div>Elektroteknik</div>
                    </a>

                    <a href="https://www.lth.se/utbildning/medicin-och-teknik/kurser/"  target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                        <div>Medicin och Teknik</div>
                    </a>
                </div>
            </div>
        </div>

        <div id="How-to-apply" class="py-6"></div>
        <h1 class="mt-12 text-5xl text-center font-bold">How to apply</h1>
        <!--    TODO    -->
        <div class="text-center mt-20">
            <h3 class="text-2xl md:text-4xl font-bold">Other ideas on marketing<br/>your company through Teknikfokus?</h3>
            <p class="text-lg md:text-xl mt-4 text-gray-600">Contact <a href="mailto:events@teknikfokus.se">events@teknikfokus.se</a> and we can discuss your ideas further. <br />We look forward to your suggestions!</p>
        </div>

    </div>
</template>

<script>
import PackageDeal from '../components/PackageDeal'
const packages = {
    "full-day": {
        packageName: "Full-day package",
        price: "500 SEK",
        perks: [
            "Helo",
            "gg"
        ]
    },
    "two-day": {
        packageName: "TWO DAY PACKAGE",
        price: "4000 SEK",
        perks: [
            "some m2 thing",
            "bibii thing"
        ]
    }
}    
var currentPackage = packages["full-day"]
export default {
  name: 'ForCompanies',
  components: {
    PackageDeal
  },
  setup(){
    return {packages};
  },
  data(){
    return {currentPackage};
  },
  methods: {
    setPackage(key){
        this.currentPackage = packages[key]
    }
  }
}
</script>
