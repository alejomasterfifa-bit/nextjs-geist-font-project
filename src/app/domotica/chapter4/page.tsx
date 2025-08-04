import CourseNav from '@/components/CourseNav'

export default function Chapter4() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="not-prose mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="text-4xl">🔒</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Capítulo 4: Sistemas de Seguridad
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Protección integral del hogar con tecnología avanzada
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <img 
            src="https://placehold.co/1200x600?text=Sistema+integral+de+seguridad+domotica+con+camaras+sensores+alarmas+y+control+centralizado"
            alt="Sistema integral de seguridad domótica con cámaras, sensores, alarmas y control centralizado"
            className="w-full rounded-lg shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/1200x600?text=Error+cargando+imagen';
            }}
          />
        </div>
      </div>

      <h2>Introducción a la Seguridad Domótica</h2>
      
      <p>
        La <strong>seguridad domótica</strong> integra múltiples tecnologías para proteger el hogar 
        de intrusos, detectar emergencias y proporcionar tranquilidad a los habitantes. Un sistema 
        moderno combina detección, disuasión, notificación y respuesta automática.
      </p>

      <div className="not-prose grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
            🚨 Detección
          </h3>
          <ul className="text-red-800 dark:text-red-200 space-y-1">
            <li>• Sensores de movimiento</li>
            <li>• Detectores de apertura</li>
            <li>• Cámaras de vigilancia</li>
            <li>• Sensores de rotura de cristal</li>
            <li>• Detectores de humo/gas</li>
          </ul>
        </div>
        
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">
            🔊 Disuasión
          </h3>
          <ul className="text-orange-800 dark:text-orange-200 space-y-1">
            <li>• Sirenas y alarmas</li>
            <li>• Iluminación automática</li>
            <li>• Simulación de presencia</li>
            <li>• Mensajes de voz</li>
            <li>• Grabación visible</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            📱 Notificación
          </h3>
          <ul className="text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Alertas push móviles</li>
            <li>• SMS y llamadas</li>
            <li>• Emails con imágenes</li>
            <li>• Notificaciones a central</li>
            <li>• Integración con apps</li>
          </ul>
        </div>
      </div>

      <h2>Cámaras de Seguridad</h2>

      <div className="not-prose mb-8">
        <img 
          src="https://placehold.co/1000x600?text=Camaras+IP+de+seguridad+conectadas+a+sistema+domotico+con+vision+nocturna+y+deteccion+movimiento"
          alt="Cámaras IP de seguridad conectadas a sistema domótico con visión nocturna y detección de movimiento"
          className="w-full rounded-lg shadow-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/1000x600?text=Error+cargando+imagen';
          }}
        />
      </div>

      <h3>Tipos de Cámaras</h3>

      <div className="not-prose overflow-x-auto my-6">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Tipo</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Resolución</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Visión Nocturna</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Precio</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Uso Recomendado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100 font-medium">Domo Interior</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">1080p-4K</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">IR hasta 10m</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">$30-80</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Salones, pasillos</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100 font-medium">Bullet Exterior</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">1080p-4K</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">IR hasta 30m</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">$50-150</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Jardines, entradas</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100 font-medium">PTZ Motorizada</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">1080p-4K</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">IR hasta 50m</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">$150-500</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Seguimiento automático</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100 font-medium">Timbre Inteligente</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">1080p</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">IR hasta 5m</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">$100-300</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Puerta principal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Configuración con Raspberry Pi</h3>
      <p>
        Usando una Raspberry Pi como NVR (Network Video Recorder) para gestionar múltiples cámaras IP.
      </p>

      <h4>Instalación de MotionEye</h4>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm my-6 overflow-x-auto">
{`# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependencias
sudo apt install python3-pip python3-dev libssl-dev libcurl4-openssl-dev libjpeg-dev libz-dev ffmpeg

# Instalar MotionEye
sudo pip3 install motioneye

# Configurar como servicio
sudo motioneye_init

# Acceder via web: http://raspberry-pi-ip:8765
# Usuario: admin, Contraseña: (vacía inicialmente)`}
      </pre>

      <h2>Sistemas de Alarma</h2>

      <div className="not-prose mb-8">
        <img 
          src="https://placehold.co/1000x600?text=Central+de+alarma+domotica+con+sensores+sirenas+y+panel+de+control+integrado"
          alt="Central de alarma domótica con sensores, sirenas y panel de control integrado"
          className="w-full rounded-lg shadow-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/1000x600?text=Error+cargando+imagen';
          }}
        />
      </div>

      <h3>Central de Alarma con Raspberry Pi</h3>
      <p>
        Sistema completo de alarma que gestiona múltiples zonas con diferentes tipos de sensores.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm my-6 overflow-x-auto">
{`import RPi.GPIO as GPIO
import time
import threading
from datetime import datetime
import json

class AlarmSystem:
    def __init__(self):
        GPIO.setmode(GPIO.BCM)
        self.armed = False
        self.triggered = False
        self.zones = {
            'entrada': {'pin': 18, 'type': 'door', 'delay': 30},
            'salon': {'pin': 19, 'type': 'motion', 'delay': 0},
            'cocina': {'pin': 20, 'type': 'motion', 'delay': 0},
            'ventanas': {'pin': 21, 'type': 'window', 'delay': 0}
        }
        self.sirena_pin = 22
        self.led_armed = 23
        self.led_triggered = 24
        
        self.setup_gpio()
        
    def setup_gpio(self):
        # Configurar sensores como entrada
        for zone, config in self.zones.items():
            GPIO.setup(config['pin'], GPIO.IN, pull_up_down=GPIO.PUD_UP)
        
        # Configurar salidas
        GPIO.setup(self.sirena_pin, GPIO.OUT)
        GPIO.setup(self.led_armed, GPIO.OUT)
        GPIO.setup(self.led_triggered, GPIO.OUT)
    
    def arm_system(self):
        self.armed = True
        GPIO.output(self.led_armed, GPIO.HIGH)
        print(f"{datetime.now()}: Sistema ARMADO")
    
    def disarm_system(self):
        self.armed = False
        self.triggered = False
        GPIO.output(self.led_armed, GPIO.LOW)
        GPIO.output(self.sirena_pin, GPIO.LOW)
        print(f"{datetime.now()}: Sistema DESARMADO")
    
    def trigger_alarm(self, zone):
        if not self.armed or self.triggered:
            return
        
        self.triggered = True
        GPIO.output(self.led_triggered, GPIO.HIGH)
        GPIO.output(self.sirena_pin, GPIO.HIGH)
        
        print(f"ALARMA ACTIVADA - Zona: {zone}")
        
        # Sirena por 5 minutos
        threading.Timer(300, self.stop_sirena).start()
    
    def stop_sirena(self):
        GPIO.output(self.sirena_pin, GPIO.LOW)`}
      </pre>

      <h2>Control de Acceso</h2>

      <div className="not-prose mb-8">
        <img 
          src="https://placehold.co/1000x600?text=Sistema+control+acceso+con+RFID+teclado+numerico+y+cerradura+electronica+inteligente"
          alt="Sistema de control de acceso con RFID, teclado numérico y cerradura electrónica inteligente"
          className="w-full rounded-lg shadow-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/1000x600?text=Error+cargando+imagen';
          }}
        />
      </div>

      <h3>Cerradura Inteligente con RFID</h3>
      <p>
        Sistema de acceso que combina tarjetas RFID, códigos PIN y control remoto.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm my-6 overflow-x-auto">
{`import RPi.GPIO as GPIO
import time
from mfrc522 import SimpleMFRC522
import json
from datetime import datetime

class AccessControl:
    def __init__(self):
        GPIO.setmode(GPIO.BCM)
        self.rfid = SimpleMFRC522()
        self.lock_pin = 18
        self.buzzer_pin = 19
        self.led_green = 20
        self.led_red = 21
        
        GPIO.setup(self.lock_pin, GPIO.OUT)
        GPIO.setup(self.buzzer_pin, GPIO.OUT)
        GPIO.setup(self.led_green, GPIO.OUT)
        GPIO.setup(self.led_red, GPIO.OUT)
        
        # Estado inicial - cerrado
        GPIO.output(self.lock_pin, GPIO.LOW)
        GPIO.output(self.led_red, GPIO.HIGH)
        
        self.authorized_users = {
            "123456789": {"name": "Admin", "access_level": "full"},
            "987654321": {"name": "Usuario", "access_level": "basic"}
        }
    
    def unlock_door(self, duration=5):
        GPIO.output(self.lock_pin, GPIO.HIGH)
        GPIO.output(self.led_green, GPIO.HIGH)
        GPIO.output(self.led_red, GPIO.LOW)
        
        print(f"Puerta abierta por {duration} segundos")
        time.sleep(duration)
        self.lock_door()
    
    def lock_door(self):
        GPIO.output(self.lock_pin, GPIO.LOW)
        GPIO.output(self.led_green, GPIO.LOW)
        GPIO.output(self.led_red, GPIO.HIGH)
        print("Puerta cerrada")
    
    def check_rfid_access(self):
        print("Acerca tu tarjeta RFID...")
        id, text = self.rfid.read()
        user_id = str(id)
        
        if user_id in self.authorized_users:
            user = self.authorized_users[user_id]
            print(f"Acceso concedido a: {user['name']}")
            self.unlock_door()
        else:
            print("Acceso denegado")
            self.access_denied()
    
    def access_denied(self):
        # LED rojo parpadeante y sonido de error
        for _ in range(3):
            GPIO.output(self.led_red, GPIO.LOW)
            time.sleep(0.2)
            GPIO.output(self.led_red, GPIO.HIGH)
            time.sleep(0.2)`}
      </pre>

      <h2>Detección de Emergencias</h2>

      <h3>Detectores de Humo y Gas</h3>
      <p>
        Sensores para detectar incendios, fugas de gas y otros peligros domésticos.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm my-6 overflow-x-auto">
{`import RPi.GPIO as GPIO
import time
import smtplib
from email.mime.text import MIMEText

class EmergencyDetection:
    def __init__(self):
        GPIO.setmode(GPIO.BCM)
        self.smoke_pin = 25
        self.gas_pin = 26
        self.alarm_pin = 27
        
        GPIO.setup(self.smoke_pin, GPIO.IN)
        GPIO.setup(self.gas_pin, GPIO.IN)
        GPIO.setup(self.alarm_pin, GPIO.OUT)
        
        # Configurar callbacks
        GPIO.add_event_detect(self.smoke_pin, GPIO.RISING, 
                            callback=self.smoke_detected, bouncetime=1000)
        GPIO.add_event_detect(self.gas_pin, GPIO.RISING, 
                            callback=self.gas_detected, bouncetime=1000)
    
    def smoke_detected(self, channel):
        print("¡HUMO DETECTADO!")
        self.trigger_emergency_alarm("INCENDIO")
        self.send_emergency_notification("Detector de humo activado")
    
    def gas_detected(self, channel):
        print("¡FUGA DE GAS DETECTADA!")
        self.trigger_emergency_alarm("GAS")
        self.send_emergency_notification("Fuga de gas detectada")
    
    def trigger_emergency_alarm(self, emergency_type):
        # Activar alarma de emergencia
        GPIO.output(self.alarm_pin, GPIO.HIGH)
        
        # Patrón específico según emergencia
        if emergency_type == "INCENDIO":
            # Patrón rápido para incendio
            for _ in range(10):
                GPIO.output(self.alarm_pin, GPIO.HIGH)
                time.sleep(0.2)
                GPIO.output(self.alarm_pin, GPIO.LOW)
                time.sleep(0.2)
        elif emergency_type == "GAS":
            # Patrón continuo para gas
            GPIO.output(self.alarm_pin, GPIO.HIGH)
            time.sleep(5)
            GPIO.output(self.alarm_pin, GPIO.LOW)
    
    def send_emergency_notification(self, message):
        # Enviar notificación por email/SMS
        print(f"Enviando notificación: {message}")
        # Implementar envío real aquí`}
      </pre>

      <h2>Integración con Servicios de Seguridad</h2>

      <h3>Notificaciones Push</h3>
      <p>
        Envío de alertas instantáneas al smartphone mediante servicios como Pushbullet o Telegram.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm my-6 overflow-x-auto">
{`import requests
import json
from datetime import datetime

class NotificationService:
    def __init__(self):
        self.pushbullet_token = "tu_token_pushbullet"
        self.telegram_bot_token = "tu_bot_token"
        self.telegram_chat_id = "tu_chat_id"
    
    def send_pushbullet(self, title, message):
        url = "https://api.pushbullet.com/v2/pushes"
        headers = {
            "Access-Token": self.pushbullet_token,
            "Content-Type": "application/json"
        }
        data = {
            "type": "note",
            "title": title,
            "body": message
        }
        
        response = requests.post(url, headers=headers, json=data)
        return response.status_code == 200
    
    def send_telegram(self, message):
        url = f"https://api.telegram.org/bot{self.telegram_bot_token}/sendMessage"
        data = {
            "chat_id": self.telegram_chat_id,
            "text": message,
            "parse_mode": "HTML"
        }
        
        response = requests.post(url, data=data)
        return response.status_code == 200
    
    def send_security_alert(self, alert_type, zone, image_path=None):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        title = f"🚨 Alerta de Seguridad"
        message = f"""
        <b>Tipo:</b> {alert_type}
        <b>Zona:</b> {zone}
        <b>Hora:</b> {timestamp}
        
        Sistema de seguridad domótica activado.
        """
        
        # Enviar por múltiples canales
        self.send_pushbullet(title, message)
        self.send_telegram(message)
        
        if image_path:
            self.send_telegram_photo(image_path, message)
    
    def send_telegram_photo(self, image_path, caption):
        url = f"https://api.telegram.org/bot{self.telegram_bot_token}/sendPhoto"
        
        with open(image_path, 'rb') as photo:
            files = {'photo': photo}
            data = {
                'chat_id': self.telegram_chat_id,
                'caption': caption
            }
            response = requests.post(url, files=files, data=data)
        
        return response.status_code == 200`}
      </pre>

      <h2>Simulación de Presencia</h2>

      <h3>Sistema Anti-Robo Inteligente</h3>
      <p>
        Simula la presencia de habitantes cuando la casa está vacía, encendiendo luces y 
        reproduciendo sonidos de manera aleatoria pero realista.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm my-6 overflow-x-auto">
{`import RPi.GPIO as GPIO
import time
import random
import threading
from datetime import datetime, timedelta

class PresenceSimulator:
    def __init__(self):
        GPIO.setmode(GPIO.BCM)
        self.lights = {
            'salon': 18,
            'cocina': 19,
            'dormitorio': 20,
            'bano': 21
        }
        self.tv_simulator = 22
        self.radio_simulator = 23
        
        # Configurar GPIO
        for pin in self.lights.values():
            GPIO.setup(pin, GPIO.OUT)
            GPIO.output(pin, GPIO.LOW)
        
        GPIO.setup(self.tv_simulator, GPIO.OUT)
        GPIO.setup(self.radio_simulator, GPIO.OUT)
        
        self.simulation_active = False
        self.patterns = self.load_behavior_patterns()
    
    def load_behavior_patterns(self):
        """Cargar patrones de comportamiento realistas"""
        return {
            'morning': {
                'start_time': '07:00',
                'end_time': '09:00',
                'activities': ['cocina', 'bano', 'salon'],
                'duration_range': (10, 30)
            },
            'evening': {
                'start_time': '18:00',
                'end_time': '23:00',
                'activities': ['salon', 'cocina', 'dormitorio'],
                'duration_range': (15, 60)
            },
            'night': {
                'start_time': '23:00',
                'end_time': '07:00',
                'activities': ['dormitorio', 'bano'],
                'duration_range': (2, 10)
            }
        }
    
    def start_simulation(self):
        """Iniciar simulación de presencia"""
        self.simulation_active = True
        print("Simulación de presencia iniciada")
        
        # Hilo para control de luces
        light_thread = threading.Thread(target=self.simulate_lights)
        light_thread.daemon = True
        light_thread.start()
        
        # Hilo para sonidos
        sound_thread = threading.Thread(target=self.simulate_sounds)
        sound_thread.daemon = True
        sound_thread.start()
    
    def stop_simulation(self):
        """Detener simulación"""
        self.simulation_active = False
        self.turn_off_all_lights()
        GPIO.output(self.tv_simulator, GPIO.LOW)
        GPIO.output(self.radio_simulator, GPIO.LOW)
        print("Simulación de presencia detenida")
    
    def simulate_lights(self):
        """Simular encendido/apagado de luces"""
        while self.simulation_active:
            current_time = datetime.now().strftime('%H:%M')
            pattern = self.get_current_pattern(current_time)
            
            if pattern:
                # Seleccionar habitación aleatoria del patrón
                room = random.choice(pattern['activities'])
                duration = random.randint(*pattern['duration_range'])
                
                print(f"Encendiendo luz: {room} por {duration} minutos")
                GPIO.output(self.lights[room], GPIO.HIGH)
                
                time.sleep(duration * 60)  # Convertir a segundos
                
                GPIO.output(self.lights[room], GPIO.LOW)
                print(f"Apagando luz: {room}")
                
                # Pausa aleatoria entre actividades
                pause = random.randint(5, 30)
                time.sleep(pause * 60)
            else:
                time.sleep(300)  # 5 minutos si no hay patrón activo
    
    def simulate_sounds(self):
        """Simular sonidos de TV/radio"""
        while self.simulation_active:
            current_time = datetime.now().strftime('%H:%M')
            
            # TV más probable en la tarde/noche
            if '18:00' <= current_time <= '23:30':
                if random.random() < 0.3:  # 30% probabilidad
                    duration = random.randint(30, 120)  # 30-120 minutos
                    print(f"Simulando TV por {duration} minutos")
                    GPIO.output(self.tv_simulator, GPIO.HIGH)
                    time.sleep(duration * 60)
                    GPIO.output(self.tv_simulator, GPIO.LOW)
            
            # Radio más probable en la mañana
            elif '07:00' <= current_time <= '10:00':
                if random.random() < 0.4:  # 40% probabilidad
                    duration = random.randint(15, 45)
                    print(f"Simulando radio por {duration} minutos")
                    GPIO.output(self.radio_simulator, GPIO.HIGH)
                    time.sleep(duration * 60)
                    GPIO.output(self.radio_simulator, GPIO.LOW)
            
            # Pausa entre simulaciones de sonido
            time.sleep(random.randint(1800, 3600))  # 30-60 minutos
    
    def get_current_pattern(self, current_time):
        """Obtener patrón de comportamiento actual"""
        for pattern_name, pattern in self.patterns.items():
            start = pattern['start_time']
            end = pattern['end_time']
            
            if start <= current_time <= end:
                return pattern
        return None
    
    def turn_off_all_lights(self):
        """Apagar todas las luces"""
        for pin in self.lights.values():
            GPIO.output(pin, GPIO.LOW)

# Uso del simulador
simulator = PresenceSimulator()

# Iniciar cuando se active el modo "Fuera de casa"
simulator.start_simulation()

# Detener cuando se regrese
# simulator.stop_simulation()`}
      </pre>

      <div className="not-prose bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
          🔧 Proyecto Práctico: Sistema de Seguridad Completo
        </h3>
        <p className="text-yellow-800 dark:text-yellow-200 mb-4">
          <strong>Implementa un sistema de seguridad integral:</strong>
        </p>
        <ol className="text-yellow-800 dark:text-yellow-200 space-y-2">
          <li>1. Instalar sensores PIR en puntos estratégicos</li>
          <li>2. Configurar cámaras IP con detección de movimiento</li>
          <li>3. Implementar control de acceso con RFID</li>
          <li>4. Programar sistema de alarma con múltiples zonas</li>
          <li>5. Configurar notificaciones push y email</li>
          <li>6. Crear simulador de presencia inteligente</li>
          <li>7. Integrar con aplicación móvil para control remoto</li>
          <li>8. Añadir detectores de humo y gas</li>
        </ol>
      </div>

      <h2>Consideraciones Legales y Éticas</h2>

      <h3>Privacidad y Protección de Datos</h3>
      <ul>
        <li>Cumplir con regulaciones de protección de datos (GDPR)</li>
        <li>Informar sobre grabaciones de video y audio</li>
        <li>Almacenamiento seguro de imágenes y videos</li>
        <li>Acceso restringido a datos de seguridad</li>
      </ul>

      <h3>Instalación y Mantenimiento</h3>
      <ul>
        <li>Ubicación estratégica de cámaras sin invadir privacidad vecinal</li>
        <li>Señalización visible de sistema de seguridad</li>
        <li>Mantenimiento regular de sensores y cámaras</li>
        <li>Backup de configuraciones y grabaciones</li>
        <li>Pruebas periódicas del sistema completo</li>
      </ul>

      <div className="not-prose bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          📋 Resumen del Capítulo
        </h3>
        <ul className="text-gray-700 dark:text-gray-300 space-y-2">
          <li>• La seguridad domótica integra detección, disuasión y notificación</li>
          <li>• Las cámaras IP ofrecen vigilancia remota con detección inteligente</li>
          <li>• Los sistemas de alarma gestionan múltiples zonas con diferentes sensores</li>
          <li>• El control de acceso combina RFID, PIN y control remoto</li>
          <li>• Los detectores de emergencia protegen contra incendios y fugas</li>
          <li>• Las notificaciones push permiten respuesta inmediata</li>
          <li>• La simulación de presencia disuade robos cuando no hay nadie</li>
          <li>• Es importante considerar aspectos legales y de privacidad</li>
        </ul>
      </div>

      <CourseNav
        prev={{ title: "Sensores y Actuadores", path: "/domotica/chapter3" }}
        next={{ title: "Domótica e IA", path: "/domotica/chapter5" }}
      />
    </article>
  )
}
