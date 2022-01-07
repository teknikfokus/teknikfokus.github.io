<template>
    <TransitionRoot as="template" :show="open" @close="$router.push('/companies')">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" v-if="!isLoading && !isError && company !== undefined">
                    <div class="mt-3 text-center sm:mt-0 sm:text-left">
                        <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                            {{company.name}}
                        </DialogTitle>
                        <div class="mt-2">
                            <img class="w-20 block mx-auto"
                                v-if="company.logo && 
                                company.logo._jv && 
                                company.logo._jv.links &&
                                company.logo._jv.links.image" 
                                :src="endpoint+company.logo._jv.links.image" />
                            <div class="mt-2 text-sm text-gray-500" v-html="sanitizedBody"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <router-link to="/companies" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Close
                    </router-link>
                </div>
            </div>
            </TransitionChild>
        </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { status } from 'jsonapi-vuex'
import {endpoint} from '../store/store.js'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
    name: "CompanyModal",
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
    },
    data() {
        return {
            endpoint,
            isLoading: true,
            isError: false,
        }
    },
    created() {
        this.reloadCompanies()
    },
    setup() {
        const open = ref(true)

        return {
        open,
        }
    },
    methods: {
        reloadCompanies() {
        this.isLoading = true;
        const onResponse = () => {
            const statuses = Object.values(status.status);
            this.isLoading= false
            this.isError = statuses[statuses.length-1] === -1
        }
        status
            .run(() => this.$store.dispatch('jv/get', 'companies/'+this.$route.params.id))
            .then(onResponse)
    },
    },
    computed: {
        company() {
            return this.$store.getters['jv/get']('companies/'+this.$route.params.id)
        },
        sanitizedBody() {
            return this.company.body ? [...this.company.body].map(c => (c === '\n') ? '<br>' : c).join('') : ""
        }
    }
}
</script>