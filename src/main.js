const {
  generateMessage,
  generateSlogan,
  goodbye,
} = require("../utils/slogan-generator");

async function getSlogan(request) {
  try {
    const response = await generateSlogan(request);
    const slogan = response.slogan;
    console.log(`Your request was: ${request}`);
    console.log(`Your slogan is: ${slogan}`);
  } catch (error) {
    console.error(`There was an error: ${error}`);
  }
}

async function fullSession(request) {
  try {
    const ask = await generateMessage();
    console.log(ask);
    await getSlogan(request);
    const goodbyeMessage = await goodbye();
    console.log(goodbyeMessage);
  } catch (error) {
    console.error(`There was an error: ${error}`);
  }
}

module.exports = { getSlogan, fullSession };
