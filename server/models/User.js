const { Schema, model } = require('mongoose');

const weeklySchema = require('./Availability');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  pronouns: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  phone: {
    type: String,
    unique: true,
    match: [
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      'Must use a valid phone!',
    ],
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  locations: {
    miraMesa: {
      type: Boolean,
    },
    missionValley: {
      type: Boolean,
    },
    northCity: {
      type: Boolean,
    },
    reno: {
      type: Boolean,
    },
    austin: {
      type: Boolean,
    },
  },
  topRope: {
    type: Boolean,
  },
  leadClimb: {
    type: Boolean,
  },
  availability: {
    type: weeklySchema,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
