<template>
  <div id="companies">
    <div class="container pt-5 pb-5">
        <h2 class="text-capitalize text-center mb-4">Attending Companies</h2>
        <CompanyGrid :companies="filteredCompanies" v-if="!isLoading && !isError && filteredCompanies.length > 0" @select="selectCompany"/>
        <ErrorMessage v-if="!isLoading && !isError && filteredCompanies.length <= 0" text="No companies found." />
        <CompanyModal v-if="!isLoading && !isError" :class="{'show': showModal}" :info="selected" @close="closeModal()"/>
        <div class="dark-backdrop" v-if="!isLoading && !isError" :class="{'show': showModal}" @click="closeModal()"></div>

        <Loader v-if="isLoading" />
        <ErrorMessage v-if="isError && !isLoading" text="Unable to load companies, try again in a moment.<br>If the error persists, feel free to contact us." />
    </div>
  </div>
</template>

<script>
import { status } from 'jsonapi-vuex'
import CompanyGrid from '../components/CompanyGrid'
import CompanyModal from '../components/CompanyModal'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default {
  name: 'Companies',
  components: {
    CompanyGrid,
    CompanyModal,
    Loader,
    ErrorMessage
  },
  data() {
    return {
      isLoading: true,
      isError: false,
      selected: undefined,
      showModal: false
    }
  },
  created() {
    this.reloadCompanies()
  },
  methods: {
    reloadCompanies() {
      this.isLoading = true;
      const onResponse = () => {
          const statuses = Object.values(status.status);
          this.isLoading= statuses.includes(0)
          this.isError = statuses[statuses.length-1] === -1
        }
      status
        .run(() => this.$store.dispatch('jv/get', 'companies'))
        .then(onResponse).catch(onResponse)
    },
    selectCompany(company) {
      console.log(company)
      this.selected = company;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  },
  computed: {
    companies() {
      return this.$store.getters['jv/get']('companies')
    },
    filteredCompanies() {
      return Object.values(this.companies).filter(company => company.days_attending && Object.values(company.days_attending).length > 0)
    }
  }
}
</script>

<style scoped>
.dark-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  width: 100%;
  height: 100vh;

  background: black;
  opacity: 0;
  transition: opacity 0.2s;

  z-index: 1000;
  pointer-events: none;
}

.dark-backdrop.show { opacity: 0.2; }

#company-modal {
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}

#company-modal.show { opacity: 1; }

.show {
  pointer-events: auto !important;
}

</style>
