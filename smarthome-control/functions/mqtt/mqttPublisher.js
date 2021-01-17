const mqtt = require('mqtt');
// const { info, error } = require("firebase-functions/lib/logger");
const fireDebug = require("firebase-functions/lib/logger");

const client = mqtt.connect('mqtt://broker.emqx.io');
const topic = "mike/5625/micuarto/luz";

client.on('connect', function () {
    fireDebug.info('MQTT Broker conectado!!!');
});

client.on('error', function (err) {
    fireDebug.error('MQTT Broker ERROR!!!', err);
    // fireDebug.error(err);
});

const mqttPublisher = {};

mqttPublisher.publicar = (mensaje) =>{
    client.publish(topic, mensaje.toString());
    fireDebug.info('MQTT mensaje enviado',
        {
            topic,
            mensaje
        }
    );
};

module.exports = mqttPublisher;