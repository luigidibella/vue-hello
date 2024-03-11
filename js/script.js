const { createApp } = Vue;

createApp({

  data(){
    return {
      messaggio: 'Hello Vue',
      imgName: "VueConf",
      imgUrl: "https://miro.medium.com/v2/resize:fit:960/1*SDL0rGe3BK6K4Nrvxn--tg.gif",
    }
  },

}).mount('#app')