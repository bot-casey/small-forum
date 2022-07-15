<template>
  <v-card
    class="mt-4 mx-auto"
    max-width="50%"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="text-h6 font-weight-light mb-2">
        Refresh Durations
      </div>
      <div class="subheading font-weight-light grey--text">
        In hours
      </div>
    </v-card-text>
  </v-card>
</template>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>

<script>
  export default {
    data: () => ({
      labels: [
        'December',
        'January',
        'Februrary',
        'March',
        'April',
        'May',
        'June',
        'July',
      ],
      value: [
        60,
        30,
        1000,
        3000,
        4000,
        10,
        50,
        200
      ],
    }),
  }
</script>