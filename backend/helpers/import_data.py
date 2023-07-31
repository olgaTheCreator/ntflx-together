"""Import netflix data from watchmode api"""
import json
import requests
import credentials


def import_data():
    """Get netflix data"""

    api_key = credentials.X_RAPID_API_KEY
    total_results = []
    cursor = ""

    try:
        url = "https://streaming-availability.p.rapidapi.com/v2/search/basic"
        querystring = {"country":"us","services":"netflix","output_language":"en"}
        headers = {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key": f"{api_key}",
            "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com"
        }
        res = requests.get(url, headers=headers, params=querystring, timeout = 5)
        data = res.json()
        total_results = total_results + data["result"]
        cursor = data["nextCursor"]

        print("Downolading original data")
    except requests.RequestException:
        return None
    
    while data["hasMore"] is True:
        print("Next page found, downloading page")
        try:
            url = "https://streaming-availability.p.rapidapi.com/v2/search/basic"
            querystring = {"cursor":f"{cursor}","country":"us","services":"netflix","output_language":"en"}
            headers = {
                "content-type": "application/octet-stream",
                "X-RapidAPI-Key": f"{api_key}",
                "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com"
            }
            res = requests.get(url, headers=headers, params=querystring, timeout = 5)
            data = res.json()
            total_results = total_results + data["result"]
            cursor = data["nextCursor"]
        except requests.RequestException:
            print("Not able to download page")

    print ("finished downloading")
    return total_results

netflix_data = import_data()

with open("./netflix_data_1.json", encoding='utf-8', mode="w") as fp:
    json.dump(netflix_data, fp)
    print("Done")
