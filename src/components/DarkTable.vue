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
      table-header-class="bg-blue-grey-6 text-white"
      card-class="text-blue-3"
      color="red-8"
    />
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
    name: 'DarkTable',


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
        columns: [
          {
            name: 'desc',
            required: true,
            label: 'Dessert (100g serving)',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
          },
          { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
          { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
          { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
          { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
        ],
        data: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            sodium: 87,
            calcium: '14%',
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            sodium: 129,
            calcium: '8%',
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            sodium: 337,
            calcium: '6%',
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            sodium: 413,
            calcium: '3%',
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            sodium: 327,
            calcium: '7%',
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            sodium: 50,
            calcium: '0%',
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            sodium: 38,
            calcium: '0%',
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            sodium: 562,
            calcium: '0%',
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            sodium: 326,
            calcium: '2%',
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            sodium: 54,
            calcium: '12%',
            iron: '6%'
          }
        ]
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
    },
  }
</script>
