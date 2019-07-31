<template>
  <section class="login">
    <form @submit.prevent="login">
      <input type="email" placeholder="Email" />
      <input type="password" />
    </form>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {}
  },
  methods: {
    login() {},
    signin() {}
  }
}
</script>
