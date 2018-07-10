/**
 * Lugar.ts.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descripionLugar:{
      type: 'string',
      required: true
    },

    Seccion: {
      collection: 'Seccion',
      via: 'lugarIdFK'
    },
  },

};

