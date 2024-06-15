var body = {
  'app': 1,
  'record': {
    'Text': {
      'value': 'Sample'
    },
    'Number': {
      'value': 1
    }
  }
};

kintone.api(kintone.api.url('/k/v1/record.json', true), 'POST', body, function(resp) {
  // success
  console.log(resp);
}, function(error) {
  // error
  console.log(error);
});
