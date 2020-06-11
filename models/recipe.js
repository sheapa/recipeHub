const mongoose = require("mongoose");
const mongoolia = require('mongoolia').default;

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  
  title: {type: Schema.Types.String, algoliaIndex: true},
  
  description: {type: Schema.Types.String, algoliaIndex: true},
  
  instruction: [{type: Schema.Types.String, algoliaIndex: true}],
  
  tips: {type: Schema.Types.String, algoliaIndex: true},
  
  yeild: {type: Schema.Types.String, algoliaIndex: true},
  
  categories: [{type: Schema.Types.String, algoliaIndex: true},],
  
  feedback: [{type: Schema.Types.String, algoliaIndex: true},],
  
  activeTime: {type: Schema.Types.String, algoliaIndex: true},
  
  inActiveTime: {type: Schema.Types.String, algoliaIndex: true},
  
  addons: { type: Schema.Types.ObjectId, ref: "Recipe", algoliaIndex: true },
  
  forkedFrom: { type: Schema.Types.ObjectId, ref: "User", algoliaIndex: true },
  
  // images: [Schema.Types.String],
  
  pubDate: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  
  likes: {type: Schema.Types.Number, algoliaIndex: true},
  
  saves: {type: Schema.Types.Number, algoliaIndex: true},
  
  forks: {type: Schema.Types.Number, algoliaIndex: true},
  
  author: { type: Schema.Types.ObjectId, ref: "User", algoliaIndex: true },
});

RecipeSchema.plugin(mongoolia, {
  appId: 'ZCHNRWDF6B',
  apiKey: 'ee98d1240ef700b8e63342844d760803',
  indexName: 'recipeDB'
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
