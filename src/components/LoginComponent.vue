methods: {
    async register() {
      const response = await auth.register(this.email, this.password);
      console.log(response);
    }
  }
  Por último podemos crear una variable en el data para mostrar error si el usuario ha metido mal el usuario y contraseña. Para capturar el error en la petición podemos usar try/catch. De paso vamos a poner que si el registro es correcto lleve al usuario a la página de inicio. Veamos como queda todo el componente:
  
  <template>
    <div class="register">
      <h1 class="title">Sign Up</h1>
      <form action class="form" @submit.prevent="login">
        <label class="form-label" for="#email">Email:</label>
        <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
        >
        <label class="form-label" for="#password">Password:</label>
        <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
        >
        <label class="form-label" for="#password-repeat">Repite la contraeña:</label>
        <input
          v-model="passwordRepeat"
          class="form-input"
          type="password"
          id="password-repeat"
          placeholder="Password"
        >
        <input class="form-submit" type="submit" value="Sign Up">
      </form>
      <p class="msg">¿No tienes cuenta?
      <router-link to="/register">Regístrate</router-link>
    </p>
    </div>
  </template>
  
  <script>
import auth from '@/logics/Auth';
  export default {
    data: () => ({
      email: "",
      password: "",
      passwordRepeat: "",
      error: false
    }),
    methods: {
      async login() {
        try {
          await auth.login(this.email, this.password);
          this.$router.push("/")
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>
  <style>

  </style>