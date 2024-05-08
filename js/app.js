console.log('ciao');

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      discs: []
    }
  },

  methods : {
    axiosCall() {
        //chiamata axios get
        axios.get('./server.php')
            .then((res) => {
                // console.log(res.data.results);
                this.discs = res.data.results;
            })
    }
  },

  mounted() {
    this.axiosCall(),
    console.log(this.discs);
  }
}).mount('#app')