/**
 * AlarmaDia.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreDia:{
      type: 'string',
      required: true
    },

    alarmaIdFK:{
      model: 'Alarma'
    },

    diaIdFK:{
      model: 'Dia'
    },

  },

};

