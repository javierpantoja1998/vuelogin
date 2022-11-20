<template>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              HOME
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/login"
            >
              LOGIN
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/register"
            >
              REGISTRO
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</nav>
</template>