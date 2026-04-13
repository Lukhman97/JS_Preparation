# a=int(input())
# i=0
# c=0
# while i<=a:
#     c+=i
#     i+=1
# print(c)



# s="lukhmanshaik"
# a=""
# for i in s:
#     a=i+a
# print(a)


# a=[1,99,888,777,345,763,786345,98376245,98375647,8937653,98468348]
# largest=second_largest=a[0]
# for i in a:
#     if i>largest:
#         second_largest=largest
#         largest=i
#     elif i>second_largest and largest!=second_largest:
#         second_largest=i
# print(second_largest)
# print(largest)

# print(sorted(a))


# a=[1,99,888,777,345,763,786345,98376245,98375647,8937653,98468348]
# largest=second_largest=third_largest=a[0]
# for i in a:
#     if i>largest:
#         third_largest=second_largest
#         second_largest=largest
#         largest=i
#     elif i>second_largest and largest!=second_largest:
#         second_largest=i
#     elif i>third_largest and largest!=second_largest and second_largest!=third_largest:
#         third_largest=i
# # print(second_largest)
# # print(largest)
# print(third_largest)
# print(sorted(a))

# lst = [1, 2, 2, 3, 1, 4, 2]
# freq = {}
# for i in lst:
#     freq[i] = freq.get(i, 0) + 1
# print(freq)


# a=10
# b=20
# a,b=b,a
# print(a,b)


# a=0
# b=1
# for i in range(10):
#     print(a,end=" ")
#     # temp=a+b
#     # a=b
#     # b=temp
    # a,b=b+a,a

# num=int(input())
# fact=1
# while num>0:
#     fact*=num
#     num-=1
# print(fact)

# # nums = [1, 2, 3, 5, 6, 7, 8, 9, 10]
# for i in range(1,11):
#     if i not in nums:
#         print(i)

# A=65
# Z=90
# a=97
# z=122
# # print(ord("Z"),chr(96))

# for i in range(ord('A'),ord('Z')+1):
#     print(i,"-->",chr(i))

# Convert lowercase letters to uppercase (without using .upper())

# a="LukhmanSHAIK"
# b=""
# for i in range(len(a)):
#     if ord(a[i])<=90:
#         b+=chr(ord(a[i])+32)
    
#     else:
#         b+=a[i]
# print(b)

# print(ord('L')+32)
# print(chr(108))

# srt="a2b5c6d5"
# for i in range(0,len(srt),2):
#     for j in range(int(srt[i+1])):
#             print(srt[i],end="")
    

# a="a2b5c6d5"
# b=""
# for i in range(0,len(a),2):
#     b+=a[i]*int(a[i+1])
# print(b)


# string="aaaabbbbccdddeeefffff"
# ab=""
# c=1
# for i in range(1,len(string)):
#     if string[i]==string[i-1]:
#         c+=1
#     else:
#         ab+=string[i-1]+str(c)
#         c=1

# ab+=string[i-1]+str(c)
# print(ab)


# r=5
# for i in range(r):
#     for k in range(i):
#         print(" ",end="")
#     for j in range(r-i):
#         print("*",end=" ")
#     print()


# r=5+3
# for i in range(1,r):
#     for k in range(r-i):
#         print(" ",end="")
#     for j in range(i):
#         print("*",end=" ")
#     print()




# for i in range()