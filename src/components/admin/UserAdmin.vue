<template>
    <div class="user-admin">
        <h1>usuario componente</h1>
        <b-table hover striped :items="users" :fields="fields"></b-table>
    </div>
</template>
<script> 
import { baseApiUrl, showError } from '@/global' //para falar com backend
import axios from 'axios' //valida token de login


export default{
    name:'userAdmin',
    data: function() {
        return {
            mode: 'save',
            user: {},
            users: [],
            //aula 383
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
                { key: 'admin', label: 'Administrador', sortable: true,
                    formatter: value => value ? 'Sim' : 'Não' },
                { key: 'actions', label: 'Ações' }
            ]
           
        }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data
                console.log(this.users)
            }) 
        }
    },
    mounted() {
        this.loadUsers()
    },

}
</script>
<style>

</style>