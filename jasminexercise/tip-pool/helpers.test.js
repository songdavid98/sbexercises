describe("Helpers test (with setup and tear-down)", function() {

    it("sumPaymentTotal should accept 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects", function () {
      billAmtInput.value = '50';
      tipAmtInput.value = '15';
      submitPaymentInfo();
      billAmtInput.value = '100';
      tipAmtInput.value = '10';
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(25);
      expect(sumPaymentTotal('billAmt')).toEqual(150);

    });
  
    it('should convert the bill and tip amount into a tip percent', function () {
      expect(calculateTipPercent(50, 15)).toEqual(30);
      expect(calculateTipPercent(100, 15)).toEqual(15);
    });
  
    it('appendTd expects a table row element, appends a newly created td element from the value', function () {
      let newTr = document.createElement('tr');
      appendTd(newTr, 15);
      expect(newTr.innerHTML.trim()).toEqual('<td>15</td>');
      appendTd(newTr, 'a');
      expect(newTr.innerHTML.trim()).toEqual('<td>15</td><td>a</td>');
    });

    it('appendDeleteBtn creates a td with the value "X", when clicked, it will delete the table row it belongs to', function () {
      let newTr = document.createElement('tr');
      appendTd(newTr, 15);
      appendTd(newTr, 'a');
      appendDeleteBtn(newTr);
      expect(newTr.innerHTML.trim()).toEqual('<td>15</td><td>a</td><td>X</td>');
    });
    
    
    
    afterEach(function() {
      // teardown logic
      serverId = 0;
      allServers = {};
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
    });
  });
  