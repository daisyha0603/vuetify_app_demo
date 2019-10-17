<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 md4>
                <v-card hover v-for="brand in brands" :key="brand.entity_id" @click="brandDetail(brand.entity_id)">
                    <v-card-title>
                        <h2> {{brand.name}} </h2>
                    </v-card-title>
                    
                    <v-card-text>
                        <span>State: {{brand.state_registrations ? brand.state_registrations.length : 0 }}</span>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
      
</template>
<script>
export default {
    name: 'Main',
    data() {
        return {
            brands: []
        }
    },
    created() {
        this.getBrands();
    },
    methods: {
        async getBrands() {
            this.brands = await this.$store.dispatch('getBrandList');
        },
        brandDetail(entity_id) {
            this.$router.push({name: 'Detail', params: {id: entity_id}});

        }
    }
}
</script>