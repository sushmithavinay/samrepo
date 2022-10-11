const aws = require('aws-sdk');
aws.config.update({region: 'ap-south-1'});
exports.handler = async function(event, context) {
  const params = {
    Message: 'Hello  World!'
   };
  try {
   return { statusCode: 200, body: 'Message sent' };
  } catch(err) {
    return { statusCode: 500, body: JSON.stringify(err) };
  }
};
