import Ember from 'ember';

export default Ember.Controller.extend({
  genderOptions: [
    {id: 'M', name: 'Male'},
    {id: 'F', name: 'Female'},
    {id: 'O', name: 'Other'}
  ],
  actions: {
    submit() {
      alert('Submitted!');
    }
  }
});
