import json

with open("../data/netflix_data_1.json",'r', encoding="utf-8") as infile:
    o = json.load(infile)
    chunkSize = 500
    for i in range(0, len(o), chunkSize):
        with open("../data/netflix_data_1.json" + '_' + str(i//chunkSize) + '.json', 'w', encoding="utf-8") as outfile:
            json.dump(o[i:i+chunkSize], outfile)