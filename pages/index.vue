<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <div class="text-center">
        <logo /></div
    ></v-col>
    <v-col cols="12" sm="10" md="8">
      <v-skeleton-loader
        transition="scale-transition"
        :loading="loading"
        :types="{ actions: 'button@1', skeleton: 'article, actions' }"
        type="skeleton"
        width="auto"
      >
        <v-card>
          <v-card-title class="headline">
            Welcome to To do app
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, nisi? Voluptatum possimus repellendus, iste quas
              corrupti ducimus fugit alias? Saepe impedit cupiditate facilis
              explicabo rerum vitae quasi recusandae modi tenetur?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              voluptatem accusamus veritatis, quo sequi molestias, dolor velit
              eius excepturi facere rerum impedit magni laudantium minus ducimus
              amet delectus reprehenderit facilis.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/tests">
              Continue <v-icon dark left>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-skeleton-loader>
    </v-col>
  </v-row>
</template>
<script src="./index.js"></script>
