<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-card>
                    <v-responsive :aspect-ratio="16/9">
                        <v-card-title>
                            <h2> {{brand.name}} </h2>
                        </v-card-title>
                        <v-card-text>
                            <v-list-item>
                                <v-list-item-content v-for="state in brand.state_registrations" :key="state.registrationNumber">
                                    <v-flex xs12>
                                        <v-list-item-title>{{state.state}}</v-list-item-title>
                                        <v-list-item-subtitle>{{state.registrationNumber}}</v-list-item-subtitle>
                                    </v-flex>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-text>
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