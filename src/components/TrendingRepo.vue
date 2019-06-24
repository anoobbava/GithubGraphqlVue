<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in 24" :key="`3${i}`" xs3>
        <v-card>
          <v-card-title class="cardColor white--text justify-center">
            <h2>Repo Name</h2>
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
import { trendingRepoDetails } from "../queries/trendingRepoDetailsQuery";
export default {
  apollo: {
    repository: trendingRepoDetails
  },
  data() {
    return {
      repository: []
    };
  }
};
</script>

<style>
.cardHeight {
  height: 120px;
}
</style>
