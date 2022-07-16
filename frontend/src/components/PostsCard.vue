<template>
  <v-card
    class="mx-auto"
    max-width="500"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{subForum}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{postTitle}}
        </v-list-item-title>
        <v-list-item-subtitle>{{textPreview}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <img :src="avatarUrl"/>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider/>

    <v-card-actions>
      <v-btn text>
        <v-icon>mdi-thumb-up</v-icon>
        {{upVotes}}
      </v-btn>
      
      <v-btn text>
        <v-icon>mdi-thumb-down</v-icon>
        <div d-flex> {{downVotes}} </div>
      </v-btn>

      <v-btn text>
        <v-icon>mdi-message-text</v-icon>
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'PostsCard',
  props: [ 
    'subForum',
    'postTitle',
    'textPreview',
    'upVotes',
    'downVotes',
    'avatarUrl',
  ],
  data() { 
    return {}
  }
}
</script>