    #include<iostream>
#include <algorithm>
using namespace std;

 class BOOK{
    private:
        char bookname[20];
        float bookprice;
    public:
        void getBookDetails()
        {
        cout<<"Enter the Book Name:";
         cin>>bookname;
         cout<<"Enter the Book Price:";
         cin>>bookprice;
          }
          void displayDetails()
          {
            cout<<"Book Name:"<<bookname<<endl;
            cout<<"Book Price:"<<bookprice<<endl;
          }
 };
 bool comparator(string a, string b)
 {
    return a<b;
 }
int main()
{
    int Book=5;
    string sortBook[]={"sandwich","apple","banana","zombie","pear"};
    
    std::sort(sortBook,sortBook+Book,comparator);
       for(int i=0;i<Book;i++)
    {
        cout<<sortBook[i]<<" ";
    }
}
    //  





    #include<iostream>
using namespace std;
class student
{
    int rno;
    char name[50];
    double fee;
   
    public:
        student();
        void display();
};
 
student::student()
{
    cout<<"Enter the RollNo:";
    cin>>rno;
 
      cout<<"Enter the Name:";
    cin>>name;
     
      cout<<"Enter the Fee:";   
    cin>>fee;
}   
 
void student::display()
{
    cout<<endl<<rno<<"\t"<<name<<"\t"<<fee;
}
     
int main()
{
    student s;
    s.display();
     
      return 0;
}