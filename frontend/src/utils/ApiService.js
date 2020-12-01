const ApiService = {

    ListaHistorico : () =>{
        return fetch('http://localhost:8080/api/historicos')
        
    },
    
    ListaUsuarios : () =>{
        return fetch('http://localhost:8080/api/usuarios')
        
    },

    ListaCartoes : () => {
        return fetch('http://localhost:8080/api/cartoes')
    },

    ListaDispositivos : () => {
        return fetch('http://localhost:8080/api/dispositivos')
    },
    
    Dispositivo : (id) => {
        return fetch(`http://localhost:8080/api/dispositivo/${id}`)
    },

    CartaoDispositivo : (id) => {
        return fetch(`http://localhost:8080/api/dispositivo/${id}/cartao`)
    },

    ListaHistoricoDashboard : () =>{
        return fetch(`http://localhost:8080/api/dashboard/historico`)
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