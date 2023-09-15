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
    unique: false,
    default: '',
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
      default: false,
    },
    missionValley: {
      type: Boolean,
      default: false,
    },
    northCity: {
      type: Boolean,
      default: false,
    },
    reno: {
      type: Boolean,
      default: false,
    },
    austin: {
      type: Boolean,
      default: false,
    },
  },
  topRope: {
    type: Boolean,
    default: false,
  },
  leadClimb: {
    type: Boolean,
    default: false,
  },
  bouldering: {
    type: Boolean,
    default: false,
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
