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

    Usuario : (id) => {
        return fetch(`http://localhost:8080/api/usuario/${id}`)
    },
    CartaoDispositivo : (id) => {
        return fetch(`http://localhost:8080/api/dispositivo/${id}/cartao`)
    },
    
    TrataErros: res => {
        if(!res.ok){
            throw Error(res.responseText)
        }
        return res.json()
    }

}
export default ApiService;