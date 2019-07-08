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
      <v-flex v-for="i in search.edges" :key="i.id" xs3>
        <v-card>
          <v-card-title class="cardColor white--text justify-center">
            <h2>{{i.node.name}}</h2>
          </v-card-title>
          <v-avatar
          :size="100"
          color="grey lighten-4"
        >
          <img :src="i.node.owner.avatarUrl" alt="avatar">
        </v-avatar>
          <v-card-actions class="justify-center">
          <h3>{{i.node.stargazers.totalCount}} <v-icon>visibility</v-icon></h3>
          <a v-bind:href="i.node.owner.url" target="_blank">
            <v-btn flat color="primary">View</v-btn>
          </a>
          <h3>{{i.node.forks.totalCount}} <v-icon>favorite</v-icon></h3>
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
  props: ['searchString'],
  data () {
    return {
      search: [],
      queryString: ''
    }
  },
  apollo: {
    search: {
      query: TRENDING_REPO_DETAILS_QUERY,
      variables () {
        return {
          queryString: 'language:' + this.searchString + ' stars:>10000'
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
