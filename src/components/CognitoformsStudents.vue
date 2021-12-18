<template>
   <div id="cognitoforms-container">
        <iframe src="https://www.cognitoforms.com/f/d3oRJ0yNwEe8gakOHWBykw/1" style="border:0;width:100%;" height="440"></iframe>
        <div id="cognitoforms-script"></div>
   </div>
</template>

<script>
  export default {
    name: 'CognitoformsStudents',
    mounted() {
      let formScript = document.createElement('script')
      formScript.setAttribute('src', 'https://www.cognitoforms.com/f/iframe.js');
      document.getElementById('cognitoforms-script').appendChild(formScript)
    },
  }
</script>