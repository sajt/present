import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  checked: attr('boolean'),
  deleted: attr('boolean'),
  letter: attr('string') //A, B, C, D(elegate), E(liminate)
});
