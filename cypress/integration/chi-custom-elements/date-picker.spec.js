/// <reference types="Cypress" />

const DANGER_CLASS = '-danger';
const TIME_PICKER_HOUR = 'chi-time-picker__hour';
const TIME_PICKER_MINUTE = 'chi-time-picker__minute';
const TIME_PICKER_PERIOD = 'chi-time-picker__period';
const clickDate = '11/14/2018';
const clickDate2 = '01/26/2019';
const hour = '07';
const noonHour = '00';
const minute = '30';
const period = 'PM';
const thisMonthName = /November\s*2018/;
const nextMonthName = /December\s*2018/;
const dateObject = new Date();
const monthToReturn =
  (dateObject.getMonth() + 1).toString().length === 2
    ? (dateObject.getMonth() + 1).toString()
    : '0' + (dateObject.getMonth() + 1).toString();
const dayToReturn =
  dateObject.getDate().toString().length === 2
    ? dateObject.getDate().toString()
    : '0' + dateObject.getDate().toString();
const today =
  monthToReturn + '/' + dayToReturn + '/' + dateObject.getFullYear();
const chiDateChange = 'chiDateChange';
const chiDateInvalid = 'chiDateInvalid';

describe('Date picker', function() {
  const chiDatePicker = 'CHI-DATE-PICKER';

  beforeEach(() => {
    cy.visit('tests/custom-elements/date-picker.html');
  });

  describe(chiDateChange, () => {
    beforeEach(() => {
      cy.get('[data-cy="test-input-combined-picker"]').as('picker');
    });

    it(`Clicking on a day emits the ${chiDateChange} event`, function() {
      const spy = cy.spy();

      cy.get('[data-cy="test-active"]').then(el => {
        el.on(chiDateChange, spy);
      });

      cy.get('[data-cy="test-active"]')
        .find('chi-date')
        .should('have.class', 'hydrated')
        .find(`[data-date="${clickDate}"]`)
        .click()
        .then(() => {
          expect(spy).to.be.calledOnce;
          expect(spy.getCall(0).args[0].detail).to.equal(clickDate);
          expect(spy.getCall(0).args[0].target.nodeName).to.equal('CHI-DATE');
        });
    });

    it(`Changing the input's date value emits the ${chiDateChange} event`, function() {
      const date = '12/02/2021';
      const spy = cy.spy();

      cy.get('@picker').then(el => {
        el.on(chiDateChange, spy);
      });

      cy.get('@picker')
        .find('input')
        .clear()
        .type(`${date}{Enter}`)
        .then(() => {
          expect(spy).to.be.calledOnce;
          expect(spy.getCall(0).args[0].detail).to.equal(date);
          expect(spy.getCall(0).args[0].target.nodeName).to.equal(
            chiDatePicker
          );
        });
    });

    it(`Changing the date through chi-date selection emits the ${chiDateChange} event from chi-date-picker`, function() {
      const date = '01/30/2019';
      const spy = cy.spy();

      cy.get('@picker').then(el => {
        el.on(chiDateChange, spy);
      });

      cy.get('@picker')
        .find('chi-date')
        .find(`[data-date="${date}"]`)
        .click()
        .then(() => {
          expect(spy).to.be.calledOnce;
          expect(spy.getCall(0).args[0].detail).to.equal(date);
          expect(spy.getCall(0).args[0].target.nodeName).to.equal(
            chiDatePicker
          );
        });
    });
  });

  describe(chiDateInvalid, () => {
    beforeEach(() => {
      cy.get('[data-cy="test-input-combined-picker"]').as('picker');
    });

    it(`Manually introducing an invalid date emits the ${chiDateInvalid} event`, function() {
      const date = '14/02/2021';
      const spy = cy.spy();

      cy.get('@picker').then(el => {
        el.on(chiDateInvalid, spy);
      });

      cy.get('@picker')
        .find('input')
        .clear()
        .type(`${date}{Enter}`)
        .then(() => {
          expect(spy).to.be.calledOnce;
          expect(spy.getCall(0).args[0].detail).to.equal(date);
        });
    });
  });

  it('Clicking on next month shows next month. ', function() {
    cy.get('[data-cy="test-active"]')
      .find('chi-date')
      .should('have.class', 'hydrated')
      .find('.chi-datepicker')
      .should('have.class', '-month-starts-on-thu')
      .find('.chi-datepicker__month')
      .contains(thisMonthName)
      .get('[data-cy="test-active"]')
      .find(`div.next`)
      .click()
      .get('[data-cy="test-active"]')
      .find('.chi-datepicker')
      .should('have.class', '-month-starts-on-sat')
      .find('.chi-datepicker__month')
      .contains(nextMonthName);
  });

  it('Date-picker should open on focus. ', function() {
    cy.get('[data-cy="test-input-combined"]')
      .find('input')
      .scrollIntoView()
      .focus()
      .get('[data-cy="test-input-combined"]')
      .find('chi-popover[active]')
      .should('have.attr', 'active')
      .get('[data-cy="test-input-combined"]')
      .find('chi-popover[active]')
      .then(popover => {
        expect(popover[0].active).to.equal(true);
      });
  });

  it('Date-picker should not have popover when disabled is set to true.', function() {
    cy.get('[data-cy="test-disabled"]')
      .find('chi-popover')
      .should('not.exist');
  });

  it('Date-picker input should be disabled', function() {
    cy.get('[data-cy="test-disabled"]')
      .find('input')
      .should('have.disabled');
  });

  it('Date-picker should fill the input with the clicked date. ', function() {
    cy.get('[data-cy="test-input-combined"]')
      .find('input')
      .scrollIntoView()
      .click()
      .focus()
      .get('[data-cy="test-input-combined"]')
      .find(`[data-date="${clickDate2}"]`)
      .click()
      .get('[data-cy="test-input-combined"] input')
      .should('have.value', clickDate2);
  });

  it('Date-picker should reset input value to Min if the introduced date is before the min date. ', function() {
    cy.get('[data-cy="test-input-combined"]')
      .find('input')
      .clear()
      .type('01/01/1899')
      .trigger('change')
      .get('[data-cy="test-input-combined"] input')
      .should('have.value', '01/24/2019');
  });

  it('Date-picker should reset input value to Max if the introduced date is after the max date. ', function() {
    cy.get('[data-cy="test-input-combined"]')
      .find('input')
      .clear()
      .type('12/31/2100')
      .trigger('change')
      .get('[data-cy="test-input-combined"] input')
      .should('have.value', '12/31/2099');
  });

  it(
    'Should render calendar with multiple active days when attribute' +
      ' multiple is present and more then one date is provided as value',
    function() {
      cy.get('[data-cy="test-multiple-selection"]')
        .find(
          '[data-date="11/28/2018"], [data-date="11/29/2018"],' +
            '[data-date="11/30/2018"]'
        )
        .each($el => {
          const classList = Array.from($el[0].classList);

          expect(classList).to.include('-active');
        });
    }
  );

  it('Should select the clicked day', function() {
    cy.get('[data-cy="test-multiple-selection"]')
      .scrollIntoView()
      .wait(300)
      .find('[data-date="11/27/2018"]')
      .should('not.have.class', '-active')
      .click({ force: true })
      .wait(300)
      .should('have.class', '-active');
  });

  it('Should deselect the active day when clicked', function() {
    cy.get('[data-cy="test-multiple-selection"]')
      .find('[data-date="11/28/2018"]')
      .click()
      .wait(300)
      .should('not.have.class', '-active');
  });

  it(
    'Should render the calendar with the respective active dates ' +
      'when the user types new input value',
    function() {
      cy.get('[data-cy="test-multiple-picker"]')
        .find('input')
        .clear()
        .type('03/29/2021, 03/30/2021')
        .trigger('change')
        .wait(300)
        .get('[data-cy="test-multiple-picker-calendar"]')
        .should('have.value', '03/29/2021,03/30/2021')
        .find('[data-date="03/29/2021"], [data-date="03/30/2021"]')
        .each($el => {
          const classList = Array.from($el[0].classList);

          expect(classList).to.include('-active');
        });
    }
  );

  it('Should accept only valid user inputs', function() {
    cy.get('[data-cy="test-multiple-picker"]')
      .find('input')
      .clear()
      .type('03/29/2021, 111/111/1111')
      .trigger('change')
      .wait(300)
      .get('[data-cy="test-multiple-picker-calendar"]')
      .should('have.value', '03/29/2021')
      .find('[data-date="03/29/2021"]')
      .should('have.class', '-active');
  });

  it(`Should have ${DANGER_CLASS} class when danger state is provided`, () => {
    cy.get('[data-cy="test-input-error"]')
      .find('input')
      .should('have.class', `${DANGER_CLASS}`);
  });

  it('Date-picker should show Time Picker with 24hr format. ', function() {
    cy.get('[data-cy="test-time-format-24hr"]').as('testTimeFormat');

    cy.get('@testTimeFormat')
      .find('input')
      .scrollIntoView()
      .focus()
      .get('@testTimeFormat')
      .find('chi-popover[active]')
      .should('have.attr', 'active');

    // Select hours
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_HOUR}`)
      .contains(hour)
      .click();

    // Select minutes
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_MINUTE}`)
      .contains(minute)
      .click();

    cy.get('[data-cy="test-time-format-24hr"]')
      .as('testTimeFormat')
      .find('input')
      .should('have.value', `11/22/2018, ${hour}:${minute}`);
  });

  it(
    'Date-picker should have 00 as the selected hour when clicked 00 as ' +
      'hour in the Time Picker with 24hr format. ',
    function() {
      cy.get('[data-cy="test-time-format-24hr"]').as('testTimeFormat');

      cy.get('@testTimeFormat')
        .find('input')
        .scrollIntoView()
        .focus()
        .get('@testTimeFormat')
        .find('chi-popover[active]')
        .should('have.attr', 'active');

      // Select hours
      cy.get('@testTimeFormat')
        .find(`.${TIME_PICKER_HOUR}`)
        .contains(hour)
        .click();

      // Select hours
      cy.get('@testTimeFormat')
        .find(`.${TIME_PICKER_HOUR}`)
        .contains(hour)
        .should('have.class', '-active');

      // Select minutes
      cy.get('@testTimeFormat')
        .find(`.${TIME_PICKER_MINUTE}`)
        .contains(minute)
        .click();

      cy.get('@testTimeFormat')
        .find(`.${TIME_PICKER_MINUTE}`)
        .contains(minute)
        .should('have.class', '-active');

      cy.get('@testTimeFormat')
        .find('input')
        .should('have.value', `11/22/2018, ${hour}:${minute}`);
    }
  );

  it('Date-picker should show Time Picker with 12hr format.', function() {
    cy.get('[data-cy="test-time-format-12hr"]').as('testTimeFormat');

    cy.get('@testTimeFormat')
      .find('input')
      .scrollIntoView()
      .focus()
      .get('@testTimeFormat')
      .find('chi-popover[active]')
      .should('have.attr', 'active');

    // Select hours
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_HOUR}`)
      .contains(hour)
      .click();

    // Select hours
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_HOUR}`)
      .contains(hour)
      .should('have.class', '-active');

    // Select minutes
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_MINUTE}`)
      .contains(minute)
      .click();

    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_MINUTE}`)
      .contains(minute)
      .should('have.class', '-active');

    // Select period
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_PERIOD}`)
      .contains(period)
      .click();

    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_PERIOD}`)
      .contains(period)
      .should('have.class', '-active');

    cy.get('@testTimeFormat')
      .find('input')
      .should(
        'have.value',
        `11/22/2018, ${hour}:${minute} ${period.toLowerCase()}`
      );
  });

  it('Date-picker should show selected time after changing it several times.', function() {
    cy.get('[data-cy="test-time-format-24hr"]').as('testTimeFormat');

    cy.get('@testTimeFormat')
      .find('input')
      .scrollIntoView()
      .focus()
      .get('@testTimeFormat')
      .find('chi-popover[active]')
      .should('have.attr', 'active');

    // Select hours
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_HOUR}`)
      .contains(hour)
      .click();

    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_HOUR}`)
      .contains(hour)
      .should('have.class', '-active');

    // Select minutes
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_MINUTE}`)
      .contains(minute)
      .click();

    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_MINUTE}`)
      .contains(minute)
      .should('have.class', '-active');

    cy.get('@testTimeFormat')
      .find('input')
      .should('have.value', `11/22/2018, ${hour}:${minute}`);

    cy.get('[data-cy="test-time-format-24hr"]').as('testTimeFormat');

    // Select hours
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_HOUR}`)
      .contains(noonHour)
      .click();

    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_HOUR}`)
      .contains(noonHour)
      .should('have.class', '-active');

    // Select minutes
    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_MINUTE}`)
      .contains(minute)
      .click();

    cy.get('@testTimeFormat')
      .find(`.${TIME_PICKER_MINUTE}`)
      .contains(minute)
      .should('have.class', '-active');

    cy.get('@testTimeFormat')
      .find('input')
      .should('have.value', `11/22/2018, ${noonHour}:${minute}`);
  });
});
