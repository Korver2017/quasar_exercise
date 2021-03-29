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
      :dark="true"
    >
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in menuList">
            <q-item :to="menuItem.to" :key="index" clickable exact v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const menuList = [
  {
    icon: 'o_apps',
    label: 'Quasar App',
    separator: true,
    to: '/',
  },
  {
    icon: 'o_table_chart',
    label: 'Dark Table',
    separator: false,
    to: '/dark-table',
  },
  {
    icon: 'o_table_chart',
    label: 'Visible Columns Table',
    separator: false,
    to: '/visible-columns-table',
  },
]

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
      leftDrawerOpen: true,
      
      menuList,
    }
  }
}
</script>
