hotel=["Little Italy","up & above"]
hoteladdr=[["Janki Apartments, Inner Circle Road, Contractors Area, Bistupur, Jamshedpur"],["Unit 1, 4th Floor, Bindal Mall, Marine Drive, Sonari, Jamshedpur"]]
foodratingimg=[["little-italy.jpg","little-italy2.jpg","little_italy3.jpg"],["up-n-above1.jpg","up-n-above3.jpg","up-n-above2.jpg"]]
fooddis=["₹400 for two people (approx.)","₹1,200 for two people (approx.) with alcohol"]

foodmenuimage=[["chocolatebomb.jpg","LASAGNA ALLA.jpg","Lasagna veg.jpg","Brownies.jpg","Tiramisu Cake.jpg"],
        ["oldmonk.jpg","magicmoment.jpg","signature.jpg","blinder.jpg","honeywine.jpg"]]

foodname=[["Chocolatebomb ","LASAGNA ALLA ","Lasagna veg ","Sizzling chocolate browine","Tiramisu "],
            ["oldmonk","Magic moment","Signature","Blinder","Honey-Wine"]]

foodprice=[ ["390","625","540","360","360"],
            ["115","115","125","125","115"]
            ]

foodmenu=[["Desserts","pizza","pasta","Italian Main Course"],["Indian Liquor","Soup","Beverages","Tandoori Delight Non-veg"]]



littleitalyimg=[["chocolatebomb.jpg","LASAGNA ALLA.jpg","Lasagna veg.jpg","Brownies.jpg","Tiramisu Cake.jpg"],
             ["Bombay.jpg","pizzamellino.jpg","nirvana.jpg","BBQ chicken pizza.jpg","margherita.jpg"],
             ["Vegetarian Pasta.jpg","tangy chicken ball.jpg","Peri Peri Chicken.jpg","spicy Chicken Tacos.jpg","ChickenPasta.jpg"],
             ["cottage cheese quesadilla.jpg","cottage cheese steak.jpg","risotoo.jpg","Mexican Rice.jpg","Chicken Burritos.jpg"]]

littleitalyprice=[ ["390","625","540","360","360"],
                    ["540","540","540","540","540"],
                    ["300","550","575","450","625"],
                    ["525","525","540","540","575"],
                    ]
littleitalyname=[
                      ["chocolatebomb","LASAGNA ALLA","Lasagna veg","Brownies","Tiramisu Cake"],   
                      ["Bombay","pizzamellino","nirvana","BBQ chicken pizza","margherita"],
                      ["Vegetarian Pasta","tangy chicken ball","Peri Peri Chicken","spicy Chicken Tacos","ChickenPasta"],
                      ["cottage cheese quesadilla","cottage cheese steak","risotoo","Mexican Rice","Chicken Burritos"]
                ]

upaboveimg=[["oldmonk.jpg","magicmoment.jpg","signature.jpg","blinder.jpg","honeywine.jpg"],
          ["Mushroom Soup.jpg","Tomato Soup.jpg","veg Coriander Lemon Soup.jpg","veg sweet corn soup.jpg","veg Hot and Sour Soup.jpg"],
          ["Milk Shakes.jpg","Cold Coffee.jpg","Lasssi.jpg","coffee.jpg","tea.jpg"],
          ["Chicken Malai Tikka.jpg","Chicken Boti Kabab.jpg","Mutton Seekh Kabab.jpg","Chicken Tikka Kebabs.jpg","Tandoori Chicken Recipe.jpg"]
         ]

upabovename=[
                ["oldmonk","magicmoment","signature","blinder","honeywine"],
                ["Mushroom Soup","Tomato Soup","veg Coriander Lemon Soup","veg sweet corn soup","veg Hot and Sour Soup"],
                ["Milk Shakes","Cold Coffee","Lasssi","coffee","tea."],
                ["Chicken Malai Tikka","Chicken Boti Kabab","Mutton Seekh Kabab","Chicken Tikka Kebabs","Tandoori Chicken Recipe"]
             ]
upabovenameprice=[
                    ["115","115","125","125","115"],
                    ["110","110","110","110","110"],
                    ["130","100","80","60","50"],
                    ["250","220","250","250","230"]
                ]

desert=["chocolatebomb.jpg","LASAGNA ALLA.jpg","Lasagna veg.jpg","Brownies.jpg","Tiramisu Cake.jpg"]
desertname=["Chocolatebomb","LASAGNA ALLA","Lasagna veg","Sizzling chocolate browine","Tiramisu"]
desertprice=["390","625","540","360","360"]

Pizzaa=["Bombay.jpg","pizzamellino.jpg","nirvana.jpg","BBQ chicken pizza.jpg","margherita.jpg"]
pizzaname=["Bombay","pizzamellino","nirvana","BBQ chicken pizza","margherita"]
pizzaprice=["540","540","540","540","540"]

passta=["Vegetarian Pasta.jpg","tangy chicken ball.jpg","Peri Peri Chicken.jpg","spicy Chicken Tacos.jpg","ChickenPasta.jpg"]
passtaname=["vegetarian","Tangy chicken ball","peri peri chicken","Spicy chicken Tacos","chickenpasta"]
passtaprice=["300","550","575","450","625"]


italinmaincourse=["cottage cheese quesadilla.jpg","cottage cheese steak.jpg","risotoo.jpg","Mexican Rice.jpg","Chicken Burritos.jpg"]
italinmaincoursename=["cottage cheese quesadilla","cottage cheese steak ","risotoo  ","Mexican Rice  ","chicken Burritos"]
ialianmaincoursename=["525","525","540","540","575"]


// soupimg=["Mushroom Soup.jpg","Tomato Soup.jpg","veg Coriander Lemon Soup.jpg","veg sweet corn soup.jpg","veg Hot and Sour Soup.jpg"]
// soupprice=["Mushroom Soup -110","Tomato Soup -110","veg Coriander Lemon Soup -110","veg sweet corn soup -110","veg Hot and Sour Soup -110"]

// liquorimg=["oldmonk.jpg","magicmoment.jpg","signature.jpg","blinder.jpg","honeywine.jpg"]
// liquorprice=["oldmonk -115","Magic moment -115","Signature -125","Blinder -125","Honey-Wine -115"]

// beverageimg=["Milk Shakes.jpg","Cold Coffee.jpg","Lasssi.jpg","coffee.jpg","tea.jpg"]
// beverageprice=["Milk Shakes -130","Cold Coffee -100","Lasssi -80","coffee -60","tea -50"]

// Tandooriimg=["Chicken Malai Tikka.jpg","Chicken Boti Kabab.jpg","Mutton Seekh Kabab.jpg","Chicken Tikka Kebabs.jpg","Tandoori Chicken Recipe.jpg"]
// Tandooriprice=["Chicken Malai Tikka -250","Chicken Boti Kabab -220","Mutton Seekh Kabab -250","Chicken Tikka Kebabs -250","Tandoori Chicken Recipe -230"]



function show()
{
        
        str=document.getElementById("txt1").value;
        for(i=0;i<hotel.length;i++)
        {

            if(hotel[i].match(str))
            {
                ht=i;
                // document.getElementById("main1").style.display="none"
                // document.getElementById("main2").style.display="none"
                // document.getElementById("main3").style.display="block"
                // document.getElementById("main4").style.display="block"

                document.getElementById("hotelname").innerHTML=hotel[i]
                //      food rating
                for(j=0;j<3;j++)
                {
                    document.getElementById("cb"+j).src=foodratingimg[i][j]
                    document.getElementById("cb"+j).src=foodratingimg[i][j]
                    document.getElementById("cb"+j).src=foodratingimg[i][j]

                    document.getElementById("dishname").innerHTML=hotel[i]
                    document.getElementById("adrss").innerHTML=hoteladdr[i]
                    document.getElementById("hoteldis").innerHTML=fooddis[i]
                }
                for(k=0;k<5;k++)
                {
                    document.getElementById("cardimg"+k).src=foodmenuimage[i][k]
                    document.getElementById("cardimg"+k).src=foodmenuimage[i][k]
                    document.getElementById("cardimg"+k).src=foodmenuimage[i][k]
                    document.getElementById("cardimg"+k).src=foodmenuimage[i][k]
                    document.getElementById("cardimg"+k).src=foodmenuimage[i][k]
                }
                for(p=0;p<5;p++)
                {
                    document.getElementById("foodname"+p).innerHTML=foodname[i][p]
                    document.getElementById("foodname"+p).innerHTML=foodname[i][p]
                    document.getElementById("foodname"+p).innerHTML=foodname[i][p]
                    document.getElementById("foodname"+p).innerHTML=foodname[i][p]
                    document.getElementById("foodname"+p).innerHTML=foodname[i][p]
                }
                for(j=0;j<5;j++)
                {
                    document.getElementById("fdprice"+j).innerHTML=foodprice[i][j]
                }
                 for(x=0;x<4;x++)
                 {
                     document.getElementById("c"+x).innerHTML=foodmenu[i][x]
                     console.log("food")
                 }
             }
             
          
        }
         
          //  document.getElementById("main4").style.display="block"
}
        function  plus(m)
        {
           document.getElementById("cd"+m).value= parseInt(parseInt(document.getElementById("cd"+m).value)+1 )
        }
        function minus(n)
        {

            if(document.getElementById("cd"+n).value>0)
            {
                 document.getElementById("cd"+n).value=parseInt(parseInt(document.getElementById("cd"+n).value)-1)
            }
        }
    
            function placeorder()
            {
                    document.getElementById("main5").style.display="block"

                    total=0;
                    tt=0;
                    quan=0;
                    // qt=0;
                    for(k=0;k<5;k++)
                    {

                        if(document.getElementById("cd"+k).value>0)
                        {
                            document.getElementById("f"+tt).innerHTML=document.getElementById("foodname"+k).innerText;
                            document.getElementById("p"+tt).innerHTML=document.getElementById("fdprice"+k).innerText;
                            document.getElementById("q"+tt).innerHTML=document.getElementById("cd"+k).value
                                
                            b=parseInt(document.getElementById("cd"+k).value)
                        
                            a=parseInt(document.getElementById("fdprice"+k).innerText) 
                            quan=parseInt(b*a)
                            total=parseInt(total+quan)
                            document.getElementById("tot").innerHTML=total;
                            tt++;
                        }                       
                    }

            }

                function pza()
                {
                        for(i=0;i<5;i++)
                        {
                            document.getElementById("cardimg"+i).src=Pizzaa[i]
                            document.getElementById("cardimg"+i).src=Pizzaa[i]
                            document.getElementById("cardimg"+i).src=Pizzaa[i]
                            document.getElementById("cardimg"+i).src=Pizzaa[i]
                            document.getElementById("cardimg"+i).src=Pizzaa[i]
                        }
                        for(q=0;q<5;q++)
                        {
                            document.getElementById("foodname"+q).innerHTML=pizzaname[q]
                            document.getElementById("foodname"+q).innerHTML=pizzaname[q]
                            document.getElementById("foodname"+q).innerHTML=pizzaname[q]
                            document.getElementById("foodname"+q).innerHTML=pizzaname[q]
                            document.getElementById("foodname"+q).innerHTML=pizzaname[q]
                        }
                        for(j=0;j<5;j++)
                        {
                           document.getElementById("fdprice"+j).innerHTML=pizzaprice[j]
                           document.getElementById("fdprice"+j).innerHTML=pizzaprice[j]
                           document.getElementById("fdprice"+j).innerHTML=pizzaprice[j]
                           document.getElementById("fdprice"+j).innerHTML=pizzaprice[j]
                           document.getElementById("fdprice"+j).innerHTML=pizzaprice[j]
                        }
                }
                function dsrt(n)
                {
                    for(h=0;h<5;h++)
                    {
                        document.getElementById("cardimg"+h).src=desert[h]
                        document.getElementById("cardimg"+h).src=desert[h]
                        document.getElementById("cardimg"+h).src=desert[h]
                        document.getElementById("cardimg"+h).src=desert[h]
                        document.getElementById("cardimg"+h).src=desert[h]
                    }
                    for(s=0;s<5;s++)
                    {
                        document.getElementById("foodname"+s).innerHTML=desertname[s]
                        document.getElementById("foodname"+s).innerHTML=desertname[s]
                        document.getElementById("foodname"+s).innerHTML=desertname[s]
                        document.getElementById("foodname"+s).innerHTML=desertname[s]
                        document.getElementById("foodname"+s).innerHTML=desertname[s]
                     }
                     for(j=0;j<5;j++)
                     {
                        document.getElementById("fdprice"+j).innerHTML=desertprice[j]
                        document.getElementById("fdprice"+j).innerHTML=desertprice[j]
                        document.getElementById("fdprice"+j).innerHTML=desertprice[j]
                        document.getElementById("fdprice"+j).innerHTML=desertprice[j]
                        document.getElementById("fdprice"+j).innerHTML=desertprice[j]
                     }
                }
                    function lim()
                    {
                        for(b=0;b<5;b++)
                        {
                            document.getElementById("cardimg"+b).src=Pizzaa[b]
                        }
                    }

                    function pasta()
                    {
                        for(v=0;v<5;v++)
                        {
                            document.getElementById("cardimg"+v).src=passta[v]
                            document.getElementById("cardimg"+v).src=passta[v]
                            document.getElementById("cardimg"+v).src=passta[v]
                            document.getElementById("cardimg"+v).src=passta[v]
                            document.getElementById("cardimg"+v).src=passta[v]
                        }

                        for(t=0;t<5;t++)
                        {
                            document.getElementById("foodname"+t).innerHTML=passtaname[t]
                            document.getElementById("foodname"+t).innerHTML=passtaname[t]
                            document.getElementById("foodname"+t).innerHTML=passtaname[t]
                            document.getElementById("foodname"+t).innerHTML=passtaname[t]
                            document.getElementById("foodname"+t).innerHTML=passtaname[t]
                         }
                        
                         for(j=0;j<5;j++)
                         {
                            document.getElementById("fdprice"+j).innerHTML=passtaprice[j]
                            document.getElementById("fdprice"+j).innerHTML=passtaprice[j]
                            document.getElementById("fdprice"+j).innerHTML=passtaprice[j]
                            document.getElementById("fdprice"+j).innerHTML=passtaprice[j]
                            document.getElementById("fdprice"+j).innerHTML=passtaprice[j]
                         }
                    }
                                function itmcour()
                                {
                                    for(g=0;g<5;g++)
                                    {
                                        document.getElementById("cardimg"+g).src=italinmaincourse[g]
                                        document.getElementById("cardimg"+g).src=italinmaincourse[g]
                                        document.getElementById("cardimg"+g).src=italinmaincourse[g]
                                        document.getElementById("cardimg"+g).src=italinmaincourse[g]
                                        document.getElementById("cardimg"+g).src=italinmaincourse[g]
                                    }
            
                                    for(w=0;w<5;w++)
                                    {
                                        document.getElementById("foodname"+w).innerHTML=italinmaincoursename[w]
                                        document.getElementById("foodname"+w).innerHTML=italinmaincoursename[w]
                                        document.getElementById("foodname"+w).innerHTML=italinmaincoursename[w]
                                        document.getElementById("foodname"+w).innerHTML=italinmaincoursename[w]
                                        document.getElementById("foodname"+w).innerHTML=italinmaincoursename[w]
                                    }
                                    for(j=0;j<5;j++)
                                    {
                                       document.getElementById("fdprice"+j).innerHTML=ialianmaincoursename[j]
                                       document.getElementById("fdprice"+j).innerHTML=ialianmaincoursename[j]
                                       document.getElementById("fdprice"+j).innerHTML=ialianmaincoursename[j]
                                       document.getElementById("fdprice"+j).innerHTML=ialianmaincoursename[j]
                                       document.getElementById("fdprice"+j).innerHTML=ialianmaincoursename[j]
                                    }
                                }
                                function con(n)
                                {
                                    // ht=0;
                                    if(ht==0)
                                    {
                                       if(n==0)
                                       {
                                           for(l=0;l<5;l++)
                                           {
                                               document.getElementById("cardimg"+l).src=littleitalyimg[n][l]
                                               document.getElementById("foodname"+l).innerHTML=littleitalyname[n][l]
                                               document.getElementById("fdprice"+l).innerHTML=littleitalyprice[n][l]
                                           }
                                          
                                       }
                                       if(n==1)
                                       {
                                           for(l=0;l<5;l++)
                                           {
                                               document.getElementById("cardimg"+l).src=littleitalyimg[n][l]
                                               document.getElementById("foodname"+l).innerHTML=littleitalyname[n][l]
                                               document.getElementById("fdprice"+l).innerHTML=littleitalyprice[n][l]
                                           }
                            
                                       }
                                       if(n==2)
                                       {
                                            for(l=0;l<5;l++)
                                            {
                                                document.getElementById("cardimg"+l).src=littleitalyimg[n][l]
                                                document.getElementById("foodname"+l).innerHTML=littleitalyname[n][l]
                                                document.getElementById("fdprice"+l).innerHTML=littleitalyprice[n][l]
                                            }
                                       }
                                       if(n==3)
                                       {
                                            for(l=0;l<5;l++)
                                            {
                                            document.getElementById("cardimg"+l).src=littleitalyimg[n][l]
                                            document.getElementById("foodname"+l).innerHTML=littleitalyname[n][l]
                                            document.getElementById("fdprice"+l).innerHTML=littleitalyprice[n][l]
                                            }
                                       }
                                    }
                                                if(ht==1)
                                                {
                                                    if(n==0)
                                                    {
                                                        for(l=0;l<5;l++)
                                                        {
                                                            document.getElementById("cardimg"+l).src=upaboveimg[n][l]
                                                            document.getElementById("foodname"+l).innerHTML=upabovename[n][l]
                                                            document.getElementById("fdprice"+l).innerHTML=upabovenameprice[n][l]
                                                        }
                                                       
                                                    }
                                                    if(n==1)
                                                    {
                                                        for(l=0;l<5;l++)
                                                        {
                                                            document.getElementById("cardimg"+l).src=upaboveimg[n][l]
                                                            document.getElementById("foodname"+l).innerHTML=upabovename[n][l]
                                                            document.getElementById("fdprice"+l).innerHTML=upabovenameprice[n][l]
                                                        }
                                                    }
                                                    if(n==2)
                                                    {
                                                            for(l=0;l<5;l++)
                                                            {
                                                                document.getElementById("cardimg"+l).src=upaboveimg[n][l]
                                                                document.getElementById("foodname"+l).innerHTML=upabovename[n][l]
                                                            document.getElementById("fdprice"+l).innerHTML=upabovenameprice[n][l]
                                                            }
                                                    }
                                                    if(n==3)
                                                    {
                                                        for(l=0;l<5;l++)
                                                        {
                                                        document.getElementById("cardimg"+l).src=upaboveimg[n][l]
                                                        document.getElementById("foodname"+l).innerHTML=upabovename[n][l]
                                                            document.getElementById("fdprice"+l).innerHTML=upabovenameprice[n][l]
                                                        }     
                                                    }
                                                }
                                            }
                                
                               