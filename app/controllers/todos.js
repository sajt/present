import Ember from 'ember';
import TableViewController from 'ember-cli-admin/mixins/controllers/table-view';

export default Ember.Controller.extend(TableViewController, {
  isShowSearchForm: true,
  isShowSidebar: true,
  formAttributes: ['title', 'description', 'checked', 'letter'],
  tableAttributes: ['title', 'checked', 'letter'],
  itemActions: [{title: 'Edit',
    'class': 'btn btn-small btn-primary',
    action: 'edit',
    iconClass: 'glyphicon glyphicon-pencil'}]
});
