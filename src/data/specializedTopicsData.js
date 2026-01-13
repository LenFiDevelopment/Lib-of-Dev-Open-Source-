// Specialized Topics: IoT, E-commerce, Linux, Home Automation, and more

export const specializedTopics = {
  iot: {
    id: 'iot',
    name: 'IoT & Hardware',
    icon: '🔌',
    color: '#059669',
    description: 'Internet of Things, embedded systems, and hardware programming',
    categories: {
      esp: {
        name: 'ESP32 & ESP8266',
        items: [
          {
            title: 'ESP32 Basic Setup',
            code: `#include <WiFi.h>

const char* ssid = "your-SSID";
const char* password = "your-password";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Your code here
}`,
            description: 'Connect ESP32 to WiFi network',
            usage: 'Use Arduino IDE with ESP32 board support. Essential for IoT projects.',
            technologies: ['ESP32', 'Arduino', 'C++', 'WiFi'],
          },
          {
            title: 'ESP32 Web Server',
            code: `#include <WiFi.h>
#include <WebServer.h>

WebServer server(80);

void handleRoot() {
  server.send(200, "text/html", "<h1>ESP32 Web Server</h1>");
}

void setup() {
  WiFi.begin("SSID", "password");
  server.on("/", handleRoot);
  server.begin();
}

void loop() {
  server.handleClient();
}`,
            description: 'Create a web server on ESP32 to control devices',
            usage: 'Access from browser using ESP32 IP address. Great for home automation control panels.',
            technologies: ['ESP32', 'HTTP', 'Web Server'],
          },
          {
            title: 'ESP32 MQTT Publishing',
            code: `#include <WiFi.h>
#include <PubSubClient.h>

WiFiClient espClient;
PubSubClient client(espClient);

const char* mqtt_server = "broker.hivemq.com";

void setup() {
  WiFi.begin("SSID", "password");
  client.setServer(mqtt_server, 1883);
}

void loop() {
  if (!client.connected()) {
    client.connect("ESP32Client");
  }
  
  float temperature = 25.5; // Your sensor reading
  String msg = String(temperature);
  client.publish("home/temperature", msg.c_str());
  
  delay(5000);
}`,
            description: 'Publish sensor data via MQTT protocol',
            usage: 'MQTT is the standard for IoT communication. Efficient and reliable.',
            technologies: ['MQTT', 'PubSubClient', 'IoT'],
          },
        ],
      },
      raspberryPi: {
        name: 'Raspberry Pi',
        items: [
          {
            title: 'GPIO Control with Python',
            code: `import RPi.GPIO as GPIO
import time

# Set up GPIO pins
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)

try:
    while True:
        GPIO.output(18, GPIO.HIGH)  # Turn on
        time.sleep(1)
        GPIO.output(18, GPIO.LOW)   # Turn off
        time.sleep(1)
except KeyboardInterrupt:
    GPIO.cleanup()`,
            description: 'Control GPIO pins on Raspberry Pi',
            usage: 'Control LEDs, relays, motors. Foundation of Pi hardware projects.',
            technologies: ['Python', 'GPIO', 'Raspberry Pi'],
          },
          {
            title: 'Pi Camera Module',
            code: `from picamera import PiCamera
from time import sleep

camera = PiCamera()
camera.resolution = (1920, 1080)

# Take photo
camera.start_preview()
sleep(2)
camera.capture('/home/pi/image.jpg')
camera.stop_preview()

# Record video
camera.start_recording('/home/pi/video.h264')
sleep(10)
camera.stop_recording()`,
            description: 'Use Raspberry Pi Camera for photos and videos',
            usage: 'Perfect for security cameras, time-lapse, and computer vision projects.',
            technologies: ['PiCamera', 'OpenCV', 'Python'],
          },
          {
            title: 'Pi as Web Server',
            code: `from flask import Flask, render_template
import RPi.GPIO as GPIO

app = Flask(__name__)
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/on')
def led_on():
    GPIO.output(18, GPIO.HIGH)
    return 'LED ON'

@app.route('/off')
def led_off():
    GPIO.output(18, GPIO.LOW)
    return 'LED OFF'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)`,
            description: 'Control Pi GPIO from web browser',
            usage: 'Create web-based control panels for home automation.',
            technologies: ['Flask', 'Python', 'Web Server'],
          },
        ],
      },
      arduino: {
        name: 'Arduino',
        items: [
          {
            title: 'Arduino Blink LED',
            code: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`,
            description: 'Classic Arduino first program - blink an LED',
            usage: 'Learn basics of digital output. Gateway to Arduino programming.',
            technologies: ['Arduino', 'C++'],
          },
          {
            title: 'Read Analog Sensor',
            code: `void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);
  float voltage = sensorValue * (5.0 / 1023.0);
  
  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print(" Voltage: ");
  Serial.println(voltage);
  
  delay(1000);
}`,
            description: 'Read analog sensors (temperature, light, potentiometer)',
            usage: 'Foundation for sensor projects. Can read any 0-5V analog signal.',
            technologies: ['Arduino', 'Sensors', 'ADC'],
          },
          {
            title: 'Arduino Serial Communication',
            code: `void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    char command = Serial.read();
    
    if (command == '1') {
      digitalWrite(LED_BUILTIN, HIGH);
      Serial.println("LED ON");
    } else if (command == '0') {
      digitalWrite(LED_BUILTIN, LOW);
      Serial.println("LED OFF");
    }
  }
}`,
            description: 'Control Arduino from computer via serial port',
            usage: 'Interface with Processing, Python, or any serial monitor.',
            technologies: ['Serial', 'UART', 'Communication'],
          },
        ],
      },
      sensors: {
        name: 'Sensors & Components',
        items: [
          {
            title: 'DHT22 Temperature Sensor',
            code: `#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  
  Serial.print("Temp: ");
  Serial.print(temperature);
  Serial.print("°C  Humidity: ");
  Serial.print(humidity);
  Serial.println("%");
  
  delay(2000);
}`,
            description: 'Read temperature and humidity with DHT22 sensor',
            usage: 'Popular sensor for weather stations and home automation.',
            technologies: ['DHT22', 'Temperature', 'Humidity'],
          },
          {
            title: 'Ultrasonic Distance Sensor',
            code: `const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  int distance = duration * 0.034 / 2;
  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(100);
}`,
            description: 'Measure distance using HC-SR04 ultrasonic sensor',
            usage: 'Perfect for obstacle avoidance, parking sensors, liquid level detection.',
            technologies: ['HC-SR04', 'Ultrasonic', 'Distance'],
          },
          {
            title: 'PIR Motion Sensor',
            code: `const int pirPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int motionDetected = digitalRead(pirPin);
  
  if (motionDetected == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Motion detected!");
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  delay(100);
}`,
            description: 'Detect motion using PIR (Passive Infrared) sensor',
            usage: 'Ideal for security systems, automatic lighting, occupancy detection.',
            technologies: ['PIR', 'Motion Detection', 'Arduino'],
          },
          {
            title: 'BMP280 Pressure Sensor',
            code: `#include <Wire.h>
#include <Adafruit_BMP280.h>

Adafruit_BMP280 bmp;

void setup() {
  Serial.begin(9600);
  
  if (!bmp.begin(0x76)) {
    Serial.println("BMP280 not found!");
    while (1);
  }
}

void loop() {
  float temperature = bmp.readTemperature();
  float pressure = bmp.readPressure() / 100.0; // hPa
  float altitude = bmp.readAltitude(1013.25);  // Sea level pressure
  
  Serial.print("Temp: ");
  Serial.print(temperature);
  Serial.print("°C  Pressure: ");
  Serial.print(pressure);
  Serial.print(" hPa  Altitude: ");
  Serial.print(altitude);
  Serial.println(" m");
  
  delay(2000);
}`,
            description: 'Read temperature, pressure, and altitude from BMP280 sensor',
            usage: 'Weather stations, altitude tracking, indoor air quality monitoring.',
            technologies: ['BMP280', 'I2C', 'Pressure', 'Altitude'],
          },
          {
            title: 'Soil Moisture Sensor',
            code: `const int moisturePin = A0;
const int pumpPin = 8;

void setup() {
  Serial.begin(9600);
  pinMode(pumpPin, OUTPUT);
  digitalWrite(pumpPin, LOW);
}

void loop() {
  int moistureLevel = analogRead(moisturePin);
  int moisturePercent = map(moistureLevel, 0, 1023, 0, 100);
  
  Serial.print("Moisture: ");
  Serial.print(moisturePercent);
  Serial.println("%");
  
  // Auto-water if soil is too dry
  if (moisturePercent < 30) {
    digitalWrite(pumpPin, HIGH);
    Serial.println("Watering plant...");
    delay(5000);
    digitalWrite(pumpPin, LOW);
  }
  
  delay(10000);
}`,
            description: 'Monitor soil moisture and auto-water plants',
            usage: 'Smart garden automation, greenhouse monitoring, plant care systems.',
            technologies: ['Soil Moisture', 'Arduino', 'Automation'],
          },
          {
            title: 'Gas Sensor (MQ-2)',
            code: `const int gasPin = A0;
const int buzzerPin = 9;
const int threshold = 400;

void setup() {
  Serial.begin(9600);
  pinMode(buzzerPin, OUTPUT);
  
  Serial.println("MQ-2 Gas Sensor warming up...");
  delay(20000); // Warm-up time
  Serial.println("Ready!");
}

void loop() {
  int gasLevel = analogRead(gasPin);
  
  Serial.print("Gas Level: ");
  Serial.println(gasLevel);
  
  if (gasLevel > threshold) {
    digitalWrite(buzzerPin, HIGH);
    Serial.println("⚠️ GAS DETECTED!");
  } else {
    digitalWrite(buzzerPin, LOW);
  }
  
  delay(1000);
}`,
            description: 'Detect smoke, LPG, methane, and other gases',
            usage: 'Safety systems, air quality monitoring, leak detection.',
            technologies: ['MQ-2', 'Gas Detection', 'Safety'],
          },
        ],
      },
      actuators: {
        name: 'Actuators & Controls',
        items: [
          {
            title: 'Servo Motor Control',
            code: `#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);
  Serial.begin(9600);
}

void loop() {
  // Sweep from 0 to 180 degrees
  for (int pos = 0; pos <= 180; pos++) {
    myServo.write(pos);
    Serial.print("Position: ");
    Serial.println(pos);
    delay(15);
  }
  
  // Sweep back from 180 to 0 degrees
  for (int pos = 180; pos >= 0; pos--) {
    myServo.write(pos);
    Serial.print("Position: ");
    Serial.println(pos);
    delay(15);
  }
}`,
            description: 'Control servo motor position with precise angles',
            usage: 'Robot arms, camera gimbals, door locks, automated blinds.',
            technologies: ['Servo', 'PWM', 'Motor Control'],
          },
          {
            title: 'Relay Module Control',
            code: `const int relay1 = 7;
const int relay2 = 8;

void setup() {
  pinMode(relay1, OUTPUT);
  pinMode(relay2, OUTPUT);
  Serial.begin(9600);
  
  // Ensure relays start OFF
  digitalWrite(relay1, LOW);
  digitalWrite(relay2, LOW);
}

void loop() {
  // Turn on Relay 1 (e.g., light)
  digitalWrite(relay1, HIGH);
  Serial.println("Relay 1 ON");
  delay(2000);
  
  // Turn on Relay 2 (e.g., fan)
  digitalWrite(relay2, HIGH);
  Serial.println("Relay 2 ON");
  delay(2000);
  
  // Turn off both
  digitalWrite(relay1, LOW);
  digitalWrite(relay2, LOW);
  Serial.println("Both OFF");
  delay(2000);
}`,
            description: 'Control high-voltage devices with relay modules',
            usage: 'Home automation, switching lights, fans, pumps, appliances.',
            technologies: ['Relay', 'AC Control', 'High Voltage'],
          },
          {
            title: 'Stepper Motor Control',
            code: `#include <Stepper.h>

const int stepsPerRevolution = 200;
Stepper myStepper(stepsPerRevolution, 8, 9, 10, 11);

void setup() {
  myStepper.setSpeed(60); // RPM
  Serial.begin(9600);
}

void loop() {
  Serial.println("Rotating clockwise...");
  myStepper.step(stepsPerRevolution);
  delay(1000);
  
  Serial.println("Rotating counter-clockwise...");
  myStepper.step(-stepsPerRevolution);
  delay(1000);
}`,
            description: 'Precise control of stepper motors for accurate positioning',
            usage: '3D printers, CNC machines, automated curtains, linear actuators.',
            technologies: ['Stepper Motor', '28BYJ-48', 'Precision Control'],
          },
          {
            title: 'LCD Display (16x2)',
            code: `#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  lcd.begin(16, 2);
  lcd.print("Hello, World!");
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print("Time: ");
  lcd.print(millis() / 1000);
  lcd.print("s  ");
  delay(1000);
}`,
            description: 'Display text on 16x2 LCD screen',
            usage: 'Status displays, sensor readings, user interfaces for IoT devices.',
            technologies: ['LCD', '16x2', 'Display'],
          },
          {
            title: 'RGB LED Control',
            code: `const int redPin = 9;
const int greenPin = 10;
const int bluePin = 11;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

void loop() {
  // Red
  setColor(255, 0, 0);
  delay(1000);
  
  // Green
  setColor(0, 255, 0);
  delay(1000);
  
  // Blue
  setColor(0, 0, 255);
  delay(1000);
  
  // Yellow
  setColor(255, 255, 0);
  delay(1000);
  
  // Cyan
  setColor(0, 255, 255);
  delay(1000);
  
  // Magenta
  setColor(255, 0, 255);
  delay(1000);
  
  // White
  setColor(255, 255, 255);
  delay(1000);
}`,
            description: 'Control RGB LED colors with PWM signals',
            usage: 'Mood lighting, status indicators, decorative lighting, alerts.',
            technologies: ['RGB LED', 'PWM', 'Color Mixing'],
          },
        ],
      },
    },
  },

  homeAssistant: {
    id: 'home-assistant',
    name: 'Home Assistant',
    icon: '🏠',
    color: '#41BDF5',
    description: 'Open-source home automation platform',
    categories: {
      basics: {
        name: 'Getting Started',
        items: [
          {
            title: 'Home Assistant Configuration',
            code: `# configuration.yaml
homeassistant:
  name: Home
  latitude: 40.7128
  longitude: -74.0060
  time_zone: America/New_York
  unit_system: metric

# Enable frontend
frontend:

# Enable automation UI
automation: !include automations.yaml

# Text to speech
tts:
  - platform: google_translate`,
            description: 'Basic Home Assistant configuration',
            usage: 'Edit configuration.yaml to customize your Home Assistant installation.',
            technologies: ['YAML', 'Home Assistant', 'Configuration'],
          },
          {
            title: 'Simple Automation',
            code: `# automations.yaml
- alias: 'Turn on lights at sunset'
  trigger:
    platform: sun
    event: sunset
  action:
    service: light.turn_on
    entity_id: light.living_room

- alias: 'Turn off lights at bedtime'
  trigger:
    platform: time
    at: '23:00:00'
  action:
    service: light.turn_off
    entity_id: all`,
            description: 'Create time-based automations',
            usage: 'Automate lights, devices, and scenes based on time or sun position.',
            technologies: ['Automation', 'YAML', 'Triggers'],
          },
          {
            title: 'ESP Home Integration',
            code: `# esphome-device.yaml
esphome:
  name: bedroom-sensor
  platform: ESP32
  board: nodemcu-32s

wifi:
  ssid: "YourWiFi"
  password: "password"

api:
  encryption:
    key: "your-key"

sensor:
  - platform: dht
    pin: GPIO4
    temperature:
      name: "Bedroom Temperature"
    humidity:
      name: "Bedroom Humidity"
    update_interval: 60s`,
            description: 'Configure ESP devices for Home Assistant',
            usage: 'ESPHome makes ESP32/ESP8266 devices work seamlessly with Home Assistant.',
            technologies: ['ESPHome', 'ESP32', 'MQTT'],
          },
        ],
      },
      integrations: {
        name: 'Integrations',
        items: [
          {
            title: 'MQTT Sensor',
            code: `# configuration.yaml
mqtt:
  broker: localhost
  port: 1883
  username: user
  password: pass

sensor:
  - platform: mqtt
    name: "Living Room Temperature"
    state_topic: "home/living/temperature"
    unit_of_measurement: "°C"`,
            description: 'Integrate MQTT sensors into Home Assistant',
            usage: 'MQTT is the standard protocol for IoT devices. Very flexible.',
            technologies: ['MQTT', 'Sensors', 'Integration'],
          },
        ],
      },
      automations: {
        name: 'Advanced Automations',
        items: [
          {
            title: 'Motion-Activated Lighting',
            code: `# automations.yaml
- alias: 'Motion Lights - Living Room'
  trigger:
    - platform: state
      entity_id: binary_sensor.living_room_motion
      to: 'on'
  condition:
    - condition: sun
      after: sunset
      before: sunrise
  action:
    - service: light.turn_on
      target:
        entity_id: light.living_room
      data:
        brightness: 255
        transition: 1
    - delay: '00:05:00'
    - service: light.turn_off
      target:
        entity_id: light.living_room
      data:
        transition: 5`,
            description: 'Turn on lights when motion detected at night',
            usage: 'Energy-efficient automatic lighting with motion sensors.',
            technologies: ['Motion Detection', 'Automation', 'Lighting'],
          },
          {
            title: 'Temperature-Based Climate Control',
            code: `# automations.yaml
- alias: 'Climate Control - Too Hot'
  trigger:
    - platform: numeric_state
      entity_id: sensor.living_room_temperature
      above: 26
  action:
    - service: climate.set_temperature
      target:
        entity_id: climate.ac_living_room
      data:
        temperature: 22
    - service: notify.mobile_app
      data:
        message: "AC turned on - temperature above 26°C"

- alias: 'Climate Control - Too Cold'
  trigger:
    - platform: numeric_state
      entity_id: sensor.living_room_temperature
      below: 18
  action:
    - service: climate.set_temperature
      target:
        entity_id: climate.heater_living_room
      data:
        temperature: 21`,
            description: 'Automatically control heating/cooling based on temperature',
            usage: 'Smart climate control for comfort and energy efficiency.',
            technologies: ['Climate', 'Temperature', 'HVAC'],
          },
          {
            title: 'Door/Window Alert System',
            code: `# automations.yaml
- alias: 'Security Alert - Door Open'
  trigger:
    - platform: state
      entity_id: binary_sensor.front_door
      to: 'on'
  condition:
    - condition: state
      entity_id: alarm_control_panel.home_alarm
      state: 'armed_away'
  action:
    - service: notify.mobile_app
      data:
        message: "⚠️ Front door opened while alarm armed!"
        title: "Security Alert"
    - service: light.turn_on
      target:
        entity_id: light.all_lights
      data:
        flash: long
    - service: alarm_control_panel.alarm_trigger
      target:
        entity_id: alarm_control_panel.home_alarm`,
            description: 'Alert when doors/windows open while alarm is armed',
            usage: 'Home security monitoring and intrusion detection.',
            technologies: ['Security', 'Notifications', 'Alarm'],
          },
          {
            title: 'Plant Watering Reminder',
            code: `# automations.yaml
- alias: 'Plant Watering Reminder'
  trigger:
    - platform: numeric_state
      entity_id: sensor.plant_moisture
      below: 20
      for:
        hours: 2
  action:
    - service: notify.mobile_app
      data:
        message: "🌱 Your plants need watering! Moisture: {{ states('sensor.plant_moisture') }}%"
        title: "Plant Care"
    - service: switch.turn_on
      target:
        entity_id: switch.plant_water_pump
    - delay: '00:00:30'
    - service: switch.turn_off
      target:
        entity_id: switch.plant_water_pump`,
            description: 'Automated plant watering based on soil moisture',
            usage: 'Smart gardening with moisture sensors and water pumps.',
            technologies: ['Gardening', 'Moisture', 'Automation'],
          },
          {
            title: 'Presence-Based Actions',
            code: `# automations.yaml
- alias: 'Welcome Home'
  trigger:
    - platform: state
      entity_id: person.john
      from: 'not_home'
      to: 'home'
  action:
    - service: light.turn_on
      target:
        entity_id: light.entrance
    - service: climate.set_temperature
      target:
        entity_id: climate.living_room
      data:
        temperature: 22
    - service: media_player.play_media
      target:
        entity_id: media_player.living_room_speaker
      data:
        media_content_type: music
        media_content_id: "spotify:playlist:welcome_home"
    - service: notify.mobile_app
      data:
        message: "Welcome home! House is ready."`,
            description: 'Trigger actions when someone arrives home',
            usage: 'Personalized welcome routines based on presence detection.',
            technologies: ['Presence', 'Person', 'Geolocation'],
          },
          {
            title: 'Energy Monitoring Alert',
            code: `# automations.yaml
- alias: 'High Power Usage Alert'
  trigger:
    - platform: numeric_state
      entity_id: sensor.home_power_usage
      above: 3000
      for:
        minutes: 10
  action:
    - service: notify.mobile_app
      data:
        message: "⚡ High power usage detected: {{ states('sensor.home_power_usage') }}W"
        title: "Energy Alert"
    - service: persistent_notification.create
      data:
        title: "High Energy Usage"
        message: "Check for devices left on"

- alias: 'Daily Energy Report'
  trigger:
    - platform: time
      at: '20:00:00'
  action:
    - service: notify.mobile_app
      data:
        message: "Today's energy: {{ states('sensor.daily_energy') }} kWh"
        title: "Daily Energy Report"`,
            description: 'Monitor and report energy consumption',
            usage: 'Track energy usage, identify issues, reduce electricity bills.',
            technologies: ['Energy', 'Monitoring', 'Smart Meter'],
          },
        ],
      },
    },
  },

  ecommerce: {
    id: 'ecommerce',
    name: 'E-Commerce (Shopify)',
    icon: '🛒',
    color: '#96BF48',
    description: 'Building online stores with Shopify and e-commerce platforms',
    categories: {
      shopify: {
        name: 'Shopify Development',
        items: [
          {
            title: 'Shopify Liquid Template',
            code: `<!-- product.liquid -->
<div class="product">
  <h1>{{ product.title }}</h1>
  
  <div class="product-price">
    {{ product.price | money }}
  </div>
  
  <div class="product-description">
    {{ product.description }}
  </div>
  
  <form action="/cart/add" method="post">
    <select name="id">
      {% for variant in product.variants %}
        <option value="{{ variant.id }}">
          {{ variant.title }} - {{ variant.price | money }}
        </option>
      {% endfor %}
    </select>
    
    <button type="submit">Add to Cart</button>
  </form>
</div>`,
            description: 'Create custom Shopify product templates',
            usage: 'Liquid is Shopify\'s templating language. Customize your store design.',
            technologies: ['Liquid', 'Shopify', 'HTML'],
          },
          {
            title: 'Shopify App with Node.js',
            code: `const Shopify = require('@shopify/shopify-api').default;

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: ['read_products', 'write_products'],
  HOST_NAME: process.env.HOST,
  IS_EMBEDDED_APP: true,
});

// Fetch products
async function getProducts(session) {
  const client = new Shopify.Clients.Rest(
    session.shop,
    session.accessToken
  );
  
  const products = await client.get({
    path: 'products',
  });
  
  return products.body.products;
}`,
            description: 'Build Shopify apps with Node.js',
            usage: 'Extend Shopify functionality with custom apps. Access Shopify Admin API.',
            technologies: ['Node.js', 'Shopify API', 'REST'],
          },
          {
            title: 'Shopify Storefront API (GraphQL)',
            code: `const query = \`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          variants(first: 5) {
            edges {
              node {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
\`;

fetch('https://your-store.myshopify.com/api/2024-01/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': 'your-token',
  },
  body: JSON.stringify({ query }),
})
.then(res => res.json())
.then(data => console.log(data));`,
            description: 'Use Storefront API for headless commerce',
            usage: 'Build custom storefronts with React/Next.js while using Shopify backend.',
            technologies: ['GraphQL', 'Shopify Storefront', 'Headless Commerce'],
          },
        ],
      },
      payments: {
        name: 'Payment Integration',
        items: [
          {
            title: 'Stripe Checkout',
            code: `import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create checkout session
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-Shirt',
          images: ['https://example.com/t-shirt.png'],
        },
        unit_amount: 2000, // $20.00
      },
      quantity: 1,
    },
  ],
  mode: 'payment',
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
});

// Redirect to Stripe Checkout
return res.redirect(session.url);`,
            description: 'Integrate Stripe payment processing',
            usage: 'Industry-standard payment processing. Easy to integrate, highly secure.',
            technologies: ['Stripe', 'Payments', 'Checkout'],
          },
          {
            title: 'Stripe Webhook Handler',
            code: `import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');
  
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return new Response(\`Webhook Error: \${err.message}\`, {
      status: 400,
    });
  }
  
  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(\`Payment \${paymentIntent.id} succeeded!\`);
      // Fulfill the order
      await fulfillOrder(paymentIntent.id);
      break;
      
    case 'payment_intent.payment_failed':
      console.log('Payment failed');
      // Notify customer
      break;
      
    default:
      console.log(\`Unhandled event type \${event.type}\`);
  }
  
  return new Response(JSON.stringify({ received: true }));
}`,
            description: 'Handle Stripe webhook events for order fulfillment',
            usage: 'Automatically process orders when payments succeed.',
            technologies: ['Stripe', 'Webhooks', 'Event Processing'],
          },
          {
            title: 'PayPal Checkout Integration',
            code: `// Server-side order creation
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const createOrder = async (data, actions) => {
  return actions.order.create({
    purchase_units: [
      {
        amount: {
          value: "100.00",
          currency_code: "USD"
        },
        description: "Product Purchase"
      }
    ]
  });
};

const onApprove = async (data, actions) => {
  return actions.order.capture().then((details) => {
    console.log('Transaction completed by', details.payer.name.given_name);
    // Call your server to save the transaction
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: data.orderID,
        payerId: data.payerID
      })
    });
  });
};

// React component
<PayPalButtons
  createOrder={createOrder}
  onApprove={onApprove}
/>`,
            description: 'Integrate PayPal checkout into your e-commerce site',
            usage: 'Accept PayPal payments with official SDK.',
            technologies: ['PayPal', 'React', 'Payment Gateway'],
          },
        ],
      },
      marketing: {
        name: 'Marketing & Analytics',
        items: [
          {
            title: 'Google Analytics E-commerce Tracking',
            code: `// Track product views
gtag('event', 'view_item', {
  items: [
    {
      id: 'SKU_12345',
      name: 'Premium T-Shirt',
      category: 'Apparel/Shirts',
      price: 29.99,
      quantity: 1
    }
  ]
});

// Track add to cart
gtag('event', 'add_to_cart', {
  items: [
    {
      id: 'SKU_12345',
      name: 'Premium T-Shirt',
      price: 29.99,
      quantity: 1
    }
  ]
});

// Track purchase
gtag('event', 'purchase', {
  transaction_id: 'T_12345',
  value: 29.99,
  currency: 'USD',
  tax: 2.40,
  shipping: 5.00,
  items: [
    {
      id: 'SKU_12345',
      name: 'Premium T-Shirt',
      category: 'Apparel/Shirts',
      price: 29.99,
      quantity: 1
    }
  ]
});`,
            description: 'Track e-commerce events with Google Analytics',
            usage: 'Measure product performance, conversion rates, revenue.',
            technologies: ['Google Analytics', 'E-commerce', 'Tracking'],
          },
          {
            title: 'Facebook Pixel for E-commerce',
            code: `// Initialize Facebook Pixel
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');

// Track events
fbq('track', 'ViewContent', {
  content_name: 'Premium T-Shirt',
  content_ids: ['SKU_12345'],
  content_type: 'product',
  value: 29.99,
  currency: 'USD'
});

fbq('track', 'AddToCart', {
  content_ids: ['SKU_12345'],
  content_type: 'product',
  value: 29.99,
  currency: 'USD'
});

fbq('track', 'Purchase', {
  value: 29.99,
  currency: 'USD',
  contents: [
    {id: 'SKU_12345', quantity: 1}
  ]
});`,
            description: 'Track conversions and create retargeting audiences',
            usage: 'Optimize Facebook/Instagram ads, measure ROAS.',
            technologies: ['Facebook Pixel', 'Marketing', 'Retargeting'],
          },
          {
            title: 'Email Marketing with SendGrid',
            code: `import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Abandoned cart email
async function sendAbandonedCartEmail(customerEmail, cartItems) {
  const msg = {
    to: customerEmail,
    from: 'store@example.com',
    subject: '🛒 You left items in your cart!',
    templateId: 'd-abandoned-cart-template-id',
    dynamicTemplateData: {
      customer_name: 'John',
      cart_items: cartItems,
      cart_total: cartItems.reduce((sum, item) => 
        sum + (item.price * item.quantity), 0
      ),
      checkout_url: 'https://store.com/checkout'
    }
  };
  
  await sgMail.send(msg);
}

// Order confirmation
async function sendOrderConfirmation(order) {
  const msg = {
    to: order.customer.email,
    from: 'orders@example.com',
    subject: \`✅ Order #\${order.id} Confirmed\`,
    templateId: 'd-order-confirmation-template',
    dynamicTemplateData: {
      order_id: order.id,
      customer_name: order.customer.name,
      items: order.items,
      total: order.total,
      shipping_address: order.shipping_address,
      estimated_delivery: order.estimated_delivery
    }
  };
  
  await sgMail.send(msg);
}`,
            description: 'Send transactional and marketing emails',
            usage: 'Recover abandoned carts, send order confirmations, newsletters.',
            technologies: ['SendGrid', 'Email Marketing', 'Transactional Email'],
          },
        ],
      },
    },
  },

  linux: {
    id: 'linux',
    name: 'Linux & System Admin',
    icon: '🐧',
    color: '#FCC624',
    description: 'Linux system administration, server management, and DevOps',
    categories: {
      basics: {
        name: 'Linux Basics',
        items: [
          {
            title: 'Essential Linux Commands',
            code: `# File operations
ls -la                  # List files with details
cd /path/to/directory   # Change directory
mkdir new_folder        # Create directory
rm -rf folder           # Remove directory
cp source dest          # Copy files
mv source dest          # Move/rename files

# File viewing
cat file.txt            # Display file
less file.txt           # View file (paginated)
head -n 10 file.txt     # First 10 lines
tail -f /var/log/app.log # Follow log file

# Search
grep "error" file.txt   # Search in file
find / -name "*.log"    # Find files
which python3           # Find command location

# Process management
ps aux                  # List all processes
top                     # Interactive process viewer
kill -9 PID             # Force kill process
htop                    # Better process viewer`,
            description: 'Essential Linux terminal commands every developer needs',
            usage: 'Master these for daily Linux system interaction and server management.',
            technologies: ['Linux', 'Bash', 'Terminal'],
          },
          {
            title: 'User & Permission Management',
            code: `# User management
sudo adduser username       # Add new user
sudo usermod -aG sudo user  # Add user to sudo group
sudo deluser username       # Delete user
whoami                      # Current user
id                          # User ID and groups

# File permissions
chmod 755 script.sh         # rwxr-xr-x
chmod +x script.sh          # Make executable
chown user:group file.txt   # Change ownership
ls -l                       # View permissions

# Permission breakdown:
# 755 = rwxr-xr-x
# 7 = owner (read+write+execute)
# 5 = group (read+execute)
# 5 = others (read+execute)`,
            description: 'Manage users, groups, and file permissions',
            usage: 'Critical for server security and multi-user systems.',
            technologies: ['Linux', 'Permissions', 'Security'],
          },
          {
            title: 'System Information',
            code: `# System info
uname -a                # System information
hostnamectl             # Hostname and OS info
df -h                   # Disk usage (human-readable)
free -h                 # Memory usage
lsblk                   # List block devices
lscpu                   # CPU information

# Network
ifconfig                # Network interfaces (deprecated)
ip addr show            # Network interfaces (modern)
netstat -tulpn          # Network connections
ss -tulpn               # Socket statistics (modern)
ping google.com         # Test connectivity

# Package management (Ubuntu/Debian)
sudo apt update         # Update package list
sudo apt upgrade        # Upgrade packages
sudo apt install pkg    # Install package
sudo apt remove pkg     # Remove package`,
            description: 'Check system resources and network information',
            usage: 'Monitor server health, troubleshoot issues, manage packages.',
            technologies: ['Linux', 'Networking', 'System Admin'],
          },
        ],
      },
      serverManagement: {
        name: 'Server Management',
        items: [
          {
            title: 'Nginx Configuration',
            code: `# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name example.com www.example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Commands
sudo nginx -t                    # Test configuration
sudo systemctl restart nginx     # Restart Nginx
sudo systemctl status nginx      # Check status`,
            description: 'Configure Nginx as reverse proxy',
            usage: 'Deploy Node.js, Python, or any web app behind Nginx.',
            technologies: ['Nginx', 'Reverse Proxy', 'Web Server'],
          },
          {
            title: 'Systemd Service',
            code: `# /etc/systemd/system/myapp.service
[Unit]
Description=My Node.js Application
After=network.target

[Service]
Type=simple
User=nodejs
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/node /opt/myapp/server.js
Restart=always
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target

# Commands
sudo systemctl daemon-reload        # Reload systemd
sudo systemctl start myapp          # Start service
sudo systemctl enable myapp         # Enable on boot
sudo systemctl status myapp         # Check status
sudo journalctl -u myapp -f         # View logs`,
            description: 'Create systemd service for applications',
            usage: 'Run apps as services, auto-restart on failure, start on boot.',
            technologies: ['systemd', 'Linux', 'Service Management'],
          },
        ],
      },
      advanced: {
        name: 'Advanced Administration',
        items: [
          {
            title: 'Firewall with UFW',
            code: `# Enable UFW
sudo ufw enable

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH (IMPORTANT: do this first!)
sudo ufw allow ssh
sudo ufw allow 22/tcp

# Allow HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow specific port
sudo ufw allow 3000/tcp

# Allow from specific IP
sudo ufw allow from 192.168.1.100

# Allow port range
sudo ufw allow 6000:6010/tcp

# Status and rules
sudo ufw status verbose
sudo ufw status numbered

# Delete rule
sudo ufw delete 2
sudo ufw delete allow 80/tcp`,
            description: 'Configure firewall with Uncomplicated Firewall (UFW)',
            usage: 'Secure your server by controlling network access.',
            technologies: ['UFW', 'Firewall', 'Security'],
          },
          {
            title: 'Automated Backups with Cron',
            code: `#!/bin/bash
# backup-script.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
SOURCE_DIR="/var/www"
DB_NAME="myapp_db"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup files
tar -czf $BACKUP_DIR/files_$DATE.tar.gz $SOURCE_DIR

# Backup database
mysqldump -u root -p$DB_PASSWORD $DB_NAME > $BACKUP_DIR/db_$DATE.sql

# Compress database backup
gzip $BACKUP_DIR/db_$DATE.sql

# Delete backups older than 30 days
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete
find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete

echo "Backup completed: $DATE"

# Add to crontab for daily backups at 2 AM:
# crontab -e
# 0 2 * * * /opt/scripts/backup-script.sh >> /var/log/backup.log 2>&1`,
            description: 'Automate file and database backups with cron',
            usage: 'Protect your data with scheduled automated backups.',
            technologies: ['Cron', 'Backup', 'Automation'],
          },
          {
            title: 'SSH Key Authentication',
            code: `# Generate SSH key pair (on local machine)
ssh-keygen -t ed25519 -C "your_email@example.com"
# Or for RSA:
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Copy public key to server
ssh-copy-id user@server.com

# Manual copy (if ssh-copy-id not available)
cat ~/.ssh/id_ed25519.pub | ssh user@server.com "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# Secure SSH configuration (on server)
# Edit /etc/ssh/sshd_config:
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
Port 2222  # Change default port

# Restart SSH service
sudo systemctl restart sshd

# Connect with key
ssh user@server.com
ssh -i ~/.ssh/custom_key user@server.com -p 2222`,
            description: 'Set up secure SSH key-based authentication',
            usage: 'More secure than passwords, enable passwordless login.',
            technologies: ['SSH', 'Security', 'Authentication'],
          },
          {
            title: 'Docker Container Management',
            code: `# Pull and run container
docker pull nginx:latest
docker run -d -p 80:80 --name webserver nginx

# List containers
docker ps                    # Running containers
docker ps -a                 # All containers

# Container operations
docker start container_name
docker stop container_name
docker restart container_name
docker rm container_name

# View logs
docker logs -f container_name

# Execute command in container
docker exec -it container_name bash

# Build image from Dockerfile
docker build -t myapp:1.0 .

# Docker Compose
docker-compose up -d         # Start services
docker-compose down          # Stop services
docker-compose logs -f       # View logs
docker-compose ps            # List services

# Cleanup
docker system prune -a       # Remove unused data
docker volume prune          # Remove unused volumes`,
            description: 'Manage Docker containers and images',
            usage: 'Deploy applications in isolated, portable containers.',
            technologies: ['Docker', 'Containers', 'DevOps'],
          },
          {
            title: 'Log Analysis with Journalctl',
            code: `# View all logs
journalctl

# Follow logs (like tail -f)
journalctl -f

# Logs from specific service
journalctl -u nginx.service
journalctl -u nginx.service -f

# Logs from specific time
journalctl --since "2024-01-01"
journalctl --since "1 hour ago"
journalctl --since "2024-01-01" --until "2024-01-02"

# Filter by priority
journalctl -p err            # Errors only
journalctl -p warning        # Warnings and above

# Show kernel messages
journalctl -k

# Show boot logs
journalctl -b                # Current boot
journalctl -b -1             # Previous boot

# Disk usage by logs
journalctl --disk-usage

# Clean old logs
sudo journalctl --vacuum-time=7d   # Keep 7 days
sudo journalctl --vacuum-size=1G   # Keep 1GB`,
            description: 'Analyze system logs with journalctl',
            usage: 'Troubleshoot issues, monitor system health, debug services.',
            technologies: ['Journalctl', 'Systemd', 'Logging'],
          },
          {
            title: 'Performance Monitoring',
            code: `# CPU and memory monitoring
top                          # Basic process monitor
htop                         # Enhanced monitor
vmstat 1                     # Virtual memory stats

# Disk I/O
iostat -x 1                  # I/O statistics
iotop                        # I/O by process

# Network monitoring
iftop                        # Network bandwidth
nethogs                      # Network by process
tcpdump -i eth0              # Packet capture

# System resource usage
dstat                        # All-in-one monitoring
nmon                         # Comprehensive monitor

# Check system load
uptime
cat /proc/loadavg

# Memory details
free -h
cat /proc/meminfo

# Disk performance test
dd if=/dev/zero of=test bs=1M count=1000 oflag=direct

# Process CPU usage
ps aux --sort=-%cpu | head
ps aux --sort=-%mem | head`,
            description: 'Monitor system performance and resource usage',
            usage: 'Identify bottlenecks, optimize performance, troubleshoot slowness.',
            technologies: ['Performance', 'Monitoring', 'Linux'],
          },
        ],
      },
    },
  },

  proxmox: {
    id: 'proxmox',
    name: 'Proxmox & Virtualization',
    icon: '🖥️',
    color: '#E57000',
    description: 'Proxmox VE - Virtual environment and container management',
    categories: {
      basics: {
        name: 'Proxmox Basics',
        items: [
          {
            title: 'Create VM via CLI',
            code: `# Create VM
qm create 100 \\
  --name ubuntu-vm \\
  --memory 2048 \\
  --cores 2 \\
  --net0 virtio,bridge=vmbr0 \\
  --cdrom local:iso/ubuntu-22.04.iso

# Configure disk
qm set 100 --scsi0 local-lvm:32

# Start VM
qm start 100

# List VMs
qm list

# Stop VM
qm stop 100

# Delete VM
qm destroy 100`,
            description: 'Create and manage virtual machines via command line',
            usage: 'Automate VM creation, useful for infrastructure as code.',
            technologies: ['Proxmox', 'QEMU', 'Virtualization'],
          },
          {
            title: 'LXC Container',
            code: `# Download template
pveam update
pveam available
pveam download local ubuntu-22.04-standard_22.04-1_amd64.tar.zst

# Create container
pct create 101 local:vztmpl/ubuntu-22.04-standard_22.04-1_amd64.tar.zst \\
  --hostname ubuntu-ct \\
  --memory 1024 \\
  --cores 2 \\
  --net0 name=eth0,bridge=vmbr0,ip=dhcp

# Start container
pct start 101

# Enter container
pct enter 101

# List containers
pct list`,
            description: 'Create lightweight Linux containers with LXC',
            usage: 'Containers are more efficient than VMs. Perfect for microservices.',
            technologies: ['LXC', 'Containers', 'Proxmox'],
          },
          {
            title: 'Backup and Restore',
            code: `# Backup VM/Container
vzdump 100 --mode snapshot --compress gzip --storage local

# List backups
pvesm list local

# Restore backup
qmrestore /var/lib/vz/dump/vzdump-qemu-100-*.vma.gz 100

# Automated backup schedule (via GUI)
# Datacenter > Backup > Add
# Or edit: /etc/pve/vzdump.cron`,
            description: 'Backup and restore VMs and containers',
            usage: 'Regular backups are essential. Snapshot mode for minimal downtime.',
            technologies: ['Backup', 'vzdump', 'Disaster Recovery'],
          },
        ],
      },
    },
  },

  devops: {
    id: 'devops',
    name: 'DevOps & CI/CD',
    icon: '🔄',
    color: '#2563EB',
    description: 'DevOps practices, CI/CD pipelines, and automation tools',
    categories: {
      docker: {
        name: 'Docker',
        items: [
          {
            title: 'Dockerfile Basics',
            code: `# Multi-stage build for Node.js app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]`,
            description: 'Create efficient Docker images with multi-stage builds',
            usage: 'Reduces image size and improves security by separating build and runtime.',
            technologies: ['Docker', 'Containers', 'Node.js'],
          },
          {
            title: 'Docker Compose',
            code: `version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db
  
  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=secret

volumes:
  postgres_data:`,
            description: 'Define and run multi-container Docker applications',
            usage: 'Perfect for local development environments with multiple services.',
            technologies: ['Docker Compose', 'PostgreSQL', 'Orchestration'],
          },
        ],
      },
      kubernetes: {
        name: 'Kubernetes',
        items: [
          {
            title: 'Deployment YAML',
            code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: app
        image: myapp:latest
        ports:
        - containerPort: 8080
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"`,
            description: 'Deploy containerized applications to Kubernetes',
            usage: 'Scales applications automatically, ensures high availability.',
            technologies: ['Kubernetes', 'Orchestration', 'Scaling'],
          },
        ],
      },
      githubActions: {
        name: 'GitHub Actions',
        items: [
          {
            title: 'CI/CD Pipeline',
            code: `name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
    
    - name: Deploy to production
      if: github.ref == 'refs/heads/main'
      run: npm run deploy
      env:
        DEPLOY_KEY: \${{ secrets.DEPLOY_KEY }}`,
            description: 'Automate testing, building, and deployment workflows',
            usage: 'Runs on every push/PR, ensures code quality before merge.',
            technologies: ['GitHub Actions', 'CI/CD', 'Automation'],
          },
        ],
      },
    },
  },

  cloud: {
    id: 'cloud',
    name: 'Cloud Platforms',
    icon: '☁️',
    color: '#0EA5E9',
    description: 'AWS, Azure, Google Cloud services and cloud-native development',
    categories: {
      aws: {
        name: 'AWS',
        items: [
          {
            title: 'S3 File Upload',
            code: `import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: 'us-east-1' });

async function uploadFile(file, bucketName) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: file.name,
    Body: file,
    ContentType: file.type,
  });
  
  try {
    const response = await s3Client.send(command);
    console.log('Upload successful:', response);
    return response;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
}`,
            description: 'Upload files to AWS S3 using SDK v3',
            usage: 'Store and retrieve any amount of data from anywhere on the web.',
            technologies: ['AWS', 'S3', 'Cloud Storage'],
          },
          {
            title: 'Lambda Function',
            code: `export const handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));
  
  try {
    const body = JSON.parse(event.body);
    
    // Process data
    const result = {
      message: 'Success',
      data: body,
      timestamp: new Date().toISOString(),
    };
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};`,
            description: 'Serverless function that runs on AWS Lambda',
            usage: 'No server management, pay only for compute time, auto-scaling.',
            technologies: ['AWS Lambda', 'Serverless', 'Node.js'],
          },
        ],
      },
    },
  },

  blockchain: {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    icon: '🔗',
    color: '#8B5CF6',
    description: 'Smart contracts, cryptocurrency, and decentralized applications',
    categories: {
      solidity: {
        name: 'Solidity Smart Contracts',
        items: [
          {
            title: 'Simple ERC20 Token',
            code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }
    
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}`,
            description: 'Create a basic ERC20 token on Ethereum',
            usage: 'Foundation for creating cryptocurrencies and utility tokens.',
            technologies: ['Solidity', 'Ethereum', 'ERC20'],
          },
          {
            title: 'NFT Contract',
            code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    constructor() ERC721("MyNFT", "MNFT") {}
    
    function mintNFT(address recipient, string memory tokenURI)
        public returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        
        return newItemId;
    }
}`,
            description: 'Create non-fungible tokens (NFTs) on Ethereum',
            usage: 'Digital collectibles, art, gaming items, and unique assets.',
            technologies: ['Solidity', 'NFT', 'ERC721'],
          },
        ],
      },
    },
  },

  security: {
    id: 'security',
    name: 'Security & Encryption',
    icon: '🔒',
    color: '#DC2626',
    description: 'Application security, encryption, and secure coding practices',
    categories: {
      authentication: {
        name: 'Authentication',
        items: [
          {
            title: 'JWT Authentication',
            code: `const jwt = require('jsonwebtoken');

// Generate token
function generateToken(userId) {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

// Verify token middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
}`,
            description: 'Implement JWT-based authentication',
            usage: 'Stateless authentication, perfect for APIs and microservices.',
            technologies: ['JWT', 'Authentication', 'Node.js'],
          },
        ],
      },
      encryption: {
        name: 'Encryption',
        items: [
          {
            title: 'AES Encryption',
            code: `const crypto = require('crypto');

function encrypt(text, password) {
  const algorithm = 'aes-256-cbc';
  const key = crypto.scryptSync(password, 'salt', 32);
  const iv = crypto.randomBytes(16);
  
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return {
    iv: iv.toString('hex'),
    encrypted: encrypted
  };
}

function decrypt(encrypted, password, iv) {
  const algorithm = 'aes-256-cbc';
  const key = crypto.scryptSync(password, 'salt', 32);
  
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(iv, 'hex')
  );
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}`,
            description: 'Encrypt and decrypt sensitive data using AES-256',
            usage: 'Protect sensitive information like passwords, API keys, personal data.',
            technologies: ['AES', 'Encryption', 'Node.js', 'Crypto'],
          },
        ],
      },
    },
  },

  testing: {
    id: 'testing',
    name: 'Testing & QA',
    icon: '🧪',
    color: '#10B981',
    description: 'Unit testing, integration testing, and test automation',
    categories: {
      jest: {
        name: 'Jest Testing',
        items: [
          {
            title: 'Unit Test Example',
            code: `// math.js
export function add(a, b) {
  return a + b;
}

// math.test.js
import { add } from './math';

describe('Math functions', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
  
  test('handles negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });
  
  test('handles zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});`,
            description: 'Write unit tests with Jest framework',
            usage: 'Ensure code works correctly, catch bugs early in development.',
            technologies: ['Jest', 'Testing', 'JavaScript'],
          },
        ],
      },
      reactTesting: {
        name: 'React Testing Library',
        items: [
          {
            title: 'Component Test',
            code: `import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter on button click', () => {
  render(<Counter />);
  
  const button = screen.getByRole('button', { name: /increment/i });
  const count = screen.getByText(/count: 0/i);
  
  expect(count).toBeInTheDocument();
  
  fireEvent.click(button);
  
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});`,
            description: 'Test React components with user interactions',
            usage: 'Verify components render and behave correctly from user perspective.',
            technologies: ['React Testing Library', 'Jest', 'React'],
          },
        ],
      },
    },
  },
  homeserver: {
    id: 'homeserver',
    name: 'Home Server',
    icon: '🏠',
    color: '#8B5CF6',
    description: 'Everything you need for your own home server - software, security, and solutions',
    categories: {
      hardware: {
        name: 'Hardware & Setup',
        items: [
          {
            title: 'How to Build a Complete Server',
            code: `# Professional Server Building Guide
# Step-by-step server infrastructure setup

## 1. UPS (Uninterruptible Power Supply)
Purpose: Protect against power outages and surges
Recommendation:
  - Entry: APC Back-UPS 1500VA (~$200)
  - Pro: APC Smart-UPS 3000VA (~$800)
  - Enterprise: Eaton 9PX 6000VA (~$2000+)
Setup:
  • Connect UPS to wall outlet
  • Plug server, switch, router into UPS
  • Install monitoring software (apcupsd, NUT)
  • Configure automatic shutdown on low battery

## 2. Energy Considerations
Power Draw Calculation:
  • Server: 100-300W (idle) to 400-800W (load)
  • Network Switch: 10-50W
  • Router/Firewall: 10-30W
  • Total: ~150-900W continuous

Cost Calculation:
  300W × 24h × 30 days = 216 kWh/month
  At $0.12/kWh = $25.92/month
  Annual cost: ~$311

Tips:
  ✓ Use 80+ Gold/Platinum power supplies
  ✓ Enable CPU C-states for idle power savings
  ✓ Use SSD over HDD (lower power)
  ✓ Proper cooling prevents thermal throttling

## 3. Server Hardware
Components:
  CPU: Xeon/EPYC (server) or Ryzen/Core i7 (workstation)
  RAM: 32GB+ ECC RAM (error correction)
  Storage:
    • OS: 2× SSD in RAID 1 (redundancy)
    • Data: 4-8× HDD in RAID 5/6 or ZFS
  Network: Dual gigabit NICs (redundancy/bonding)
  Case: Rack-mount (4U) or Tower with good airflow

## 4. Storage Configuration
Options:
  a) Hardware RAID Controller
     - Dedicated RAID card (e.g., LSI MegaRAID)
     - Battery backup for cache
     - Hot-swap capability

  b) Software RAID (mdadm)
     - Flexible, no proprietary hardware
     - CPU handles parity calculations

  c) ZFS / Btrfs
     - Advanced filesystem features
     - Snapshots, compression, deduplication
     - Better data integrity

RAID Levels:
  RAID 0: No redundancy, max performance
  RAID 1: Mirroring (50% usable space)
  RAID 5: Single drive failure tolerance
  RAID 6: Dual drive failure tolerance
  RAID 10: Mirror + Stripe (best performance)

## 5. Patch Panel
Purpose: Organize network cables centrally
Setup:
  • 24-port patch panel mounted in rack
  • Cables from rooms connected to back
  • Front connects to network switch
  • Label each port clearly
  • Cable management: Use velcro ties, cable trays

## 6. Network Switch
Types:
  a) Unmanaged: Simple plug-and-play
  b) Managed: VLANs, QoS, port mirroring
  
Recommendations:
  • 24-port Gigabit switch minimum
  • PoE+ for cameras, access points
  • 10G uplinks for server connections
  
Popular Models:
  - Netgear GS724T (budget managed)
  - Ubiquiti UniFi Switch 24 PoE
  - Cisco Catalyst 2960 (enterprise)

Configuration:
  • Create VLANs (IoT, Guest, Management)
  • Enable IGMP snooping for multicast
  • Configure link aggregation (LACP)
  • Set up port security

## 7. Firewall / Router
Options:
  a) All-in-one Router (Consumer)
     - Simple setup, limited features
     - Example: Ubiquiti Dream Machine

  b) Dedicated Firewall (pfSense/OPNsense)
     - Full control, advanced features
     - Hardware: Netgate, Protectli, DIY

  c) Enterprise Firewall
     - Cisco ASA, Fortinet FortiGate
     - Advanced threat protection

pfSense Setup:
  • Dedicated box with 2+ NICs
  • WAN port to modem
  • LAN port to switch
  • Configure NAT, firewall rules
  • Enable IDS/IPS (Snort/Suricata)
  • Set up VPN (OpenVPN/WireGuard)

## 8. Router (if separate)
When to use separate router:
  • Very high-speed internet (>1Gbps)
  • Need advanced routing (BGP, OSPF)
  • ISP-provided modem/router combo insufficient

Setup:
  Modem → Router (WAN) → Firewall → Switch → Devices

## 9. Complete Network Topology

Internet
  ↓
[Modem]
  ↓
[Router/Firewall] ← UPS powered
  ↓
[Network Switch] ← PoE enabled, UPS powered
  ↓ ↓ ↓ ↓
  Patch Panel connections to:
  ├─ [Server] - Static IP, dual NIC bonding
  ├─ [NAS] - Storage, RAID configured
  ├─ [Access Points] - PoE powered
  ├─ [Workstations] - VLAN tagged
  └─ [IoT VLAN] - Isolated network

## 10. Cable Management
Best Practices:
  ✓ Use appropriate cable lengths
  ✓ Velcro ties (reusable)
  ✓ Cable trays in rack
  ✓ Label both ends of cables
  ✓ Color coding by function:
      - Blue: Internet/WAN
      - Yellow: Servers
      - Red: Management
      - Green: User workstations

## 11. Monitoring & Management
Essential Tools:
  • UPS monitoring (NUT, apcupsd)
  • Network monitoring (PRTG, Zabbix)
  • Server monitoring (Prometheus + Grafana)
  • Log aggregation (Graylog, ELK stack)
  • Remote management (IPMI, iDRAC, iLO)

## 12. Redundancy Checklist
□ Dual power supplies in server (if supported)
□ UPS with sufficient runtime (15-30 min)
□ RAID for storage redundancy
□ Backup solution (3-2-1 rule)
□ Dual NICs with bonding/teaming
□ Spare hardware (PSU, HDD, cables)
□ Documented configurations
□ Off-site backup

## 13. Security Layers
Physical:
  • Locked server rack/room
  • Environmental monitoring (temp, humidity)
  • Surveillance cameras

Network:
  • Firewall with IDS/IPS
  • VLANs for network segregation
  • Regular firmware updates
  • Strong passwords + 2FA

System:
  • OS hardening
  • Regular patching
  • Fail2ban for brute force protection
  • Encrypted storage (LUKS)

## Cost Breakdown (Mid-Range Setup)
Server (DIY): $800-1500
UPS (1500VA): $200-400
Switch (24-port PoE): $200-400
Patch Panel: $30-60
Cables & Accessories: $100-200
Firewall (pfSense box): $200-500
Router (if needed): $100-300
Storage (4× 4TB HDD): $400-600
---
Total: ~$2,030-3,960

## Monthly Operating Costs
Electricity (300W avg): $26
Internet (Business line): $80-150
Cloud backup: $10-30
---
Total: ~$116-206/month`,
            description: 'Complete guide to building a professional server infrastructure with all components explained',
            usage: 'Use this comprehensive guide when setting up a home lab, small business server, or data center infrastructure. Covers power, networking, storage, security, and redundancy.',
            technologies: ['Server Hardware', 'UPS', 'Networking', 'RAID', 'Patch Panel', 'Switch', 'Firewall', 'Router'],
            bestPractices: [
              'Always use UPS for power protection',
              'Implement redundancy at every layer',
              'Proper cable management from day one',
              'Document your entire setup',
              'Use VLANs for network segmentation',
              'Regular backups with 3-2-1 rule',
              'Monitor everything (power, temperature, network)',
              'Plan for expansion (extra ports, bays)',
              'Calculate ongoing power costs',
              'Physical security matters'
            ],
            estimatedCost: '$2,000-4,000 initial + $116-206/month',
            estimatedTime: '2-3 days for complete setup'
          },
          {
            title: 'Computer Ports & Connectors Guide',
            code: `# Complete Guide to Computer Ports and Connectors

## DATA PORTS

### USB (Universal Serial Bus)
USB-A (Traditional rectangular):
  • USB 2.0: 480 Mbps (black)
  • USB 3.0/3.1 Gen 1: 5 Gbps (blue)
  • USB 3.1 Gen 2: 10 Gbps (teal)
  Uses: Keyboards, mice, flash drives, peripherals

USB-C (Reversible oval):
  • USB 3.2: Up to 20 Gbps
  • USB4: Up to 40 Gbps
  • Thunderbolt 3/4: 40 Gbps
  • Power Delivery: Up to 240W
  Uses: Modern devices, charging, displays, docking

USB-B (Square with beveled corners):
  • USB 2.0 Type-B: Printers, scanners
  • USB 3.0 Type-B: External HDDs
  • Mini-USB: Older cameras, phones
  • Micro-USB: Android phones (older), accessories

### Thunderbolt
Thunderbolt 2 (Mini DisplayPort):
  • 20 Gbps
  • Daisy-chain up to 6 devices
  • Mac-centric

Thunderbolt 3/4 (USB-C shape):
  • 40 Gbps bidirectional
  • 100W power delivery
  • External GPUs, fast storage
  • Daisy-chain displays

### Serial & Legacy
RS-232 (Serial, DB-9):
  • 9-pin connector
  • Uses: Industrial equipment, routers, switches
  • Management/console ports

Parallel (DB-25):
  • 25-pin connector
  • Legacy printers (obsolete)

PS/2 (Mini-DIN):
  • 6-pin circular
  • Purple: Keyboard
  • Green: Mouse
  • Legacy, but reliable for gaming

## VIDEO PORTS

### HDMI (High-Definition Multimedia Interface)
Types:
  • Type-A: Standard (TVs, monitors)
  • Type-C (Mini): Cameras, tablets
  • Type-D (Micro): Smartphones

Versions:
  • HDMI 1.4: 4K@30Hz
  • HDMI 2.0: 4K@60Hz
  • HDMI 2.1: 8K@60Hz, 4K@120Hz
  Features: Audio + video, ARC/eARC, CEC

### DisplayPort (DP)
Types:
  • Full size
  • Mini DisplayPort (Thunderbolt 2)
  
Versions:
  • DP 1.2: 4K@60Hz
  • DP 1.4: 8K@60Hz, 4K@120Hz, HDR
  • DP 2.0: 16K@60Hz, 10K@60Hz
  
Benefits: Daisy-chaining, higher bandwidth than HDMI
Uses: PC monitors, professional displays

### DVI (Digital Visual Interface)
Types:
  • DVI-D: Digital only
  • DVI-I: Digital + analog
  • DVI-A: Analog only (rare)
  • Single Link: 1920×1200@60Hz
  • Dual Link: 2560×1600@60Hz
Status: Legacy, being phased out

### VGA (Video Graphics Array)
  • 15-pin D-sub connector
  • Analog signal
  • Up to 2048×1536 (theoretically)
  • Blue colored
Status: Obsolete, legacy support only

## AUDIO PORTS

### 3.5mm (1/8") Audio Jack
Types:
  • TRS: 3 contacts (stereo headphones)
  • TRRS: 4 contacts (headset with mic)

Color Coding:
  • Green: Line out / Headphones
  • Blue: Line in
  • Pink: Microphone
  • Orange: Subwoofer / Center
  • Black: Rear speakers
  • Gray: Side speakers

### Optical Audio (TOSLINK / SPDIF)
  • Square connector with cover
  • Red LED light when active
  • Digital audio
  • Up to 7.1 surround
  • No electrical interference

### 6.35mm (1/4") Jack
  • Professional audio equipment
  • Electric guitars, studio monitors
  • TRS balanced or unbalanced

## NETWORK PORTS

### Ethernet (RJ-45)
Standards:
  • 10 Mbps: 10BASE-T (Cat3)
  • 100 Mbps: 100BASE-TX (Cat5)
  • 1 Gbps: 1000BASE-T (Cat5e)
  • 2.5 Gbps: 2.5GBASE-T (Cat5e/6)
  • 5 Gbps: 5GBASE-T (Cat6)
  • 10 Gbps: 10GBASE-T (Cat6a/7)
  • 40 Gbps: 40GBASE-T (Cat8)

LED Indicators:
  • Green/Link: Connection active
  • Orange/Activity: Data transfer
  • Blinking: Network traffic

### SFP / SFP+ (Small Form-factor Pluggable)
  • Hot-swappable transceiver
  • Fiber optic connections
  • SFP: 1 Gbps
  • SFP+: 10 Gbps
  • QSFP: 40 Gbps
  • QSFP28: 100 Gbps
  Uses: Switches, routers, servers

## STORAGE PORTS

### SATA (Serial ATA)
Versions:
  • SATA I: 1.5 Gbps
  • SATA II: 3 Gbps
  • SATA III: 6 Gbps
  • eSATA: External SATA

Connectors:
  • Data: 7-pin L-shaped
  • Power: 15-pin flat
  Uses: HDDs, SSDs, optical drives

### M.2 (NGFF - Next Generation Form Factor)
Keys:
  • M Key: PCIe NVMe SSDs (most common)
  • B Key: SATA SSDs
  • B+M Key: Compatible with both

Sizes: 2230, 2242, 2260, 2280, 22110 (width × length mm)

Interfaces:
  • SATA: Up to 6 Gbps
  • PCIe 3.0 x4: ~3,500 MB/s
  • PCIe 4.0 x4: ~7,000 MB/s
  • PCIe 5.0 x4: ~14,000 MB/s

### NVMe (PCIe SSD)
  • Add-in card format
  • PCIe x4 lanes
  • Lower latency than SATA
  • Enterprise storage

### IDE / PATA (Parallel ATA)
  • 40-pin ribbon cable
  • Legacy (obsolete)
  • Master/Slave configuration

## EXPANSION SLOTS

### PCIe (PCI Express)
Versions & Bandwidth per lane:
  • PCIe 1.0: 250 MB/s
  • PCIe 2.0: 500 MB/s
  • PCIe 3.0: ~1 GB/s
  • PCIe 4.0: ~2 GB/s
  • PCIe 5.0: ~4 GB/s

Slot Sizes:
  • x1: Small (network cards, sound cards)
  • x4: Medium (NVMe adapters)
  • x8: Medium-long (RAID cards)
  • x16: Full length (graphics cards)

Note: x16 physical can run at x8/x4 electrical

### Legacy PCI
  • 32-bit, 33 MHz
  • 133 MB/s bandwidth
  • Obsolete

## POWER CONNECTORS

### ATX Power Supply Connectors
Main Power:
  • 24-pin ATX: Motherboard main power
  • 20+4 pin: Compatible with old 20-pin boards

CPU Power:
  • 4-pin (P4): Older motherboards
  • 8-pin (EPS): Modern CPUs
  • 4+4 pin: Split for compatibility

PCIe Power:
  • 6-pin: 75W (older GPUs)
  • 8-pin (6+2): 150W
  • 12+4 pin (PCIe 5.0): 600W (RTX 4090)

SATA Power:
  • 15-pin flat connector
  • 3.3V, 5V, 12V rails

Molex (4-pin):
  • 5V and 12V
  • Legacy drives, fans
  • Being phased out

### DC Power Jacks
Types:
  • Barrel jack (2.1mm, 2.5mm, 5.5mm)
  • USB-C PD (5V-20V)
  • Laptop proprietary connectors

## SPECIALIZED PORTS

### DIN Connectors
  • Circular, multiple pins (3-9 pins)
  • Uses: MIDI, keyboards, older audio

### FireWire (IEEE 1394)
Types:
  • FireWire 400: 400 Mbps
  • FireWire 800: 800 Mbps
Status: Obsolete (replaced by USB/Thunderbolt)
Uses: Legacy video cameras, audio interfaces

### eSATA
  • External SATA
  • 6 Gbps
Status: Replaced by USB 3.0+

### SD Card Slots
Types:
  • SD (Secure Digital): 32mm × 24mm
  • microSD: 15mm × 11mm
  • miniSD: Obsolete

Standards:
  • SD: Up to 2GB
  • SDHC: 2GB-32GB
  • SDXC: 32GB-2TB
  • SDUC: 2TB-128TB

Speed Classes:
  • Class 2-10: Old standard
  • UHS-I/II/III: Up to 624 MB/s
  • SD Express: Up to 985 MB/s (PCIe)

## MOBILE DEVICE PORTS

### Lightning (Apple)
  • 8-pin reversible
  • USB 2.0 speeds (480 Mbps)
  • iPhones, iPads (older models)
  • Being replaced by USB-C

### USB-C (Mobile)
  • Android phones (modern)
  • iPad Pro
  • Data + charging
  • Video out (DisplayPort alt mode)

### Micro-USB
  • Older Android phones
  • Budget electronics
  • USB 2.0: 480 Mbps
  • USB 3.0 Micro-B: 5 Gbps (wide connector)

## PORT IDENTIFICATION TIPS

Visual Clues:
  ✓ Color coding (USB blue = 3.0)
  ✓ Symbols/icons near ports
  ✓ Physical shape (USB-C reversible)
  ✓ Size differences

Testing:
  ✓ Check device manager (Windows)
  ✓ System Information (Mac)
  ✓ lsusb / lspci commands (Linux)
  ✓ Manufacturer documentation

## CABLE QUALITY MATTERS

USB Cables:
  ⚠ Not all USB-C cables support all features
  ⚠ Some lack fast charging or video
  ✓ Check certification (USB-IF)
  ✓ Thunderbolt cables marked with ⚡ symbol

Ethernet Cables:
  ✓ Cat5e: Gigabit up to 100m
  ✓ Cat6: 10G up to 55m
  ✓ Cat6a: 10G up to 100m
  ✓ Cat7/8: Shielded, 40G+

## COMMON ADAPTERS

Essential:
  • USB-C to HDMI/DisplayPort
  • USB-C to USB-A hub
  • DisplayPort to HDMI
  • M.2 to USB enclosure
  • SATA to USB adapter

Active vs Passive:
  • Active: Contains electronics (DP to HDMI)
  • Passive: Simple wire remapping (HDMI to DVI)

## TROUBLESHOOTING TIPS

No Signal:
  □ Check cable quality
  □ Try different cable
  □ Update drivers
  □ Check port functionality
  □ Verify power (USB devices)

Slow Speeds:
  □ USB 3.0 device in 2.0 port?
  □ Cable quality/length
  □ Driver issues
  □ Port negotiation failed

Intermittent Connection:
  □ Loose cable
  □ Damaged port
  □ Power delivery issues
  □ EMI interference`,
            description: 'Comprehensive guide to all computer ports, connectors, and interfaces',
            usage: 'Reference when connecting devices, building PCs, troubleshooting connectivity issues, or identifying unknown ports.',
            technologies: ['Hardware', 'USB', 'HDMI', 'DisplayPort', 'Ethernet', 'PCIe', 'SATA', 'Thunderbolt'],
            bestPractices: [
              'Check cable certifications',
              'Use correct USB generation',
              'Match port capabilities to device needs',
              'Color coding helps identification',
              'Not all USB-C cables are equal',
              'Use quality cables for high-speed connections',
              'Check maximum resolution/bandwidth',
              'Keep legacy adapters handy',
              'Label cables for easy identification',
              'Test ports regularly'
            ]
          },
          {
            title: 'Choosing Hardware',
            code: `# Recommended Home Server Hardware

## Entry Level ($200-400)
- Raspberry Pi 4 (8GB RAM)
- Mini PC (Intel N100, 16GB RAM)
- Old laptop repurposed

## Mid Range ($400-800)
- Intel NUC (i5/i7, 32GB RAM)
- Custom build (AMD Ryzen 5, 32GB)
- Synology/QNAP NAS

## High End ($800+)
- Dell PowerEdge R720
- HP ProLiant MicroServer
- Custom build (Ryzen 9, 64GB+ RAM)

## Key Considerations:
✓ Power consumption (24/7 operation)
✓ Noise level (if in living space)
✓ Expandability (drive bays, RAM slots)
✓ Network connectivity (Gigabit+)`,
            description: 'Hardware recommendations for home servers',
            usage: 'Choose based on budget, use case, and space constraints',
            technologies: ['Hardware', 'Raspberry Pi', 'NAS', 'Mini PC'],
            bestPractices: [
              'Calculate power costs for 24/7 operation',
              'Ensure adequate cooling',
              'Plan for future expansion',
              'Consider noise levels'
            ]
          },
          {
            title: 'Initial Setup Checklist',
            code: `# Home Server Setup Checklist

## 1. Network Configuration
□ Static IP address assignment
□ Port forwarding (if needed)
□ DDNS setup (e.g., DuckDNS)
□ Firewall rules configured

## 2. Operating System
□ Ubuntu Server / Debian installed
□ SSH enabled and secured
□ System updated (apt update && apt upgrade)
□ Hostname configured

## 3. Security Basics
□ Non-root user created
□ SSH key authentication enabled
□ Password authentication disabled
□ Fail2ban installed
□ UFW firewall configured

## 4. Essential Tools
□ Docker & Docker Compose installed
□ Portainer for container management
□ Cockpit for web-based management
□ Backup solution configured`,
            description: 'Essential setup steps for new home server',
            usage: 'Follow this checklist when setting up a new server',
            technologies: ['Linux', 'Networking', 'Security'],
          }
        ]
      },
      os: {
        name: 'Operating Systems',
        items: [
          {
            title: 'Ubuntu Server Setup',
            code: `# Ubuntu Server 22.04 LTS Installation

# Update system
sudo apt update && sudo apt upgrade -y

# Install essential packages
sudo apt install -y \\
  curl wget git vim \\
  htop net-tools \\
  ca-certificates gnupg

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo apt install docker-compose-plugin

# Enable Docker on boot
sudo systemctl enable docker

# Set static IP (netplan)
sudo nano /etc/netplan/00-installer-config.yaml
# Add:
network:
  ethernets:
    eth0:
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [1.1.1.1, 8.8.8.8]
  version: 2

sudo netplan apply`,
            description: 'Complete Ubuntu Server setup',
            usage: 'Most popular choice for home servers',
            technologies: ['Ubuntu', 'Linux', 'Docker'],
          },
          {
            title: 'Proxmox VE',
            code: `# Proxmox Virtual Environment
# Run multiple VMs and containers on one server

## Installation
1. Download Proxmox VE ISO
2. Boot from USB
3. Follow installation wizard
4. Access web UI: https://your-ip:8006

## Create Ubuntu VM
pct create 100 local:vztmpl/ubuntu-22.04-standard.tar.gz \\
  --hostname web-server \\
  --memory 2048 \\
  --cores 2 \\
  --net0 name=eth0,bridge=vmbr0,ip=dhcp \\
  --rootfs local-lvm:8

## Start container
pct start 100

## Benefits:
✓ Run multiple OS simultaneously
✓ Easy snapshots and backups
✓ Resource allocation per VM
✓ Web-based management`,
            description: 'Proxmox for virtualization',
            usage: 'Run multiple services isolated in VMs/containers',
            technologies: ['Proxmox', 'Virtualization', 'KVM', 'LXC'],
          },
          {
            title: 'TrueNAS Scale',
            code: `# TrueNAS Scale - NAS + Kubernetes

## Features:
- ZFS filesystem (data integrity)
- Built-in apps via Kubernetes
- SMB/NFS file sharing
- Docker container support
- Web-based management

## SMB Share Setup (Web UI):
1. Storage → Pools → Create Pool
2. Shares → Windows (SMB) → Add
3. Set permissions
4. Enable SMB service

## Access from Windows:
\\\\192.168.1.100\\sharename

## Docker App Example:
1. Apps → Discover Apps
2. Install Plex/Jellyfin/Nextcloud
3. Configure and deploy`,
            description: 'TrueNAS for file storage and apps',
            usage: 'Best for data storage with app support',
            technologies: ['TrueNAS', 'ZFS', 'Kubernetes', 'NAS'],
          },
          {
            title: 'CasaOS - Modern Home Server',
            code: `# CasaOS - Beautiful UI for Home Server Management

## What is CasaOS?
- Modern dashboard for home servers
- One-click app installation
- Docker container management
- File management built-in
- Beautiful UI, beginner-friendly

## Installation (Ubuntu/Debian)
wget -qO- https://get.casaos.io | sudo bash

# After installation, access:
# http://your-server-ip

## Features:
✓ App Store with 100+ apps
✓ Docker management without complexity
✓ Built-in file manager (like Dropbox)
✓ System monitoring dashboard
✓ Mobile-friendly interface
✓ RAID management
✓ User management

## Popular Apps (One-Click Install):
- Plex/Jellyfin (Media Server)
- Nextcloud (Cloud Storage)
- Pi-hole (Ad Blocker)
- Home Assistant
- Bitwarden (Password Manager)
- Portainer (Advanced Docker)
- Syncthing (File Sync)
- Photoprism (Photo Management)

## Why Choose CasaOS?
✓ Easier than Proxmox for beginners
✓ More features than basic Ubuntu
✓ Beautiful interface
✓ Active development
✓ Perfect for home use

## Update CasaOS
casaos-cli update

## Uninstall (if needed)
sudo casaos-uninstall`,
            description: 'User-friendly home server OS with app store',
            usage: 'Perfect for beginners, beautiful UI, one-click apps',
            technologies: ['CasaOS', 'Docker', 'Home Server', 'Dashboard'],
            bestPractices: [
              'Start with CasaOS if new to home servers',
              'Use built-in app store for easy setup',
              'Regular updates for security',
              'Backup configuration before major changes'
            ],
            relatedTopics: ['Docker', 'Home Assistant', 'Nextcloud']
          }
        ]
      },
      applications: {
        name: 'Essential Applications',
        items: [
          {
            title: 'Media Server - Plex/Jellyfin',
            code: `# Plex Media Server (Docker Compose)
version: '3'
services:
  plex:
    image: lscr.io/linuxserver/plex:latest
    container_name: plex
    network_mode: host
    environment:
      - PUID=1000
      - PGID=1000
      - VERSION=docker
    volumes:
      - /path/to/config:/config
      - /path/to/tv:/tv
      - /path/to/movies:/movies
    restart: unless-stopped

# Jellyfin (Open Source Alternative)
  jellyfin:
    image: jellyfin/jellyfin
    container_name: jellyfin
    ports:
      - 8096:8096
    volumes:
      - /path/to/config:/config
      - /path/to/media:/media
    restart: unless-stopped`,
            description: 'Stream your media library',
            usage: 'Access movies/TV shows from any device',
            technologies: ['Plex', 'Jellyfin', 'Docker', 'Streaming'],
          },
          {
            title: 'Home Assistant',
            code: `# Home Assistant - Smart Home Hub
version: '3'
services:
  homeassistant:
    container_name: homeassistant
    image: ghcr.io/home-assistant/home-assistant:stable
    volumes:
      - ./config:/config
      - /etc/localtime:/etc/localtime:ro
    restart: unless-stopped
    privileged: true
    network_mode: host

# Access: http://your-ip:8123

## Features:
- Control smart devices (lights, thermostats)
- Automation rules
- Voice assistants integration
- 2000+ integrations
- Mobile app support`,
            description: 'Central smart home control',
            usage: 'Automate and control all smart home devices',
            technologies: ['Home Assistant', 'IoT', 'Automation'],
          },
          {
            title: 'Nextcloud - Personal Cloud',
            code: `# Nextcloud with PostgreSQL
version: '3'
services:
  db:
    image: postgres:15
    restart: always
    volumes:
      - db:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=nextcloud
      - POSTGRES_DB=nextcloud
      - POSTGRES_USER=nextcloud

  app:
    image: nextcloud
    restart: always
    ports:
      - 8080:80
    links:
      - db
    volumes:
      - nextcloud:/var/www/html
    environment:
      - POSTGRES_HOST=db
      - POSTGRES_PASSWORD=nextcloud
      - POSTGRES_DB=nextcloud
      - POSTGRES_USER=nextcloud

volumes:
  db:
  nextcloud:

## Essential Features:
✓ File sync & share (like Dropbox)
✓ Calendar & Contacts sync
✓ Office documents online (Collabora/OnlyOffice)
✓ End-to-end encryption
✓ Mobile apps (iOS/Android)
✓ Desktop clients (Windows/Mac/Linux)
✓ 2-Factor authentication
✓ Video calls (Nextcloud Talk)
✓ Photo galleries
✓ Tasks & Notes
✓ Email client

## Recommended Apps (Install via UI):
- Collabora Online (Office documents)
- Nextcloud Talk (Video calls)
- Calendar
- Contacts
- Tasks
- Notes
- Photos
- Deck (Kanban board)
- Forms (Surveys)
- Maps

## External Storage Support:
- SMB/CIFS (Windows shares)
- FTP/SFTP
- Amazon S3
- Dropbox
- Google Drive
- OneDrive

## Performance Optimization:
# Add to config.php
'memcache.distributed' => '\\OC\\Memcache\\Redis',
'memcache.locking' => '\\OC\\Memcache\\Redis',
'redis' => [
  'host' => 'redis',
  'port' => 6379,
],

## Backup Strategy:
# Daily backup script
docker exec nextcloud-db pg_dump -U nextcloud > nextcloud_backup.sql
tar -czf nextcloud_files.tar.gz /path/to/nextcloud/data

## Access Options:
1. Local: http://192.168.1.100:8080
2. With reverse proxy: https://cloud.yourdomain.com
3. Via Cloudflare Tunnel (no port forwarding!)

## Security Hardening:
- Enable HTTPS (Let's Encrypt)
- Set up 2FA for all users
- Regular updates
- Strong passwords
- Limit login attempts
- Enable encryption`,
            description: 'Complete personal cloud solution',
            usage: 'Replace Google Drive/Dropbox/Office 365 with self-hosted',
            technologies: ['Nextcloud', 'PostgreSQL', 'PHP', 'Docker'],
            bestPractices: [
              'Use Redis for caching - improves performance',
              'Enable HTTPS - never run HTTP in production',
              'Regular backups - both database and files',
              'Monitor storage space',
              'Keep Nextcloud updated'
            ],
            relatedTopics: ['Docker', 'PostgreSQL', 'Reverse Proxy', 'Cloudflare Tunnels']
          },
          {
            title: 'Pi-hole - Network Ad Blocker',
            code: `# Pi-hole - Network-wide ad blocking
docker run -d \\
  --name pihole \\
  -p 53:53/tcp -p 53:53/udp \\
  -p 80:80 \\
  -e TZ="America/New_York" \\
  -e WEBPASSWORD="admin123" \\
  -v ./etc-pihole:/etc/pihole \\
  -v ./etc-dnsmasq.d:/etc/dnsmasq.d \\
  --restart=unless-stopped \\
  pihole/pihole:latest

# Configure router to use Pi-hole IP as DNS
# Primary DNS: 192.168.1.100
# Secondary DNS: 1.1.1.1

## Benefits:
✓ Block ads on all devices
✓ Faster browsing
✓ Malware protection
✓ Usage statistics

# Web interface: http://your-ip/admin`,
            description: 'Block ads for entire network',
            usage: 'Set as DNS server to block ads on all devices',
            technologies: ['Pi-hole', 'DNS', 'Ad Blocking'],
          },
          {
            title: 'Portainer - Container Management',
            code: `# Portainer - Docker management UI
docker run -d \\
  -p 9000:9000 \\
  -p 9443:9443 \\
  --name=portainer \\
  --restart=always \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v portainer_data:/data \\
  portainer/portainer-ce:latest

# Access: https://your-ip:9443

## Features:
- Manage containers with GUI
- Deploy stacks from templates
- Monitor resource usage
- View logs
- Execute commands in containers

## Alternative: Yacht
docker run -d \\
  -p 8000:8000 \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v yacht:/config \\
  selfhostedpro/yacht`,
            description: 'Manage Docker containers with web UI',
            usage: 'Easier than command line for Docker management',
            technologies: ['Portainer', 'Docker', 'Management'],
          },
          {
            title: 'Nginx Proxy Manager',
            code: `# Nginx Proxy Manager - Reverse proxy with SSL
version: '3'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt

# Access: http://your-ip:81
# Default: admin@example.com / changeme

## Setup SSL Certificate:
1. Add proxy host
2. Set domain: plex.yourdomain.com
3. Forward to: localhost:32400
4. Request Let's Encrypt SSL
5. Enable force SSL

## Benefits:
✓ Easy SSL certificates
✓ Access services via subdomains
✓ Web-based configuration
✓ Free Let's Encrypt integration`,
            description: 'Reverse proxy with automatic SSL',
            usage: 'Access services securely with custom domains',
            technologies: ['Nginx', 'Reverse Proxy', 'SSL'],
          }
        ]
      },
      networking: {
        name: 'Remote Access & Networking',
        items: [
          {
            title: 'Cloudflare Tunnels vs Port Forwarding',
            code: `# COMPARISON: Cloudflare Tunnels vs Traditional Port Forwarding

## Port Forwarding (Traditional Method)
### How it works:
1. Open ports on router (e.g., 80, 443)
2. Forward traffic to your server
3. Use DDNS for dynamic IP
4. Directly expose server to internet

### Pros:
✓ Direct connection (lower latency)
✓ Works with any protocol
✓ No third-party dependency
✓ Full control

### Cons:
✗ Exposes your home IP address
✗ Security risk (open ports = attack surface)
✗ Need to manage firewall rules
✗ ISP may block ports
✗ Requires dynamic DNS
✗ Router configuration needed
✗ ISP IP changes break connection

### Security Risks:
- Port scanning attacks
- DDoS attacks directly to home
- Exposed server vulnerabilities
- IP address leaks location

## Port Forwarding Setup:
# Router Configuration
1. Login to router (usually 192.168.1.1)
2. Find "Port Forwarding" section
3. Add rules:
   - External Port: 80 → Internal IP: 192.168.1.100:80
   - External Port: 443 → Internal IP: 192.168.1.100:443

# DDNS Setup (DuckDNS example)
echo url="https://www.duckdns.org/update?domains=yourdomain&token=YOUR_TOKEN&ip=" | curl -k -o ~/duckdns/duck.log -K -
# Add to crontab
*/5 * * * * ~/duckdns/duck.sh >/dev/null 2>&1

---

## Cloudflare Tunnels (Modern Solution) ✨
### How it works:
1. Install cloudflared on your server
2. Create tunnel via Cloudflare dashboard
3. No ports opened on router
4. Encrypted outbound connection only
5. Cloudflare proxies traffic

### Pros:
✓ No port forwarding needed
✓ Hide your home IP address
✓ Free SSL certificates (automatic)
✓ DDoS protection by Cloudflare
✓ Works behind CGNAT
✓ No router configuration
✓ Built-in access control
✓ Multiple services, one tunnel
✓ Works with ISP restrictions

### Cons:
✗ Slight latency increase (routed through Cloudflare)
✗ Depends on Cloudflare service
✗ HTTP/HTTPS only (no custom protocols)
✗ Must own a domain

## Cloudflare Tunnel Setup:

# 1. Install cloudflared
wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb

# 2. Authenticate
cloudflared tunnel login
# Opens browser to authenticate with Cloudflare

# 3. Create tunnel
cloudflared tunnel create my-home-server
# Note the tunnel ID shown

# 4. Create config file
sudo nano ~/.cloudflared/config.yml

# Add:
tunnel: YOUR_TUNNEL_ID
credentials-file: /root/.cloudflared/YOUR_TUNNEL_ID.json

ingress:
  # Nextcloud
  - hostname: cloud.yourdomain.com
    service: http://localhost:8080
  
  # Plex
  - hostname: plex.yourdomain.com
    service: http://localhost:32400
  
  # Home Assistant
  - hostname: home.yourdomain.com
    service: http://localhost:8123
  
  # Catch-all rule (required)
  - service: http_status:404

# 5. Route DNS
cloudflared tunnel route dns my-home-server cloud.yourdomain.com
cloudflared tunnel route dns my-home-server plex.yourdomain.com
cloudflared tunnel route dns my-home-server home.yourdomain.com

# 6. Run tunnel
cloudflared tunnel run my-home-server

# 7. Install as service
sudo cloudflared service install
sudo systemctl start cloudflared
sudo systemctl enable cloudflared

# 8. Check status
sudo systemctl status cloudflared
cloudflared tunnel info my-home-server

## Advanced Features:

# Access Control (restrict by email)
cloudflared tunnel route dns my-home-server private.yourdomain.com
# Then in Cloudflare Dashboard:
# Access → Applications → Add application
# Policy: Allow emails ending in @yourcompany.com

# Multiple Services, One Tunnel:
ingress:
  - hostname: "*.yourdomain.com"
    service: http://localhost:80
  - hostname: api.yourdomain.com
    service: http://localhost:3000
  - service: http_status:404

## Monitoring & Logs:
journalctl -u cloudflared -f

---

## WHEN TO USE WHAT?

### Use Port Forwarding If:
- Running game servers (need UDP)
- Need lowest possible latency
- Running VPN server (WireGuard, OpenVPN)
- Have static IP
- Don't care about IP exposure
- Running non-HTTP services

### Use Cloudflare Tunnels If: ✅
- Running web services (HTTP/HTTPS)
- Want to hide home IP
- Behind CGNAT (no public IP)
- ISP blocks ports
- Want free DDoS protection
- Need easy SSL certificates
- Want access control
- Multiple services to expose
- Security is priority

## Best Practice: Hybrid Approach 🎯
- Cloudflare Tunnels: Web services (Nextcloud, Home Assistant)
- VPN (WireGuard): Internal network access
- No port forwarding: Maximum security

## Cost Comparison:
Port Forwarding: $0 (but security risks)
Cloudflare Tunnels: $0 (free tier)
VPN + Tunnels: $0 (best security)

## Security Recommendation: ⭐
Use Cloudflare Tunnels + WireGuard VPN:
- Public services → Cloudflare Tunnels
- Private access → WireGuard VPN
- Nothing directly exposed to internet
- Multiple layers of security`,
            description: 'Compare remote access methods',
            usage: 'Choose the best method for your home server',
            technologies: ['Cloudflare', 'Networking', 'Security', 'Tunnels'],
            bestPractices: [
              'Prefer Cloudflare Tunnels for web services',
              'Use VPN for internal network access',
              'Never expose SSH directly to internet',
              'Always use HTTPS',
              'Implement fail2ban even behind tunnels',
              'Regular security updates'
            ],
            commonMistakes: [
              'Opening all ports on router',
              'Exposing SSH to internet',
              'No firewall configuration',
              'Using HTTP instead of HTTPS',
              'Weak passwords on exposed services'
            ],
            relatedTopics: ['WireGuard VPN', 'Nginx Proxy', 'Security', 'DNS']
          },
          {
            title: 'WireGuard VPN Server',
            code: `# WireGuard VPN - Access home network remotely
docker run -d \\
  --name=wireguard \\
  --cap-add=NET_ADMIN \\
  --cap-add=SYS_MODULE \\
  -e PUID=1000 \\
  -e PGID=1000 \\
  -e TZ=America/New_York \\
  -e SERVERURL=your-public-ip \\
  -e SERVERPORT=51820 \\
  -e PEERS=phone,laptop,tablet \\
  -e PEERDNS=auto \\
  -p 51820:51820/udp \\
  -v ./config:/config \\
  -v /lib/modules:/lib/modules \\
  --sysctl="net.ipv4.conf.all.src_valid_mark=1" \\
  --restart unless-stopped \\
  linuxserver/wireguard

# Get client configs
docker exec -it wireguard cat /config/peer_phone/peer_phone.conf

# Scan QR code with WireGuard mobile app
docker exec -it wireguard /app/show-peer phone

## Use Cases:
✓ Access home network from anywhere
✓ Secure public WiFi usage
✓ Access local services (Nextcloud, Plex)
✓ Better than port forwarding for security
✓ Works with Cloudflare Tunnels

## Best Practice:
- Public web services: Cloudflare Tunnels
- Private network access: WireGuard VPN
- Maximum security: Both combined`,
            description: 'Secure VPN access to home network',
            usage: 'Access home services safely from anywhere',
            technologies: ['WireGuard', 'VPN', 'Security', 'Docker'],
          }
        ]
      },
      security: {
        name: 'Security & Protection',
        items: [
          {
            title: 'SSH Hardening',
            code: `# Secure SSH Configuration
sudo nano /etc/ssh/sshd_config

# Change default port
Port 2222

# Disable root login
PermitRootLogin no

# Disable password authentication
PasswordAuthentication no
PubkeyAuthentication yes

# Only allow specific users
AllowUsers yourusername

# Restart SSH
sudo systemctl restart sshd

# Generate SSH key (on client)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy to server
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server

# Connect with custom port
ssh -p 2222 user@server`,
            description: 'Harden SSH for security',
            usage: 'Prevent unauthorized access',
            technologies: ['SSH', 'Security', 'Linux'],
          },
          {
            title: 'Firewall Setup (UFW)',
            code: `# UFW - Uncomplicated Firewall

# Install
sudo apt install ufw

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH (custom port)
sudo ufw allow 2222/tcp

# Allow HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow specific services
sudo ufw allow 8096/tcp  # Jellyfin
sudo ufw allow 32400/tcp # Plex

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status verbose

# Delete rule
sudo ufw delete allow 80/tcp`,
            description: 'Configure firewall rules',
            usage: 'Control network traffic to server',
            technologies: ['UFW', 'Firewall', 'Security'],
          },
          {
            title: 'Fail2Ban - Intrusion Prevention',
            code: `# Fail2Ban - Ban IPs after failed login attempts

# Install
sudo apt install fail2ban

# Create local config
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local

# Configure
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true
port = 2222
logpath = /var/log/auth.log

# Start service
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# Check status
sudo fail2ban-client status
sudo fail2ban-client status sshd

# Unban IP
sudo fail2ban-client set sshd unbanip 192.168.1.50`,
            description: 'Automatically ban malicious IPs',
            usage: 'Protect against brute force attacks',
            technologies: ['Fail2Ban', 'Security', 'IPS'],
          },
          {
            title: 'Backup Strategy',
            code: `# 3-2-1 Backup Rule
# 3 copies of data
# 2 different media types
# 1 offsite backup

## Option 1: Rsync
# Daily backup script
#!/bin/bash
rsync -avz --delete \\
  /home/user/important/ \\
  /mnt/backup/daily/

## Option 2: Restic (Encrypted)
# Install
sudo apt install restic

# Initialize repository
restic -r /mnt/backup init

# Create backup
restic -r /mnt/backup backup /home/user/important

# Restore
restic -r /mnt/backup restore latest --target /restore

## Option 3: Duplicati (Web UI)
# Docker compose
version: '3'
services:
  duplicati:
    image: lscr.io/linuxserver/duplicati:latest
    container_name: duplicati
    environment:
      - PUID=1000
      - PGID=1000
    volumes:
      - ./config:/config
      - ./backups:/backups
      - /:/source
    ports:
      - 8200:8200
    restart: unless-stopped`,
            description: 'Automated backup solutions',
            usage: 'Protect data from loss',
            technologies: ['Rsync', 'Restic', 'Duplicati', 'Backup'],
          }
        ]
      },
      monitoring: {
        name: 'Monitoring & Maintenance',
        items: [
          {
            title: 'System Monitoring',
            code: `# Grafana + Prometheus + Node Exporter
version: '3'
services:
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    ports:
      - 9090:9090
    restart: unless-stopped

  node-exporter:
    image: prom/node-exporter
    ports:
      - 9100:9100
    restart: unless-stopped

  grafana:
    image: grafana/grafana
    ports:
      - 3000:3000
    volumes:
      - grafana_data:/var/lib/grafana
    restart: unless-stopped
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin

volumes:
  prometheus_data:
  grafana_data:

# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']`,
            description: 'Monitor server health and performance',
            usage: 'Track CPU, RAM, disk, network usage',
            technologies: ['Grafana', 'Prometheus', 'Monitoring'],
          },
          {
            title: 'Uptime Monitoring',
            code: `# Uptime Kuma - Self-hosted monitoring
docker run -d \\
  --name uptime-kuma \\
  -p 3001:3001 \\
  -v uptime-kuma:/app/data \\
  --restart=always \\
  louislam/uptime-kuma:1

# Access: http://your-ip:3001

## Features:
✓ Monitor HTTP(s) / TCP / Ping
✓ Push notifications
✓ Status page for users
✓ Multi-language support
✓ Beautiful UI

## Example monitors:
- Website: https://example.com
- Plex: http://192.168.1.100:32400
- Pi-hole: http://192.168.1.100/admin
- Docker containers`,
            description: 'Monitor service uptime',
            usage: 'Get alerts when services go down',
            technologies: ['Uptime Kuma', 'Monitoring', 'Alerts'],
          },
          {
            title: 'Log Management',
            code: `# Dozzle - Real-time Docker logs viewer
docker run -d \\
  --name dozzle \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -p 8888:8080 \\
  amir20/dozzle:latest

# Access: http://your-ip:8888

## Alternative: Portainer logs
# Built-in log viewer in Portainer

## System logs
# View SSH login attempts
sudo tail -f /var/log/auth.log

# View system messages
sudo journalctl -f

# Docker logs
docker logs -f container_name

# Save logs to file
docker logs container_name > logs.txt 2>&1`,
            description: 'Centralized log viewing',
            usage: 'Debug issues and monitor activity',
            technologies: ['Dozzle', 'Logging', 'Docker'],
          }
        ]
      },
      advanced: {
        name: 'Advanced Topics',
        items: [
          {
            title: 'VPN Server (WireGuard)',
            code: `# WireGuard VPN - Access home network remotely
docker run -d \\
  --name=wireguard \\
  --cap-add=NET_ADMIN \\
  --cap-add=SYS_MODULE \\
  -e PUID=1000 \\
  -e PGID=1000 \\
  -e TZ=America/New_York \\
  -e SERVERURL=your-public-ip \\
  -e SERVERPORT=51820 \\
  -e PEERS=phone,laptop,tablet \\
  -e PEERDNS=auto \\
  -p 51820:51820/udp \\
  -v ./config:/config \\
  -v /lib/modules:/lib/modules \\
  --sysctl="net.ipv4.conf.all.src_valid_mark=1" \\
  --restart unless-stopped \\
  linuxserver/wireguard

# Get client configs
docker exec -it wireguard cat /config/peer_phone/peer_phone.conf

# Scan QR code with WireGuard mobile app
docker exec -it wireguard /app/show-peer phone`,
            description: 'Secure access to home network',
            usage: 'Access home services from anywhere',
            technologies: ['WireGuard', 'VPN', 'Security'],
          },
          {
            title: 'Download Automation',
            code: `# Sonarr + Radarr + Transmission
version: '3'
services:
  transmission:
    image: lscr.io/linuxserver/transmission
    container_name: transmission
    environment:
      - PUID=1000
      - PGID=1000
    volumes:
      - ./transmission:/config
      - ./downloads:/downloads
    ports:
      - 9091:9091
    restart: unless-stopped

  sonarr:
    image: lscr.io/linuxserver/sonarr
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
    volumes:
      - ./sonarr:/config
      - ./tv:/tv
      - ./downloads:/downloads
    ports:
      - 8989:8989
    restart: unless-stopped

  radarr:
    image: lscr.io/linuxserver/radarr
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
    volumes:
      - ./radarr:/config
      - ./movies:/movies
      - ./downloads:/downloads
    ports:
      - 7878:7878
    restart: unless-stopped`,
            description: 'Automated media management',
            usage: 'Automatically organize media library',
            technologies: ['Sonarr', 'Radarr', 'Automation'],
          }
        ]
      }
    }
  },
};

// Export individual topic categories for easier access
export const iotTopics = specializedTopics.iot;
export const homeAssistantTopics = specializedTopics.homeAssistant;
export const ecommerceTopics = specializedTopics.ecommerce;
export const linuxTopics = specializedTopics.linux;
export const proxmoxTopics = specializedTopics.proxmox;
export const devopsTopics = specializedTopics.devops;
export const cloudTopics = specializedTopics.cloud;
export const blockchainTopics = specializedTopics.blockchain;
export const securityTopics = specializedTopics.security;
export const testingTopics = specializedTopics.testing;
export const homeServerTopics = specializedTopics.homeserver;
