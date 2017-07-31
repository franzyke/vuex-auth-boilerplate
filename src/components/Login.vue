<template>
  <form action="" @submit.prevent="login({name: user.username, password: user.password})">
    <input type="text" @input="user.username = $event.target.value" :value="user.name">
    <input type="password" @input="user.password = $event.target.value" :value="user.password">
    <input type="submit" value="Login">
  </form>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        user: {
          name: null,
          password: null
        }
      }
    },
    computed: {
      ...mapGetters({
        status: 'auth/status'
      })
    },
    watch: {
      status (s) {
        if (s === 1) {
          this.redirect()
        }
      }
    },
    methods: {
      ...mapMutations({
        login: 'auth/login'
      }),
      redirect () {
        console.log(this.$route.params)
        let redirectTo = this.$route.params.name ? this.$route.params.name : 'dashboard'
        let redirectParams = this.$route.params.params ? this.$route.params.params : ''
        this.$router.push({name: redirectTo, params: redirectParams})
      }
    },
    created () {
      if (this.status === 1) {
        this.redirect()
      }
    }
  }
</script>
