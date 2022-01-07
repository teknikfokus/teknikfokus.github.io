<template>
  <div id="company-grid">
    <div class="company" v-for="company of sortedCompanies" :key="JSON.stringify(company)" tabindex="0">
    <router-link :to="{ name: 'Company', params: { id: company._jv.id }}">
      <div class="content">
        <div class="logo" v-if="company.logo && 
                                company.logo._jv && 
                                company.logo._jv.links &&
                                company.logo._jv.links.image">
          <img :src="endpoint+company.logo._jv.links.image" :alt="company.name+' logo'"/>
        </div>
        <div class="name" v-else>{{company.name}}</div>
      </div>
    </router-link>
    </div>
  </div>
</template>

<script>
import {endpoint} from '../store/store.js'

export default {
    name: "CompanyGrid",
    props: {
        companies: Array
    },
    data() {
        return {
            endpoint
        }
    },
    computed: {
      sortedCompanies() {
        return [...this.companies].sort((a, b) => {
          // Teknikfokus should be first, rest alphabetically
          if (a.name.toLowerCase() === 'teknikfokus') return -1;
          if (b.name.toLowerCase() === 'teknikfokus') return 1;
          if (a.name > b.name) {
            return 1;
          } 
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        })
      }
    },
}
</script>

<style scoped>
  #company-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
  }
  
  .company {
    position: relative;
    min-width: 200px;
    /* height: 0; */
    margin: 10px;
    border: none;
    outline: none;
    background: white;

    cursor: pointer;

    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

  }

  .company:focus .content {
    box-shadow: 0 0 0 3px black;
  }

  @media (min-width: 576px) { .company { min-width: 225px; margin: 15px; } }
  @media (min-width: 768px) { .company { min-width: 200px; } }
  @media (min-width: 992px) { .company { min-width: 200px; } }
  @media (min-width: 1200px) { .company { min-width: 245px; } }

  .company:after {
      content: "";
      display: block;
      padding-bottom: 70%;
  }

  .content {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 2px 2px 10px #00000088; 

      transition: box-shadow 0.3s, transform 0.3s;
  }

  .company:hover .content {
      box-shadow: 2px 8px 16px #00000066; 
      transform: translate(0, -6px)
  }

  .logo {
      position: relative;
      margin-bottom: 10px;
      height: 100%;
      width: 100%;
  }

  .logo img {
      position: absolute;
      display: blocK;
      max-width: 100%;
      max-height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

  .name {

      font-size: 2rem;
      font-weight: 600;
      text-align: center;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

</style>