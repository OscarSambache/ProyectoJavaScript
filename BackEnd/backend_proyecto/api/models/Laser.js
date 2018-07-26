/**
 * Laser.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    codigoLaser:{
      type: 'string',
      required: true
    },

    nombreLaser:{
      type: 'string',
      required: true
    },

    estado:{
      type: 'string',
      required: true
    },

    usuarioIdFK:{
      model: 'Usuario'
    },

    seccionIdFK:{
      model: 'Seccion'
    },

    alarmas: {
      collection: 'Alarma',
      via: 'laserIdFK'
    },

    alertas: {
      collection: 'Alerta',
      via: 'laserIdFK'
    },
  },

};

