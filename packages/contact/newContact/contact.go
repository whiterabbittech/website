package main

import (
	"context"

	"github.com/sirupsen/logrus"
	"github.com/trycourier/courier-go/v2"
	"github.com/whiterabbittech/website/contact/config"
)

var conf *config.Config

const destinationPhoneNumber = "4124994692"

func init() {
	conf = config.NewFromEnv()
	setupLogger(conf)
}

// NB This file contains the definition of a DigitalOcean FaaS API route.
// This route responds to POST requests send to /api/contact/
// It handles forms submissions of the Contact Us form.

// Request is the shape of the JSON we expect to receive from the frontend.
type Request struct {
	Email        string `json:"email"`
	Organization string `json:"organization"`
	Name         string `json:"name"`
	Message      string `json:"message"`
}

// Response to what we return to the frontend.
// TODO: Always provide an "errors" slice encoded in the Body.
type Response struct {
	StatusCode int               `json:"statusCode,omitempty"`
	Headers    map[string]string `json:"headers,omitempty"`
	Body       string            `json:"body,omitempty"`
}

// This is the function responsible for handling HTTP requests.
func Main(in Request) (*Response, error) {
	logrus.Info("New Contact Request Received.")
	var authToken = conf.CourierAuthToken()
	var client = courier.CreateClient(authToken, nil)
	var requestID, err = client.SendMessage(
		context.Background(),
		courier.SendMessageRequestBody{
			Message: map[string]interface{}{
				"to": map[string]string{
					"phone_number": destinationPhoneNumber,
				},
				"template": "9WGBKD4WAX4V6QHMA0PYPJAHCB5D",
				"data": map[string]string{
					"name":         in.Name,
					"organization": in.Organization,
					"email":        in.Email,
					"message":      in.Message,
				},
			},
		},
	)

	if err != nil {
		logrus.Error(err)
	}
	// TODO Add an error case here.
	logrus.WithFields(logrus.Fields{
		"email":              in.Email,
		"message":            in.Message,
		"name":               in.Name,
		"organization":       in.Organization,
		"courier_request_id": requestID,
	}).Info("API Call Sent to Courier")

	// TODO: Handle the Error Case.
	return &Response{
		Body: "Success. Response cannot fail.",
	}, nil
}

// setupLogger will configure Logrus logging using
// configuration from the environment.
func setupLogger(conf *config.Config) {
	// To set up the logger, we decide whether we want
	// JSON logging or human-oriented logging.
	// We also set the log level.
	var formatter logrus.Formatter
	// Only use text-based logging when developing locally.
	// If this app is deployed to any other environment,
	// use JSON logging.
	if conf.Env() == config.None {
		formatter = &logrus.TextFormatter{
			ForceColors: true,
		}
	} else {
		formatter = &logrus.JSONFormatter{}
	}
	logrus.SetFormatter(formatter)
	logrus.SetLevel(conf.LogLevel())
}
