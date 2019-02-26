function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    // simulate an API
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe('mocking learning', () => {
  it('mocks a reg function', () => {
    // this next line makes this mock
    const fetchDogs = jest.fn();
    console.log(fetchDogs);

    const name = 'snickers';

    fetchDogs(name);
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('snickers');
  });

  it('can create a person', () => {
    const me = new Person('McRae', ['pizza', 'burgers']);

    expect(me.name).toBe('McRae');
  });

  it('can fetch foods', async () => {
    const me = new Person('McRae', ['pizza', 'burgers']);

    // mock the favFoods fn
    me.fetchFavFoods = jest.fn().mockResolvedValue(['pizza', 'burgers']);
    const favFoods = await me.fetchFavFoods();

    console.log(favFoods);
    expect(favFoods).toContain('pizza');
  });
});
