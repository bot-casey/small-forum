<template>
  <v-card
    loading
    min-width="20%"
    outlined
    class="pa-2"
  >
      <v-card-title primary-title>
          some name
      </v-card-title>
      <v-card-actions>
        <v-btn 
          color="success"
          align-left
        >
          good
        </v-btn>
        <v-btn 
          color="error"
        >
          bad
        </v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'PostsCard',
}
</script>