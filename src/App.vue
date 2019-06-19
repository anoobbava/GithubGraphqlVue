<template>
  <v-app>
    <v-content>
      <toolBar/>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
import toolBar from './components/toolBar'
export default {
  name: 'App',
  components: {
    toolBar
  }
}
</script>
