const ApiService = {

    ListaHistorico : () =>{
        return fetch('http://localhost:8080/api/historicos')
        
    },
    TrataErros: res => {
        if(!res.ok){
            throw Error(res.responseText)
        }
        return res.json()
    }

}
export default ApiService;