const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class AppointmentService {
  constructor() {}

  async create(data) {
    const newAppointment = await models.Appointment.create(data);
    return newAppointment;
  }

  async find(attrs) {
    const rta = await models.Appointment.findAll(attrs);
    return rta;
  }

  async findOne(id, attrs) {
    const appointment = await models.Appointment.findByPk(id,attrs);
    if (!appointment) {
      throw boom.notFound('appointment not found');
    }
    return appointment;
  }

  async update(id, changes) {
    const appointment = await this.findOne(id);
    const rta = await appointment.update(changes);
    return rta;
  }

  async delete(id) {
    const appointment = await models.Appointment.findByPk(id);
    await appointment.destroy();
    return { id };
  }
}

module.exports = AppointmentService;
