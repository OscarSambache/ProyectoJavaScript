/**
 * Alarma.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    horaInicio:{
      type: 'string',
      required: true
    },

    minutoInicio:{
      type: 'string',
      required: true
    },

    horaFin:{
      type: 'string',
      required: true
    },

    minutoFin:{
      type: 'string',
      required: true
    },

    estado:{
      type: 'string',
      required: true
    },

    laserIdFK:{
      model: 'Laser'
    },


    alarmasDias: {
      collection: 'AlarmaDia',
      via: 'alarmaIdFK'
    },


  },

};

