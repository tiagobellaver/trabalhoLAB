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
    
    TrataErros: res => {
        if(!res.ok){
            throw Error(res.responseText)
        }
        return res.json()
    }

}
export default ApiService;