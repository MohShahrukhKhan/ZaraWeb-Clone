









var userdata=JSON.parse(localStorage.getItem("USERSDATA"))||[];


var loginAnchar=document.createElement("a")
loginAnchar.setAttribute("id","userId")
if(userdata.length>0){
  loginAnchar.innerText=userdata[userdata.length-1]["username"]
  }else{
      loginAnchar.innerText="LOG IN"
  }
if(loginAnchar.innerText=="LOG IN"){
  loginAnchar.href="loginPage.html"
}else{
  loginAnchar.href="signout.html"
}

document.querySelector("#loginId").append(loginAnchar)






var trendesobj=[
    //JACKETS AND COATS
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0706/336/305/2/w/444/0706336305_2_1_1.jpg?ts=1632298344216",
      productName: "CONTRAST COLLAR JACKET",
      price: "₹ 3,490.00",
      strikedPrice: "₹ 7,990.00",
      itemGender: "male",
      itemCategory: "Jackets",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0706/331/052/2/w/444/0706331052_2_1_1.jpg?ts=1629375819454",
      productName: "TEXTURED BLAZER",
      price: "₹ 2,290.00",
      strikedPrice: "₹ 5,590.00",
      itemGender: "male",
      itemCategory: "Jackets",
      sale: 55,
    },
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/080/251/2/w/334/9479080251_2_3_1.jpg?ts=1627047029125",
        productName: "LOOSE-FITTING SHIRT WITH POCKETS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 6==1  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8246/242/403/2/w/334/8246242403_2_1_1.jpg?ts=1628174682184",
        productName: "ZW THE CARPENTER STRAIGHT JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "40%"
    },
    // 6==2  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9632/240/251/2/w/334/9632240251_1_1_1.jpg?ts=1625061419331",
        productName: "ZW THE MERCER JOGGER JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "40%"
    },
    // 4==12   
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7901/423/800/2/w/334/7901423800_1_1_1.jpg?ts=1631110293978",
        productName: "RIBBED MIDI DRESS",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 5==1 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7957/021/712/3/w/334/7957021712_2_1_1.jpg?ts=1624019882619",
        productName: "TEXTURED PRINTED BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==2  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8561/577/400/2/w/334/8561577400_1_1_1.jpg?ts=1632910749725",
        productName: "FINE CORDUROY SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "50%"
    },
    // 5==3  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7484/166/942/2/w/334/7484166942_1_1_1.jpg?ts=1630580738069",
        productName: "FLOWING JACQUARD SHIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==4  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/268/629/2/w/334/7563268629_2_1_1.jpg?ts=1632486605364",
        productName: "VOLUMINOUS POPLIN SHIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==5  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/252/606/2/w/334/7563252606_2_1_1.jpg?ts=1627046994062",
        productName: "CROSSOVER PRINTED BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },

    {
    imageURL : "https://static.zara.net/photos///2022/V/0/3/p/1015/190/070/2/w/386/1015190070_6_1_1.jpg?ts=1638206832306",
    productName : "HOUNDSTOOTH PINAFORE DRESS",
    price : "₹ 1,190.00",
    strikedPrice : "₹ 2,290.00",
    itemGender : "womens",
    itemCategory :"DRESSES | JUMPSUITS",
    sale : "45 % OFF",
    age :"6-14 Years"
  },
  {
    imageURL : "https://static.zara.net/photos///2022/V/0/3/p/6201/601/933/2/w/750/6201601933_6_1_1.jpg?ts=1641399328051",
    productName : "CONTRAST FLORAL RIBBED JUMPSUIT",
    price : "₹ 1,190.00",
    strikedPrice : "₹ 2,290.00",
    itemGender : "womens",
    itemCategory :"DRESSES | JUMPSUITS",
    sale : "45 % OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2022/V/0/3/p/2236/600/800/2/w/386/2236600800_6_1_1.jpg?ts=1639562828313",
    productName : "TEXTURED PLUMETIS DRESS",
    price : "₹ 1,190.00",
    strikedPrice : "₹ 2,290.00",
    itemGender : "womens",
    itemCategory :"DRESSES | JUMPSUITS",
    sale : "45 % OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2021/I/0/3/p/6185/203/807/2/w/386/6185203807_6_1_1.jpg?ts=1626164268012",
    productName : "TEXTURED PLUMETIS DRESS",
    price : "₹ 1,190.00",
    strikedPrice : "₹ 2,290.00",
    itemGender : "womens",
    itemCategory :"DRESSES | JUMPSUITS",
    sale : "45% OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2021/I/0/3/p/6350/263/630/102/w/386/6350263630_1_1_1.jpg?ts=1630950585121",
    productName : "FLORAL SHIRT DRESS",
    price : "₹ 1,190.00",
    strikedPrice : "₹ 1,990.00",
    itemGender : "womens",
    itemCategory :"DRESSES | JUMPSUITS",
    sale : "40% OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2021/I/0/3/p/1639/735/420/2/w/750/1639735420_6_1_1.jpg?ts=1627561879861",
    productName : "DENIM OVERSHIRT WITH SNAP BUTTONS",
    price : "₹ 1,190.00",
    strikedPrice : "₹ 1,990.00",
    itemGender : "womens",
    itemCategory :"SWEATSHIRTS | JACKETS",
    sale : "40% OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2021/I/0/3/p/6475/558/400/103/w/386/6475558400_1_1_1.jpg?ts=1635959548383",
    productName : "PAISLEY FAUX SHEARLING GILET",
    price : "₹ 1,590.00",
    strikedPrice : "₹ 2,290.00",
    itemGender : "womens",
    itemCategory :"SWEATSHIRTS | JACKETS",
    sale : "30% OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2021/I/0/3/p/6475/558/400/2/w/386/6475558400_6_1_1.jpg?ts=1635420789607",
    productName : "PAISLEY FAUX SHEARLING GILET",
    price : "₹ 1,590.00",
    strikedPrice : "₹ 2,290.00",
    itemGender : "womens",
    itemCategory :"SWEATSHIRTS | JACKETS",
    sale : "30% OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2022/V/0/3/p/3402/110/400/2/w/386/3402110400_6_1_1.jpg?ts=1638267194044",
    productName : "RIBBED POLO SHIRT",
    price : "₹ 350.00",
    strikedPrice : "₹ 790.00",
    itemGender : "womens",
    itemCategory :"T-SHIRTS",
    sale : "55% OFF / +2 COLOURS",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2021/I/0/3/p/3037/722/330/102/w/386/3037722330_1_1_1.jpg?ts=1633961160124",
    productName : "STRIPED T-SHIRT",
    price : "₹ 350.00",
    strikedPrice : "₹ 790.00",
    itemGender : "womens",
    itemCategory :"T-SHIRTS",
    sale : "55% OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2021/I/0/3/p/3037/722/330/2/w/386/3037722330_6_1_1.jpg?ts=1634112432606",
    productName : "STRIPED T-SHIRT",
    price : "₹ 350.00",
    strikedPrice : "₹ 790.00",
    itemGender : "womens",
    itemCategory :"T-SHIRTS",
    sale : "55% OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2022/V/0/3/p/1081/190/070/2/w/750/1081190070_6_1_1.jpg?ts=1638535811872",
    productName : "HOUNDSTOOTH OVERSHIRT",
    price : "₹ 1,190.00",
    strikedPrice : "₹ 2,490.00",
    itemGender : "womens",
    itemCategory :"T-SHIRTS",
    sale : "50% OFF",
    age :"6-14 Years"

  },
  
  {
    imageURL : "https://static.zara.net/photos///2022/V/0/3/p/9006/608/712/2/w/750/9006608712_6_1_1.jpg?ts=1640192382730",
    productName : "RIBBED RAGLAN SLEEVE T-SHIRT",
    price : "₹  550.00",
    strikedPrice : "₹₹ 990.00",
    itemGender : "womens",
    itemCategory :"T-SHIRTS",
    sale : "40% OFF",
    age :"6-14 Years"

  },
  {
    imageURL : "https://static.zara.net/photos///2021/I/0/3/p/4333/706/620/102/w/386/4333706620_1_1_1.jpg?ts=1637142764432",
    productName : "RIBBED T-SHIRT WITH HEARTS",
    price : "₹  550.00",
    strikedPrice : "₹₹ 990.00",
    itemGender : "womens",
    itemCategory :"T-SHIRTS",
    sale : "55% OFF",
    age :"6-14 Years"

  },
    // 5==6  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8351/239/330/2/w/334/8351239330_1_1_1.jpg?ts=1634294247335",
        productName: "PRINTED PLEATED BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==7   
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4437/042/507/2/w/334/4437042507_2_1_1.jpg?ts=1636560539578",
        productName: "FITTED KNIT BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==8  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/242/506/2/w/334/2143242506_2_2_1.jpg?ts=1627046995619",
        productName: "STRIPED BLOUSE WITH POCKET",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==9  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/244/746/2/w/334/2143244746_2_1_1.jpg?ts=1628782308563",
        productName: "RUSTIC TOP WITH POCKET",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==10
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2298/218/330/2/w/334/2298218330_2_1_1.jpg?ts=1632479467987",
        productName: "FLORAL PRINT BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==11  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/241/426/2/w/334/2143241426_2_1_1.jpg?ts=1623939956197",
        productName: "TEXTURED COTTON BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==12  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/080/251/2/w/334/9479080251_2_3_1.jpg?ts=1627047029125",
        productName: "LOOSE-FITTING SHIRT WITH POCKETS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 6==1  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8246/242/403/2/w/334/8246242403_2_1_1.jpg?ts=1628174682184",
        productName: "ZW THE CARPENTER STRAIGHT JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "40%"
    },
    // 6==2  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9632/240/251/2/w/334/9632240251_1_1_1.jpg?ts=1625061419331",
        productName: "ZW THE MERCER JOGGER JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "40%"
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/1538/313/305/2/w/444/1538313305_2_1_1.jpg?ts=1631277001985",
      productName: "BASIC DENIM JACKET",
      price: "₹ 2,290.00",
      strikedPrice: "₹ 2,999.00",
      itemGender: "male",
      itemCategory: "Jackets",
      sale: 20,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/3562/326/712/2/w/444/3562326712_2_1_1.jpg?ts=1628850964624",
      productName: "OVERSHIRT WITH CONTRAST POCKETS",
      price: "₹ 1,990.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Jackets",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/3918/306/251/2/w/444/3918306251_2_1_1.jpg?ts=1633072946418",
      productName: "TECHNICAL JACKET",
      price: "₹ 1,990.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Jackets",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/9621/430/300/2/w/444/9621430300_2_1_1.jpg?ts=1627033368623",
      productName: "LIGHTWIEGHT TECHNICAL JACKET",
      price: "₹ 2,290.00",
      strikedPrice: "₹ 5,590.00",
      itemGender: "male",
      itemCategory: "Jackets",
      sale: 55,
    },
  
    //OVERSHIRTS
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/2/p/3057/204/800/2/w/444/3057204800_2_1_1.jpg?ts=1638351856835",
      productName: "GEOMETRIC JACQUARD OVERSHIRT",
      price: "₹ 2,990.00",
      strikedPrice: "₹ 5,590.00",
      itemGender: "male",
      itemCategory: "Overshirt",
      sale: 45,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0072/927/401/2/w/444/0072927401_2_1_1.jpg?ts=1631867549480",
      productName: "OVERSHIRT WITH POCKETS",
      price: "₹ 1,990.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Overshirt",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0693/331/800/2/w/444/0693331800_2_1_1.jpg?ts=1628608130880",
      productName: "STRIPED JACQUARD SHIRT",
      price: "₹ 1,590.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Overshirt",
      sale: 65,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/7446/313/676/2/w/444/7446313676_2_1_1.jpg?ts=1632915632883",
      productName: "CORDUROY OVERSHIRT",
      price: "₹ 1,990.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Overshirt",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/4477/431/710/3/w/444/4477431710_2_5_1.jpg?ts=1626252294014",
      productName: "PATCH OVERSHIRT",
      price: "₹ 1,990.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Overshirt",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/1248/414/800/2/w/444/1248414800_2_1_1.jpg?ts=1633506734448",
      productName: "FAUX SHEARLING CHECK OVERSHIRT",
      price: "₹ 2,990.00",
      strikedPrice: "₹ 5,590.00",
      itemGender: "male",
      itemCategory: "Overshirt",
      sale: 45,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/2675/308/300/2/w/444/2675308300_2_1_1.jpg?ts=1628671908667",
      productName: "STRIPED JACQUARD OVERSHIRT",
      price: "₹ 2,990.00",
      strikedPrice: "₹ 5,590.00",
      itemGender: "male",
      itemCategory: "Overshirt",
      sale: 45,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/5950/515/400/2/w/444/5950515400_2_2_1.jpg?ts=1633074426695",
      productName: "® ERIN WILSON PATCH OVERSHIRT",
      price: "₹ 2,990.00",
      strikedPrice: "₹ 5,590.00",
      itemGender: "male",
      itemCategory: "Overshirt",
      sale: 45,
    },
  
    //KNITWEAR
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0077/301/710/2/w/444/0077301710_2_1_1.jpg?ts=1628074520816",
      productName: "COTTON AND SILK KNIT POLO SHIRT",
      price: "₹ 2,290.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Knitwear",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/2893/306/832/2/w/444/2893306832_2_1_1.jpg?ts=1636542185679",
      productName: "WOOL - SILK SWEATER",
      price: "₹ 2,290.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Knitwear",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/3284/309/439/2/w/444/3284309439_2_1_1.jpg?ts=1633691154910",
      productName: "COTTON SWEATER WITH PATCH DETAIL",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,790.00",
      itemGender: "male",
      itemCategory: "Knitwear",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/6674/300/520/3/w/444/6674300520_2_1_1.jpg?ts=1626187633056",
      productName: "COMBINED KNIT T-SHIRT",
      price: "₹ 990.00",
      strikedPrice: "₹ 2,790.00",
      itemGender: "male",
      itemCategory: "Knitwear",
      sale: 60,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/4090/322/401/2/w/444/4090322401_2_1_1.jpg?ts=1636449667602",
      productName: "GRAPHIC PRINT SWEATER",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,590.00",
      itemGender: "male",
      itemCategory: "Knitwear",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0048/309/803/2/w/444/0048309803_2_1_1.jpg?ts=1637673986198",
      productName: "ABSTRACT JACQUARD SWEATER",
      price: "₹ 2,290.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Knitwear",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/5755/307/400/2/w/444/5755307400_2_1_1.jpg?ts=1637138062196",
      productName: "STRIPED SWEATER",
      price: "₹ 2,290.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Knitwear",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/4938/313/802/2/w/444/4938313802_2_1_1.jpg?ts=1629448666038",
      productName: "MOUNTAIN JACQUARD CARDIGAN",
      price: "₹ 2,290.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Knitwear",
      sale: 50,
    },
  
    //SHIRTS
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/3717/350/250/2/w/444/3717350250_2_1_1.jpg?ts=1630063982843",
      productName: "CONTRAST SLOGAN SHIRT",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Shirt",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/6987/360/707/2/w/444/6987360707_2_1_1.jpg?ts=1631885303474",
      productName: "COLOURED COTTON SHIRT",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 1,990.00",
      itemGender: "male",
      itemCategory: "Shirt",
      sale: 35,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/7545/225/679/2/w/444/7545225679_2_1_1.jpg?ts=1622476872265",
      productName: "LYOCELL - LINEN SHIRT",
      price: "₹ 1,490.00",
      strikedPrice: "₹ 2,790.00",
      itemGender: "male",
      itemCategory: "Shirt",
      sale: 45,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/6917/324/250/2/w/444/6917324250_2_1_1.jpg?ts=1627028393401",
      productName: "WATERCOLOUR PRINT SHIRT",
      price: "₹ 1,490.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Shirt",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/2/p/6085/305/800/2/w/444/6085305800_2_1_1.jpg?ts=1638291014174",
      productName: "SLOGAN PRINT SHIRT",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Shirt",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/8574/337/300/2/w/444/8574337300_2_1_1.jpg?ts=1626693047023",
      productName: "FLORAL PRINT SHIRT",
      price: "₹ 1,490.00",
      strikedPrice: "₹ 2,790.00",
      itemGender: "male",
      itemCategory: "Shirt",
      sale: 45,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/6917/318/615/22/w/444/6917318615_2_3_1.jpg?ts=1626187910297",
      productName: "PALM TREE PRINT SHIRT",
      price: "₹ 1,490.00",
      strikedPrice: "₹ 2,999.00",
      itemGender: "male",
      itemCategory: "Shirt",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/8727/302/052/2/w/444/8727302052_2_1_1.jpg?ts=1626683134354",
      productName: "COTTON - HEMP SHIRT",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,999.00",
      itemGender: "male",
      itemCategory: "Shirt",
      sale: 55,
    },
  
    //TSHIRTS
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0840/302/609/2/w/444/0840302609_2_1_1.jpg?ts=1628241474850",
      productName: "TIE-DYE PRINT SWEATSHIRT",
      price: "₹ 1,990.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "T-Shirt",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/0722/410/250/12/w/444/0722410250_2_1_1.jpg?ts=1629791310289",
      productName: "BASIC LIGHTWEIGHT T-SHIRT",
      price: "₹ 590.00",
      strikedPrice: "₹ 790.00",
      itemGender: "male",
      itemCategory: "T-Shirt",
      sale: 25,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0962/303/251/2/w/444/0962303251_2_1_1.jpg?ts=1628068341757",
      productName: "CHERRY COKE T-SHIRT",
      price: "₹ 990.00",
      strikedPrice: "₹ 1,990.00",
      itemGender: "male",
      itemCategory: "T-Shirt",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/5644/341/800/2/w/444/5644341800_2_1_1.jpg?ts=1628072377647",
      productName: "CONTRAST PRINT T-SHIRT",
      price: "₹ 990.00",
      strikedPrice: "₹ 1,990.00",
      itemGender: "male",
      itemCategory: "T-Shirt",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/7878/307/183/2/w/444/7878307183_2_1_1.jpg?ts=1629463792668",
      productName: "MICKEY MOUSE PRINT T-SHIRT",
      price: "₹ 990.00",
      strikedPrice: "₹ 1,990.00",
      itemGender: "male",
      itemCategory: "T-Shirt",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/6462/301/401/2/w/444/6462301401_2_1_1.jpg?ts=1624881360120",
      productName: "PIQUÉ TEXTURE T-SHIRT",
      price: "₹ 790.00",
      strikedPrice: "₹ 1,590.00",
      itemGender: "male",
      itemCategory: "T-Shirt",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/4231/400/439/3/w/444/4231400439_2_1_1.jpg?ts=1626295089339",
      productName: "KNIT T-SHIRT",
      price: "₹ 990.00",
      strikedPrice: "₹ 1,790.00",
      itemGender: "male",
      itemCategory: "T-Shirt",
      sale: 45,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0495/441/251/2/w/444/0495441251_2_1_1.jpg?ts=1623841540341",
      productName: "PAINT SPLATTER PRINT T-SHIRT",
      price: "₹ 990.00",
      strikedPrice: "₹ 1,999.00",
      itemGender: "male",
      itemCategory: "T-Shirt",
      sale: 50,
    },
  
    //TROUSERS AND JEANS
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/6688/368/427/2/w/444/6688368427_2_1_1.jpg?ts=1629882542785",
      productName: "THE 90S SLIM FIT JEANS",
      price: "₹ 2,490.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Trousers",
      sale: 45,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/9632/309/401/2/w/444/9632309401_2_1_1.jpg?ts=1632485888406",
      productName: "TEXTURED COTTON TROUSERS",
      price: "₹ 1,790.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Trousers",
      sale: 60,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/6688/316/709/2/w/444/6688316709_2_1_1.jpg?ts=1633514006739",
      productName: "THE 90S CROPPED FIT JEANS",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Trousers",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/2649/455/710/2/w/444/2649455710_2_1_1.jpg?ts=1628092549536",
      productName: "COTTON - LYOCELL TROUSERS",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Trousers",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/4161/302/600/2/w/444/4161302600_2_1_1.jpg?ts=1629820726346",
      productName: "JOGGING TROUSERS WITH SIDE STRIPES",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Trousers",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/9632/305/600/2/w/444/9632305600_2_1_1.jpg?ts=1632328635845",
      productName: "FLORAL PRINT TROUSERS",
      price: "₹ 1,790.00",
      strikedPrice: "₹ 4,590.00",
      itemGender: "male",
      itemCategory: "Trousers",
      sale: 60,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/6861/352/251/2/w/444/6861352251_2_1_1.jpg?ts=1627902247424",
      productName: "COTTON PLEATED TROUSERS",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Trousers",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5862/472/800/2/w/444/5862472800_2_1_1.jpg?ts=1638531159793",
      productName: "SOFT DENIM TROUSERS",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Trousers",
      sale: 55,
    },
  
    //SHORTS
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/1538/395/600/2/w/444/1538395600_2_1_1.jpg?ts=1627028315740",
      productName: "FLORAL PRINT BERMUDA SHORTS",
      price: "₹ 590.00",
      strikedPrice: "₹ 1,990.00",
      itemGender: "male",
      itemCategory: "Shorts",
      sale: 70,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/4090/314/712/22/w/444/4090314712_2_1_1.jpg?ts=1626187210769",
      productName: "ABSTRACT PRINT KNIT BERMUDA SHORTS",
      price: "₹ 590.00",
      strikedPrice: "₹ 2,790.00",
      itemGender: "male",
      itemCategory: "Shorts",
      sale: 75,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/4365/404/406/2/w/444/4365404406_2_1_1.jpg?ts=1620814292315",
      productName: "RIPPED DENIM BERMUDA SHORTS",
      price: "₹ 590.00",
      strikedPrice: "₹ 1,590.00",
      itemGender: "male",
      itemCategory: "Shorts",
      sale: 60,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/4130/401/251/2/w/444/4130401251_2_1_1.jpg?ts=1626249137154",
      productName: "CONTRAST BERMUDA SHORTS",
      price: "₹ 590.00",
      strikedPrice: "₹ 2,790.00",
      itemGender: "male",
      itemCategory: "Shorts",
      sale: 75,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0679/303/015/22/w/444/0679303015_2_1_1.jpg?ts=1626186975611",
      productName: "STRIPED JOGGING BERMUDA SHORTS",
      price: "₹ 590.00",
      strikedPrice: "₹ 2,790.00",
      itemGender: "male",
      itemCategory: "Shorts",
      sale: 75,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/V/0/2/p/4365/430/800/2/w/444/4365430800_2_1_1.jpg?ts=1619780655556",
      productName: "STRAIGHT FIT DENIM BERMUDA SHORTS",
      price: "₹ 590.00",
      strikedPrice: "₹ 1,590.00",
      itemGender: "male",
      itemCategory: "Shorts",
      sale: 60,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/6786/425/710/3/w/444/6786425710_2_1_1.jpg?ts=1626304080448",
      productName: "BERMUDA SHORTS WITH SIDE TAPING",
      price: "₹ 590.00",
      strikedPrice: "₹ 2,490.00",
      itemGender: "male",
      itemCategory: "Shorts",
      sale: 75,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/1538/431/427/2/w/444/1538431427_2_1_1.jpg?ts=1624881300886",
      productName: "SKATE FIT DENIM BERMUDA SHORTS",
      price: "₹ 590.00",
      strikedPrice: "₹ 2,490.00",
      itemGender: "male",
      itemCategory: "Shorts",
      sale: 75,
    },
    //ZARA ATHLETICS
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/2651/402/800/2/w/444/2651402800_6_1_1.jpg?ts=1632839329295",
      productName: "TECHNICAL T-SHIRT WITH ZIP",
      price: "₹ 1,990.00",
      strikedPrice: "₹ 3,990.00",
      itemGender: "male",
      itemCategory: "Zara_Athleticz",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0761/603/681/2/w/444/0761603681_6_1_1.jpg?ts=1632944352739",
      productName: "HOODIE",
      price: "₹ 1,790.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Zara_Athleticz",
      sale: 40,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/2651/402/442/2/w/444/2651402442_6_1_1.jpg?ts=1632843098235",
      productName: "TECHNICAL T-SHIRT WITH ZIP",
      price: "₹ 1,990.00",
      strikedPrice: "₹ 3,990.00",
      itemGender: "male",
      itemCategory: "Zara_Athleticz",
      sale: 50,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0119/403/524/2/w/444/0119403524_6_1_1.jpg?ts=1632837484798",
      productName: "SEAMLESS SINGLET TOP",
      price: "₹ 790.00",
      strikedPrice: "₹ 1,890.00",
      itemGender: "male",
      itemCategory: "Zara_Athleticz",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/5644/404/803/2/w/444/5644404803_6_1_1.jpg?ts=1635944504115",
      productName: "ZIP-UP NEXT T-SHIRT",
      price: "₹ 1,790.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Zara_Athleticz",
      sale: 40,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0119/403/803/2/w/444/0119403803_6_1_1.jpg?ts=1632904303431",
      productName: "SEAMLESS SINGLET TOP",
      price: "₹ 790.00",
      strikedPrice: "₹ 1,890.00",
      itemGender: "male",
      itemCategory: "Zara_Athleticz",
      sale: 40,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/1368/402/803/2/w/444/1368402803_6_1_1.jpg?ts=1635944590857",
      productName: "SEAMLESS LEGGINGS",
      price: "₹ 1,290.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Zara_Athleticz",
      sale: 55,
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/2/p/0119/402/524/2/w/444/0119402524_6_1_1.jpg?ts=1632837528646",
      productName: "LONG SLEEVE SEAMLESS T-SHIRT",
      price: "₹ 990.00",
      strikedPrice: "₹ 2,990.00",
      itemGender: "male",
      itemCategory: "Zara_Athleticz",
      sale: 65,
    },
  ];
  



var jeansobj=[
    {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0706/336/305/2/w/444/0706336305_2_1_1.jpg?ts=1632298344216",
        productName: "CONTRAST COLLAR JACKET",
        price: "₹ 3,490.00",
        strikedPrice: "₹ 7,990.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0706/331/052/2/w/444/0706331052_2_1_1.jpg?ts=1629375819454",
        productName: "TEXTURED BLAZER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/9621/470/710/2/w/444/9621470710_2_1_1.jpg?ts=1627035611819",
        productName: "LIGHTWIEGHT RUBBERISED JACKET",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4667/155/251/2/w/444/4667155251_2_1_1.jpg?ts=1628848868184",
        productName: "COTTON JACKET WITH POCKETS",
        price: "₹ 3,490.00",
        strikedPrice: "₹ 7,990.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/1538/313/305/2/w/444/1538313305_2_1_1.jpg?ts=1631277001985",
        productName: "BASIC DENIM JACKET",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 2,999.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 20,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3562/326/712/2/w/444/3562326712_2_1_1.jpg?ts=1628850964624",
        productName: "OVERSHIRT WITH CONTRAST POCKETS",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3918/306/251/2/w/444/3918306251_2_1_1.jpg?ts=1633072946418",
        productName: "TECHNICAL JACKET",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/9621/430/300/2/w/444/9621430300_2_1_1.jpg?ts=1627033368623",
        productName: "LIGHTWIEGHT TECHNICAL JACKET",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
    
      //OVERSHIRTS
      {
        imageURL:
          "https://static.zara.net/photos///2022/V/0/2/p/3057/204/800/2/w/444/3057204800_2_1_1.jpg?ts=1638351856835",
        productName: "GEOMETRIC JACQUARD OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0072/927/401/2/w/444/0072927401_2_1_1.jpg?ts=1631867549480",
        productName: "OVERSHIRT WITH POCKETS",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0693/331/800/2/w/444/0693331800_2_1_1.jpg?ts=1628608130880",
        productName: "STRIPED JACQUARD SHIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 65,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/7446/313/676/2/w/444/7446313676_2_1_1.jpg?ts=1632915632883",
        productName: "CORDUROY OVERSHIRT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4477/431/710/3/w/444/4477431710_2_5_1.jpg?ts=1626252294014",
        productName: "PATCH OVERSHIRT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/1248/414/800/2/w/444/1248414800_2_1_1.jpg?ts=1633506734448",
        productName: "FAUX SHEARLING CHECK OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/2675/308/300/2/w/444/2675308300_2_1_1.jpg?ts=1628671908667",
        productName: "STRIPED JACQUARD OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/5950/515/400/2/w/444/5950515400_2_2_1.jpg?ts=1633074426695",
        productName: "® ERIN WILSON PATCH OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
    
      //KNITWEAR
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0077/301/710/2/w/444/0077301710_2_1_1.jpg?ts=1628074520816",
        productName: "COTTON AND SILK KNIT POLO SHIRT",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/2893/306/832/2/w/444/2893306832_2_1_1.jpg?ts=1636542185679",
        productName: "WOOL - SILK SWEATER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3284/309/439/2/w/444/3284309439_2_1_1.jpg?ts=1633691154910",
        productName: "COTTON SWEATER WITH PATCH DETAIL",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6674/300/520/3/w/444/6674300520_2_1_1.jpg?ts=1626187633056",
        productName: "COMBINED KNIT T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 60,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4090/322/401/2/w/444/4090322401_2_1_1.jpg?ts=1636449667602",
        productName: "GRAPHIC PRINT SWEATER",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0048/309/803/2/w/444/0048309803_2_1_1.jpg?ts=1637673986198",
        productName: "ABSTRACT JACQUARD SWEATER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/5755/307/400/2/w/444/5755307400_2_1_1.jpg?ts=1637138062196",
        productName: "STRIPED SWEATER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4938/313/802/2/w/444/4938313802_2_1_1.jpg?ts=1629448666038",
        productName: "MOUNTAIN JACQUARD CARDIGAN",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
    
      //SHIRTS
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3717/350/250/2/w/444/3717350250_2_1_1.jpg?ts=1630063982843",
        productName: "CONTRAST SLOGAN SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6987/360/707/2/w/444/6987360707_2_1_1.jpg?ts=1631885303474",
        productName: "COLOURED COTTON SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 35,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/7545/225/679/2/w/444/7545225679_2_1_1.jpg?ts=1622476872265",
        productName: "LYOCELL - LINEN SHIRT",
        price: "₹ 1,490.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6917/324/250/2/w/444/6917324250_2_1_1.jpg?ts=1627028393401",
        productName: "WATERCOLOUR PRINT SHIRT",
        price: "₹ 1,490.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2022/V/0/2/p/6085/305/800/2/w/444/6085305800_2_1_1.jpg?ts=1638291014174",
        productName: "SLOGAN PRINT SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/8574/337/300/2/w/444/8574337300_2_1_1.jpg?ts=1626693047023",
        productName: "FLORAL PRINT SHIRT",
        price: "₹ 1,490.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6917/318/615/22/w/444/6917318615_2_3_1.jpg?ts=1626187910297",
        productName: "PALM TREE PRINT SHIRT",
        price: "₹ 1,490.00",
        strikedPrice: "₹ 2,999.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/8727/302/052/2/w/444/8727302052_2_1_1.jpg?ts=1626683134354",
        productName: "COTTON - HEMP SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,999.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 55,
      },
    
      //TSHIRTS
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0840/302/609/2/w/444/0840302609_2_1_1.jpg?ts=1628241474850",
        productName: "TIE-DYE PRINT SWEATSHIRT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "T-Shirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/1/p/0722/410/250/12/w/444/0722410250_2_1_1.jpg?ts=1629791310289",
        productName: "BASIC LIGHTWEIGHT T-SHIRT",
        price: "₹ 590.00",
        strikedPrice: "₹ 790.00",
        itemGender: "male",
        itemCategory: "T-Shirt",
        sale: 25,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0962/303/251/2/w/444/0962303251_2_1_1.jpg?ts=1628068341757",
        productName: "CHERRY COKE T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "male",
        itemCategory: "T-Shirt",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/5644/341/800/2/w/444/5644341800_2_1_1.jpg?ts=1628072377647",
        productName: "CONTRAST PRINT T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "male",
        itemCategory: "T-Shirt",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/7878/307/183/2/w/444/7878307183_2_1_1.jpg?ts=1629463792668",
        productName: "MICKEY MOUSE PRINT T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "male",
        itemCategory: "T-Shirt",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6462/301/401/2/w/444/6462301401_2_1_1.jpg?ts=1624881360120",
        productName: "PIQUÉ TEXTURE T-SHIRT",
        price: "₹ 790.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "male",
        itemCategory: "T-Shirt",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4231/400/439/3/w/444/4231400439_2_1_1.jpg?ts=1626295089339",
        productName: "KNIT T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,790.00",
        itemGender: "male",
        itemCategory: "T-Shirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0495/441/251/2/w/444/0495441251_2_1_1.jpg?ts=1623841540341",
        productName: "PAINT SPLATTER PRINT T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,999.00",
        itemGender: "male",
        itemCategory: "T-Shirt",
        sale: 50,
      },
    
      //TROUSERS AND JEANS
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6688/368/427/2/w/444/6688368427_2_1_1.jpg?ts=1629882542785",
        productName: "THE 90S SLIM FIT JEANS",
        price: "₹ 2,490.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Trousers",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/9632/309/401/2/w/444/9632309401_2_1_1.jpg?ts=1632485888406",
        productName: "TEXTURED COTTON TROUSERS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Trousers",
        sale: 60,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6688/316/709/2/w/444/6688316709_2_1_1.jpg?ts=1633514006739",
        productName: "THE 90S CROPPED FIT JEANS",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Trousers",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/2649/455/710/2/w/444/2649455710_2_1_1.jpg?ts=1628092549536",
        productName: "COTTON - LYOCELL TROUSERS",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Trousers",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4161/302/600/2/w/444/4161302600_2_1_1.jpg?ts=1629820726346",
        productName: "JOGGING TROUSERS WITH SIDE STRIPES",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Trousers",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/9632/305/600/2/w/444/9632305600_2_1_1.jpg?ts=1632328635845",
        productName: "FLORAL PRINT TROUSERS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Trousers",
        sale: 60,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6861/352/251/2/w/444/6861352251_2_1_1.jpg?ts=1627902247424",
        productName: "COTTON PLEATED TROUSERS",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Trousers",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/1/p/5862/472/800/2/w/444/5862472800_2_1_1.jpg?ts=1638531159793",
        productName: "SOFT DENIM TROUSERS",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Trousers",
        sale: 55,
      },
    
      //SHORTS
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/1538/395/600/2/w/444/1538395600_2_1_1.jpg?ts=1627028315740",
        productName: "FLORAL PRINT BERMUDA SHORTS",
        price: "₹ 590.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "male",
        itemCategory: "Shorts",
        sale: 70,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4090/314/712/22/w/444/4090314712_2_1_1.jpg?ts=1626187210769",
        productName: "ABSTRACT PRINT KNIT BERMUDA SHORTS",
        price: "₹ 590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Shorts",
        sale: 75,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4365/404/406/2/w/444/4365404406_2_1_1.jpg?ts=1620814292315",
        productName: "RIPPED DENIM BERMUDA SHORTS",
        price: "₹ 590.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "male",
        itemCategory: "Shorts",
        sale: 60,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4130/401/251/2/w/444/4130401251_2_1_1.jpg?ts=1626249137154",
        productName: "CONTRAST BERMUDA SHORTS",
        price: "₹ 590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Shorts",
        sale: 75,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0679/303/015/22/w/444/0679303015_2_1_1.jpg?ts=1626186975611",
        productName: "STRIPED JOGGING BERMUDA SHORTS",
        price: "₹ 590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Shorts",
        sale: 75,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/V/0/2/p/4365/430/800/2/w/444/4365430800_2_1_1.jpg?ts=1619780655556",
        productName: "STRAIGHT FIT DENIM BERMUDA SHORTS",
        price: "₹ 590.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "male",
        itemCategory: "Shorts",
        sale: 60,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6786/425/710/3/w/444/6786425710_2_1_1.jpg?ts=1626304080448",
        productName: "BERMUDA SHORTS WITH SIDE TAPING",
        price: "₹ 590.00",
        strikedPrice: "₹ 2,490.00",
        itemGender: "male",
        itemCategory: "Shorts",
        sale: 75,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/1538/431/427/2/w/444/1538431427_2_1_1.jpg?ts=1624881300886",
        productName: "SKATE FIT DENIM BERMUDA SHORTS",
        price: "₹ 590.00",
        strikedPrice: "₹ 2,490.00",
        itemGender: "male",
        itemCategory: "Shorts",
        sale: 75,
      },
      //ZARA ATHLETICS
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/2651/402/800/2/w/444/2651402800_6_1_1.jpg?ts=1632839329295",
        productName: "TECHNICAL T-SHIRT WITH ZIP",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 3,990.00",
        itemGender: "male",
        itemCategory: "Zara_Athleticz",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0761/603/681/2/w/444/0761603681_6_1_1.jpg?ts=1632944352739",
        productName: "HOODIE",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Zara_Athleticz",
        sale: 40,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/2651/402/442/2/w/444/2651402442_6_1_1.jpg?ts=1632843098235",
        productName: "TECHNICAL T-SHIRT WITH ZIP",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 3,990.00",
        itemGender: "male",
        itemCategory: "Zara_Athleticz",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0119/403/524/2/w/444/0119403524_6_1_1.jpg?ts=1632837484798",
        productName: "SEAMLESS SINGLET TOP",
        price: "₹ 790.00",
        strikedPrice: "₹ 1,890.00",
        itemGender: "male",
        itemCategory: "Zara_Athleticz",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/5644/404/803/2/w/444/5644404803_6_1_1.jpg?ts=1635944504115",
        productName: "ZIP-UP NEXT T-SHIRT",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Zara_Athleticz",
        sale: 40,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0119/403/803/2/w/444/0119403803_6_1_1.jpg?ts=1632904303431",
        productName: "SEAMLESS SINGLET TOP",
        price: "₹ 790.00",
        strikedPrice: "₹ 1,890.00",
        itemGender: "male",
        itemCategory: "Zara_Athleticz",
        sale: 40,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/1368/402/803/2/w/444/1368402803_6_1_1.jpg?ts=1635944590857",
        productName: "SEAMLESS LEGGINGS",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Zara_Athleticz",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0119/402/524/2/w/444/0119402524_6_1_1.jpg?ts=1632837528646",
        productName: "LONG SLEEVE SEAMLESS T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Zara_Athleticz",
        sale: 65,
      },
    ];



var topobj=[
    // 1
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/272/623/2/w/437/4437272623_1_1_1.jpg?ts=1627568609620",
        productName: "PRINTED MIDI DRESS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "60%"
    },
    // 2
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2969/287/800/2/w/437/2969287800_1_1_1.jpg?ts=1631872676085",
        productName: "FAUX LEATHER DRESS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "60%"
    },
    // 3
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7102/215/800/2/w/334/7102215800_2_6_1.jpg?ts=1630068751354",
        productName: "LEGGINGS WITH VENT",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "60%"
    },
    // 4
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/242/806/2/w/334/9479242806_1_1_1.jpg?ts=1639735796124",
        productName: "CARROT FIT CROPPED TROUSERS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "40%"
    },
    // 5
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/312/800/2/w/334/4437312800_15_4_1.jpg?ts=1630577879162",
        productName: "LINEN BLEND DRESS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "60%"
    },
    // 6
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/311/800/2/w/334/4437311800_2_4_1.jpg?ts=1630498559867",
        productName: "LINEN BLEND TOP",
        price: "₹ 890.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "60%"
    },
    // 7
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/268/629/2/w/334/7563268629_2_1_1.jpg?ts=1632486605364",
        productName: "VOLUMINOUS POPLIN SHIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "45%"
    },
    // 8
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8561/577/400/2/w/334/8561577400_1_1_1.jpg?ts=1632910749725",
        productName: "FINE CORDUROY SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "50%"
    },
    // 9  
    {
        imageURL: "https://static.zara.net/photos///2021/V/0/1/p/0858/095/250/2/w/334/0858095250_2_1_1.jpg?ts=1617808052390",
        productName: "LYOCELL V-NECK T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "50%"
    },
    // 10 
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4437/042/507/2/w/334/4437042507_2_1_1.jpg?ts=1636560539578",
        productName: "FITTED KNIT BLOUSE",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "50%"
    },
    // 11 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8977/655/500/2/w/334/8977655500_1_1_1.jpg?ts=1631092924659",
        productName: "PRINTED MIDI DRESS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "50%"
    },
    // 12  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5107/300/519/2/w/334/5107300519_2_2_1.jpg?ts=1627397400600",
        productName: "LONG EMBROIDERED DRESS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "STARTING FROM 40%",
        sale: "50%"
    },
    // 2==1
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4369/254/800/12/w/334/4369254800_1_1_1.jpg?ts=1634205243744",
        productName: "QUILTED JACKET",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "45%"
    },
    // 2==2
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4369/254/800/3/w/334/4369254800_2_3_1.jpg?ts=1633623294149",
        productName: "QUILTED JACKET",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "45%"
    },
    //  2==3
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2010/739/612/2/w/334/2010739612_1_1_1.jpg?ts=1636472339384",
        productName: "FAUX SHEARLING OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "45%"
    },
    // 2==4
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2712/312/826/2/w/334/2712312826_1_1_1.jpg?ts=1629886294215",
        productName: "BLOCK SWEATSHI",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "45%"
    },
    // 2==5
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8197/711/505/2/w/437/8197711505_6_1_1.jpg?ts=1632327855935",
        productName: "JACKET WITH POCKETS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "60%"
    },
    // 2==6
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0858/626/409/2/w/437/0858626409_1_1_1.jpg?ts=1629901592395",
        productName: "RETRO JACKET",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "40%"
    },
    // 2==7
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4877/250/800/2/w/437/4877250800_2_1_1.jpg?ts=1633520163851",
        productName: "DENIM OVERSHIRT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "30%"
    },
    // 2==8
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2969/094/505/2/w/437/2969094505_6_1_1.jpg?ts=1628601765316",
        productName: "WATER-REPELLENT PACKAWAY JACKET",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "30%"
    },
    // 2==9  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5598/243/600/2/w/334/5598243600_2_3_1.jpg?ts=1626886150232",
        productName: "REVERSIBLE PRINTED KIMONO",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "30%"
    },
    // 2==10  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2903/062/712/2/w/334/2903062712_1_1_1.jpg?ts=1622448126787",
        productName: "SHORT KIMONO WITH BELT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "30%"
    },
    // 2==11  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8716/744/515/2/w/334/8716744515_2_5_1.jpg?ts=1630401056004",
        productName: "WOOL BLEND COAT WITH GOLDEN BUTT..",
        price: "₹ 4,990.00",
        strikedPrice: "₹ 9,990.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "50%"
    },
    // 2==12  
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/2010/748/700/2/w/334/2010748700_1_1_1.jpg?ts=1637858335093",
        productName: "CROPPED CHECK BLAZER",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "JACKETS_PUFFERS",
        sale: "50%"
    },
    // 3==1
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8726/749/716/2/w/334/8726749716_2_1_1.jpg?ts=1631202978380",
        productName: "TAILORED BLAZER",
        price: "₹ 3,990.00",
        strikedPrice: "₹ 7,990.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "50%"
    },
    // 3==2
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3187/273/250/3/w/334/3187273250_2_3_1.jpg?ts=1623917995622",
        productName: "TEXTURED CROPPED BLAZER",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,490.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "45%"
    },
    // 3==3
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9006/968/800/2/w/334/9006968800_2_3_1.jpg?ts=1632486631488",
        productName: "GATHERED BLAZER",
        price: "₹ 3,990.00",
        strikedPrice: "₹ 7,990.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "50%"
    },
    // 3==4 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7720/805/736/2/w/334/7720805736_1_1_1.jpg?ts=1620921049302",
        productName: "STRAIGHT LINEN BLAZER",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 6,990.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "55%"
    },
    // 3==5 
    {
        imageURL: "https://static.zara.net/photos///2021/V/0/1/p/3187/273/250/2/w/334/3187273250_1_1_1.jpg?ts=1619601165162",
        productName: "TEXTURED CROPPED BLAZER",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,490.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "45%"
    },
    // 3==6
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9577/722/706/2/w/334/9577722706_1_1_1.jpg?ts=1637916751505",
        productName: "CREASED-EFFECT SATIN BLAZER",
        price: "₹ 3,990.00",
        strikedPrice: "₹ 6,990.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "40%"
    },
    // 3==7
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9033/718/800/2/w/334/9033718800_1_1_1.jpg?ts=1638866546879",
        productName: "WOOL BLEND STRIPED FROCK COAT",
        price: "₹ 4,990.00",
        strikedPrice: "₹ 10,990.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "50%"
    },
    // 3==8
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8763/822/802/2/w/334/8763822802_1_1_1.jpg?ts=1634105994980",
        productName: "LIMITED EDITION PINSTRIPE BLAZER",
        price: "₹ 3,990.00",
        strikedPrice: "₹ 9,990.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "60%"
    },
    // 3==9  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9095/725/800/2/w/334/9095725800_1_1_1.jpg?ts=1632481147339",
        productName: "DINNER JACKET LIMITED EDITION",
        price: "₹ 3,990.00",
        strikedPrice: "₹ 9,990.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "60%"
    },
    // 3==10
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9548/793/800/3/w/334/9548793800_15_1_1.jpg?ts=1638443639152",
        productName: "MATCHING VELVET WAISTCOAT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "60%"
    },
    // 3==11  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4661/708/800/72/w/334/4661708800_2_2_1.jpg?ts=1621424472587",
        productName: "LINEN BLEND HALTERNECK WAISTCOAT",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "60%"
    },
    // 3==12
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7784/587/710/72/w/334/7784587710_2_3_1.jpg?ts=1621945692184",
        productName: "OVERSIZE FLOWING BLAZER",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 6,990.00",
        itemGender: "female",
        itemCategory: "BLAZERS_COATS",
        sale: "60%"
    },
    // 4==1  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/272/623/2/w/334/4437272623_1_1_1.jpg?ts=1627568609620",
        productName: "PRINTED MIDI DRESS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==2
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2969/287/800/2/w/334/2969287800_1_1_1.jpg?ts=1631872676085",
        productName: "FAUX LEATHER DRESS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ ₹ 4,590.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==3
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/312/800/2/w/334/4437312800_2_2_1.jpg?ts=1630498686776",
        productName: "LINEN BLEND DRESS WITH CUT-OUT",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==4
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8990/608/538/2/w/334/8990608538_2_4_1.jpg?ts=1632407623736",
        productName: "SATIN MIDI DRESS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==5  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5107/300/519/2/w/334/5107300519_2_2_1.jpg?ts=1627397400600",
        productName: "LONG EMBROIDERED DRESS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "70%"
    },
    // 4==6
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9182/211/330/2/w/334/9182211330_1_1_1.jpg?ts=1632929118320",
        productName: "RUFFLED PRINTED DRESS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==7
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0387/188/800/2/w/334/0387188800_1_1_1.jpg?ts=1631186717492",
        productName: "MINI DRESS WITH KNOT",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==8  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2183/263/800/2/w/334/2183263800_2_15_1.jpg?ts=1632299076589",
        productName: "PRINTED SATIN DRESS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==9  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4877/243/800/2/w/334/4877243800_2_1_1.jpg?ts=1630401140733",
        productName: "DENIM DRESS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==10  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1131/847/061/2/w/334/1131847061_1_1_1.jpg?ts=1621326407949",
        productName: "KAPPA UNITARD",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==11  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8671/542/050/2/w/334/8671542050_1_1_1.jpg?ts=1629884212803",
        productName: "PRINTED SATIN DRESS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 4==12   
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7901/423/800/2/w/334/7901423800_1_1_1.jpg?ts=1631110293978",
        productName: "RIBBED MIDI DRESS",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "DRESSES_JUMPSUITS",
        sale: "60%"
    },
    // 5==1 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7957/021/712/3/w/334/7957021712_2_1_1.jpg?ts=1624019882619",
        productName: "TEXTURED PRINTED BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==2  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8561/577/400/2/w/334/8561577400_1_1_1.jpg?ts=1632910749725",
        productName: "FINE CORDUROY SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "50%"
    },
    // 5==3  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7484/166/942/2/w/334/7484166942_1_1_1.jpg?ts=1630580738069",
        productName: "FLOWING JACQUARD SHIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==4  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/268/629/2/w/334/7563268629_2_1_1.jpg?ts=1632486605364",
        productName: "VOLUMINOUS POPLIN SHIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==5  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/252/606/2/w/334/7563252606_2_1_1.jpg?ts=1627046994062",
        productName: "CROSSOVER PRINTED BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==6  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8351/239/330/2/w/334/8351239330_1_1_1.jpg?ts=1634294247335",
        productName: "PRINTED PLEATED BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==7   
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4437/042/507/2/w/334/4437042507_2_1_1.jpg?ts=1636560539578",
        productName: "FITTED KNIT BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==8  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/242/506/2/w/334/2143242506_2_2_1.jpg?ts=1627046995619",
        productName: "STRIPED BLOUSE WITH POCKET",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==9  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/244/746/2/w/334/2143244746_2_1_1.jpg?ts=1628782308563",
        productName: "RUSTIC TOP WITH POCKET",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==10
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2298/218/330/2/w/334/2298218330_2_1_1.jpg?ts=1632479467987",
        productName: "FLORAL PRINT BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==11  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/241/426/2/w/334/2143241426_2_1_1.jpg?ts=1623939956197",
        productName: "TEXTURED COTTON BLOUSE",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 5==12  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/080/251/2/w/334/9479080251_2_3_1.jpg?ts=1627047029125",
        productName: "LOOSE-FITTING SHIRT WITH POCKETS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SHIRTS",
        sale: "45%"
    },
    // 6==1  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8246/242/403/2/w/334/8246242403_2_1_1.jpg?ts=1628174682184",
        productName: "ZW THE CARPENTER STRAIGHT JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "40%"
    },
    // 6==2  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9632/240/251/2/w/334/9632240251_1_1_1.jpg?ts=1625061419331",
        productName: "ZW THE MERCER JOGGER JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "40%"
    },
    // 6==3  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0060/216/104/17/w/334/0060216104_6_1_1.jpg?ts=1626687375093",
        productName: "FLARE STRIPED CROPPED JEANS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },
    // 6==4  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9632/258/800/2/w/334/9632258800_1_1_1.jpg?ts=1639496394747",
        productName: "SPLIT HEM ZW THE SKINNY JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },
    // 6==5
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8197/210/251/2/w/334/8197210251_1_1_1.jpg?ts=1623162615161",
        productName: "FLARED TROUSERS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },
    // 6==6  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6164/226/805/2/w/334/6164226805_1_1_1.jpg?ts=1639043102110",
        productName: "Z1975 HIGH RISE SLIM FLARE JEANS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },
    // 6==7 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8246/250/446/2/w/334/8246250446_1_1_1.jpg?ts=1627641955263",
        productName: "ZW THE SKINNY FLARE JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },
    // 6==8
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9863/243/400/3/w/334/9863243400_1_1_1.jpg?ts=1627291372223",
        productName: "ZW THE SKINNY FLARE JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },
    // 6==9
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2553/262/400/2/w/334/2553262400_2_10_1.jpg?ts=1639735736183",
        productName: "ZW THE 90S SLIM SPLIT-HEM JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },
    // 6==10
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6164/226/805/2/w/334/6164226805_1_1_1.jpg?ts=1639043102110",
        productName: "Z1975 HIGH RISE SLIM FLARE JEANS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },
    // 6==11  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6840/245/620/2/w/334/6840245620_2_6_1.jpg?ts=1627370803933",
        productName: "JEANS ZW THE NOA MOM FIT",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },
    // 6==12
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9863/252/407/3/w/334/9863252407_1_1_1.jpg?ts=1636045574689",
        productName: "ZW THE SKINNY JEANS",
        price: "₹ 1,790.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "JEANS",
        sale: "55%"
    },

    // 7==1
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7102/215/800/2/w/334/7102215800_2_6_1.jpg?ts=1630068751354",
        productName: "EXTRA-LONG LEGGINGS WITH VENT===",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "60%"
    },
    // 7==2
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/242/806/2/w/334/9479242806_1_1_1.jpg?ts=1639735796124",
        productName: "CARROT FIT CROPPED TROUSERS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "60%"
    },
    // 7==3   
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/9479/284/700/2/w/334/9479284700_1_1_1.jpg?ts=1637684372845",
        productName: "SHIRRED WAIST TROUSERS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "45%"
    },
    // 7==4  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1165/468/500/2/w/334/1165468500_2_2_1.jpg?ts=1636545143518",
        productName: "FINELY PLEATED PALAZZO TROUSERS",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "50%"
    },
    // 7==5   
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8292/382/046/2/w/334/8292382046_1_1_1.jpg?ts=1626889458874",
        productName: "PRINTED CROPPED TROUSERS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "45%"
    },
    // 7==6  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9815/212/800/2/w/334/9815212800_2_4_1.jpg?ts=1630403040243",
        productName: "SPLIT HEM LEGGINGS",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,790.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "40%"
    },
    // 7==7
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3564/222/800/2/w/334/3564222800_1_1_1.jpg?ts=1627482619691",
        productName: "STRAIGHT-LEG PYJAMA-STYLE TROUSER",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "40%"
    },
    // 7==8 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5580/035/710/2/w/334/5580035710_2_4_1.jpg?ts=1626436778682",
        productName: "RIBBED WIDE-LEG TROUSERS",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "50%"
    },
    // 7==9  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8527/353/030/2/w/334/8527353030_1_1_1.jpg?ts=1627648909636",
        productName: "FLORAL PRINT TROUSERS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "45%"
    },
    // 7==10  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7290/041/500/2/w/334/7290041500_1_1_1.jpg?ts=1620379265369",
        productName: "SLIM FIT PRINTED TROUSERS",
        price: "₹ 890.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "30%"
    },
    // 7==11  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/246/426/3/w/334/9479246426_1_1_1.jpg?ts=1624019891172",
        productName: "TEXTURED COTTON TROUSERS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "45%"
    },
    // 7==12  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7385/268/050/2/w/334/7385268050_1_1_1.jpg?ts=1632322997223",
        productName: "PRINTED FLARED TROUSERS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "TROUSERS",
        sale: "40%"
    },
    // 8==1  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4424/854/513/2/w/334/4424854513_6_1_1.jpg?ts=1622714535765",
        productName: "V-NECK BASIC T-SHIRT",
        price: "₹ 390.00",
        strikedPrice: "₹ 590.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "30%"
    },
    // 8==2
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7901/484/250/2/w/334/7901484250_6_1_1.jpg?ts=1626777191810",
        productName: "RIBBED POLO SHIRT",
        price: "₹ 590.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "60%"
    },
    // 8==3   
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6050/319/099/2/w/334/6050319099_2_1_1.jpg?ts=1635258853922",
        productName: "CUT-OUT RIBBED TOP",
        price: "₹ 790.00",
        strikedPrice: "₹ 1,790.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "55%"
    },
    // 8==4  
    {
        imageURL: "https://static.zara.net/photos///2021/V/0/1/p/4174/343/710/2/w/334/4174343710_6_1_1.jpg?ts=1615886104474",
        productName: "BASIC TANK TOP",
        price: "₹ 390.00",
        strikedPrice: "₹ 590.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "30%"
    },
    // 8==5   
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1660/811/800/2/w/334/1660811800_6_1_1.jpg?ts=1628769671624",
        productName: "T-SHIRT WITH BUTTON DETAILS",
        price: "₹ 490.00",
        strikedPrice: "₹ 890.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "30%"
    },
    // 8==6  
    {
        imageURL: "https://static.zara.net/photos///2021/V/0/1/p/1044/159/737/2/w/334/1044159737_6_1_1.jpg?ts=1617020365137",
        productName: "ASYMMETRIC OVERSIZED T-SHIRT",
        price: "₹ 790.00",
        strikedPrice: "₹ 1,790.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "55%"
    },
    // 8==7
    {
        imageURL: "https://static.zara.net/photos///2021/V/0/1/p/0858/095/250/2/w/334/0858095250_6_1_1.jpg?ts=1617692828251",
        productName: "LYOCELL V-NECK T-SHIRT",
        price: "₹ 590.00",
        strikedPrice: "₹ 1,490.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "30%"
    },
    // 8==8 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0962/376/500/2/w/34/0962376500_6_1_1.jpg?ts=1621930685229",
        productName: "BASIC TANK TOP",
        price: "₹ 390.00",
        strikedPrice: "₹ 490.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "30%"
    },
    // 8==9  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5644/806/426/2/w/334/5644806426_6_1_1.jpg?ts=1627385522714",
        productName: "OVERSIZE V-NECK T-SHIRT",
        price: "₹ 590.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "60%"
    },
    // 8==10  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5644/816/400/2/w/334/5644816400_2_1_1.jpg?ts=1629303550438",
        productName: "ASYMMETRIC TOP",
        price: "₹ 590.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "60%"
    },
    // 8==11 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0264/470/406/2/w/334/0264470406_6_1_1.jpg?ts=1626350283035",
        productName: "CROPPED POLO SHIRT",
        price: "₹ 790.00",
        strikedPrice: "₹ 1,790.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "55%"
    },
    // 8==12  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7901/345/613/2/w/334/7901345613_1_1_1.jpg?ts=1629889209696",
        productName: "SEAMLESS TOP",
        price: "₹ 590.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "female",
        itemCategory: "T-SHIRTS",
        sale: "60%"
    },
    // 9==1  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/311/800/2/w/334/4437311800_2_1_1.jpg?ts=1630498628529",
        productName: "LINEN BLEND TOP WITH CUT-OUT DETAIL",
        price: "₹ 890.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "30%"
    },
    // 9==2  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3067/469/611/17/w/334/3067469611_1_1_1.jpg?ts=1635155193868",
        productName: "SATIN CAMISOLE TOP",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "70%"
    },
    // 9==3
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3067/455/050/2/w/334/3067455050_1_1_1.jpg?ts=1628759026107",
        productName: "CROPPED CORSETRY-INSPIRED CHECK..",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "50%"
    },
    // 9==4  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3253/325/060/2/w/334/3253325060_2_1_1.jpg?ts=1622630295369",
        productName: "STRAPPY BODYSUIT",
        price: "₹ 490.00",
        strikedPrice: "₹ 990.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "50%"
    },
    // 9==5  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9219/561/051/2/w/334/9219561051_1_1_1.jpg?ts=1634568074769",
        productName: "PRINTED LINGERIE TOP",
        price: "₹ 690.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "65%"
    },
    // 9==6   
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4661/480/668/2/w/334/4661480668_2_1_1.jpg?ts=1626866643029",
        productName: "SATIN-EFFECT STRAPPY BODYSUIT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "50%"
    },
    //  9==7  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/244/746/2/w/334/2143244746_1_1_1.jpg?ts=1628781667372",
        productName: "RUSTIC TOP WITH POCKET",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "45%"
    },
    // 9==8  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5216/251/982/2/w/334/5216251982_2_1_1.jpg?ts=1627568607188",
        productName: "PRINTED TUNIC",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "45%"
    },
    // 9==9  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8490/336/330/2/w/334/8490336330_1_1_1.jpg?ts=1629464122450",
        productName: "PRINTED PATCHWORK TOP",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "40%"
    },
    // 9==10  
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4331/138/330/12/w/334/4331138330_2_9_1.jpg?ts=1640003479715",
        productName: "JACQUARD TOP WITH CUT-OUT DETAIL",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "35%"
    },
    // 9==11 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2731/040/303/4/w/334/2731040303_2_10_1.jpg?ts=1639734568285",
        productName: "ASYMMETRIC TOP",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "40%"
    },
    // 9==12  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8784/671/050/2/w/334/8784671050_1_1_1.jpg?ts=1629904128613",
        productName: "FLORAL PRINT ASYMMETRIC TOP",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "TOPS_BODYSUITS",
        sale: "60%"
    },
    // 10==1  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1165/230/032/2/w/334/1165230032_2_3_1.jpg?ts=1633000926818",
        productName: "",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==2  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1165/222/500/2/w/334/1165222500_6_1_1.jpg?ts=1626161411421",
        productName: "TULLE MIDI SKIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "60%"
    },
    // 10==3  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7385/233/700/2/w/334/7385233700_1_1_1.jpg?ts=1631693265979",
        productName: "FLORAL SKORT",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==4   
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0327/003/050/2/w/334/0327003050_6_1_1.jpg?ts=1624266674909",
        productName: "STRAIGHT SHORTS WITH DAISY PRINT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==5  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6840/247/800/2/w/334/6840247800_6_1_1.jpg?ts=1621521765301",
        productName: "ZW THE HIGH WAIST SHORTS",
        price: "₹2,790.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==6  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7839/419/600/3/w/334/7839419600_1_1_1.jpg?ts=1628073456936",
        productName: "STRAIGHT SATIN SKIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==7  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1971/222/400/2/w/334/1971222400_2_3_1.jpg?ts=1626274609977",
        productName: "FLORAL SKORT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==8  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1608/038/800/2/w/334/1608038800_1_1_1.jpg?ts=1622112454813",
        productName: "POLKA DOT SKORTS",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==9  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8991/320/330/2/w/334/8991320330_2_2_1.jpg?ts=1631718366620",
        productName: "FLORAL PRINT SKIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==10 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2183/248/800/2/w/334/2183248800_1_1_1.jpg?ts=1626939170220",
        productName: "PRINTED SARONG SKIRT",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==11  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4387/230/085/2/w/334/4387230085_2_3_1.jpg?ts=1627482612788",
        productName: "GINGHAM SKORT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 10==12  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5862/163/406/17/w/334/5862163406_1_1_1.jpg?ts=1626251155044",
        productName: "BELTED BERMUDA SHORTS",
        price: "₹ 1,190.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "SKIRTS_SHORTS",
        sale: "45%"
    },
    // 11==1  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3653/109/305/2/w/334/3653109305_2_1_1.jpg?ts=1632929485827",
        productName: "KNIT FAUX FUR WAISTCOAT WITH OPENI",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "40%"
    },
    // 11==2  
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/6771/021/070/2/w/334/6771021070_2_9_1.jpg?ts=1639135334178",
        productName: "WOOL BLEND AND CASHMERE SWEATER",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "30%"
    },
    // 11==3  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5536/123/704/12/w/334/5536123704_2_2_1.jpg?ts=1633697178162",
        productName: "OVERSIZE KNIT PULLOVER WITH HOOD",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "40%"
    },
    // 11==4  
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/6771/021/104/2/w/334/6771021104_2_9_1.jpg?ts=1639134203728",
        productName: "WOOL BLEND AND CASHMERE SWEATER",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "30%"
    },
    // 11==5  
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/6771/021/070/12/w/334/6771021070_2_1_1.jpg?ts=1640188108005",
        productName: "WOOL BLEND AND CASHMERE SWEATER",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "30%"
    },
    // 11==6  
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4331/138/330/12/w/334/4331138330_2_9_1.jpg?ts=1640003479715",
        productName: "JACQUARD TOP WITH CUT-OUT DETAIL",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "30%"
    },
    // 11==7  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5802/111/330/12/w/334/5802111330_2_3_1.jpg?ts=1632155779744",
        productName: "CABLE-KNIT SWEATER WITH STRIPES",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "30%"
    },
    // 11==8  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1383/008/104/17/w/334/1383008104_2_3_1.jpg?ts=1628240767816",
        productName: "HOODED KNIT TOP",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "30%"
    },
    // 11==9 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5802/143/330/18/w/331/5802143330_1_1_1.jpg?ts=1628240772843",
        productName: "KNIT FLORAL CROP TOP",
        price: "₹ 790.00",
        strikedPrice: "₹ 990.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "20%"
    },
    // 11==10  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2712/312/826/2/w/331/2712312826_1_1_1.jpg?ts=1629886294215",
        productName: "CONTRASTING COLOUR BLOCK SWEATSHIR..",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "35%"
    },
    // 11==11 
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4331/024/716/2/w/331/4331024716_1_1_1.jpg?ts=1639495673304",
        productName: "KNIT TOP WITH OPEN BACK",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "20%"
    },
    // 11==12 
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5536/051/104/2/w/331/5536051104_1_1_1.jpg?ts=1633537948494",
        productName: "STRIPED KNIT VEST",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "KNITWEAR",
        sale: "35%"
    },
    // 12==1  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3920/221/600/2/w/334/3920221600_6_1_1.jpg?ts=1631116860085",
        productName: "MOBILE PHONE BAG WITH PURSE",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,790.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "40%"
    },
    // 12==2  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4736/394/641/2/w/334/4736394641_6_1_1.jpg?ts=1635233612330",
        productName: "CONTRASTING STONE BEAD NECKLACE",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "60%"
    },
    // 12==3  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1124/230/303/2/w/334/1124230303_2_1_1.jpg?ts=1636388922593",
        productName: "PEARL NECKLACE PLATED IN 24K GOLD",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "50%"
    },
    // 12==4  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3920/284/800/2/w/334/3920284800_6_1_1.jpg?ts=1634906572935",
        productName: "DIAMOND JACQUARD SCARF",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "35%"
    },
    // 12==5  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1023/211/083/2/w/334/1023211083_6_1_1.jpg?ts=1635178064567",
        productName: "KNIT FRETWORK BEANIE",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "35%"
    },
    // 12==6  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3739/278/500/2/w/334/3739278500_2_1_1.jpg?ts=1636562697064",
        productName: "KNIT SCARF WITH FRINGING",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "35%"
    },
    // 12==7   
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4319/292/330/2/w/334/4319292330_6_1_1.jpg?ts=1629368173209",
        productName: "MAXI RHINESTONE BELT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "50%"
    },
    // 12==8  
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4548/227/641/2/w/334/4548227641_1_1_1.jpg?ts=1635344489601",
        productName: "ROUND STONE NECKLACE",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "50%"
    },
    // 12==9  
    {
        imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4736/002/800/2/w/331/4736002800_1_1_1.jpg?ts=1637842608605",
        productName: "STRETCH DIAMANTÉ BELT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "40%"
    },
    // 12==10 
    {
        imageURL: "https://static.zara.net/photos///2021/V/2/1/p/0047/056/999/2/w/331/0047056999_6_1_1.jpg?ts=1610612773197",
        productName: "PARIS 10ML",
        price: "₹ 290.00",
        strikedPrice: "₹ 390.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "20%"
    },
    // 12==11  
    {
        imageURL: "https://static.zara.net/photos///2021/I/1/1/p/6723/810/040/2/w/331/6723810040_15_1_1.jpg?ts=1631721686681",
        productName: "NYLON TOTE BAG - YOGA COLLECTION",
        price: "₹ 3,990.00",
        strikedPrice: "₹ 4,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "20%"
    },
    // 12==12
    {
        imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4736/249/303/2/w/334/4736249303_6_1_1.jpg?ts=1625156556307",
        productName: "PACK OF ASSORTED BRACELETS",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "40%"
    },
]





// -----------------



var shoesobj=[
    {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2216/820/001/2/w/444/2216820001_6_1_1.jpg?ts=1625150699838",
        productName : "MULTI-PIECE SNEAKERS",
        strikedPrice : "₹ 3,590.00",
        price : "₹ 1,990.00",
        itemGender : "Men",
        itemCategory : "SNEAKERS",
        sale : "40%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2600/820/010/2/w/444/2600820010_6_1_1.jpg?ts=1622715909338",
        productName : "DECK SHOES",
        strikedPrice : "₹ 2,590.00",
        price : "₹ 990.00",
        itemGender : "Men",
        itemCategory : "SNEAKERS",
        sale : "60%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/V/1/2/p/2617/720/010/2/w/444/2617720010_6_1_1.jpg?ts=1617782241039",
        productName : "SOFT LEATHER LOAFERS",
        strikedPrice : "₹ 4,990.00",
        price : "₹ 2,990.00",
        itemGender : "Men",
        itemCategory : "LOAFERS",
        sale : "40%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2702/820/107/2/w/444/2702820107_6_1_1.jpg?ts=1625075869351",
        productName : "JETFOAM CLOGS",
        strikedPrice : "₹ 2,290.00",
        price : "₹ 1,290.00",
        itemGender : "Men",
        itemCategory : "SANDALS",
        sale : "40%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2201/820/203/2/w/444/2201820203_15_2_1.jpg?ts=1626253165134",
        productName : "CONTRAST TRAINERS",
        strikedPrice : "₹ 2,990.00",
        price : "₹ 1,990.00",
        itemGender : "Men",
        itemCategory : "TRAINERS",
        sale : "30%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2001/820/102/2/w/444/2001820102_6_1_1.jpg?ts=1630572812137",
        productName : "SPLIT SUEDE LEATHER ANKLE BOOTS WITH CHUNKY SOLE",
        strikedPrice : "₹ 6,990.00",
        price : "₹ 3,990.00",
        itemGender : "Men",
        itemCategory : "BOOTS",
        sale : "40%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2121/822/092/2/w/444/2121822092_6_1_1.jpg?ts=1635508326451",
        productName : "METALLIC HIGH-TOP SNEAKERS",
        strikedPrice : "₹ 3,990.00",
        price : "₹ 2,490.00",
        itemGender : "Men",
        itemCategory : "SNEAKERS",
        sale : "35%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2722/720/023/2/w/444/2722720023_6_1_1.jpg?ts=1621412679217",
        productName : "CONTRAST ESPADRILLES",
        strikedPrice : "₹ 2,290.00",
        price : "₹ 1,290.00",
        itemGender : "Men",
        itemCategory : "ESPADRILLES",
        sale : "40%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2513/820/040/2/w/444/2513820040_6_1_1.jpg?ts=1627907045349",
        productName : "CHUNKY MONK SHOES",
        strikedPrice : "₹ 3,990.00",
        price : "₹ 2,490.00",
        itemGender : "Men",
        itemCategory : "SHOES",
        sale : "35%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2504/721/010/2/w/444/2504721010_15_2_1.jpg?ts=1626345181708",
        productName : "SOFT SPLIT SUEDE DERBY SHOES",
        strikedPrice : "₹ 3,990.00",
        price : "₹ 2,490.00",
        itemGender : "Men",
        itemCategory : "SHOES",
        sale : "35%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2708/820/040/24/w/444/2708820040_15_2_1.jpg?ts=1626776813846",
        productName : "WOVEN STRAP SANDALS",
        strikedPrice : "₹ 2,990.00",
        price : "₹ 1,790.00",
        itemGender : "Men",
        itemCategory : "SANDALS",
        sale : "40%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2027/820/040/2/w/444/2027820040_6_1_1.jpg?ts=1633078438378",
        productName : "CHELSEA BOOTS WITH CHUNKY SOLES",
        strikedPrice : "₹ 5,590.00",
        price : "₹ 2,990.00",
        itemGender : "Men",
        itemCategory : "BOOTS",
        sale : "45%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2323/820/202/2/w/444/2323820202_6_1_1.jpg?ts=1630655451343",
        productName : "MULTI-PIECE RUNNING TRAINERS",
        strikedPrice : "₹ 3,990.00",
        price : "₹ 2,490.00",
        itemGender : "Men",
        itemCategory : "TRAINERS",
        sale : "40%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2422/820/040/2/w/444/2422820040_6_1_1.jpg?ts=1632998842475",
        productName : "PATENT LACE-UP SHOES",
        strikedPrice : "₹ 3,990.00",
        price : "₹ 2,490.00",
        itemGender : "Men",
        itemCategory : "LACE-UP SHOES",
        sale : "30%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2332/821/202/2/w/444/2332821202_6_1_1.jpg?ts=1632151209366",
        productName : "TREK SNEAKERS",
        strikedPrice : "₹ 3,990.00",
        price : "₹ 2,490.00",
        itemGender : "Men",
        itemCategory : "SNEAKERS",
        sale : "35%"
        
          },
          {
        imageURL : "https://static.zara.net/photos///2021/I/1/2/p/2715/720/040/2/w/444/2715720040_15_2_1.jpg?ts=1626266812552",
        productName : "STRAPPY SANDALS",
        strikedPrice : "₹ 2,990.00",
        price : "₹ 1,790.00",
        itemGender : "Men",
        itemCategory : "SANDALS",
        sale : "40%"
        
          },
          //WOMEN
          {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/2171/810/004/2/w/444/2171810004_15_1_1.jpg?ts=1634135333139",
            productName : "LEATHER ANKLE BOOTS WITH TRACK SOLE",
            strikedPrice : "₹ 9,990.00",
            price : "₹ 4,990.00",
            itemGender : "Women",
            itemCategory : "BOOTS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/2400/810/040/2/w/444/2400810040_15_1_1.jpg?ts=1623339091236",
            productName : "CONTRAST SNEAKERS ",
            strikedPrice : "₹ 5,990.00",
            price : "₹ 2,990.00",
            itemGender : "Women",
            itemCategory : "SNEAKERS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/1667/810/032/2/w/444/1667810032_15_1_1.jpg?ts=1630667317869",
            productName : "FLAT TOWELLING SANDALS",
            strikedPrice : "₹ 4,990.00",
            price : "₹ 2,990.00",
            itemGender : "Women",
            itemCategory : "SANDALS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/3426/810/012/2/w/444/3426810012_15_1_1.jpg?ts=1628600447468",
            productName : "CONTRAST-COLOURED HIGH-TOP TRAINERS",
            strikedPrice : "₹ 2,590.00",
            price : "₹ 1,590.00",
            itemGender : "Women",
            itemCategory : "TRAINERS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/1250/810/040/2/w/444/1250810040_15_1_1.jpg?ts=1636548037926",
            productName : "LEATHER SLINGBACK SHOES WITH METAL HEEL",
            strikedPrice : "₹ 8,990.00",
            price : "₹ 5,990.00",
            itemGender : "Women",
            itemCategory : "SANDALS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/2052/810/040/2/w/444/2052810040_15_1_1.jpg?ts=1632902031213",
            productName : "FLAT LEATHER BOOTS WITH BUCKLE",
            strikedPrice : "₹ 11,990.00",
            price : "₹ ₹ 7,990.00",
            itemGender : "Women",
            itemCategory : "BOOTS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/5003/810/202/2/w/444/5003810202_15_1_1.jpg?ts=1629977624324",
            productName : "RUNNING TRAINERS",
            strikedPrice : "₹ 7,990.00",
            price : "₹ 5,990.00",
            itemGender : "Women",
            itemCategory : "TRAINERS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/1634/810/102/2/w/444/1634810102_15_1_1.jpg?ts=1623753251462",
            productName : "FLAT SANDALS WITH LEATHER STRAPS",
            strikedPrice : "₹ 4,990.00",
            price : "₹ 2,990.00",
            itemGender : "Women",
            itemCategory : "SANDALS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/1240/810/070/2/w/444/1240810070_15_1_1.jpg?ts=1625744421037",
            productName : "WOODEN FUR CLOGS WITH STUDS",
            strikedPrice : "₹ 11,990.00",
            price : "₹ 7,990.00",
            itemGender : "Women",
            itemCategory : "WOODEN FUR CLOGS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/1839/810/040/2/w/444/1839810040_15_1_1.jpg?ts=1633526440137",
            productName : " LIMITED EDITION LEATHER PENNY LOAFERS",
            strikedPrice : "₹ 7,990.00",
            price : "₹ 7,990.00",
            itemGender : "Women",
            itemCategory : "LOAFERS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/1671/810/002/2/w/444/1671810002_15_1_1.jpg?ts=1636375203768",
            productName : "FLAT FABRIC SANDALS",
            strikedPrice : "₹ 10,990.00",
            price : "₹ 7,990.00",
            itemGender : "Women",
            itemCategory : "SANDALS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/3500/810/002/2/w/444/3500810002_15_1_1.jpg?ts=1622555767213",
            productName : "LACE ESPADRILLES",
            strikedPrice : "₹ 2,590.00",
            price : "₹ 1,490.00",
            itemGender : "Women",
            itemCategory : "ESPADRILLES",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/5305/810/030/2/w/444/5305810030_15_1_1.jpg?ts=1634824580107",
            productName : "CONTRAST COLOURED TRAINERS",
            strikedPrice : "₹ 2,990.00",
            price : "₹ 1,590.00",
            itemGender : "Women",
            itemCategory : "TRAINERS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/3154/810/032/2/w/444/3154810032_15_1_1.jpg?ts=1632153912376",
            productName : "STRETCH FABRIC ANKLE BOOTS",
            strikedPrice : "₹ 4,990.00",
            price : "₹ 2,990.00",
            itemGender : "Women",
            itemCategory : "BOOTS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/3649/710/040/2/w/444/3649710040_15_1_1.jpg?ts=1624270135742",
            productName : "FLAT RUBBERISED SANDALS",
            strikedPrice : "₹ 2,290.00",
            price : "₹ ₹ 1,190.00",
            itemGender : "Women",
            itemCategory : "SANDALS",
            sale : "60%"
              },
              {
            imageURL : "https://static.zara.net/photos///2021/I/1/1/p/3423/810/090/2/w/444/3423810090_15_1_1.jpg?ts=1628508304491",
            productName : "COLOURFUL TRAINERS",
            strikedPrice : "₹ 2,590.00",
            price : "₹ 1,590.00",
            itemGender : "Women",
            itemCategory : "TRAINERS",
            sale : "60%"
              }
];




















Dressobj=[
// 1
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/272/623/2/w/437/4437272623_1_1_1.jpg?ts=1627568609620",
    productName: "PRINTED MIDI DRESS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "60%"
},
// 2
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2969/287/800/2/w/437/2969287800_1_1_1.jpg?ts=1631872676085",
    productName: "FAUX LEATHER DRESS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "60%"
},
// 3
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7102/215/800/2/w/334/7102215800_2_6_1.jpg?ts=1630068751354",
    productName: "LEGGINGS WITH VENT",
    price: "₹ 990.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "60%"
},
// 4
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/242/806/2/w/334/9479242806_1_1_1.jpg?ts=1639735796124",
    productName: "CARROT FIT CROPPED TROUSERS",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "40%"
},
// 5
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/312/800/2/w/334/4437312800_15_4_1.jpg?ts=1630577879162",
    productName: "LINEN BLEND DRESS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "60%"
},
// 6
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/311/800/2/w/334/4437311800_2_4_1.jpg?ts=1630498559867",
    productName: "LINEN BLEND TOP",
    price: "₹ 890.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "60%"
},
// 7
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/268/629/2/w/334/7563268629_2_1_1.jpg?ts=1632486605364",
    productName: "VOLUMINOUS POPLIN SHIRT",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "45%"
},
// 8
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8561/577/400/2/w/334/8561577400_1_1_1.jpg?ts=1632910749725",
    productName: "FINE CORDUROY SHIRT",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "50%"
},
// 9  
{
    imageURL: "https://static.zara.net/photos///2021/V/0/1/p/0858/095/250/2/w/334/0858095250_2_1_1.jpg?ts=1617808052390",
    productName: "LYOCELL V-NECK T-SHIRT",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "50%"
},
// 10 
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4437/042/507/2/w/334/4437042507_2_1_1.jpg?ts=1636560539578",
    productName: "FITTED KNIT BLOUSE",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "50%"
},
// 11 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8977/655/500/2/w/334/8977655500_1_1_1.jpg?ts=1631092924659",
    productName: "PRINTED MIDI DRESS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "50%"
},
// 12  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5107/300/519/2/w/334/5107300519_2_2_1.jpg?ts=1627397400600",
    productName: "LONG EMBROIDERED DRESS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "STARTING FROM 40%",
    sale: "50%"
},
// 2==1
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4369/254/800/12/w/334/4369254800_1_1_1.jpg?ts=1634205243744",
    productName: "QUILTED JACKET",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "45%"
},
// 2==2
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4369/254/800/3/w/334/4369254800_2_3_1.jpg?ts=1633623294149",
    productName: "QUILTED JACKET",
    price: "₹ 2,990.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "45%"
},
//  2==3
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2010/739/612/2/w/334/2010739612_1_1_1.jpg?ts=1636472339384",
    productName: "FAUX SHEARLING OVERSHIRT",
    price: "₹ 2,990.00",
    strikedPrice: "₹ 5,590.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "45%"
},
// 2==4
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2712/312/826/2/w/334/2712312826_1_1_1.jpg?ts=1629886294215",
    productName: "BLOCK SWEATSHI",
    price: "₹ 2,990.00",
    strikedPrice: "₹ 5,590.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "45%"
},
// 2==5
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8197/711/505/2/w/437/8197711505_6_1_1.jpg?ts=1632327855935",
    productName: "JACKET WITH POCKETS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "60%"
},
// 2==6
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0858/626/409/2/w/437/0858626409_1_1_1.jpg?ts=1629901592395",
    productName: "RETRO JACKET",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "40%"
},
// 2==7
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4877/250/800/2/w/437/4877250800_2_1_1.jpg?ts=1633520163851",
    productName: "DENIM OVERSHIRT",
    price: "₹ 1,990.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "30%"
},
// 2==8
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2969/094/505/2/w/437/2969094505_6_1_1.jpg?ts=1628601765316",
    productName: "WATER-REPELLENT PACKAWAY JACKET",
    price: "₹ 1,990.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "30%"
},
// 2==9  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5598/243/600/2/w/334/5598243600_2_3_1.jpg?ts=1626886150232",
    productName: "REVERSIBLE PRINTED KIMONO",
    price: "₹ 2,990.00",
    strikedPrice: "₹ 5,590.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "30%"
},
// 2==10  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2903/062/712/2/w/334/2903062712_1_1_1.jpg?ts=1622448126787",
    productName: "SHORT KIMONO WITH BELT",
    price: "₹ 1,990.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "30%"
},
// 2==11  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8716/744/515/2/w/334/8716744515_2_5_1.jpg?ts=1630401056004",
    productName: "WOOL BLEND COAT WITH GOLDEN BUTT..",
    price: "₹ 4,990.00",
    strikedPrice: "₹ 9,990.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "50%"
},
// 2==12  
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/2010/748/700/2/w/334/2010748700_1_1_1.jpg?ts=1637858335093",
    productName: "CROPPED CHECK BLAZER",
    price: "₹ 2,990.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "50%"
},
// 3==1
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8726/749/716/2/w/334/8726749716_2_1_1.jpg?ts=1631202978380",
    productName: "TAILORED BLAZER",
    price: "₹ 3,990.00",
    strikedPrice: "₹ 7,990.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "50%"
},
// 3==2
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3187/273/250/3/w/334/3187273250_2_3_1.jpg?ts=1623917995622",
    productName: "TEXTURED CROPPED BLAZER",
    price: "₹ 2,990.00",
    strikedPrice: "₹ 5,490.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "45%"
},
// 3==3
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9006/968/800/2/w/334/9006968800_2_3_1.jpg?ts=1632486631488",
    productName: "GATHERED BLAZER",
    price: "₹ 3,990.00",
    strikedPrice: "₹ 7,990.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "50%"
},
// 3==4 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7720/805/736/2/w/334/7720805736_1_1_1.jpg?ts=1620921049302",
    productName: "STRAIGHT LINEN BLAZER",
    price: "₹ 2,990.00",
    strikedPrice: "₹ 6,990.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "55%"
},
// 3==5 
{
    imageURL: "https://static.zara.net/photos///2021/V/0/1/p/3187/273/250/2/w/334/3187273250_1_1_1.jpg?ts=1619601165162",
    productName: "TEXTURED CROPPED BLAZER",
    price: "₹ 2,990.00",
    strikedPrice: "₹ 5,490.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "45%"
},
// 3==6
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9577/722/706/2/w/334/9577722706_1_1_1.jpg?ts=1637916751505",
    productName: "CREASED-EFFECT SATIN BLAZER",
    price: "₹ 3,990.00",
    strikedPrice: "₹ 6,990.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "40%"
},
// 3==7
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9033/718/800/2/w/334/9033718800_1_1_1.jpg?ts=1638866546879",
    productName: "WOOL BLEND STRIPED FROCK COAT",
    price: "₹ 4,990.00",
    strikedPrice: "₹ 10,990.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "50%"
},
// 3==8
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8763/822/802/2/w/334/8763822802_1_1_1.jpg?ts=1634105994980",
    productName: "LIMITED EDITION PINSTRIPE BLAZER",
    price: "₹ 3,990.00",
    strikedPrice: "₹ 9,990.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%"
},
// 3==9  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9095/725/800/2/w/334/9095725800_1_1_1.jpg?ts=1632481147339",
    productName: "DINNER JACKET LIMITED EDITION",
    price: "₹ 3,990.00",
    strikedPrice: "₹ 9,990.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%"
},
// 3==10
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9548/793/800/3/w/334/9548793800_15_1_1.jpg?ts=1638443639152",
    productName: "MATCHING VELVET WAISTCOAT",
    price: "₹ 1,990.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%"
},
// 3==11  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4661/708/800/72/w/334/4661708800_2_2_1.jpg?ts=1621424472587",
    productName: "LINEN BLEND HALTERNECK WAISTCOAT",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%"
},
// 3==12
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7784/587/710/72/w/334/7784587710_2_3_1.jpg?ts=1621945692184",
    productName: "OVERSIZE FLOWING BLAZER",
    price: "₹ 2,990.00",
    strikedPrice: "₹ 6,990.00",
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%"
},
// 4==1  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/272/623/2/w/334/4437272623_1_1_1.jpg?ts=1627568609620",
    productName: "PRINTED MIDI DRESS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==2
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2969/287/800/2/w/334/2969287800_1_1_1.jpg?ts=1631872676085",
    productName: "FAUX LEATHER DRESS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ ₹ 4,590.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==3
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/312/800/2/w/334/4437312800_2_2_1.jpg?ts=1630498686776",
    productName: "LINEN BLEND DRESS WITH CUT-OUT",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==4
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8990/608/538/2/w/334/8990608538_2_4_1.jpg?ts=1632407623736",
    productName: "SATIN MIDI DRESS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==5  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5107/300/519/2/w/334/5107300519_2_2_1.jpg?ts=1627397400600",
    productName: "LONG EMBROIDERED DRESS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "70%"
},
// 4==6
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9182/211/330/2/w/334/9182211330_1_1_1.jpg?ts=1632929118320",
    productName: "RUFFLED PRINTED DRESS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==7
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0387/188/800/2/w/334/0387188800_1_1_1.jpg?ts=1631186717492",
    productName: "MINI DRESS WITH KNOT",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==8  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2183/263/800/2/w/334/2183263800_2_15_1.jpg?ts=1632299076589",
    productName: "PRINTED SATIN DRESS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 4,590.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==9  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4877/243/800/2/w/334/4877243800_2_1_1.jpg?ts=1630401140733",
    productName: "DENIM DRESS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==10  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1131/847/061/2/w/334/1131847061_1_1_1.jpg?ts=1621326407949",
    productName: "KAPPA UNITARD",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==11  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8671/542/050/2/w/334/8671542050_1_1_1.jpg?ts=1629884212803",
    productName: "PRINTED SATIN DRESS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 4==12   
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7901/423/800/2/w/334/7901423800_1_1_1.jpg?ts=1631110293978",
    productName: "RIBBED MIDI DRESS",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%"
},
// 5==1 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7957/021/712/3/w/334/7957021712_2_1_1.jpg?ts=1624019882619",
    productName: "TEXTURED PRINTED BLOUSE",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==2  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8561/577/400/2/w/334/8561577400_1_1_1.jpg?ts=1632910749725",
    productName: "FINE CORDUROY SHIRT",
    price: "₹ 990.00",
    strikedPrice: "₹ 990.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "50%"
},
// 5==3  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7484/166/942/2/w/334/7484166942_1_1_1.jpg?ts=1630580738069",
    productName: "FLOWING JACQUARD SHIRT",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==4  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/268/629/2/w/334/7563268629_2_1_1.jpg?ts=1632486605364",
    productName: "VOLUMINOUS POPLIN SHIRT",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==5  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/252/606/2/w/334/7563252606_2_1_1.jpg?ts=1627046994062",
    productName: "CROSSOVER PRINTED BLOUSE",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==6  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8351/239/330/2/w/334/8351239330_1_1_1.jpg?ts=1634294247335",
    productName: "PRINTED PLEATED BLOUSE",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==7   
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4437/042/507/2/w/334/4437042507_2_1_1.jpg?ts=1636560539578",
    productName: "FITTED KNIT BLOUSE",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==8  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/242/506/2/w/334/2143242506_2_2_1.jpg?ts=1627046995619",
    productName: "STRIPED BLOUSE WITH POCKET",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==9  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/244/746/2/w/334/2143244746_2_1_1.jpg?ts=1628782308563",
    productName: "RUSTIC TOP WITH POCKET",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==10
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2298/218/330/2/w/334/2298218330_2_1_1.jpg?ts=1632479467987",
    productName: "FLORAL PRINT BLOUSE",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==11  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/241/426/2/w/334/2143241426_2_1_1.jpg?ts=1623939956197",
    productName: "TEXTURED COTTON BLOUSE",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 5==12  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/080/251/2/w/334/9479080251_2_3_1.jpg?ts=1627047029125",
    productName: "LOOSE-FITTING SHIRT WITH POCKETS",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%"
},
// 6==1  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8246/242/403/2/w/334/8246242403_2_1_1.jpg?ts=1628174682184",
    productName: "ZW THE CARPENTER STRAIGHT JEANS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "40%"
},
// 6==2  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9632/240/251/2/w/334/9632240251_1_1_1.jpg?ts=1625061419331",
    productName: "ZW THE MERCER JOGGER JEANS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "40%"
},
// 6==3  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0060/216/104/17/w/334/0060216104_6_1_1.jpg?ts=1626687375093",
    productName: "FLARE STRIPED CROPPED JEANS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},
// 6==4  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9632/258/800/2/w/334/9632258800_1_1_1.jpg?ts=1639496394747",
    productName: "SPLIT HEM ZW THE SKINNY JEANS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},
// 6==5
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8197/210/251/2/w/334/8197210251_1_1_1.jpg?ts=1623162615161",
    productName: "FLARED TROUSERS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},
// 6==6  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6164/226/805/2/w/334/6164226805_1_1_1.jpg?ts=1639043102110",
    productName: "Z1975 HIGH RISE SLIM FLARE JEANS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},
// 6==7 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8246/250/446/2/w/334/8246250446_1_1_1.jpg?ts=1627641955263",
    productName: "ZW THE SKINNY FLARE JEANS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},
// 6==8
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9863/243/400/3/w/334/9863243400_1_1_1.jpg?ts=1627291372223",
    productName: "ZW THE SKINNY FLARE JEANS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},
// 6==9
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2553/262/400/2/w/334/2553262400_2_10_1.jpg?ts=1639735736183",
    productName: "ZW THE 90S SLIM SPLIT-HEM JEANS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},
// 6==10
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6164/226/805/2/w/334/6164226805_1_1_1.jpg?ts=1639043102110",
    productName: "Z1975 HIGH RISE SLIM FLARE JEANS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},
// 6==11  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6840/245/620/2/w/334/6840245620_2_6_1.jpg?ts=1627370803933",
    productName: "JEANS ZW THE NOA MOM FIT",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},
// 6==12
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9863/252/407/3/w/334/9863252407_1_1_1.jpg?ts=1636045574689",
    productName: "ZW THE SKINNY JEANS",
    price: "₹ 1,790.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "JEANS",
    sale: "55%"
},

// 7==1
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7102/215/800/2/w/334/7102215800_2_6_1.jpg?ts=1630068751354",
    productName: "EXTRA-LONG LEGGINGS WITH VENT===",
    price: "₹ 990.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "60%"
},
// 7==2
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/242/806/2/w/334/9479242806_1_1_1.jpg?ts=1639735796124",
    productName: "CARROT FIT CROPPED TROUSERS",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "60%"
},
// 7==3   
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/9479/284/700/2/w/334/9479284700_1_1_1.jpg?ts=1637684372845",
    productName: "SHIRRED WAIST TROUSERS",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "45%"
},
// 7==4  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1165/468/500/2/w/334/1165468500_2_2_1.jpg?ts=1636545143518",
    productName: "FINELY PLEATED PALAZZO TROUSERS",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "50%"
},
// 7==5   
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8292/382/046/2/w/334/8292382046_1_1_1.jpg?ts=1626889458874",
    productName: "PRINTED CROPPED TROUSERS",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "45%"
},
// 7==6  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9815/212/800/2/w/334/9815212800_2_4_1.jpg?ts=1630403040243",
    productName: "SPLIT HEM LEGGINGS",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,790.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "40%"
},
// 7==7
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3564/222/800/2/w/334/3564222800_1_1_1.jpg?ts=1627482619691",
    productName: "STRAIGHT-LEG PYJAMA-STYLE TROUSER",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "40%"
},
// 7==8 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5580/035/710/2/w/334/5580035710_2_4_1.jpg?ts=1626436778682",
    productName: "RIBBED WIDE-LEG TROUSERS",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "50%"
},
// 7==9  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8527/353/030/2/w/334/8527353030_1_1_1.jpg?ts=1627648909636",
    productName: "FLORAL PRINT TROUSERS",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "45%"
},
// 7==10  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7290/041/500/2/w/334/7290041500_1_1_1.jpg?ts=1620379265369",
    productName: "SLIM FIT PRINTED TROUSERS",
    price: "₹ 890.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "30%"
},
// 7==11  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/246/426/3/w/334/9479246426_1_1_1.jpg?ts=1624019891172",
    productName: "TEXTURED COTTON TROUSERS",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "45%"
},
// 7==12  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7385/268/050/2/w/334/7385268050_1_1_1.jpg?ts=1632322997223",
    productName: "PRINTED FLARED TROUSERS",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "TROUSERS",
    sale: "40%"
},
// 8==1  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4424/854/513/2/w/334/4424854513_6_1_1.jpg?ts=1622714535765",
    productName: "V-NECK BASIC T-SHIRT",
    price: "₹ 390.00",
    strikedPrice: "₹ 590.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "30%"
},
// 8==2
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7901/484/250/2/w/334/7901484250_6_1_1.jpg?ts=1626777191810",
    productName: "RIBBED POLO SHIRT",
    price: "₹ 590.00",
    strikedPrice: "₹ 1,590.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "60%"
},
// 8==3   
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6050/319/099/2/w/334/6050319099_2_1_1.jpg?ts=1635258853922",
    productName: "CUT-OUT RIBBED TOP",
    price: "₹ 790.00",
    strikedPrice: "₹ 1,790.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "55%"
},
// 8==4  
{
    imageURL: "https://static.zara.net/photos///2021/V/0/1/p/4174/343/710/2/w/334/4174343710_6_1_1.jpg?ts=1615886104474",
    productName: "BASIC TANK TOP",
    price: "₹ 390.00",
    strikedPrice: "₹ 590.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "30%"
},
// 8==5   
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1660/811/800/2/w/334/1660811800_6_1_1.jpg?ts=1628769671624",
    productName: "T-SHIRT WITH BUTTON DETAILS",
    price: "₹ 490.00",
    strikedPrice: "₹ 890.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "30%"
},
// 8==6  
{
    imageURL: "https://static.zara.net/photos///2021/V/0/1/p/1044/159/737/2/w/334/1044159737_6_1_1.jpg?ts=1617020365137",
    productName: "ASYMMETRIC OVERSIZED T-SHIRT",
    price: "₹ 790.00",
    strikedPrice: "₹ 1,790.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "55%"
},
// 8==7
{
    imageURL: "https://static.zara.net/photos///2021/V/0/1/p/0858/095/250/2/w/334/0858095250_6_1_1.jpg?ts=1617692828251",
    productName: "LYOCELL V-NECK T-SHIRT",
    price: "₹ 590.00",
    strikedPrice: "₹ 1,490.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "30%"
},
// 8==8 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0962/376/500/2/w/34/0962376500_6_1_1.jpg?ts=1621930685229",
    productName: "BASIC TANK TOP",
    price: "₹ 390.00",
    strikedPrice: "₹ 490.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "30%"
},
// 8==9  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5644/806/426/2/w/334/5644806426_6_1_1.jpg?ts=1627385522714",
    productName: "OVERSIZE V-NECK T-SHIRT",
    price: "₹ 590.00",
    strikedPrice: "₹ 1,590.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "60%"
},
// 8==10  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5644/816/400/2/w/334/5644816400_2_1_1.jpg?ts=1629303550438",
    productName: "ASYMMETRIC TOP",
    price: "₹ 590.00",
    strikedPrice: "₹ 1,590.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "60%"
},
// 8==11 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0264/470/406/2/w/334/0264470406_6_1_1.jpg?ts=1626350283035",
    productName: "CROPPED POLO SHIRT",
    price: "₹ 790.00",
    strikedPrice: "₹ 1,790.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "55%"
},
// 8==12  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7901/345/613/2/w/334/7901345613_1_1_1.jpg?ts=1629889209696",
    productName: "SEAMLESS TOP",
    price: "₹ 590.00",
    strikedPrice: "₹ 1,590.00",
    itemGender: "female",
    itemCategory: "T-SHIRTS",
    sale: "60%"
},
// 9==1  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4437/311/800/2/w/334/4437311800_2_1_1.jpg?ts=1630498628529",
    productName: "LINEN BLEND TOP WITH CUT-OUT DETAIL",
    price: "₹ 890.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "30%"
},
// 9==2  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3067/469/611/17/w/334/3067469611_1_1_1.jpg?ts=1635155193868",
    productName: "SATIN CAMISOLE TOP",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "70%"
},
// 9==3
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3067/455/050/2/w/334/3067455050_1_1_1.jpg?ts=1628759026107",
    productName: "CROPPED CORSETRY-INSPIRED CHECK..",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "50%"
},
// 9==4  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3253/325/060/2/w/334/3253325060_2_1_1.jpg?ts=1622630295369",
    productName: "STRAPPY BODYSUIT",
    price: "₹ 490.00",
    strikedPrice: "₹ 990.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "50%"
},
// 9==5  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9219/561/051/2/w/334/9219561051_1_1_1.jpg?ts=1634568074769",
    productName: "PRINTED LINGERIE TOP",
    price: "₹ 690.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "65%"
},
// 9==6   
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4661/480/668/2/w/334/4661480668_2_1_1.jpg?ts=1626866643029",
    productName: "SATIN-EFFECT STRAPPY BODYSUIT",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "50%"
},
//  9==7  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/244/746/2/w/334/2143244746_1_1_1.jpg?ts=1628781667372",
    productName: "RUSTIC TOP WITH POCKET",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "45%"
},
// 9==8  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5216/251/982/2/w/334/5216251982_2_1_1.jpg?ts=1627568607188",
    productName: "PRINTED TUNIC",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "45%"
},
// 9==9  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8490/336/330/2/w/334/8490336330_1_1_1.jpg?ts=1629464122450",
    productName: "PRINTED PATCHWORK TOP",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "40%"
},
// 9==10  
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4331/138/330/12/w/334/4331138330_2_9_1.jpg?ts=1640003479715",
    productName: "JACQUARD TOP WITH CUT-OUT DETAIL",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "35%"
},
// 9==11 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2731/040/303/4/w/334/2731040303_2_10_1.jpg?ts=1639734568285",
    productName: "ASYMMETRIC TOP",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "40%"
},
// 9==12  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8784/671/050/2/w/334/8784671050_1_1_1.jpg?ts=1629904128613",
    productName: "FLORAL PRINT ASYMMETRIC TOP",
    price: "₹ 990.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "TOPS_BODYSUITS",
    sale: "60%"
},
// 10==1  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1165/230/032/2/w/334/1165230032_2_3_1.jpg?ts=1633000926818",
    productName: "",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==2  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1165/222/500/2/w/334/1165222500_6_1_1.jpg?ts=1626161411421",
    productName: "TULLE MIDI SKIRT",
    price: "₹ 990.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "60%"
},
// 10==3  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7385/233/700/2/w/334/7385233700_1_1_1.jpg?ts=1631693265979",
    productName: "FLORAL SKORT",
    price: "₹ 990.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==4   
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/0327/003/050/2/w/334/0327003050_6_1_1.jpg?ts=1624266674909",
    productName: "STRAIGHT SHORTS WITH DAISY PRINT",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==5  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/6840/247/800/2/w/334/6840247800_6_1_1.jpg?ts=1621521765301",
    productName: "ZW THE HIGH WAIST SHORTS",
    price: "₹2,790.00",
    strikedPrice: "₹ 1,590.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==6  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7839/419/600/3/w/334/7839419600_1_1_1.jpg?ts=1628073456936",
    productName: "STRAIGHT SATIN SKIRT",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==7  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1971/222/400/2/w/334/1971222400_2_3_1.jpg?ts=1626274609977",
    productName: "FLORAL SKORT",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==8  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1608/038/800/2/w/334/1608038800_1_1_1.jpg?ts=1622112454813",
    productName: "POLKA DOT SKORTS",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==9  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8991/320/330/2/w/334/8991320330_2_2_1.jpg?ts=1631718366620",
    productName: "FLORAL PRINT SKIRT",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==10 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2183/248/800/2/w/334/2183248800_1_1_1.jpg?ts=1626939170220",
    productName: "PRINTED SARONG SKIRT",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==11  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4387/230/085/2/w/334/4387230085_2_3_1.jpg?ts=1627482612788",
    productName: "GINGHAM SKORT",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 10==12  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5862/163/406/17/w/334/5862163406_1_1_1.jpg?ts=1626251155044",
    productName: "BELTED BERMUDA SHORTS",
    price: "₹ 1,190.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "SKIRTS_SHORTS",
    sale: "45%"
},
// 11==1  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3653/109/305/2/w/334/3653109305_2_1_1.jpg?ts=1632929485827",
    productName: "KNIT FAUX FUR WAISTCOAT WITH OPENI",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "40%"
},
// 11==2  
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/6771/021/070/2/w/334/6771021070_2_9_1.jpg?ts=1639135334178",
    productName: "WOOL BLEND AND CASHMERE SWEATER",
    price: "₹ 1,990.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "30%"
},
// 11==3  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5536/123/704/12/w/334/5536123704_2_2_1.jpg?ts=1633697178162",
    productName: "OVERSIZE KNIT PULLOVER WITH HOOD",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "40%"
},
// 11==4  
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/6771/021/104/2/w/334/6771021104_2_9_1.jpg?ts=1639134203728",
    productName: "WOOL BLEND AND CASHMERE SWEATER",
    price: "₹ 1,990.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "30%"
},
// 11==5  
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/6771/021/070/12/w/334/6771021070_2_1_1.jpg?ts=1640188108005",
    productName: "WOOL BLEND AND CASHMERE SWEATER",
    price: "₹ 1,990.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "30%"
},
// 11==6  
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4331/138/330/12/w/334/4331138330_2_9_1.jpg?ts=1640003479715",
    productName: "JACQUARD TOP WITH CUT-OUT DETAIL",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "30%"
},
// 11==7  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5802/111/330/12/w/334/5802111330_2_3_1.jpg?ts=1632155779744",
    productName: "CABLE-KNIT SWEATER WITH STRIPES",
    price: "₹ 1,990.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "30%"
},
// 11==8  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1383/008/104/17/w/334/1383008104_2_3_1.jpg?ts=1628240767816",
    productName: "HOODED KNIT TOP",
    price: "₹ 1,990.00",
    strikedPrice: "₹ 2,990.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "30%"
},
// 11==9 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5802/143/330/18/w/331/5802143330_1_1_1.jpg?ts=1628240772843",
    productName: "KNIT FLORAL CROP TOP",
    price: "₹ 790.00",
    strikedPrice: "₹ 990.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "20%"
},
// 11==10  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2712/312/826/2/w/331/2712312826_1_1_1.jpg?ts=1629886294215",
    productName: "CONTRASTING COLOUR BLOCK SWEATSHIR..",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,790.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "35%"
},
// 11==11 
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4331/024/716/2/w/331/4331024716_1_1_1.jpg?ts=1639495673304",
    productName: "KNIT TOP WITH OPEN BACK",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "20%"
},
// 11==12 
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/5536/051/104/2/w/331/5536051104_1_1_1.jpg?ts=1633537948494",
    productName: "STRIPED KNIT VEST",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "KNITWEAR",
    sale: "35%"
},
// 12==1  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3920/221/600/2/w/334/3920221600_6_1_1.jpg?ts=1631116860085",
    productName: "MOBILE PHONE BAG WITH PURSE",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,790.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "40%"
},
// 12==2  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4736/394/641/2/w/334/4736394641_6_1_1.jpg?ts=1635233612330",
    productName: "CONTRASTING STONE BEAD NECKLACE",
    price: "₹ 990.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "60%"
},
// 12==3  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1124/230/303/2/w/334/1124230303_2_1_1.jpg?ts=1636388922593",
    productName: "PEARL NECKLACE PLATED IN 24K GOLD",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "50%"
},
// 12==4  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3920/284/800/2/w/334/3920284800_6_1_1.jpg?ts=1634906572935",
    productName: "DIAMOND JACQUARD SCARF",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "35%"
},
// 12==5  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/1023/211/083/2/w/334/1023211083_6_1_1.jpg?ts=1635178064567",
    productName: "KNIT FRETWORK BEANIE",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,590.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "35%"
},
// 12==6  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/3739/278/500/2/w/334/3739278500_2_1_1.jpg?ts=1636562697064",
    productName: "KNIT SCARF WITH FRINGING",
    price: "₹ 1,590.00",
    strikedPrice: "₹ 2,590.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "35%"
},
// 12==7   
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4319/292/330/2/w/334/4319292330_6_1_1.jpg?ts=1629368173209",
    productName: "MAXI RHINESTONE BELT",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "50%"
},
// 12==8  
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4548/227/641/2/w/334/4548227641_1_1_1.jpg?ts=1635344489601",
    productName: "ROUND STONE NECKLACE",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "50%"
},
// 12==9  
{
    imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4736/002/800/2/w/331/4736002800_1_1_1.jpg?ts=1637842608605",
    productName: "STRETCH DIAMANTÉ BELT",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,990.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "40%"
},
// 12==10 
{
    imageURL: "https://static.zara.net/photos///2021/V/2/1/p/0047/056/999/2/w/331/0047056999_6_1_1.jpg?ts=1610612773197",
    productName: "PARIS 10ML",
    price: "₹ 290.00",
    strikedPrice: "₹ 390.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "20%"
},
// 12==11  
{
    imageURL: "https://static.zara.net/photos///2021/I/1/1/p/6723/810/040/2/w/331/6723810040_15_1_1.jpg?ts=1631721686681",
    productName: "NYLON TOTE BAG - YOGA COLLECTION",
    price: "₹ 3,990.00",
    strikedPrice: "₹ 4,990.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "20%"
},
// 12==12
{
    imageURL: "https://static.zara.net/photos///2021/I/0/1/p/4736/249/303/2/w/334/4736249303_6_1_1.jpg?ts=1625156556307",
    productName: "PACK OF ASSORTED BRACELETS",
    price: "₹ 990.00",
    strikedPrice: "₹ 1,590.00",
    itemGender: "female",
    itemCategory: "ACCESSORIES",
    sale: "40%"
},
]

// ++++++++++++++++++++++########+++++++ Data For selection page   +===================================
var commonall={
    "1":["https://static.zara.net/photos///2022/V/0/2/p/2553/408/427/2/w/750/2553408427_1_1_1.jpg?ts=1647968404077","https://static.zara.net/photos///2022/V/0/2/p/2553/408/427/2/w/750/2553408427_2_1_1.jpg?ts=1647968403006","https://static.zara.net/photos///2022/V/0/2/p/2553/408/427/2/w/750/2553408427_2_2_1.jpg?ts=1647968403140"],
    "2":["https://static.zara.net/photos///2022/V/0/1/p/2553/317/400/2/w/750/2553317400_1_1_1.jpg?ts=1647867470701","https://static.zara.net/photos///2022/V/0/1/p/2553/317/400/2/w/750/2553317400_2_1_1.jpg?ts=1647867470558","https://static.zara.net/photos///2022/V/0/1/p/2553/317/400/2/w/750/2553317400_2_4_1.jpg?ts=1647867473905"],
    "3":["https://static.zara.net/photos///2022/V/0/2/p/1466/440/800/2/w/750/1466440800_1_1_1.jpg?ts=1648032653789","https://static.zara.net/photos///2022/V/0/2/p/1466/440/800/2/w/750/1466440800_2_1_1.jpg?ts=1648032647752","https://static.zara.net/photos///2022/V/0/2/p/1466/440/800/2/w/750/1466440800_2_2_1.jpg?ts=1648032642718"],
    "4":["https://static.zara.net/photos///2022/V/0/2/p/1466/440/406/2/w/750/1466440406_1_1_1.jpg?ts=1648040466222","https://static.zara.net/photos///2022/V/0/2/p/1466/440/406/2/w/750/1466440406_2_1_1.jpg?ts=1648040465669","https://static.zara.net/photos///2022/V/0/2/p/1466/440/406/2/w/750/1466440406_2_4_1.jpg?ts=1648040466978"],
    "5":["https://static.zara.net/photos///2022/V/0/1/p/6987/410/427/82/w/750/6987410427_1_1_1.jpg?ts=1647950112726","https://static.zara.net/photos///2022/V/0/1/p/6987/410/427/82/w/750/6987410427_2_1_1.jpg?ts=1647950112924","https://static.zara.net/photos///2022/V/0/2/p/6987/410/427/2/w/750/6987410427_6_1_1.jpg?ts=1642754967370"],
    "6":["https://static.zara.net/photos///2022/V/0/2/p/2553/408/712/2/w/750/2553408712_1_1_1.jpg?ts=1647961806036","https://static.zara.net/photos///2022/V/0/2/p/2553/408/712/2/w/750/2553408712_2_1_1.jpg?ts=1647961808364","https://static.zara.net/photos///2022/V/0/2/p/2553/408/712/2/w/750/2553408712_2_5_1.jpg?ts=1647961808578"],
    "7":["https://static.zara.net/photos///2022/V/0/1/p/5575/440/400/82/w/750/5575440400_1_1_1.jpg?ts=1647951810851","https://static.zara.net/photos///2022/V/0/1/p/5575/440/400/82/w/750/5575440400_2_1_1.jpg?ts=1647951812589","https://static.zara.net/photos///2022/V/0/2/p/5575/440/400/2/w/750/5575440400_6_1_1.jpg?ts=1643903156978"],
    "8":["https://static.zara.net/photos///2022/V/0/2/p/8062/401/420/2/w/750/8062401420_1_1_1.jpg?ts=1648203956973","https://static.zara.net/photos///2022/V/0/2/p/8062/401/420/2/w/750/8062401420_2_1_1.jpg?ts=1648203955488","https://static.zara.net/photos///2022/V/0/2/p/8062/401/420/2/w/750/8062401420_6_2_1.jpg?ts=1648137720867"],
    "9":["https://static.zara.net/photos///2022/V/0/2/p/1538/450/400/2/w/750/1538450400_1_1_1.jpg?ts=1645026507628","https://static.zara.net/photos///2022/V/0/2/p/1538/450/400/2/w/750/1538450400_2_1_1.jpg?ts=1645026500988","https://static.zara.net/photos///2022/V/0/2/p/1538/450/400/2/w/750/1538450400_2_3_1.jpg?ts=1645026502892"],
    "10":["https://static.zara.net/photos///2022/V/0/2/p/6987/410/800/2/w/750/6987410800_1_1_1.jpg?ts=1642152764273","https://static.zara.net/photos///2022/V/0/2/p/6987/410/800/2/w/750/6987410800_2_2_1.jpg?ts=1642152800258","https://static.zara.net/photos///2022/V/0/2/p/6987/410/800/2/w/750/6987410800_6_1_1.jpg?ts=1642154351607"],
    "11":["https://static.zara.net/photos///2022/V/1/2/p/2401/921/105/2/w/288/2401921105_6_1_1.jpg?ts=1637143082920","https://static.zara.net/photos///2022/V/1/2/p/2401/921/105/2/w/750/2401921105_6_2_1.jpg?ts=1637143114917","https://static.zara.net/photos///2022/V/1/2/p/2401/921/105/2/w/750/2401921105_6_5_1.jpg?ts=1637143134736"],
    "12":["https://static.zara.net/photos///2022/V/1/2/p/2408/920/100/2/w/750/2408920100_6_1_1.jpg?ts=1644505258059","https://static.zara.net/photos///2022/V/1/2/p/2408/920/100/2/w/750/2408920100_6_3_1.jpg?ts=1644505253672","https://static.zara.net/photos///2022/V/1/2/p/2408/920/100/2/w/750/2408920100_6_6_1.jpg?ts=1644505254088"],
    "13":["https://static.zara.net/photos///2022/V/1/2/p/2404/920/040/2/w/750/2404920040_6_1_1.jpg?ts=1640251457303","https://static.zara.net/photos///2022/V/1/2/p/2404/920/040/2/w/750/2404920040_6_4_1.jpg?ts=1640251452012","https://static.zara.net/photos///2022/V/1/2/p/2404/920/040/2/w/750/2404920040_6_6_1.jpg?ts=1640251461951"],
    "14":["https://static.zara.net/photos///2022/V/1/2/p/2400/920/040/2/w/750/2400920040_6_1_1.jpg?ts=1640261211800","https://static.zara.net/photos///2022/V/1/2/p/2400/920/040/2/w/750/2400920040_6_4_1.jpg?ts=1640261211667","https://static.zara.net/photos///2022/V/1/2/p/2400/920/040/2/w/750/2400920040_6_5_1.jpg?ts=1640261214919"],
    "15":["https://static.zara.net/photos///2022/V/1/2/p/2401/920/040/2/w/750/2401920040_6_1_1.jpg?ts=1637063566505","https://static.zara.net/photos///2022/V/1/2/p/2401/920/040/2/w/750/2401920040_6_5_1.jpg?ts=1637063559336","https://static.zara.net/photos///2022/V/1/2/p/2401/920/040/2/w/750/2401920040_6_6_1.jpg?ts=1637063561598"],
    "16":["https://static.zara.net/photos///2022/V/1/2/p/2400/920/105/2/w/750/2400920105_6_1_1.jpg?ts=1640261223636","https://static.zara.net/photos///2022/V/1/2/p/2400/920/105/2/w/750/2400920105_6_5_1.jpg?ts=1640261222426","https://static.zara.net/photos///2022/V/1/2/p/2400/920/105/2/w/750/2400920105_6_6_1.jpg?ts=1640261223852"],
    "17":["https://static.zara.net/photos///2022/V/1/2/p/2422/920/040/2/w/750/2422920040_6_1_1.jpg?ts=1647521036385","https://static.zara.net/photos///2022/V/1/2/p/2422/920/040/2/w/750/2422920040_6_3_1.jpg?ts=1647521041717","https://static.zara.net/photos///2022/V/1/2/p/2422/920/040/2/w/750/2422920040_6_5_1.jpg?ts=1647521038894"],
    "18":["https://static.zara.net/photos///2021/I/1/2/p/2423/820/040/2/w/750/2423820040_6_1_1.jpg?ts=1629108511347","https://static.zara.net/photos///2021/I/1/2/p/2423/820/040/2/w/750/2423820040_6_4_1.jpg?ts=1629108517414","https://static.zara.net/photos///2021/I/1/2/p/2423/820/040/2/w/750/2423820040_6_5_1.jpg?ts=1629108520118"],
    "19":["https://static.zara.net/photos///2022/V/1/2/p/2500/920/010/2/w/750/2500920010_6_1_1.jpg?ts=1637143103889","https://static.zara.net/photos///2022/V/1/2/p/2500/920/010/2/w/750/2500920010_6_6_1.jpg?ts=1637143088896","https://static.zara.net/photos///2022/V/1/2/p/2500/920/010/2/w/750/2500920010_6_5_1.jpg?ts=1637143109007"],
    "20":["https://static.zara.net/photos///2021/I/1/2/p/2404/820/040/2/w/750/2404820040_6_1_1.jpg?ts=1628846077344","https://static.zara.net/photos///2021/I/1/2/p/2404/820/040/2/w/750/2404820040_6_3_1.jpg?ts=1628846091573","https://static.zara.net/photos///2021/I/1/2/p/2404/820/040/2/w/750/2404820040_6_5_1.jpg?ts=1628846067271"],
    "21":["https://static.zara.net/photos///2022/V/0/1/p/3051/922/500/2/w/750/3051922500_1_1_1.jpg?ts=1648141378994","https://static.zara.net/photos///2022/V/0/1/p/3051/922/500/2/w/750/3051922500_2_3_1.jpg?ts=1648124019292","https://static.zara.net/photos///2022/V/0/1/p/3051/922/500/2/w/750/3051922500_6_2_1.jpg?ts=1647881047612"],
    "22":["https://static.zara.net/photos///2022/V/0/1/p/2901/184/330/2/w/750/2901184330_1_1_1.jpg?ts=1646320601716","https://static.zara.net/photos///2022/V/0/1/p/2901/184/330/2/w/750/2901184330_6_1_1.jpg?ts=1646384883377","https://static.zara.net/photos///2022/V/0/1/p/2901/184/330/2/w/750/2901184330_6_3_1.jpg?ts=1646384891356"],
    "23":["https://static.zara.net/photos///2022/V/0/1/p/7969/046/251/2/w/750/7969046251_1_1_1.jpg?ts=1644423513750","https://static.zara.net/photos///2022/V/0/1/p/8741/024/251/2/w/750/8741024251_6_1_1.jpg?ts=1643974229713","https://static.zara.net/photos///2022/V/0/1/p/8741/024/251/2/w/750/8741024251_6_4_1.jpg?ts=1643625818959"],
    "24":["https://static.zara.net/photos///2022/V/0/1/p/3440/246/400/2/w/750/3440246400_1_1_1.jpg?ts=1645797293217","https://static.zara.net/photos///2022/V/0/1/p/3440/246/400/2/w/750/3440246400_2_4_1.jpg?ts=1645797334791","https://static.zara.net/photos///2022/V/0/1/p/3440/246/400/2/w/750/3440246400_6_1_1.jpg?ts=1645695926352"],
    "25":["https://static.zara.net/photos///2022/V/0/1/p/4786/093/500/12/w/750/4786093500_1_1_1.jpg?ts=1647275278378","https://static.zara.net/photos///2022/V/0/1/p/4786/093/500/12/w/750/4786093500_2_4_1.jpg?ts=1647275276044","https://static.zara.net/photos///2022/V/0/1/p/4786/093/500/2/w/750/4786093500_6_3_1.jpg?ts=1646393307247"],
    "26":["https://static.zara.net/photos///2022/V/0/1/p/2202/774/046/2/w/750/2202774046_1_1_1.jpg?ts=1647951561291","https://static.zara.net/photos///2022/V/0/1/p/2202/500/046/2/w/750/2202500046_6_1_1.jpg?ts=1648053238686","https://static.zara.net/photos///2022/V/0/1/p/2202/774/046/2/w/750/2202774046_6_3_1.jpg?ts=1647878059675"],
    "27":["https://static.zara.net/photos///2022/V/0/1/p/3067/330/250/12/w/750/3067330250_1_1_1.jpg?ts=1648200480405","https://static.zara.net/photos///2022/V/0/1/p/3067/330/250/12/w/750/3067330250_2_4_1.jpg?ts=1648200488368","https://static.zara.net/photos///2022/V/0/1/p/3067/330/250/12/w/750/3067330250_2_3_1.jpg?ts=1648200477765"],
    "28":["https://static.zara.net/photos///2022/V/0/1/p/5770/030/829/2/w/750/5770030829_1_1_1.jpg?ts=1647950648724","https://static.zara.net/photos///2022/V/0/1/p/5770/030/829/2/w/750/5770030829_2_1_1.jpg?ts=1647950645634","https://static.zara.net/photos///2022/V/0/1/p/5770/030/829/2/w/750/5770030829_6_3_1.jpg?ts=1646993451632"],
    "29":["https://static.zara.net/photos///2022/V/0/1/p/4786/055/250/12/w/750/4786055250_1_1_1.jpg?ts=1648127308164","https://static.zara.net/photos///2022/V/0/1/p/4786/055/250/12/w/750/4786055250_2_4_1.jpg?ts=1648127404157","https://static.zara.net/photos///2022/V/0/1/p/4786/055/250/12/w/750/4786055250_2_5_1.jpg?ts=1648127406178"],
    "30":["https://static.zara.net/photos///2022/V/0/1/p/3191/665/046/2/w/750/3191665046_1_1_1.jpg?ts=1647963162622","https://static.zara.net/photos///2022/V/0/1/p/3191/665/046/2/w/750/3191665046_2_2_1.jpg?ts=1647963171084","https://static.zara.net/photos///2022/V/0/1/p/3191/665/046/2/w/750/3191665046_6_3_1.jpg?ts=1647937615236"],
    
}

var shirtobj=[
    {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3562/326/712/2/w/444/3562326712_2_1_1.jpg?ts=1628850964624",
        productName: "OVERSHIRT WITH CONTRAST POCKETS",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3918/306/251/2/w/444/3918306251_2_1_1.jpg?ts=1633072946418",
        productName: "TECHNICAL JACKET",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/9621/430/300/2/w/444/9621430300_2_1_1.jpg?ts=1627033368623",
        productName: "LIGHTWIEGHT TECHNICAL JACKET",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
    
      //OVERSHIRTS
      {
        imageURL:
          "https://static.zara.net/photos///2022/V/0/2/p/3057/204/800/2/w/444/3057204800_2_1_1.jpg?ts=1638351856835",
        productName: "GEOMETRIC JACQUARD OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0072/927/401/2/w/444/0072927401_2_1_1.jpg?ts=1631867549480",
        productName: "OVERSHIRT WITH POCKETS",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0693/331/800/2/w/444/0693331800_2_1_1.jpg?ts=1628608130880",
        productName: "STRIPED JACQUARD SHIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 65,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/7446/313/676/2/w/444/7446313676_2_1_1.jpg?ts=1632915632883",
        productName: "CORDUROY OVERSHIRT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4477/431/710/3/w/444/4477431710_2_5_1.jpg?ts=1626252294014",
        productName: "PATCH OVERSHIRT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/1248/414/800/2/w/444/1248414800_2_1_1.jpg?ts=1633506734448",
        productName: "FAUX SHEARLING CHECK OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/2675/308/300/2/w/444/2675308300_2_1_1.jpg?ts=1628671908667",
        productName: "STRIPED JACQUARD OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/5950/515/400/2/w/444/5950515400_2_2_1.jpg?ts=1633074426695",
        productName: "® ERIN WILSON PATCH OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
    
      //KNITWEAR
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0077/301/710/2/w/444/0077301710_2_1_1.jpg?ts=1628074520816",
        productName: "COTTON AND SILK KNIT POLO SHIRT",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/2893/306/832/2/w/444/2893306832_2_1_1.jpg?ts=1636542185679",
        productName: "WOOL - SILK SWEATER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3284/309/439/2/w/444/3284309439_2_1_1.jpg?ts=1633691154910",
        productName: "COTTON SWEATER WITH PATCH DETAIL",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6674/300/520/3/w/444/6674300520_2_1_1.jpg?ts=1626187633056",
        productName: "COMBINED KNIT T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 60,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4090/322/401/2/w/444/4090322401_2_1_1.jpg?ts=1636449667602",
        productName: "GRAPHIC PRINT SWEATER",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0048/309/803/2/w/444/0048309803_2_1_1.jpg?ts=1637673986198",
        productName: "ABSTRACT JACQUARD SWEATER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/5755/307/400/2/w/444/5755307400_2_1_1.jpg?ts=1637138062196",
        productName: "STRIPED SWEATER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4938/313/802/2/w/444/4938313802_2_1_1.jpg?ts=1629448666038",
        productName: "MOUNTAIN JACQUARD CARDIGAN",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
    
      //SHIRTS
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3717/350/250/2/w/444/3717350250_2_1_1.jpg?ts=1630063982843",
        productName: "CONTRAST SLOGAN SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6987/360/707/2/w/444/6987360707_2_1_1.jpg?ts=1631885303474",
        productName: "COLOURED COTTON SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 35,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/7545/225/679/2/w/444/7545225679_2_1_1.jpg?ts=1622476872265",
        productName: "LYOCELL - LINEN SHIRT",
        price: "₹ 1,490.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6917/324/250/2/w/444/6917324250_2_1_1.jpg?ts=1627028393401",
        productName: "WATERCOLOUR PRINT SHIRT",
        price: "₹ 1,490.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2022/V/0/2/p/6085/305/800/2/w/444/6085305800_2_1_1.jpg?ts=1638291014174",
        productName: "SLOGAN PRINT SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0706/331/052/2/w/444/0706331052_2_1_1.jpg?ts=1629375819454",
        productName: "TEXTURED BLAZER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/080/251/2/w/334/9479080251_2_3_1.jpg?ts=1627047029125",
          productName: "LOOSE-FITTING SHIRT WITH POCKETS",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,790.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 6==1  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8246/242/403/2/w/334/8246242403_2_1_1.jpg?ts=1628174682184",
          productName: "ZW THE CARPENTER STRAIGHT JEANS",
          price: "₹ 1,790.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "JEANS",
          sale: "40%"
      },
      // 6==2  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9632/240/251/2/w/334/9632240251_1_1_1.jpg?ts=1625061419331",
          productName: "ZW THE MERCER JOGGER JEANS",
          price: "₹ 1,790.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "JEANS",
          sale: "40%"
      },
      // 4==12   
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7901/423/800/2/w/334/7901423800_1_1_1.jpg?ts=1631110293978",
          productName: "RIBBED MIDI DRESS",
          price: "₹ 990.00",
          strikedPrice: "₹ 1,990.00",
          itemGender: "female",
          itemCategory: "DRESSES_JUMPSUITS",
          sale: "60%"
      },
      // 5==1 
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7957/021/712/3/w/334/7957021712_2_1_1.jpg?ts=1624019882619",
          productName: "TEXTURED PRINTED BLOUSE",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 5==2  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8561/577/400/2/w/334/8561577400_1_1_1.jpg?ts=1632910749725",
          productName: "FINE CORDUROY SHIRT",
          price: "₹ 990.00",
          strikedPrice: "₹ 990.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "50%"
      },
      // 5==3  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7484/166/942/2/w/334/7484166942_1_1_1.jpg?ts=1630580738069",
          productName: "FLOWING JACQUARD SHIRT",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 5==4  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/268/629/2/w/334/7563268629_2_1_1.jpg?ts=1632486605364",
          productName: "VOLUMINOUS POPLIN SHIRT",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 5==5  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/7563/252/606/2/w/334/7563252606_2_1_1.jpg?ts=1627046994062",
          productName: "CROSSOVER PRINTED BLOUSE",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
  
      {
      imageURL : "https://static.zara.net/photos///2022/V/0/3/p/1015/190/070/2/w/386/1015190070_6_1_1.jpg?ts=1638206832306",
      productName : "HOUNDSTOOTH PINAFORE DRESS",
      price : "₹ 1,190.00",
      strikedPrice : "₹ 2,290.00",
      itemGender : "womens",
      itemCategory :"DRESSES | JUMPSUITS",
      sale : "45 % OFF",
      age :"6-14 Years"
    },
    {
      imageURL : "https://static.zara.net/photos///2022/V/0/3/p/6201/601/933/2/w/750/6201601933_6_1_1.jpg?ts=1641399328051",
      productName : "CONTRAST FLORAL RIBBED JUMPSUIT",
      price : "₹ 1,190.00",
      strikedPrice : "₹ 2,290.00",
      itemGender : "womens",
      itemCategory :"DRESSES | JUMPSUITS",
      sale : "45 % OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2022/V/0/3/p/2236/600/800/2/w/386/2236600800_6_1_1.jpg?ts=1639562828313",
      productName : "TEXTURED PLUMETIS DRESS",
      price : "₹ 1,190.00",
      strikedPrice : "₹ 2,290.00",
      itemGender : "womens",
      itemCategory :"DRESSES | JUMPSUITS",
      sale : "45 % OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2021/I/0/3/p/6185/203/807/2/w/386/6185203807_6_1_1.jpg?ts=1626164268012",
      productName : "TEXTURED PLUMETIS DRESS",
      price : "₹ 1,190.00",
      strikedPrice : "₹ 2,290.00",
      itemGender : "womens",
      itemCategory :"DRESSES | JUMPSUITS",
      sale : "45% OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2021/I/0/3/p/6350/263/630/102/w/386/6350263630_1_1_1.jpg?ts=1630950585121",
      productName : "FLORAL SHIRT DRESS",
      price : "₹ 1,190.00",
      strikedPrice : "₹ 1,990.00",
      itemGender : "womens",
      itemCategory :"DRESSES | JUMPSUITS",
      sale : "40% OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2021/I/0/3/p/1639/735/420/2/w/750/1639735420_6_1_1.jpg?ts=1627561879861",
      productName : "DENIM OVERSHIRT WITH SNAP BUTTONS",
      price : "₹ 1,190.00",
      strikedPrice : "₹ 1,990.00",
      itemGender : "womens",
      itemCategory :"SWEATSHIRTS | JACKETS",
      sale : "40% OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2021/I/0/3/p/6475/558/400/103/w/386/6475558400_1_1_1.jpg?ts=1635959548383",
      productName : "PAISLEY FAUX SHEARLING GILET",
      price : "₹ 1,590.00",
      strikedPrice : "₹ 2,290.00",
      itemGender : "womens",
      itemCategory :"SWEATSHIRTS | JACKETS",
      sale : "30% OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2021/I/0/3/p/6475/558/400/2/w/386/6475558400_6_1_1.jpg?ts=1635420789607",
      productName : "PAISLEY FAUX SHEARLING GILET",
      price : "₹ 1,590.00",
      strikedPrice : "₹ 2,290.00",
      itemGender : "womens",
      itemCategory :"SWEATSHIRTS | JACKETS",
      sale : "30% OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2022/V/0/3/p/3402/110/400/2/w/386/3402110400_6_1_1.jpg?ts=1638267194044",
      productName : "RIBBED POLO SHIRT",
      price : "₹ 350.00",
      strikedPrice : "₹ 790.00",
      itemGender : "womens",
      itemCategory :"T-SHIRTS",
      sale : "55% OFF / +2 COLOURS",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2021/I/0/3/p/3037/722/330/102/w/386/3037722330_1_1_1.jpg?ts=1633961160124",
      productName : "STRIPED T-SHIRT",
      price : "₹ 350.00",
      strikedPrice : "₹ 790.00",
      itemGender : "womens",
      itemCategory :"T-SHIRTS",
      sale : "55% OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2021/I/0/3/p/3037/722/330/2/w/386/3037722330_6_1_1.jpg?ts=1634112432606",
      productName : "STRIPED T-SHIRT",
      price : "₹ 350.00",
      strikedPrice : "₹ 790.00",
      itemGender : "womens",
      itemCategory :"T-SHIRTS",
      sale : "55% OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2022/V/0/3/p/1081/190/070/2/w/750/1081190070_6_1_1.jpg?ts=1638535811872",
      productName : "HOUNDSTOOTH OVERSHIRT",
      price : "₹ 1,190.00",
      strikedPrice : "₹ 2,490.00",
      itemGender : "womens",
      itemCategory :"T-SHIRTS",
      sale : "50% OFF",
      age :"6-14 Years"
  
    },
    
    {
      imageURL : "https://static.zara.net/photos///2022/V/0/3/p/9006/608/712/2/w/750/9006608712_6_1_1.jpg?ts=1640192382730",
      productName : "RIBBED RAGLAN SLEEVE T-SHIRT",
      price : "₹  550.00",
      strikedPrice : "₹₹ 990.00",
      itemGender : "womens",
      itemCategory :"T-SHIRTS",
      sale : "40% OFF",
      age :"6-14 Years"
  
    },
    {
      imageURL : "https://static.zara.net/photos///2021/I/0/3/p/4333/706/620/102/w/386/4333706620_1_1_1.jpg?ts=1637142764432",
      productName : "RIBBED T-SHIRT WITH HEARTS",
      price : "₹  550.00",
      strikedPrice : "₹₹ 990.00",
      itemGender : "womens",
      itemCategory :"T-SHIRTS",
      sale : "55% OFF",
      age :"6-14 Years"
  
    },
      // 5==6  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8351/239/330/2/w/334/8351239330_1_1_1.jpg?ts=1634294247335",
          productName: "PRINTED PLEATED BLOUSE",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,790.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 5==7   
      {
          imageURL: "https://static.zara.net/photos///2022/V/0/1/p/4437/042/507/2/w/334/4437042507_2_1_1.jpg?ts=1636560539578",
          productName: "FITTED KNIT BLOUSE",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 5==8  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/242/506/2/w/334/2143242506_2_2_1.jpg?ts=1627046995619",
          productName: "STRIPED BLOUSE WITH POCKET",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 5==9  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/244/746/2/w/334/2143244746_2_1_1.jpg?ts=1628782308563",
          productName: "RUSTIC TOP WITH POCKET",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 5==10
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2298/218/330/2/w/334/2298218330_2_1_1.jpg?ts=1632479467987",
          productName: "FLORAL PRINT BLOUSE",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,790.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 5==11  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/2143/241/426/2/w/334/2143241426_2_1_1.jpg?ts=1623939956197",
          productName: "TEXTURED COTTON BLOUSE",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,790.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 5==12  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9479/080/251/2/w/334/9479080251_2_3_1.jpg?ts=1627047029125",
          productName: "LOOSE-FITTING SHIRT WITH POCKETS",
          price: "₹ 1,590.00",
          strikedPrice: "₹ 2,790.00",
          itemGender: "female",
          itemCategory: "SHIRTS",
          sale: "45%"
      },
      // 6==1  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/8246/242/403/2/w/334/8246242403_2_1_1.jpg?ts=1628174682184",
          productName: "ZW THE CARPENTER STRAIGHT JEANS",
          price: "₹ 1,790.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "JEANS",
          sale: "40%"
      },
      // 6==2  
      {
          imageURL: "https://static.zara.net/photos///2021/I/0/1/p/9632/240/251/2/w/334/9632240251_1_1_1.jpg?ts=1625061419331",
          productName: "ZW THE MERCER JOGGER JEANS",
          price: "₹ 1,790.00",
          strikedPrice: "₹ 2,990.00",
          itemGender: "female",
          itemCategory: "JEANS",
          sale: "40%"
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/1538/313/305/2/w/444/1538313305_2_1_1.jpg?ts=1631277001985",
        productName: "BASIC DENIM JACKET",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 2,999.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 20,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3562/326/712/2/w/444/3562326712_2_1_1.jpg?ts=1628850964624",
        productName: "OVERSHIRT WITH CONTRAST POCKETS",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3918/306/251/2/w/444/3918306251_2_1_1.jpg?ts=1633072946418",
        productName: "TECHNICAL JACKET",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/9621/430/300/2/w/444/9621430300_2_1_1.jpg?ts=1627033368623",
        productName: "LIGHTWIEGHT TECHNICAL JACKET",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Jackets",
        sale: 55,
      },
    
      //OVERSHIRTS
      {
        imageURL:
          "https://static.zara.net/photos///2022/V/0/2/p/3057/204/800/2/w/444/3057204800_2_1_1.jpg?ts=1638351856835",
        productName: "GEOMETRIC JACQUARD OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0072/927/401/2/w/444/0072927401_2_1_1.jpg?ts=1631867549480",
        productName: "OVERSHIRT WITH POCKETS",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0693/331/800/2/w/444/0693331800_2_1_1.jpg?ts=1628608130880",
        productName: "STRIPED JACQUARD SHIRT",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 65,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/7446/313/676/2/w/444/7446313676_2_1_1.jpg?ts=1632915632883",
        productName: "CORDUROY OVERSHIRT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4477/431/710/3/w/444/4477431710_2_5_1.jpg?ts=1626252294014",
        productName: "PATCH OVERSHIRT",
        price: "₹ 1,990.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/1248/414/800/2/w/444/1248414800_2_1_1.jpg?ts=1633506734448",
        productName: "FAUX SHEARLING CHECK OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/2675/308/300/2/w/444/2675308300_2_1_1.jpg?ts=1628671908667",
        productName: "STRIPED JACQUARD OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/5950/515/400/2/w/444/5950515400_2_2_1.jpg?ts=1633074426695",
        productName: "® ERIN WILSON PATCH OVERSHIRT",
        price: "₹ 2,990.00",
        strikedPrice: "₹ 5,590.00",
        itemGender: "male",
        itemCategory: "Overshirt",
        sale: 45,
      },
    
      //KNITWEAR
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0077/301/710/2/w/444/0077301710_2_1_1.jpg?ts=1628074520816",
        productName: "COTTON AND SILK KNIT POLO SHIRT",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/2893/306/832/2/w/444/2893306832_2_1_1.jpg?ts=1636542185679",
        productName: "WOOL - SILK SWEATER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3284/309/439/2/w/444/3284309439_2_1_1.jpg?ts=1633691154910",
        productName: "COTTON SWEATER WITH PATCH DETAIL",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6674/300/520/3/w/444/6674300520_2_1_1.jpg?ts=1626187633056",
        productName: "COMBINED KNIT T-SHIRT",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 60,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4090/322/401/2/w/444/4090322401_2_1_1.jpg?ts=1636449667602",
        productName: "GRAPHIC PRINT SWEATER",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/0048/309/803/2/w/444/0048309803_2_1_1.jpg?ts=1637673986198",
        productName: "ABSTRACT JACQUARD SWEATER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/5755/307/400/2/w/444/5755307400_2_1_1.jpg?ts=1637138062196",
        productName: "STRIPED SWEATER",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/4938/313/802/2/w/444/4938313802_2_1_1.jpg?ts=1629448666038",
        productName: "MOUNTAIN JACQUARD CARDIGAN",
        price: "₹ 2,290.00",
        strikedPrice: "₹ 4,590.00",
        itemGender: "male",
        itemCategory: "Knitwear",
        sale: 50,
      },
    
      //SHIRTS
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/3717/350/250/2/w/444/3717350250_2_1_1.jpg?ts=1630063982843",
        productName: "CONTRAST SLOGAN SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 55,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6987/360/707/2/w/444/6987360707_2_1_1.jpg?ts=1631885303474",
        productName: "COLOURED COTTON SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 35,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/7545/225/679/2/w/444/7545225679_2_1_1.jpg?ts=1622476872265",
        productName: "LYOCELL - LINEN SHIRT",
        price: "₹ 1,490.00",
        strikedPrice: "₹ 2,790.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 45,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/0/2/p/6917/324/250/2/w/444/6917324250_2_1_1.jpg?ts=1627028393401",
        productName: "WATERCOLOUR PRINT SHIRT",
        price: "₹ 1,490.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 50,
      },
      {
        imageURL:
          "https://static.zara.net/photos///2022/V/0/2/p/6085/305/800/2/w/444/6085305800_2_1_1.jpg?ts=1638291014174",
        productName: "SLOGAN PRINT SHIRT",
        price: "₹ 1,290.00",
        strikedPrice: "₹ 2,990.00",
        itemGender: "male",
        itemCategory: "Shirt",
        sale: 55,
      }
]


//.....................................SearchPage hamburagar js....................///

var ham=document.querySelector(".hamburger");
     var hamcross=document.querySelector("i");

     ham.style.display="none";
    var  count=0
    function myFunction() {
       count++
       if(count%2==1){
        ham.style.display="block";
        hamcross.setAttribute("class","fas fa-times fa-2x")

       }else{
        ham.style.display="none";
        hamcross.setAttribute("class","fa fa-bars fa-2x")
       }
       
        
           
         
     
   



       
    }


// function logoFun(){
//     var logo=document.querySelector("#logo")
//     window.
// }





//##########################################################  SEARCHPAGE JS #####################################
r=0
function myfun()
{
    

    var trendItems=document.querySelector("#searchTrend").innerText;
    // trendsname=document.querySelector
    // 
    var trendItems =document.querySelector("#searchJeans").innerText
    
  
    
    var trendItems=document.querySelector("#searchShoes").innerText
    
    var trendItems =document.querySelector("#searchTop").innerText
    
    if(trendItems=="JEANS"){
        var stylebox=document.getElementById("ulcategory");
            stylebox.style.display="none";
            var stylebox2=document.getElementById("searchCategorydiv");
            stylebox2.style.display="none"; 
            var x="jeans" 
          displaydata(x);
          console.log("tuch kiya")

 }
 

    
    // var tr1=document.querySelector("#trv").innerText;
    // console.log(tr1)
    // console.log(trendsname)
    var input1=document.querySelector("#searchitems").value;
    
    if(input1[0]=="D"||input1[0]=="d"){
        var stylebox=document.getElementById("ulcategory");
            stylebox.style.display="none";
            var stylebox2=document.getElementById("searchCategorydiv");
            stylebox2.style.display="none";  
            x=input1[0]
            r++
    console.log(r)
            
          displaydata(x);

      }

    }
     var count1=0
     function jeansFun(){
  
            var trendItems =document.querySelector("#searchShirts").innerText
        var    stylebox=document.getElementById("ulcategory");
            stylebox.style.display="none";
            var stylebox2=document.getElementById("searchCategorydiv");
            stylebox2.style.display="none"; 
            var x="jeans" 
          displaydata(x);
    
          
       
       
    
     }
     function shirtFun(){
    
            var trendItems =document.querySelector("#searchShirts").innerText
          var  stylebox=document.getElementById("ulcategory");
            stylebox.style.display="none";
            var stylebox2=document.getElementById("searchCategorydiv");
            stylebox2.style.display="none"; 
            var x="shirt" 
          displaydata(x);
    
      
       
       
    
     }

    function shoesFun(){
   
            var trendItems =document.querySelector("#searchShirts").innerText
            stylebox=document.getElementById("ulcategory");
            stylebox.style.display="none";
            var stylebox2=document.getElementById("searchCategorydiv");
            stylebox2.style.display="none"; 
            var x="shoes" 
          displaydata(x);
    
           
       
       
    
     }
     function trendsFun(){

            var trendItems =document.querySelector("#searchShirts").innerText
         var   stylebox=document.getElementById("ulcategory");
            stylebox.style.display="none";
            var stylebox2=document.getElementById("searchCategorydiv");
            stylebox2.style.display="none"; 
            var x="trends" 
          displaydata(x);
    
   
       
       
    
     }
     function topFun(){

        var trendItems =document.querySelector("#searchShirts").innerText
     var   stylebox=document.getElementById("ulcategory");
        stylebox.style.display="none";
        var stylebox2=document.getElementById("searchCategorydiv");
        stylebox2.style.display="none"; 
        var x="top" 
      displaydata(x);


   
   

 }


    function displaydata(x)

    {
      
        if(x=="jeans" ){
            Dressobj=jeansobj
       
        }else if(x=="shoes" ){
            Dressobj=shoesobj
        }else if(x=="shirt"){
            Dressobj=shirtobj
        }else if(x=="trends"){
            Dressobj=trendesobj
        }else if(x=="top"){
            Dressobj=topobj
        }
       



        Dressobj.map(function(el){
           
          
           
            


           var box = document.createElement("div");

           
           
           var img = document.createElement("img");
           img.src = el.ImageURL;
           img.setAttribute("class","divimg")
   
          
           var pricebox = document.createElement("div")
           pricebox.setAttribute("id","pricebox")
   
           var div1 = document.createElement("div")
           var price = document.createElement("p");
           price.textContent = el.ImageName;
           div1.append(price);
           
           var div2 = document.createElement("div")
           var striked = document.createElement("h3");
           striked.textContent = el.price;
           // striked.style.textDecoration = strike line-through
           div2.append(striked);
   
           pricebox.append(div1,div2);
   
          
           box.addEventListener("click", function(){
               kuchbhi(el);
           });
           // box.append(img,name,prices);
           box.append(img,pricebox);
           document.querySelector("#container").append(box);
       });
       function kuchbhi(el){

    if(el.id=="1"){
      var  arr={"1":["s","t","y","z"]}

         for(var key in arr){
             if(key==el.id){
                 x=arr[key]
                for(var i=0;i<x.length;i++){
                    console.log(x[i])
                }
             }
         }




       }
    }

    }




// ......commonall..............,.m......commonall[1].concat.apply.apply.........commonall[1].concat.
//DATA SETS FOR MENS


    // ...............womanJs,,,,,,,,,,,,,,
    //DATA SET FOR WOMEN



//DATA SET FOR WOMEN

//Rendering WomenData


function displaydata(x)

{
    if(x=="jeans" ){
        Dressobj=jeansobj
   
    }else if(x=="shoes" ){
        Dressobj=shoesobj
    }else if(x=="shirt"){
        Dressobj=shirtobj
    }else if(x=="trends"){
        Dressobj=trendesobj
    }else if(x=="top"){
        Dressobj=topobj
    }
  
Dressobj.map(function (elem) {
    var div = document.createElement("div");
    div.setAttribute("class","box");

    var image = document.createElement("img");
    image.setAttribute("src", elem.imageURL);
    image.setAttribute("class", "productImage");

    //linking product page

    image.addEventListener("click",function(){
        
        localStorage.setItem("productpage",JSON.stringify(elem));     
                
        window.location.href = "selectCart.html";
    })

    var title = document.createElement("p");
    title.textContent = elem.productName;
    title.setAttribute("class","productTitle");

    var price = document.createElement("p");
    price.textContent = elem.price;
    price.setAttribute("class","productPrice")

    var striked = document.createElement("h5");
    striked.textContent = elem.strikedPrice;
    striked.setAttribute("class","productStrikedPrice");

    var price_div = document.createElement("div");
    price_div.setAttribute("class","priceFlex");
    price_div.append(striked,price);


    div.append(image, title, price_div);
    document.querySelector("#container1").append(div);

    // localStorage.setItem("boysData",JSON.stringify(boysData));
  });

}



var userdata=JSON.parse(localStorage.getItem("USERSDATA"))||[];

var user=document.querySelector("#userId")

if(userdata.length>0){
  user.innerText=userdata[userdata.length-1]["username"]
}
   console.log(user)
