import json
from bs4 import BeautifulSoup
from urllib.request import urlopen


url = "https://www.ebay.co.uk/v/allcategories"

page = urlopen(url)

soup = BeautifulSoup(page, "lxml")

class SubCategory:
    text = ""
    metadata = ""
    image = ""
    category = ""

class Category:
    text = ""
    image = ""
    heading = ""

class Heading:
    text = ""
    image = ""


headingsUnsorted = soup.find_all("h3", class_="ttl")
headings = headingsUnsorted
for i in range(len(headingsUnsorted)):
    #headings[i] = Heading()
    headings[i].text = headingsUnsorted[i].text
    print("help")
    print(headingsUnsorted[i].text)