const { Schema } = require('mongoose');

const availabilitySchema = new Schema({
  sunday: {
    type: dayAvailableSchema,
    required: true,
  },
  monday: {
    type: dayAvailableSchema,
    required: true,
  },
  tuesday: {
    type: dayAvailableSchema,
    required: true,
  },
  wednesday: {
    type: dayAvailableSchema,
    required: true,
  },
  thursday: {
    type: dayAvailableSchema,
    required: true,
  },
  friday: {
    type: dayAvailableSchema,
    required: true,
  },
  saturday: {
    type: dayAvailableSchema,
    required: true,
  },
});

const dayAvailableSchema = new Schema({
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  unavailable: {
    type: Boolean,
  },
});

module.exports = availabilitySchema;