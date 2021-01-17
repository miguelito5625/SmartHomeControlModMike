const mqtt = require('mqtt');
const { info, error } = require("firebase-functions/lib/logger");

const client = mqtt.connect('mqtt://broker.emqx.io');
const topic = "mike/5625/micuarto/luz";

client.on('connect', function () {

    info('MQTT Conectado');

});

client.on('error', function (err) {
    error('MQTT ERROR');
    error(err);
});

const mqttPublisher = {};

mqttPublisher.publicar = (mensaje) =>{
    client.publish(topic, mensaje.toString());
    info(
        {
            topic,
            mensaje
        }
    );
};

module.exports = mqttPublisher;