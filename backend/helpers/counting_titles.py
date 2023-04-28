"""counting number of movies"""
import json

count: int = 0

for i in range(0, 12):
    with open(f"./data/netflix_data_1.json_{i}.json",'r', encoding="utf-8") as infile:
        netflix_data = json.load(infile)
        for movie in netflix_data:
            count += 1

print(count)
