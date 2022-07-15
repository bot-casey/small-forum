<template>
  <v-app>
    <v-app-bar
        dense
        elevation="4"
        color="blue"
        elevate-on-scroll
        app
    >
        <v-app-bar-nav-icon @click="drawer.status = !drawer.status" />
        <v-toolbar-title>Server Manager</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-email</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        
    </v-app-bar>

        <v-navigation-drawer
      app
      v-model="drawer.status"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item 
            v-for="item in this.$data.drawer.items"
            :key="item.id"
            :onClick="item.onClick"
          >
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <AwsStatusGrid/>
      <v-container grid-list-xs>
        <v-row
          style="height: 150px;"
        >
          <v-spacer/>
          <PostsCard class="text-center d-flex flex-column align-center"/>
          <v-spacer/>
          <PostsCard class="text-center d-flex flex-column align-center"/>
          <v-spacer/>
          <PostsCard class="text-center d-flex flex-column align-center"/>
          <v-spacer/>
        </v-row>
        <v-row
          style="height: 150px;"
        >
          <PostsCard class="text-center d-flex flex-column align-center"/>
        </v-row>
      </v-container>
      <DurationGraph/>
    </v-main>

  </v-app>
</template>


<script>

import AwsStatusGrid from './components/AwsStatusGrid.vue'
import PostsCard from './components/PostsCard.vue'
import DurationGraph from './components/DurationGraph.vue'

export default {
  name: 'App',
  components: {
    AwsStatusGrid,
    PostsCard,
    DurationGraph,
  },
  data: () => ({
    drawer: {
      status: false,
      items: [
        {
          text: 'aws',
          onClick: 'console.log(stuff)'
        },
        {text: 'local'},
        {text: 'timeline'}
      ]
        
    },
    group: null,
    posts: [
      {
        title: 'some title',
        voteCounter: 2,
        author: 'some guy'
      }
    ]
  }),
  watch: {
    group () {
      this.drawer.status = false
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
