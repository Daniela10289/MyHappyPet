const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class AppointmentService {
  constructor() {}

  async create(data) {
    const newAppointment = await models.Appointment.create(data);
    return newAppointment;
  }

  async find() {
    const rta = await models.Appointment.findAll({});
    return rta;
  }

  async findOne(id) {
    const appointment = await models.Appointment.findByPk(id);
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
