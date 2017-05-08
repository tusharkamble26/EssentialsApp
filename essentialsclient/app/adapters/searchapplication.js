import DS from 'ember-data';


export default DS.RESTAdapter.extend({
  pathForType : function(type){
    return type;
  },
  host: 'http://localhost:3000'
});
