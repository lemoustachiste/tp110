from PyP100 import PyP110
from config import get_config

CONFIG = get_config()

print("configuration: " + "tp110 ip - " + CONFIG.tp_110_ip)

p110 = PyP110.P110(CONFIG.tp_110_ip, CONFIG.user_email, CONFIG.user_password) #Creating a P110 plug object

p110.handshake() #Creates the cookies required for further methods
p110.login() #Sends credentials to the plug and creates AES Key and IV for further methods

#PyP110 has all PyP100 functions and additionally allows to query energy usage infos
energyValue = p110.getEnergyUsage() #Returns dict with all the energy usage
print(energyValue)
