'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpleadoSchema extends Schema {
  up () {
    this.create('empleados', (table) => {
      table.increments()
      table.string('Nombre')
      table.string('Apellido_Paterno')
      table.string('Apellido_Materno')
      table.string('Correo')
      table.string('Telefono')
      table.timestamps()
    })
  }

  down () {
    this.drop('empleados')
  }
}

module.exports = EmpleadoSchema
