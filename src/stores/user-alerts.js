import { defineStore } from "pinia";
const axios = require("axios").default;

const groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};
const groupData = function (items){
    let newArr = [];
    let grouped = groupBy(items, 'tickerId');
    let assets = new Set();
    items.forEach((element) => {
        let holder = {};
        if(!assets.has(element.tickerId)){
            holder.ticker = element.ticker;
            holder.tickerId = element.tickerId;
            holder.exchangeId = element.exchangeId;
            holder.fullName = element.fullName;
            holder.assetType = element.assetType;
            holder.alerts = grouped[element.tickerId];
            newArr.push(holder);
            assets.add(element.tickerId);
        }

    })
    return newArr;
};
export const userAlertsStore = defineStore({
    id: "user-alerts",
    state: () => ({
        userAlerts: [],
        headers: {
            "Content-Type": "application/json",
        },
    }),
    actions: {
        async userAlerts() {
            let self = this;
            const alertsData = await getUserAlerts(self.headers).then((res) => {
                return res;
            });

            if(alertsData.length > 0){
                //let holder = groupBy(alertsData, 'ticker');
                let holder = groupData(alertsData, 'ticker');
                //self.userAlerts  = Object.entries(holder).map((e) => ( { [e[0]]: e[1] } ));
                self.userAlerts = holder;
            }else{
                self.userAlerts = [];
            }

            // self.$patch({
            //     userAlerts: alertsData,
            // });
        },

        async getToken() {
            let self = this;
            const token = getCookie("fullview");
            if (token !== "" && token != null) {
                self.headers["Authorization"] = "Bearer " + token;
            } else {
                self.headers["Authorization"] =
                    "Bearer " +
                    "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyZEpBX1U5ZEZST3laeExkWUxGcldHQ0VoSUl2bS13NjZSQ1M4c2xralZZIn0.eyJleHAiOjE2NTU3MTkxNzAsImlhdCI6MTY1NTcxMTk3MCwianRpIjoiYzljNDViNzQtMjM0NS00ZmJjLWJmMzMtZDk5MWQwMzllZjAwIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnNoYXJlbmV0LmNvLnphL2F1dGgvcmVhbG1zL1NoYXJlbmV0TWFya2V0RGF0YVJlYWxtIiwic3ViIjoiN2Y2N2UyNDMtZmE2Yy00OGEzLWI4YjktMWZkNTNlNzQ5YzI4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWFya2V0ZGF0YV9hcGlfZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6IjhkYjJiNDhkLTk3NmUtNGVmOC1hMDZiLTI0MGIxYmM2MGEzMyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkV2aWRlbmNlIiwic24iOiI1MTBhZDU0YzRkNzJhYmY1ZTQxOGI3MDk0ZmMyYmRkN3RMa2J5S2luaVJGY3JaZUp4VXZpWGJ5NGd4eWViRWYrZzNkYVNadU5sM2JrVkN1OWtRczhuR1lGMEZoR1R2S1haTmhPUDgwSEg0TndlcXZoekthVDZsYm42OHJaSGEwZzZEbFhXS1ZIL3h5cUtja09sMVkwUVNKQWhpeFFkUU44TnhRREF6NlBEUHRuZXdNblg1RFdyQlRYay83Yzd6NGY5MDNDb09qbGV6dXNGLzFKd05rOTg3RWI2Y0oxbG9PYVNjamZhdUxMYXZFSHQ0S2FVMHdtYmNaY3M2d3lPNzV2OXZ1aHJWdTJxRnFuc2VJYW9SQXh4bTdwd0xIczdiMm1vVC9QRjd0UUlEOWhIRzBMQ0I3dmUyL0FMQWNTRDJaYzRZVUxsTUJ1MG1Fb3lQcjZiaHl5czlBN2oxT0E3TTZxVys1d1FMNmFOT1BwQnYzcWt3MGJhOVdIMEN6Nkk1Y3llUk1lK1FRbUZDa1YyWDVDenROZDdyN1ZFbjRvNHRFaEx2dnhUYXppbUJXK0U4Z25RUFlUdW0raUdOd0lGRU03QXhUUnZSOWFiNmZMNWFWMjYrYUVXamtFQ1Zyb2V0VVFkRTk0VThnSEJBbHhHWHdya0tONG42QmZPNlliMzVqVHk2VzBjZm4zeVV0bElNNFpBcENPRk95Z3hDWjNvcVNRQ01MZ1BweXlBWDc2NzFRL0JtVmhlajQ9IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZXZpZGVuY2VfaW5zb21uaWEiLCJnaXZlbl9uYW1lIjoiRXZpZGVuY2UiLCJlbWFpbCI6ImV2aWRlbmNlQHNoYXJlbmV0LmNvLnphIn0.XqFB7O7lcs00pMuDTIxc6J4wmggNIxLV-5jtXcI2eNvCLFW-i4CPcYSZvx0QddYNPIngn93HTMF-OhXRmSeNoBGRGfioXMmwfYA3Nl6RB3YCpN-foT02N0UBsavXCvnkZq1v4mKuCCDEQDPah057cXvPGyTZK1P3qZiKdgt1llbOGgUN-LPxPq_uNcB4pQuzFPMzHuekwv73wqBcyEWiaj6k1hh_vzuD1lRQPEMEe2CwAX1UmmlLV3LzRCPCau8y-D_tejs1Yf4at17vji2cJPmtlnUcmnMYm-7nbBIs613sBXEHWAaIr9RvGncBsHXuCD3KPvQKPsLZA1RBqL9oww";
            }
        },
    },
});

async function getUserAlerts(headers) {
    //let self = this;
    return axios
        .get("https://apidev.sharenet.co.za/api/v1/" + "alertsv2", {
            headers: headers,
        })
        .then((response) => {
            return response.data.AlertV2;
        })
        .catch(function (error) {
            return error;
        });
}

function getCookie(name) {
    let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`);
    return a ? a[1] : "";
}


