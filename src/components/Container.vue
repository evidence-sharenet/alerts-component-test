<template>
    <div>
        <alerts-table :table-data="alerts"></alerts-table>
    </div>
</template>

<script>
import Vue from "vue";
import { defineComponent } from "@vue/composition-api";
import { createPinia, PiniaVuePlugin } from "pinia";
import { userAlertsStore } from "@/stores/user-alerts";

import AlertsTable from "@/components/AlertsTable";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

export default defineComponent({
    name: "ContainerComponent",
    pinia,
    data() {
        return {
            userAlerts: userAlertsStore(),
            alerts: []
        };
    },
    // setup() {
    //     //const user = useUserStore();
    //     const userAlerts = userAlertsStore();

    //     console.log('setup', userAlerts.headers)

    //     window.stores = { userAlerts };

    //     return {
    //         //user,
    //         userAlerts,
    //     };
    // },
    props: ['token'],
    components: {
        AlertsTable
    },
    mounted() {
    },

    watch: {
        "userAlerts.userAlerts": {
            immediate: true,
            deep: true,
            handler(val) {
                console.log("userAlerts", val);
                let self = this;
                self.alerts = val;
            },
        },
        token: {
            immediate: true,
            deep: true,
            handler(val) {
                let self = this;
                console.log(val)
                if(self.userAlerts !== undefined){
                    self.userAlerts.headers.Authorization = `Bearer ${val}`;
                    self.userAlerts.userAlerts();
                }

            }
        }
    },

});
</script>
