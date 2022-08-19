describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
    expect( serverId ).toEqual(1);
  });

  it('should add a new table row to serverTbody on updateServerTable()', function () {
    submitServerInfo();
    expectedServerTbodyHTML = '<tr id="server1"><td>Alice</td><td>$0.00</td><td>X</td></tr>';
    expect(serverTbody.innerHTML).toEqual(expectedServerTbodyHTML);

  });


  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});
