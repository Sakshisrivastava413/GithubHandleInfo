/**
 * sabse ppehle variables define kar.
 * one for input. -> string
 * one for userBasicProfile -> object yeh kyu chiye?maine kaha tha user ki 
 * picture and name and basic information bhi dikhani hai.
 * haww mene raat ki call pe pucha tha tujhse tune kaha tha ki
 * repo name and unke stars haan but meri baawdi tune fir wo first wali api 
 * call kyo kari?
 * one for userRepos -> array
 * 
 * fir init method mein inko http request ke response ke hissab se initialize karo. aaya?
 * acha
 * ok hta deti hu oyee bewkoof data aara hai dikhade na kya jaara tera hhehe acha 
 * pheele repo name and stars fir hi acha and sun 
 * 
 */

new Vue({
  el: "#app",
  data: {
    input: '',

    repos: []
  },
  methods: {
    init() {
      // this.$http.get('https://api.github.com/users/' + this.input)
      //   .then(function(response1) {
      //     console.log(response1.data);
      //   });
// res.data kya aara hai? array  of obj
      this.$http.get('https://api.github.com/users/' + this.input + "/repos")
        .then(res => {
          console.log(res.data)
          // meri jaan simply repos ko res.data ke equal karegi to kya hoyega?
          // acha hn right
          this.repos=res.data
        });
    }
  }
});