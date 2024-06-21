package mqtt

import (
	"encoding/json"
	"fmt"
	"github.com/SmartCityFlensburg/green-space-management/internal/entities/sensor"
	MQTT "github.com/eclipse/paho.mqtt.golang"
	"log"
)

type MqttService struct {
	isConnected bool
	sensorData  sensor.Data
}

func NewMqttService() *MqttService {
	return &MqttService{}
}

func (s *MqttService) HandleHumidity(client MQTT.Client, msg MQTT.Message) {
	data := msg.Payload()
	fmt.Printf("Humidity: %f\n", data)
	jsonStr := string(data)
	fmt.Println("JSON String:", jsonStr)
	var sensorData sensor.Data
	err := json.Unmarshal([]byte(jsonStr), &sensorData)
	if err != nil {
		log.Fatalf("Failed to unmarshal JSON: %v", err)
	}
	fmt.Printf("Parsed Sensor Data: %+v\n", sensorData)
}

func (s *MqttService) SetConnected(ready bool) {
	s.isConnected = ready
}

func (s *MqttService) Ready() bool {
	return s.isConnected
}
