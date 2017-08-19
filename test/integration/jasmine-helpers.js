'use strict';

const {log} = require('console');
const {SpecReporter} = require('jasmine-spec-reporter');

let specStartTime;

/**
 * get current time
 * @return {timestamp}
 */
function getCurrentTime() {
  return +(new Date());
}

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

jasmine.getEnv().clearReporters(); // remove default reporter logs

jasmine.getEnv().addReporter(new SpecReporter({ // add jasmine-spec-reporter
  spec: {
    displayPending: true,
  },
  summary: {
    displayDuration: true,
  },
}));

jasmine.getEnv().addReporter({
  specStarted: () => {
    specStartTime = getCurrentTime();
  },
  specDone: () => {
    log('        ' + (getCurrentTime() - specStartTime) + ' ms');
  },
});
