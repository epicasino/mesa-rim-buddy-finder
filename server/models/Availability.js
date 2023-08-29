const { Schema } = require('mongoose');

const weeklySchema = new Schema({
  sunday: {
    type: dailySchema,
    required: true,
  },
  monday: {
    type: dailySchema,
    required: true,
  },
  tuesday: {
    type: dailySchema,
    required: true,
  },
  wednesday: {
    type: dailySchema,
    required: true,
  },
  thursday: {
    type: dailySchema,
    required: true,
  },
  friday: {
    type: dailySchema,
    required: true,
  },
  saturday: {
    type: dayAvailableSchema,
    required: true,
  },
});

const dailySchema = new Schema({
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

module.exports = weeklySchema;