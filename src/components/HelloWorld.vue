<template>
  <h3>{{jobs}}</h3>
</template>

<script>
import { Sample } from '../queries/sample'
// import gql from 'graphql-tag'
export default {
  apollo: {
    jobs: Sample
  },
  data () {
    return {
      jobs: []
    }
  }
}
</script>

<style>

</style>
