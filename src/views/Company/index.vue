<template>
  <div class="company">
    Company
    <button @click="search"></button>
  </div>
</template>

<script>
export default {
  methods: {
    search () {
      this.$router.push('/CompanyDetail')
    }
  }
}
</script>

<style></style>
