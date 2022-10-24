from PyP100 import PyP110
from config import get_config
from save_daily import save_daily
from datetime import datetime, date, timedelta

CONFIG = get_config()
MIN_TIMEFRAME = 60  # minutes


def date_string_to_int_timestamp(date_string):
    return int(datetime(date_string.year, date_string.month, date_string.day).timestamp())


print("configuration: " + "tp110 ip - " + CONFIG.tp_110_ip)

p110 = PyP110.P110(CONFIG.tp_110_ip, CONFIG.user_email, CONFIG.user_password)  # Creating a P110 plug object

p110.handshake()  # Creates the cookies required for further methods
p110.login()  # Sends credentials to the plug and creates AES Key and IV for further methods

device_info = p110.getDeviceInfo()
firmware_version = device_info["result"]["fw_ver"]
print("firmware version", firmware_version)

if firmware_version != "1.1.2 Build 220930 Rel.144500":
    print("Firmware version changed, this library might have compatibility issue")

start_date = date.today()
end_date = date.today() + timedelta(days=1)
print("Querying data from",
      str(start_date), "to", str(end_date), "for target date of", str(date.today() - timedelta(days=1)),
      "current firmware (1.1.2 Build 220930 Rel.144500) is off by one day")

# #PyP110 has all PyP100 functions and additionally allows to query energy usage infos
energyUsage = p110.getEnergyUsage(
    {
        "interval": MIN_TIMEFRAME,
        "start_timestamp": date_string_to_int_timestamp(start_date),
        "end_timestamp": date_string_to_int_timestamp(end_date)
    }
)
save_daily(energyUsage)
