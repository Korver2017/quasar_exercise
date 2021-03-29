<!--
  *
  * Template
  *
  -->
<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
      :visible-columns="visibleColumns"
    >
      <template v-slot:top>
        <img
          style="height: 50px; width: 50px"
          src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
        >

        <q-space />

        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />
      </template>

    </q-table>
  </div>
</template>


<!--
  *
  * Style
  *
  -->
<style scoped>
</style>


<!--
  *
  * Script
  *
  -->
<script>

  // component
  export default {


    /**
     *
     * Component name
     *
     */
    name: 'VisibleColumnsTable',


    /**
     *
     * Inner components
     *
     */
    components: {
    },


    /**
     *
     * Props
     *
     */
    props: [],


    /**
     *
     * Data
     *
     */
    data () {
      return {
      }
    },


    /**
     *
     * Computed
     *
     */
    computed: {
    },


    /**
     *
     * Methods
     *
     */
    methods: {
    }
  }
</script>
