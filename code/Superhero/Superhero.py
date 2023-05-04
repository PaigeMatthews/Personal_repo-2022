#Superhero Code Practice
#Paige Matthews
#21/11/22

#superhero = ["Superman", "Wonder Woman", "Batman", "Thor", "Iron Man"]
#print(superhero)

from dataclasses import dataclass

#defining and creating a class
def HeroesInfo():
    @dataclass
    class HeroInfo:
        alias: str = ""
        birth_Name: str = ""
        comic: str = ""

#creating the lists
alias = ["Superman", "Wonder Woman", "Iron Man"]
birth_Name = ["Clark Kent", "Diana Prince", "Tony Stark"]
comic = ["DC", "DC", "Marvel"]

#printing the lists
print(alias[0], birth_Name[0], comic[0])
print(alias[1], birth_Name[1], comic[1])
print(alias[2], birth_Name[2], comic[2])
