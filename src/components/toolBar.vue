<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="white--text">
      <v-btn @click="redirectToHome" icon>
        <v-icon medium>home</v-icon>
      </v-btn>GitHub Graphql
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-text-field
      placeholder="please enter the Github Repo name"
      v-model="searchLanguage"
      ></v-text-field>

    <v-btn @click="searchForData" icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      searchLanguage: ''
    }
  },
  methods: {
    redirectToHome () {
      this.$router.push('/')
    },
    searchForData () {
      this.$router.push('/search/' + this.searchLanguage)
      this.searchLanguage = ''
    }
  }
}
</script>

<style>
</style>
