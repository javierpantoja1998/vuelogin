<template>
    <div class="login">
      <h1 class="title">Login in the page</h1>
      <form action class="form" @submit.prevent="login">
        <label class="form-label" for="#email">Email:</label>
        <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email"><br>
        <label  class="form-label" for="#password">Password:</label>
        <input v-model="password" class="form-input" type="password" id="password" placeholder="Password"><br/>
        <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
        <input class="form-submit" type="submit" value="Login">
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name:"LoginComponent",
    methods:{
        login(){
            console.log(this.email);
            console.log(this.password);
        }
    },
    data(){
        return{
            email: "",
            password: "",
            error:false
        }
    }
  };
  </script>
  
  <style>

  </style>