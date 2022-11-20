<template>
    <div class="register">
      <h1 class="title">Registro</h1>
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
import auth from '@/logics/Auth';

  export default {
    data: () => ({
      email: "",
      password: "",
      passwordRepeat: ""
    }),
    methods: {
      register() {
        auth.register(this.email, this.password).then(res=>{
            console.log(res);
            console.log("registrado");
        });
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
 
  </style>