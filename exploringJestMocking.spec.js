import axiosMock from 'axios';
jest.mock("axios"); // this will make axiosMock a mock

describe("Exploring Jest Mocking Functions", () => {
  const foo = jest.fn();
  foo.mockImplementation(() => {
    return 'bar';
  });
  foo('foo');
  foo('bar');
  //console.log('foo: ', foo);
  console.log('foo.mock: ', foo.mock);
  //console.log('foo.mock.calls: ', foo.mock.calls);
  //console.log('foo.mock.calls.length: ', foo.mock.calls.length);
  

  it('should pass', () => {
    expect(foo).toHaveBeenCalled();
    expect(foo).toHaveBeenCalledWith('foo');
    expect(foo).toHaveBeenCalledTimes(2);
    expect(foo).toHaveBeenNthCalledWith(1, 'foo')
    expect(foo).toHaveBeenNthCalledWith(2, 'bar')
    //
    expect(foo.mock.results[0].value).toBe('bar');
    expect(foo).toHaveReturnedWith('bar');
    expect(foo()).toBe('bar');
    //
  });

});

describe("Exploring Jest Mocking Modules", () => {

  async function getUsers() {
    try {
      const response = await axiosMock.get("/Users");
      return response.data.users;
    }
    catch (e) {
      console.log(e);
      throw new Error("Oops. Something wrong happened.");
    }
  }

  it('gets the users', async () => {
    const fakeUsers = ["John", "Emma", "Tom"];
    // axios.get.mockResolvedValue({ data: { users: fakeUsers } });
    axiosMock.get.mockImplementation(() => Promise.resolve({data: {users:fakeUsers}}));
    expect(await getUsers()).toEqual(["John", "Emma", "Tom"]);
    //
  });

});

