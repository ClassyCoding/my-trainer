var VERSION = "1.0";

exports.handler = function (event, context) {
	try {
		console.log("event.session.application.applicationId=" + event.session.application.applicationId);
		
		// Prevent other people from using this skill
		if(event.session.application.applicationId !== process.env.MY_TRAINER_APP_ID) {
			context.fail("Invalid Application ID");
		}

		if(event.session.new) {
			// Handle new session
			console.log("Session Started requestId=" + event.request.requestId + " sessionId" = event.session.sessionId);
		}

		// Handle each request type
		if(event.request.type === "LaunchRequest") {
			console.log("Launch Request requestId=" + event.request.requestId + " sessionId" = event.session.sessionId);
		} else if (event.request.type === "IntentRequest") {
			console.log("Intent Request requestId=" + event.request.requestId + " sessionId" = event.session.sessionId);
			

			intentDispatcher(event.request, event.session, function(sessionAttributes, speechletResponse) {
				context.succeed(buildResponse(sessionAttributes, speechletResponse));
			});

		} else if (event.request.type === "SessionEndedRequest") {
			console.log("Session Ended Request requestId=" + event.request.requestId + " sessionId" = event.session.sessionId);
		}
	} catch (e) {
		context.fail("Exception: " + e);
	}
}

function intentDispatcher(intentRequest, session, callback) {
	var intent = intentRequest.intent,
		intentName = intentRequest.intent.name;

	if("LogRepitition" === intentName) {
		handleLogRepetition(intent, session, callback);
	} else {
		throw "Invalid intent";
	}
}

// LogRepitition Intent Handler
function handleLogRepetition(intent, session, callback) {
	var outputText = "Logged Data";

	// Store the data
	// Build a response

	// Send the response
	callback(session.attributes, buildSpeachletResponseWithoutCard(outputText, outputText, true));

}


// Response builder helper functions ==================================

function buildResponse(sessionAttributes, response) {
	return {
		"version": VERSION,
		"sessionAttributes": sessionAttributes,
		"response": response
	};
}

function buildSpeachletResponseWithoutCard(output, reproptText, shouldEndSession) {
	return {
		outputSpeach: {
			type: "PlainText",
			text: output
		},
		reprompt: {
			outputSpeach: {
				type: "PlainText",
				text: repromptText
			}
		},
		shouldEndSession: shouldEndSession
	};
}