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
};

// Export individual topic categories for easier access
export const iotTopics = specializedTopics.iot;
export const homeAssistantTopics = specializedTopics.homeAssistant;
export const ecommerceTopics = specializedTopics.ecommerce;
export const linuxTopics = specializedTopics.linux;
export const proxmoxTopics = specializedTopics.proxmox;
