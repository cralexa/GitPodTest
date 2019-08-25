#make obj for drinks
#each drink has list of ingredients
#change api.py to sheet.py
#add new to use both scripts

class Drinks():

    def __init__(self):
        self.ingredients = []
        self.count = 0

    def addIngredients(self,item):
        if item != None:
            self.ingredients.append(item)
            self.count += 1
            return True
            pass
        return False

    def GetList(self):
        return self.ingredients
        pass
