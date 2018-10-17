/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import axios from "axios";
import dotenv from "dotenv";
import querystring from "querystring";

/**************************************************************************
 * SUBSCRIBE EMAIL ADDRESS TO MAILCHIMP
 ***************************************************************************/

// Load environment variables
dotenv.config();

exports.handler = async function(event, context, callback) {
  const bodyParams = querystring.parse(event.body);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  // Only allow POST method and preflight request
  if (!["POST", "OPTIONS"].includes(event.httpMethod)) {
    callback(null, {
      statusCode: 405,
      headers: headers,
      body: "Method Not Allowed"
    });
  }

  // Only accept valid email
  const re = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;

  if (!re.test(bodyParams.email)) {
    callback(null, {
      statusCode: 400,
      headers: headers,
      body: "This is not a valid email"
    });
  }

  // Subscribe valid email to the Mailchimp list
  try {
    await axios.post(
      "https://us19.api.mailchimp.com/3.0/lists/00f5d5e482/members/",
      { email_address: bodyParams.email, status: "subscribed" },
      {
        auth: { username: "anystring", password: process.env.MAILCHIMP_API_KEY }
      }
    );
  } catch (error) {
    callback(null, {
      statusCode: error.response.status,
      headers: headers,
      body: error.response.data.detail
    });
  }

  callback(null, {
    statusCode: 200,
    headers: headers,
    body: "You just joined the dark mode! 👻"
  });
};
