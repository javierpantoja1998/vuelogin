<template>
    <div class="register">
      <h1 class="title">Sign Up</h1>
      <form action class="form" @submit.prevent="register">
        <label class="form-label" for="#email">Email:</label><br/>
        <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
        ><br/>
        <label class="form-label" for="#password">Password:</label><br/>
        <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
        ><br/>
        <label class="form-label" for="#password-repeat">Repite la contraeña:</label><br/>
        <input
          v-model="passwordRepeat"
          class="form-input"
          type="password"
          id="password-repeat"
          placeholder="Password"
        ><br/>
        <input class="form-submit" type="submit" value="Sign Up">
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      email: "",
      password: "",
      passwordRepeat: ""
    }),
    methods: {
      register() {
        console.log(this.email);
        console.log(this.password);
        console.log(this.passwordRepeat);
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
 
  </style>