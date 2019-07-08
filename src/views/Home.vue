<template>
  <TrendingRepo :searchString="homeSearchString"/>
</template>

<script>
import TrendingRepo from '../components/TrendingRepo'

export default {
  data () {
    return {
      homeSearchString: 'ruby'
    }
  },
  components: {
    TrendingRepo
  }
}
</script>
