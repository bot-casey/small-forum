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
        <v-toolbar-title>Noddit</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn 
        icon
        v-for="item in this.$data.toolbar.items"
        :key="item.id"
        :onClick="item.onClick"
        >
            <v-icon>{{ item.icon }}</v-icon>
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
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="6"
            md="9"
          >
            <PostsCard
                v-for="item in this.$data.posts"
                :key="item.id"
                :subForum="item.subForum"
                :postTitle="item.postTitle"
                :textPreview="item.textPreview"
                :upVotes="item.upVotes"
                :downVotes="item.downVotes"
                :avatarUrl="item.avatarUrl"
                class="mb-6 mr-20 mx-auto"
            />
          </v-col>
          <v-col>
          </v-col>
        </v-row>
          
      </v-container>
    </v-main>

  </v-app>
</template>


<script>

import PostsCard from './components/PostsCard.vue'

export default {
  name: 'App',
  components: {
    PostsCard
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
    toolbar: {
      items: [
        {
          icon: 'mdi-magnify',
          onClick: 'console.log(stuff)'
        },
        {
          icon: 'mdi-email',
          onClick: 'console.log(stuff)'
        },
        {
          icon: 'mdi-dots-vertical',
          onClick: 'console.log(stuff)'
        }
      ]
    },
    group: null,
    posts: [
      {
        subForum: '123123',
        postTitle: 'some title',
        textPreview: 'asfasfasfasd',
        upVotes: '1400',
        downVotes: '5123412340',
        avatarUrl: 'https://i.pravatar.cc/80'
      },
      {
        subForum: '123123',
        postTitle: 'some title',
        textPreview: 'asfasfasfasd',
        upVotes: '14000',
        downVotes: '55',
        avatarUrl: 'https://i.pravatar.cc/80',
      },
      {
        subForum: '123123',
        postTitle: 'some title',
        textPreview: 'asfasfasfasd',
        upVotes: '140000',
        downVotes: '5',
        avatarUrl: 'https://i.pravatar.cc/80',
      },
      {
        subForum: '123123',
        postTitle: 'some title',
        textPreview: 'asfasfasfasd',
        upVotes: '5',
        downVotes: '4',
      },
      {
        subForum: '123123',
        postTitle: 'some title',
        textPreview: 'asfasfasfasd',
        upVotes: '3',
        downVotes: '3',
      },
      {
        subForum: '123123',
        postTitle: 'some title',
        textPreview: 'asfasfasfasd',
        upVotes: '2',
        downVotes: '2',
      },
      {
        subForum: '123123',
        postTitle: 'some title',
        textPreview: 'asfasfasfasd',
        upVotes: '1',
        downVotes: '1',
      },
      {
        subForum: '123123',
        postTitle: 'some title',
        textPreview: 'asfasfasfasd \
        asdfasfdssadasdfasdfasfasdfsafsdasdfasdfasdfsad \
        adfasfasfasfasdfasfasdfasdfasfasdfsdfasd',
        upVotes: '100',
        downVotes: '50',
      },
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
}
</style>
