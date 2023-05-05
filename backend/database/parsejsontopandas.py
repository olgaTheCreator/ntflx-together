"""parse jsons into pandas dataframe"""
import json
import pandas as pd


def pictures_data_to_dataframe():
    """parse data from jsons to pandas dataframe"""
    df = pd.DataFrame()
    for i in range(0, 12):
        try:
            with open(f"../data/netflix_data_1.json_{i}.json", "r", encoding="utf-8") as file:
                data = json.load(file)
                if data:
                    current_df = pd.json_normalize(data)  # type: ignore
                    streaming_info = pd.json_normalize(current_df["streamingInfo.us.netflix"])[0]  # type: ignore
                    link = pd.json_normalize(streaming_info)["link"]  # type: ignore
                    current_df["link"] = link
                    df = pd.concat([df, current_df])  # type: ignore
        except IOError:
            print("wasn't able to create dataframe")
            return None
    df1 = df.loc[:, (["imdbId", "type", "title", "imdbRating",
                             "link", "posterURLs.342", "posterURLs.780", "seasonCount"])]
    
    df2 = df1.loc[df1.imdbId.duplicated(keep=False),:] # type: ignore
    df3 = df2.loc[df2.link.notnull()] # type: ignore
    df4= df3.drop_duplicates(subset="imdbId", keep=False)
    df5 = df1.drop_duplicates(subset="imdbId", keep=False)
    df6 = pd.concat([df4, df5]) # type: ignore
    df7 = df6.fillna(0)  # type: ignore

    motion_pictures_dict = df7.to_dict('records')  # type: ignore
    print(len(motion_pictures_dict))
    return motion_pictures_dict