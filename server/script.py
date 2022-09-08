from bs4 import BeautifulSoup
import pandas as pd
import requests



query="xx"
x=0
while x==1:
    try:
        result = requests.get('http://localhost:3000/getSkill')
        query="dd"
        query=result.text
        x+=1
    except:
        pass

print(query)

# url="https://www.freelancer.com/jobs/?languages=en"
# r=requests.get(url)
# soup=BeautifulSoup(r.text,'html.parser')
# projects=soup.find_all('div',{'class':"JobSearchCard-item-inner"})



# requirement=[]
# description=[]
# skills=[]
# price=[]

# for i in projects:
#     requirement.append(i.find('a',class_='JobSearchCard-primary-heading-link').text.strip())
#     description.append(i.find('p',class_='JobSearchCard-primary-description').text.strip())
#     skills.append(i.find('div' , class_='JobSearchCard-primary-tags').text.strip())
#     salary=i.find('div' , class_='JobSearchCard-primary-price')
#     if salary is not None:
#         price.append(salary.text.strip())
#     else:
#         price.append("not available")
# df=pd.DataFrame({'requirement':requirement,
# 'description':description,
# 'skills':skills,
# 'price':price,
# })

# print(df)
# resultJSON = df.to_json(orient='records')
# print(resultJSON)
# df = df.replace('\n',' ', regex=True)
# print(df.to_csv())




# print("hello")