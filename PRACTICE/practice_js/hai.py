# a="aaaabbbcccdddee"
# b=""
# c=1
# for i in range(1,len(a)):
#     if a[i-1]==a[i]:
#         c+=1
#     else:
#         b+=a[i-1]+str(c)
#         c=1
# b+=a[i-1]+str(c)
# print(b)

amount=999
notes=[1000,500,200,100,50,1]
c=0
dict={}
for note in notes:
    if amount>=note:
        # c=amount%note
        dict[note]=(amount//note)
        # print(amount,note,amount//note,c)
        amount-=note*(amount//note)

        # print(amount,note,amount//note,c)
print(dict)



