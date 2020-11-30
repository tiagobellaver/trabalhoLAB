var serialport = require('serialport');
var Readline = serialport.parsers.Readline;
var parser = new Readline(); 
var path = 'COM5' ;
var dispositivo = 1;

module.exports = () => {
    var myPort = new serialport(path ,{
        baudRate: 9600,
    });

    myPort.pipe(parser);

    myPort.on('open', showPortOpen);

    parser.on('data', readSerialData);
    myPort.on('close', showPortClose);
    myPort.on('error', showError);

    function showPortOpen() {
        console.log('Conexão criada com o Arduino. Data rate: ' + myPort.baudRate);
    }

    function writeToSerial(data) {
        parser.write(data);
    }

    function readSerialData(data) {
        if(data.includes("Card UID")){
            var rfid = data.slice(10,21);
            console.log("Recebendo requisição de", rfid)
            sendData(rfid, dispositivo);
        }else if(data.includes("Acendendo")){
            console.log(data);
        }
    }

    function showPortClose() {
        console.log('port closed.');
    }

    function showError(error) {
       console.log('Serial port error: ' + error);
    }

    function sendData(rfid, dispositivo){
        var host = 'http://localhost:8080/api/historico/requisicao';


        var rest = require('vps-rest-client');
        var client = new rest("");

        var post = {
            rfid: rfid,
            dispositivo: dispositivo
        };

        client.post(host, post).then(function(resp) {
            console.log("Requisição Autorizada:", resp.autorizado);
            var pin = "3";
            if(resp.autorizado){
                pin = "2";
            }
            myPort.write(pin);
            client.close();

        }).catch((err) => console.info(err));
    }
}