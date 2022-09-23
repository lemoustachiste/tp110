import configargparse
import os

PATH = os.path.dirname(os.path.abspath(__file__))

def add_arguments (config):
    config.add_argument('--tp_110_ip',
                   help='IP address of device', env_var='TP_110_IP')
    config.add_argument('--user_email',
                   help='TP link account email address', env_var='USER_EMAIL')
    config.add_argument('--user_password',
                   help='TP link account password', env_var='USER_PASSWORD')

def get_config():
    print('using config file located at: ' + os.path.join(PATH, 'conf.ini'))
    p = configargparse.getArgumentParser(default_config_files=[os.path.join(PATH, 'conf.ini'),
                                                               '/etc/tp110_energy_monitor/conf.ini'])
    add_arguments(p)
    parsed_config, _ = p.parse_known_args()

    return parsed_config
