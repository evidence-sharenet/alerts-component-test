<template>
    <div>
        <table v-if="items.length > 0">
            <thead>
            <tr class="uppercase">
                <th class="text-left">Name</th>
                <th>Asset Type</th>
                <th class="text-left">Type</th>
                <th class="text-left">Condition</th>
                <th class="text-left">Frequency</th>
                <th>Alert method</th>
                <th>Status</th>
                <th>Comment</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="item in items">
                <tr v-for="(subitem, iSub) in item.alerts" :key="subitem.alertId">
                    <td v-if="iSub === 0" :rowspan="item.alerts.length">
                        <span>{{ subitem.ticker }}</span><span class="dot-spacing font-semibold"><span class="text-cyan-500">{{ subitem.fullName }}</span></span>
                        <br>
                        <span class="bg-yellow-500 p-1 text-sm rounded">{{ subitem.exchangeId }}</span><span class="dot-spacing font-semibold">{{ subitem.exchangeId }}</span>
                    </td>
                    <td v-if="iSub === 0" :rowspan="item.alerts.length" class="text-center">{{ subitem.assetType }}</td>
                    <td class="text-left">{{ alertType(subitem.type) }}</td>
                    <td class="text-left">{{ alertCondition(subitem.condition, subitem.valueType) }} {{ subitem.value }} <span v-if="subitem.valueType === 2">%</span></td>
                    <td class="text-left">{{ frequency(subitem.repeating) }}</td>
                    <td class="text-center">
                        <span v-if="subitem.sendMethod.includes('e')"><MailIcon class="inline-block" /></span>
                        <span v-if="subitem.sendMethod.includes('s')"><DeviceMobileIcon class="inline-block" /></span>
                    </td>
                    <td class="text-center">
                        {{ subitem.status }}
                        <toggle-button :value="!!subitem.status" color="#82C7EB" :sync="true" :labels="true" @change="onStatusChange(subitem)" />
                    </td>
                    <td class="text-center">
                        <span v-if="subitem.comment.length > 0"><AnnotationIcon class="inline-block" /></span>
                    </td>
                    <td class="text-center">
                        <span><PencilIcon class="inline-block"  /></span>
                        <span><TrashIcon class="inline-block"  /></span>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
// Only import what you need!
import Vue from "vue";
import { MailIcon, DeviceMobileIcon, AnnotationIcon, PencilIcon, TrashIcon } from '@vue-hero-icons/solid';
import ToggleButton from 'vue-js-toggle-button';

Vue.use(ToggleButton);

export default {
    name: "AlertsTable",
    props: {
        tableData : {
            default: () => []
        }
    },
    data(){
        return {
            items: []
        }
    },
    components: {
        MailIcon,
        DeviceMobileIcon,
        AnnotationIcon,
        PencilIcon,
        TrashIcon
    },
    watch: {
        tableData: {
            immediate: true,
            deep: true,
            handler(newVal){
                let self = this;
                if(newVal !== undefined){
                    self.items = newVal;
                }

            }
        }
    },
    computed: {
        alertType(){
            return (value) => {
                switch (value) {
                    case 1:
                        return 'Trades';
                    case 2:
                        return 'Bid';
                    case 3:
                        return 'Offer';
                    case 4:
                        return 'Sens';
                    case 5:
                        return 'Director Dealings';
                    default:
                        return '-'
                }
            }
        },
        alertCondition(){
            return (condition, valueType) => {
                if(condition === 'low' && valueType === 1){
                    return 'Moves Below';
                }
                else if(condition === 'low' && valueType === 2){
                    return 'Loses';
                }
                else if(condition === 'high' && valueType === 1){
                    return 'Moves Above';
                }
                else if(condition === 'high' && valueType === 2){
                    return 'Gains';
                }
            }
        },
        frequency(){
            return (value) => {
                if(value === false){
                    return 'Once';
                }
                return 'Recurring';
            }
        },
    },
    methods: {
        onStatusChange(){
            console.log('here');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
    border: 1px solid gray;
    border-collapse: collapse;
}

table {
    width: 100%;
}

th, td {
    padding: 10px;
}

.dot-spacing::before{
    content: '\0000a0\002022\0000a0'; padding-right: 5px; padding-left: 5px;
}
</style>
