
new Vue({
  el: "#app",
  data: {
    input: '',
    userInfo: {
    },
    repos: []
  },
  methods: {
    init() {
      this.$http.get('https://api.github.com/users/' + this.input)
        .then(response => {
          console.log(response.data);
          this.userInfo=response.data
        });
      this.$http.get('https://api.github.com/users/' + this.input + "/repos")
        .then(res => {
          console.log(res.data)
          this.repos=res.data
        });
    }
  }
});