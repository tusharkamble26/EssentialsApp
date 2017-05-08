import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return Ember.RSVP.hash({
      search: Ember.Object.create()
    });

},
actions: {
  input: function(response){
    //console.log(response);
    this.transitionTo('search', response.term, response.location);
    //this.transitionTo('/search?term=' + response.term + '&location=' + response.location);
  }
}
  //search: Ember.computed.alias('controller.model.search'),
});
