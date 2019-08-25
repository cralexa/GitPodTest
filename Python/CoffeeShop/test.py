from drinkList import Drinks

latta = Drinks()

latta.addIngredients('espresso')
latta.addIngredients('milk')

for i in latta.GetList():
    print(i)
    pass
