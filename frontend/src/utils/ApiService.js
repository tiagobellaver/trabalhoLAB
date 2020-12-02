const ApiService = {

    ListaHistorico : () =>{
        var id = localStorage.getItem("usuario");
        return  fetch(`http://localhost:8080/api/usuario/${id}/historico`)
        
    },
    
    ListaUsuarios : () =>{
        return fetch('http://localhost:8080/api/usuarios')
        
    },

    ListaCartoes : () => {
        var id = localStorage.getItem("usuario");
        return fetch(`http://localhost:8080/api/usuario/${id}/cartao`)
    },

    ListaDispositivos : () => {
        var id = localStorage.getItem("usuario");
        return fetch(`http://localhost:8080/api/usuario/${id}/dispositivo`)
    },
    
    Dispositivo : (id) => {
        return fetch(`http://localhost:8080/api/dispositivo/${id}`)
    },

    Usuario : (id) => {
        return fetch(`http://localhost:8080/api/usuario/${id}`)
    },
    Cartao : (id) => {
        return fetch(`http://localhost:8080/api/cartao/${id}`)
    },
    CartaoDispositivo : (id) => {
        return fetch(`http://localhost:8080/api/dispositivo/${id}/cartao`)
    },

    ListaHistoricoDashboard : () =>{
        var id = localStorage.getItem("usuario");
        return fetch(`http://localhost:8080/api/usuario/${id}/dashboard_historico`)
    },

    Historico : (id) => {
        return fetch(`http://localhost:8080/api/historico/${id}`)
    },
    
    TrataErros: res => {
        if(!res.ok){
            throw Error(res.responseText)
        }
        return res.json()
    }

}
export default ApiService;