<template>
    <div>
        <Disclosure v-slot="{ open }">
            <DisclosureButton class="py-4 px-2 flex justify-between items-center w-full text-left font-semibold focus:outline-none">
                {{ info.question }}

                <ChevronRightIcon class="w-5 h-5 text-gray-600" :class='open ? "transform rotate-90" : ""' />
            </DisclosureButton>
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <DisclosurePanel class="text-gray-500 px-2 pb-3 pt-1">
                    <div>
                        {{ info.answer }}
                        <!-- Include programme info if question id == 4 -->
                        <div v-if="info.id == 4" class="mt-8 mx-auto grid sm:grid-cols-2 gap-6 md">
                            <a href="https://www.lth.se/utbildning/datateknik300/kurser" target="_blank" class="relative block justify-center align-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                                <div>Computer Science and Engineering</div>
                            </a>

                            <a href="https://www.lth.se/utbildning/informations-och-kommunikationsteknik/kurser" target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                                <div>Information and Communication Engineering</div>
                            </a>

                            <a href="https://www.lth.se/utbildning/elektroteknik/kurser/" target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                                <div>Electrical Engineering</div>
                            </a>

                            <a href="https://www.lth.se/utbildning/medicin-och-teknik/kurser/" target="_blank" class="relative block justify-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
                                <div>Biomedical Engineering</div>
                            </a>
                        </div>
                    </div>
                </DisclosurePanel>
            </transition>
        </Disclosure>
    </div>
</template>

<script>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
    components: { 
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronRightIcon,
    },
    name: "Question",
    props: {
        info: {
            question: String,
            answer: String,
        },
        index: Number
    }
}
</script>