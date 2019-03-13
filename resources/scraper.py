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





print("\n")
print("\n")
print("\n")

#Finding all categories within each heading
categoriesUnsorted = soup.find_all("h3", class_="ttl")
categories = categoriesUnsorted
for i in range(len(categoriesUnsorted)):
    head, sep, tail = categoriesUnsorted[i].text.partition(' - ')
    categories[i] = Category()
    categories[i].text = head
    categories[i].header = tail
    #57
    #print(categories[i].text)

print("\n")
print("\n")
print("\n")

#Finding all headings
headingsUnsorted = soup.find_all("h2", class_="ttl")
headings = headingsUnsorted
for i in range(len(headingsUnsorted)):
    headings[i] = Heading()
    headings[i].text = headingsUnsorted[i].text
    #print("help")
    print(headings[i].text) 

#Finding all subcategories within each category
subcategoriesUnsorted = soup.find_all("a", class_="categories-with-links")
subcategories = subcategoriesUnsorted
for a in range(len(subcategoriesUnsorted)):
    head, sep, tail = subcategoriesUnsorted[a].text.partition(' - ')
    subcategories[a] = SubCategory()
    subcategories[a].text = head
    print(subcategories[a].text)

#print("You have reached this point 1")    

# for b in range(len(subcategories)-1):
#     for j in range(len(categories)):
#         if subcategories[b].text == categories[j].text:
#             print(subcategories[b].text)
#             print(categories[j].text)
#             #print("Category Match Found 0000000000000000000000000000000000000000000000000000")
#             del subcategories[b]

#     for k in range(len(headings)):
#         if subcategories[b].text == headings[k].text:
#             #print("Heading Match Found 11111111111111111111111111111111111111111111111111111111")
#             del subcategories[b]
#     print(b)
#     print(len(subcategories)-1)


# print("You have reached this point 2")    

# for c in range(len(subcategories)):
    
#     print(c)
#     print(subcategories[c].text)
            



