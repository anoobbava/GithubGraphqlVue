<template>
  <TrendingRepo :searchString="language"/>
</template>

<script>

import TrendingRepo from '../components/TrendingRepo'

export default {
  props: ['language'],
  components: {
    TrendingRepo
  }
}
</script>

<style>

</style>
