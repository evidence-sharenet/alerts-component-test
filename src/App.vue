<template>
    <div id="app" >
        <container-component :token="tokenValue"></container-component>
    </div>
</template>

<script>
import ContainerComponent from "@/components/Container";

export default {
    name: 'App',
    components: {
        ContainerComponent
    },
    props: {
        token: {
            type: String,
            default: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyZEpBX1U5ZEZST3laeExkWUxGcldHQ0VoSUl2bS13NjZSQ1M4c2xralZZIn0.eyJleHAiOjE2NTYwODA0MzAsImlhdCI6MTY1NjA3MzIzMCwianRpIjoiMzk3YTJmNjYtMGJmNS00YjA0LWFmOTMtZWQ3MzkzYWNhZjhlIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnNoYXJlbmV0LmNvLnphL2F1dGgvcmVhbG1zL1NoYXJlbmV0TWFya2V0RGF0YVJlYWxtIiwic3ViIjoiN2Y2N2UyNDMtZmE2Yy00OGEzLWI4YjktMWZkNTNlNzQ5YzI4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWFya2V0ZGF0YV9hcGlfZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6ImUwZWEwN2I4LTU5MzctNGU5ZC04MWM5LWQ3ZjA4MjQ1OTIxMyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkV2aWRlbmNlIiwic24iOiI1MTBhZDU0YzRkNzJhYmY1ZTQxOGI3MDk0ZmMyYmRkN3RMa2J5S2luaVJGY3JaZUp4VXZpWGJ5NGd4eWViRWYrZzNkYVNadU5sM2JrVkN1OWtRczhuR1lGMEZoR1R2S1haTmhPUDgwSEg0TndlcXZoekthVDZsYm42OHJaSGEwZzZEbFhXS1ZIL3h5cUtja09sMVkwUVNKQWhpeFFkUU44TnhRREF6NlBEUHRuZXdNblg1RFdyQlRYay83Yzd6NGY5MDNDb09qbGV6dXNGLzFKd05rOTg3RWI2Y0oxbG9PYVNjamZhdUxMYXZFSHQ0S2FVMHdtYmNaY3M2d3lPNzV2OXZ1aHJWdTJxRnFuc2VJYW9SQXh4bTdwd0xIczdiMm1vVC9QRjd0UUlEOWhIRzBMQ0I3dmUyL0FMQWNTRDJaYzRZVUxsTUJ1MG1Fb3lQcjZiaHl5czlBN2oxT0E3TTZxVys1d1FMNmFOT1BwQnYzcWt3MGJhOVdIMEN6Nkk1Y3llUk1lK1FRbUZDa1YyWDVDenROZDdyN1ZFbjRvNHRFaEx2dnhUYXppbUJXK0U4Z25RUFlUdW0raUdOd0lGRU03QXhUUnZSOWFiNmZMNWFWMjYrYUVXamtFQ1Zyb2V0VVFkRTk0VThnSEJBbHhHWHdya0tONG42QmZPNlliMzVqVHk2VzBjZm4zeVV0bElNNFpBcENPRk95Z3hDWjNvcVNRQ01MZ1BweXlBWDc2NzFRL0JtVmhlajQ9IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZXZpZGVuY2VfaW5zb21uaWEiLCJnaXZlbl9uYW1lIjoiRXZpZGVuY2UiLCJlbWFpbCI6ImV2aWRlbmNlQHNoYXJlbmV0LmNvLnphIn0.Fyu4u39G9lFZ9VtN8fsK1-7QgKFeUFELMPw3rHjWfW7PIp3g1u8Nt8cujIRfPchaC5CApnO9EI5tzhttpIocKFO3nkEKs_tXJsfDZgTpO5JfDAdZkWPrLUQYQBHsyjCBdgRUWaKAS3JGOAbaigP6UnB9AU6zDDX9zejC66saXgOdD9lxPos39yIT8KdD4Jmrvj3ZXNMx8edSLnh8bRS1dCef6DWMwLL9HxAoAOX8GF5APqypz7iU4dcdojgn9FmOdRmkVRTZAom52olgtdPS-Xe6-7CPwlv6srxRXWG5SjTKlPjsnXnzF24u2aoN6lRn-ZWEdyOMCjRVlz3ExN3Jgg'
        }
    },
    data(){
        return {
            tokenValue: ''
        }
    },
    watch: {
        token: {
            immediate: true,
            deep: true,
            handler(val) {
                let self = this;
                if(val !== undefined){
                    self.tokenValue = val;
                }

            }
        }
    }

}
</script>

<style lang="scss">
@import './css/bootstrap-custom.scss';
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import '~bootstrap-vue/src/index.scss';
</style>

<style>


body{
  /* font-size: 14px; */
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-size: 14px; */
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
