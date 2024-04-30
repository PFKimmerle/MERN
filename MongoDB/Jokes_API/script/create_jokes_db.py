import pymongo

# Replace 'localhost' with the IP address of your MongoDB server if it's not local
client = pymongo.MongoClient("mongodb://localhost:27017/")

# This will create a new database called 'jokes_db' if it doesn't already exist
db = client["jokes_db"]

# This will create a new collection called 'jokes' if it doesn't already exist
jokes_collection = db["jokes"]

# List of sample jokes to insert
sample_jokes = [
    {"setup": "What do you call someone with no body and no nose?", "punchline": "Nobody knows."},
    {"setup": "Why couldn't the bicycle stand up by itself?", "punchline": "It was two tired."},
    {"setup": "What do you call fake spaghetti?", "punchline": "An impasta."},
    {"setup": "How many apples grow on a tree?", "punchline": "All of them."},
    {"setup": "Did you hear the rumor about butter?", "punchline": "Well, I'm not going to spread it!"},
    {"setup": "Why don't skeletons fight each other?", "punchline": "They don't have the guts."},
    {"setup": "What's orange and sounds like a parrot?", "punchline": "A carrot."},
    {"setup": "Why couldn't the leopard play hide and seek?", "punchline": "Because he was always spotted."},
    {"setup": "What do you call a factory that makes good products?", "punchline": "A satisfactory."}
    {"setup": "Why don't scientists trust atoms?", "punchline": "Because they make up everything!"},
]

# Inserting all sample jokes into the collection
jokes_collection.insert_many(sample_jokes)

print(f"{len(sample_jokes)} jokes inserted into 'jokes_db' database.")
