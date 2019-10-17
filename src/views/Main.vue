<template>
    <v-layout>
        <v-card hover class="mx-auto blue lighten-5"
            max-width="900"
            min-width="900">
            <v-container fluid>
                <v-row dense>
                    <v-col
                    v-for="brand in brands"
                    :key="brand.entity_id"
                    >
                        <v-card 
                        @click="brandDetail(brand.entity_id)">
                            <v-card-title v-text="brand.name"></v-card-title>
                            <v-card-text class="text-left">
                                <div><label>States:</label><span class="ps-2">{{brand.state_registrations | numberOfState}}</span></div>
                                <div><label>Available to:</label><v-icon class="ps-2">mdi-calendar</v-icon><span>{{brand.available_date}}</span></div>
                            </v-card-text>
                            <v-card-actions>
                                <v-checkbox v-model="brand.is_active" label="Active"></v-checkbox>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            
        </v-card>
    </v-layout>
      
</template>
<script>
export default {
    name: 'Main',
    data() {
        return {
            brands: []
        }
    },
    filters: {
        numberOfState(state_registrations) {
            return state_registrations ? state_registrations.length : 0;
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