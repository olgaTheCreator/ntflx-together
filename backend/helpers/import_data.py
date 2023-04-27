"""Import netflix data from watchmode api"""
import json
import requests
import credentials


def import_data():
    """Get netflix data"""

    api_key = credentials.X_RAPID_API_KEY

#     # get Netflix id from API
#     # try:
#     #     headers = {
# 	#         "content-type": "application/octet-stream",
# 	#         "X-RapidAPI-Key": f"{api_key}",
# 	#         "X-RapidAPI-Host": "watchmode.p.rapidapi.com"
#     #         }
#     #     url = "https://watchmode.p.rapidapi.com/networks"
#     #     res = requests.get(url, headers=headers, timeout = 5)
#     #     res.raise_for_status()
#     # except requests.RequestException:
#     #     return None
#     # try:
#     #     networks = res.json()
#     #     netflix = next((network for network in networks if network["name"] == "Netflix"), False)
#     #     try:
#     #         netflix_id = netflix["id"]
#     #     except TypeError as err:
#     #         print(f"Couldn't get netflix_id, {err}")
#     #     else:
#     #         print(netflix_id)
#     # except (KeyError, TypeError, ValueError):
#     #     return None

#     netflix_id = 248
#     total_results = []
#     page = 1
#     try:
#         url = "https://watchmode.p.rapidapi.com/list-titles/"
#         querystring = {"types":"movie,tv_series,tv_special,tv_miniseries,short_film",
#                        "page":f"{page}","sort_by":"title_asc","network_ids":f"{netflix_id}"}
#         headers = {
#             "content-type": "application/octet-stream",
#             "X-RapidAPI-Key": f"{api_key}",
#             "X-RapidAPI-Host": "watchmode.p.rapidapi.com"
#         }
#         res = requests.get(url, headers=headers, params=querystring, timeout = 5)
#         data = res.json()
#         total_results = total_results + data["titles"]
#         page += 1

#         print("Downolading original data, total pages: ", data["total_pages"])
#     except requests.RequestException:
#         return None
#     while data["page"] <= data["total_pages"]:
#         print("Next page found, downloading page: ", page )
#         try:
#             url = "https://watchmode.p.rapidapi.com/list-titles/"
#             querystring = {"types":"movie,tv_series,tv_special,tv_miniseries,short_film",
#                            "page":f"{page}","sort_by":"title_asc","network_ids":f"{netflix_id}"}
#             headers = {
#                 "content-type": "application/octet-stream",
#                 "X-RapidAPI-Key": f"{api_key}",
#                 "X-RapidAPI-Host": "watchmode.p.rapidapi.com"
#             }
#             res = requests.get(url, headers=headers, params=querystring, timeout = 5)
#             data = res.json()
#             total_results = total_results + data["titles"]
#             page += 1
#         except requests.RequestException:
#             print("Not able to download page ", page-1)
#     print ("finished downloading")
#     return total_results

# netflix_data = import_data()
# print(netflix_data)

# with open("./netflix_data.json", encoding='utf-8', mode="w") as fp:
#     json.dump(netflix_data, fp)
#     print("Done")
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
