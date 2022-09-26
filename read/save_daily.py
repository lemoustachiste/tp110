from datetime import date, timedelta
import json

DATA_FILE = "./data/daily_consumption.json"


def save_daily(data):
    yesterdays_consumption = data["result"]["past30d"][-2]
    yesterdays_date = date.today() - timedelta(days=1)
    data_to_save = prepare_data_to_save(yesterdays_date, yesterdays_consumption)
    save_to_file(data_to_save)


def prepare_data_to_save(date, consumption) -> str:
    with open(DATA_FILE, "r") as file:
        stored_data = json.load(file)
        target = stored_data["days"]
        target.append({
            "date": str(date),
            "total": str(consumption)
        })
        print("prepared data to store for date " + str(date) + ": " + str(consumption) + "kW")
        stored_data["days"] = target
        return json.dumps(stored_data, separators=(",", ":"))


def save_to_file(data: str):
    with open(DATA_FILE, "w") as file:
        file.write(data)
        file.close()
        print("stored data to file located at " + DATA_FILE)