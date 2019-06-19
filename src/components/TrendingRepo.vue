<template>
  <h3>{{repository.issues}}</h3>
</template>

<script>
import { trendingRepoDetails } from '../queries/trendingRepoDetailsQuery'
export default {
  apollo: {
    repository: trendingRepoDetails
  },
  data () {
    return {
      repository: []
    }
  }
}
</script>

<style>

</style>
