import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import EmberValidations from 'ember-validations';
export default Model.extend(EmberValidations, {
  name: attr('string'),
  password: attr('string'),
  comment: attr('string'),
  active: attr('boolean'),
  gender: attr('string'),
  nameHasValue: Ember.computed('name', function() {
    return (this.get('name')) ? !this.get('name').length : true;
  }),
  validations: {
    name: {
      presence: true,
      length: {
        minimum: 2
      },
      exclusion: {in: ['PHP'], message: 'PHP?'}
    },
    password: {
      presence: true,
      length: {
        minimum: 6
      }
    },
    comment: {
      presence: true
    },
    gender: {
      presence: true
    }
  }
});
