<template>
  <v-container grid-list-md text-xs-center>
    <div v-if="$apollo.loading">
      <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>

    </div>
    <v-layout row wrap v-else>
      <v-flex v-for="i in repository.issues.edges" :key="i.id" xs3>
        <v-card>
          <v-card-title class="cardColor white--text justify-center">
            <h2>{{i.node.title}}</h2>
          </v-card-title>
          <v-avatar
          :size="100"
          color="grey lighten-4"
        >
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
          <v-card-actions class="justify-center">
          <!-- <v-btn flat color="">100 <v-icon>visibility</v-icon></v-btn> -->
          <h3>100 <v-icon>visibility</v-icon></h3>
          <v-btn flat color="primary">View</v-btn>
          <!-- <v-btn flat color="">100 <v-icon>favorite</v-icon></v-btn> -->
          <h3>100 <v-icon>favorite</v-icon></h3>
        </v-card-actions>
        </v-card>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { TRENDING_REPO_DETAILS_QUERY } from '../queries/trendingRepoDetailsQuery'
export default {

  data () {
    return {
      repository: [],
      owner: '',
      name: ''
    }
  },
  apollo: {
    repository: {
      query: TRENDING_REPO_DETAILS_QUERY,
      variables () {
        return {
          owner: 'octocat',
          name: 'Hello-World'
        }
      }
    }
  }
}
</script>

<style>
.cardHeight {
  height: 120px;
}
</style>
