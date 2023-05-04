
def arrays():
  name_list = []
  mark_list = []
  return name_list, mark_list


def getinfo():
  for i in range(5):
    name = input("What is your name?")
    mark = int(input("What mark did you get?"))
  return name, mark
  
def applist(name,mark):
  name_list.append(name)
  mark_list.append(mark)
  return name_list, mark_list
  
def dismark(name_list,mark_list):
  for i in range (len(name_list)
    print (name_list[i])
    print (mark_list[i])
  
####Main Program###
name_list, mark_list = arrays()
name, mark = getinfo()
name_list,mark_list = applist(name,mark)
dismark(name_list,mark_list)
