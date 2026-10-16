const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  text: String,
  dateVisited: Date,
  createdOn: { type: Date, default: Date.now },
});

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  status: { type: String, enum: ['Visited', 'Planned'], default: 'Planned' },
  coords: {
    lat: { type: Number, min: -90, max: 90 },
    lng: { type: Number, min: -180, max: 180 },
  },
  notes: [noteSchema],
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  places: [placeSchema],
});

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  cities: [citySchema],
});

mongoose.model('Country', countrySchema);