<template>
  <div id="services-list">
    <v-layout row wrap>
      <v-flex md6 pr-2 pl-2>
        <v-expansion-panel>
          <v-expansion-panel-content
              v-for="(service, index) in services['text']"
              :key="service.title"
              v-if="index < services['text'].length / 2"
            >
              <div slot="header"><v-icon left>{{ service.icon }}</v-icon> &nbsp; {{ service.title }}</div>
              <v-card>
                <v-card-text class="grey lighten-3">{{ service.description }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
      </v-flex>

      <v-flex md6 pr-2 pl-2>
        <v-expansion-panel>
          <v-expansion-panel-content
              v-for="(service, index) in services['text']"
              :key="service.title"
              v-if="index >= services['text'].length / 2"
            >
              <div slot="header"><v-icon left>{{ service.icon }}</v-icon> &nbsp;  {{ service.title }}</div>
              <v-card>
                <v-card-text class="grey lighten-3">{{ service.description }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import services from '../data/services'

export default {
  data: () => ({
    services
  })
}
</script>
