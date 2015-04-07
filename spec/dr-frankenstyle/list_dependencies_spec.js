var listDependencies = require('../../dr-frankenstyle/list_dependencies');

var packageJson = {};
function d(name, dependencies) {
  if (!packageJson[name]) {
    packageJson[name] = {
      name: name,
      dependencies: (dependencies || []).reduce(function(memo, dependency) {
        memo[dependency.name] = dependency;
        return memo;
      }, {})
    };
  }
  return JSON.parse(JSON.stringify(packageJson[name]));
}

function name(obj) { return obj.name; }


describe('dependencies', function() {
  var dependencyTree;
  beforeEach(function() {
    jasmine.addMatchers({
      toHaveOrder: function() {
        return {
          compare: function(actual, first, second) {
            var firstIndex = actual.indexOf(first);
            var secondIndex = actual.indexOf(second);
            var pass = firstIndex < secondIndex && (firstIndex !== -1) && (secondIndex !== -1);
            var message = pass ?
              'Expected ' + first + ' not to be before ' + second :
              'Expected ' + first + ' to be before ' + second;
            return {pass: pass, message: message};
          }
        };
      }
    });

    d('brakes', [d('calipers'), d('drums')]);
    d('delorean', [d('tires'), d('brakes'), d('mr-fusion')]);
    d('timeTravel', [d('delorean'), d('88-mph')]);
    d('focus', [d('tires'), d('brakes')]);
    d('f150', [d('truck-tires'), d('cowboy-hat'), d('truck-bed', [d('gate')])]);
    dependencyTree = d('myApp', [d('timeTravel'), d('delorean'), d('focus'), d('f150')]);
  });

  it('returns a list of depedencies', function() {
    var actualDependencies = listDependencies(dependencyTree).map(name);

    var expectedDependencies = ['tires', 'brakes', 'calipers', 'drums', 'delorean', 'mr-fusion', 'focus', 'f150', 'truck-tires', 'cowboy-hat', 'truck-bed', 'gate', 'timeTravel', '88-mph'];
    expect(actualDependencies.sort()).toEqual(expectedDependencies.sort());
  });

  it('puts sub-dependencies before their parents', function() {
    var dependencies = listDependencies(dependencyTree).map(name);
    expect(dependencies).toHaveOrder('drums', 'brakes');
    expect(dependencies).toHaveOrder('calipers', 'brakes');
    expect(dependencies).toHaveOrder('mr-fusion', 'delorean');
    expect(dependencies).toHaveOrder('brakes', 'delorean');
    expect(dependencies).toHaveOrder('brakes', 'focus');
    expect(dependencies).toHaveOrder('gate', 'truck-bed');
    expect(dependencies).toHaveOrder('cowboy-hat', 'f150');
    expect(dependencies).toHaveOrder('truck-bed', 'f150');
    expect(dependencies).toHaveOrder('truck-tires', 'f150');
    expect(dependencies).toHaveOrder('88-mph', 'timeTravel');
    expect(dependencies).toHaveOrder('delorean', 'timeTravel');
  });

  it('can filter dependencies by name', function() {
    var dependencies = listDependencies(dependencyTree, /s$/).map(name);
    expect(dependencies).toHaveOrder('drums', 'brakes');
    expect(dependencies).toHaveOrder('calipers', 'brakes');
    expect(dependencies).toHaveOrder('brakes', 'focus');
    expect(dependencies.sort()).toEqual(['tires', 'brakes', 'calipers', 'drums', 'focus', 'truck-tires'].sort());
  });
});