import DS from 'ember-data';

export default DS.Model.extend({

  term: DS.attr('string'),
  location: DS.attr('string'),
  name: DS.attr('string'),
    image_url: DS.attr('string'),
    is_closed: DS.attr('string'),
    url: DS.attr('string'),
    review_count: DS.attr('string'),
    rating: DS.attr('string'),
    price: DS.attr('string'),
    display_phone: DS.attr('string'),
    location: DS.belongsTo('location')



});
