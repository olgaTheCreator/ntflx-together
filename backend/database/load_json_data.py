"""parse jsons into pandas dataframe"""
import json
import pandas as pd


df = pd.DataFrame()


for i in range(0, 12):
    try:
        with open(f"../data/netflix_data_1.json_{i}.json", "r", encoding = "utf-8") as file:
            data = json.load(file)
            if data:
                current_df = pd.json_normalize(data) # type: ignore
                streamingInfo = pd.json_normalize(current_df["streamingInfo.us.netflix"])[0] # type: ignore
                link = pd.json_normalize(streamingInfo)["link"] # type: ignore
                current_df["link"] = link
                df = pd.concat([df, current_df]) # type: ignore 
    except IOError:
        print("wasn't able to create dataframe")
    else:
        print(list(df.columns)) # type: ignore 
        selected_df = df.loc[:, (["type","title", "imdbRating", "link","posterURLs.154" , "seasonCount"])]
        print(selected_df)

