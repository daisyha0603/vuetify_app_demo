<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-card>
                    <v-responsive :aspect-ratio="16/9">
                        <v-card-title>
                            <h2> {{brand.name}} </h2>
                        </v-card-title>
                        <v-card-text class="text-left">
                            <v-list dense>
                                <v-subheader>STATES</v-subheader>
                                <v-list-item v-for="state in brand.state_registrations" :key="state.registrationNumber">
                                    <v-list-item-content class="text-left">
                                        <v-list-item-title>{{state.state}}</v-list-item-title>
                                        <v-list-item-subtitle>{{state.registrationNumber}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content class="text-left">
                                        <div class="d-inline-flex align-center">
                                            <label>Abv: </label>
                                            <span class="ps-2">{{brand.abv}}</span>
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content class="d-inline-flex text-left">
                                        <div class="d-inline-flex align-center">
                                            <label>Available to: </label>
                                            <v-icon class="ps-2">mdi-calendar</v-icon>
                                            <span>{{brand.available_date}}</span>
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                        <v-card-actions>
                            <v-checkbox v-model="brand.is_active" label="Active"></v-checkbox>
                        </v-card-actions>
                    </v-responsive>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Detail',
    data() {
        return {
            brand: {}
        }
    },
    created() {
        this.getBrand();
    },
    methods: {
        async getBrand() {
            let entity_id = this.$route.params.id;
            this.brand = await this.$store.dispatch('getBrandDetail', {entity_id});
        }
    }
}
</script>