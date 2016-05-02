import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: List', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /lists without data', function(assert) {
  visit('/lists');

  andThen(function() {
    assert.equal(currentPath(), 'lists.index');
    assert.equal(find('#blankslate').text().trim(), 'No Lists found');
  });
});

test('visiting /lists with data', function(assert) {
  server.create('list');
  visit('/lists');

  andThen(function() {
    assert.equal(currentPath(), 'lists.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new list', function(assert) {
  visit('/lists');
  click('a:contains(New List)');

  andThen(function() {
    assert.equal(currentPath(), 'lists.new');

    fillIn('label:contains(Name) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing list', function(assert) {
  server.create('list');
  visit('/lists');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'lists.edit');

    fillIn('label:contains(Name) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing list', function(assert) {
  server.create('list');
  visit('/lists');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'lists.show');

    assert.equal(find('p strong:contains(Name:)').next().text(), 'MyString');
  });
});

test('delete a list', function(assert) {
  server.create('list');
  visit('/lists');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'lists.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
