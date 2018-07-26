/**
 * Alerta.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaAlerta:{
      type: 'string',
      required: true
    },

    pulsacion:{
      type: 'boolean',
      required: true
    },

    laserIdFK:{
      model: 'Laser'
    },

  },

};

