describe("Payments test (with setup and tear-down)", function () {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = '100';
        tipAmtInput.value = "15";
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('15');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(15);
        expect( paymentId ).toEqual(1);
      });

    it("should create curPayment object on createCurPayment()",  function() {
        billAmtInput.value = '';
        tipAmtInput.value = "";
        expect(createCurPayment()).toEqual();
        billAmtInput.value = '0';
        tipAmtInput.value = "0";
        expect(createCurPayment()).toEqual();
        billAmtInput.value = '1';
        tipAmtInput.value = "0";
        expect(createCurPayment()).toEqual(
            {
                billAmt : '1',
                tipAmt : '0',
                tipPercent : 0
            }
        );
        billAmtInput.value = '50';
        tipAmtInput.value = "5";
        expect(createCurPayment()).toEqual(
            {
                billAmt : '50',
                tipAmt : '5',
                tipPercent : 10
            }
        );
    });


    it('should add a new table row to paymentTbody on appendPaymentTable()', function () {
        submitPaymentInfo();
        expectedPaymentTbodyHTML = '<tr id="payment1"><td>$100</td><td>$15</td><td>15%</td><td>X</td></tr>';
        expect(paymentTbody.innerHTML.trim()).toEqual(expectedPaymentTbodyHTML); 
        //trim is needed because there is randomly a \n\t about 30% of the time. idk why
    });

    it('should replace summaryTds on updateSummary()', function () {
        submitPaymentInfo();
        expect(summaryTds[0].innerHTML).toEqual('$100');
        expect(summaryTds[1].innerHTML).toEqual('$15');
        expect(summaryTds[2].innerHTML).toEqual('15%');
    });

    afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = "";
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
      });
});