import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pprint

pp = pprint.PrettyPrinter()

scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('CoffeeShop-129b50c3f1a2.json',scope)
client = gspread.authorize(creds)

Book = client.open('Coffee')
sheet1 = Book.get_worksheet(0)
sheet2 = Book.get_worksheet(1)

F_A1 = sheet1.acell('A1').value;
NF_A1 = sheet2.acell('A1').value;


pp.pprint("Read: " + str(F_A1))
pp.pprint("Read: "+str(NF_A1))
