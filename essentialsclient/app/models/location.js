import DS from 'ember-data';

export default DS.Model.extend({
  address1: DS.attr('string'),
   address2: DS.attr('string'),
   address3: DS.attr('string'),
   city: DS.attr('string'),
   zip_code: DS.attr('string'),
   country: DS.attr('string'),
   state: DS.attr('string'),
   display_address: DS.attr('string')

});
