from datetime import date, timedelta
import json
import os

DATA_FILE = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "../data/daily_consumption.json"))


def save_daily(data):
    yesterdays_consumption = sum(data["result"]["data"])
    yesterdays_date = date.today() - timedelta(days=1)
    data_to_save = prepare_data_to_save(yesterdays_date, yesterdays_consumption)
    save_to_file(data_to_save)


def prepare_data_to_save(date, consumption) -> str:
    with open(DATA_FILE, "r") as file:
        print("open data file at " + DATA_FILE)
        stored_data = json.load(file)
        target = stored_data["days"]

        if str(date) == target[-1]["date"]:
            print("Date", str(date), "has already been saved, skipping")
            return

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
