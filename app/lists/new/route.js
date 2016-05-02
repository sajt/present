import Ember from 'ember';
import SaveModelMixin from 'present/mixins/lists/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('list');
  }
});
