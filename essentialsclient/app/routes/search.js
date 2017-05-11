import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params.term);
    console.log(params.location);
     //console.log(this.get('serialize.term'));
     //console.log(this.serialize.location);
    var host = this.store.adapterFor('searchapplication').get('host');
    var url = host + '/search?term='+params.term+'&location='+params.location+'';

    return Ember.$.getJSON(url);
  }
  
});
