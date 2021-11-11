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
                <DisclosurePanel class="text-gray-500 px-2 py-4">
                    {{ info.answer }}
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