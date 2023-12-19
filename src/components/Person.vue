<template>
  <div id="person">
    <div class="img-wrapper" :style="{'background-image': `url(${((info.imageUrl == '') ? getImgUrl('@/placeholder-person.webp') : getImgUrl(info.imageUrl))})`}"></div>
     <!-- denna div ska tas bort när bilder är klara o ersätts med den ovan  -->
    <!-- <div class="img-wrapper">
 <i class="fa-solid fa-user icon"></i>
    </div> -->

    <span class="name">{{info.name}}</span>
    <span class="position">{{info.position}}</span>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="icons">
      <a :href="info.linkedIn" target="_blank" v-if="info.linkedIn!=''"><i class="fab fa-linkedin-in"></i></a>
      <a :href="'mailto:'+info.mail" v-if="info.mail!=''"><i class="far fa-envelope"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    info: {
      name: String,
      position: String,
      imageUrl: String,
      linkedIn: String,
      mail: String
    }
  },

  
  methods: {
    getImgUrl(url) {
      return (url.startsWith('@/') ? require('../assets/images/project_group/'+url.substring(2)) : url)
    }
  }

  // denna metoden ska tas bort när bilder är klara och ersätts med den ovan 
//   methods: {
// getImgUrl(url) {
//   return (url.startsWith('@/') ? require('../assets/images/project_group/'+url.substring(2)) : url)
// }
// }

}
</script>

<style scoped>
#person {
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  width: 300px;
  margin: 20px;
  text-align: center;
  font-size: 18px;
}

.img-wrapper {
  display: block;
  margin: auto;
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 50%;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}

.name {
  display: block;
  font-size: 1.2em;
  margin-bottom: 0;
}

.position {
  display: block;
  color: gray;
  margin-bottom: 10px;
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}

.icons a {
  margin: 0 10px;
}

@media (min-width: 576px) {
  #person {
    font-size: 14px;
    width: 140px
  }
  .img-wrapper {
    width: 135px;
    height: 135px;
    margin-bottom: 15px;
  }
}

@media (min-width: 768px) { 
  #person {
    font-size: 16px;
    width: 200px;
    
  }
  .img-wrapper {
    width: 180px;
    height: 180px;
  }
}

@media (min-width: 992px) { 
  #person {
    font-size: 16px;
    width: 250px;
    
  }
  .img-wrapper {
    width: 220px;
    height: 220px;
  }
}
/* här har jag la till css for icons , de ska tas bort när bilder for gurppen är klara */
/* .icon {
font-size: 130px;  
color: #14273E;  
vertical-align: middle;
} */



</style>