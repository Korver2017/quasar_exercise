<!--
  *
  * Template
  *
  -->
<template>
  <div class="q-pa-md">
    <q-table
      :pagination="pagination"
      title="Treats"
      :data="users"
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
          { name: 'first', align: 'center', label: 'First Name', field: 'first', sortable: true },
          { name: 'last', label: 'Last Name', field: 'last', sortable: true },
          { name: 'title', label: 'Title', field: 'title', sortable: true },
          { name: 'gender', label: 'Gender', field: 'gender', sortable: true },
          { name: 'email', label: 'Email', field: 'email', sortable: true },
        ],

        users: [],

        pagination: {
          rowsPerPage: 50,
        }
      }
    },


    /**
     *
     * Computed
     *
     */
    computed: {
    },


    mounted () {
      this.retrieve ();
    },


    /**
     *
     * Methods
     *
     */
    methods: {


      /**
       *
       * Retrieve Users Data
       *
       */
      retrieve () {
        this.$api.get ('https://randomuser.me/api/?results=500')
          .then (res => {

            const cleanResults = [...res.data.results];
            const users = cleanResults.map (result => {
              
              const {email, gender, first, last, title} = {...result.name, ...result};
              let user = {email, gender, first, last, title};

              return user;
            });

            return this.users = users;
          });
      },
    },
  }
</script>
