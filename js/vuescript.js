const { createApp } = Vue

  const app = createApp({
    data() {
      return {
        emails: []
      }; 
    },
    created(){

      for(let i=0; i < 10; i++){
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {

            const email = res.data.response;
            console.log('Email ' + i + ':', email);

            
            this.emails.push(email);
        });
      }
      
    }
  }).mount('#app');