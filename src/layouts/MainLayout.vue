<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = ! leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
    </q-drawer>

    <q-page-container>

      <DarkTable />
      <VisibleColumnsTable />
      
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import DarkTable from '../components/DarkTable';
import VisibleColumnsTable from '../components/VisibleColumnsTable';

export default {
  
  name: 'MainLayout',

  components: {
    DarkTable,
    VisibleColumnsTable,
  },
  
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
