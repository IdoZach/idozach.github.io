Survey.Survey.cssType = "bootstrap";
var survey = new Survey.Survey(
        {
 pages: [
  {
   name: "מידע לגבי תרגול פרונטלי",
   questions: [
    {
     type: "dropdown",
     choices: [
      {
       value: "basic",
       text: "קורס בסיסי"
      },
      {
       value: "advanced",
       text: "קורס מתקדם"
      },
      {
       value: "other",
       text: "קורס אחר"
      }
     ],
     name: "סוג הקורס"
    },
    {
     type: "matrix",
     columns: [
      {
       value: "h1",
       text: "1"
      },
      {
       value: "h2",
       text: "2"
      },
      {
       value: "h3",
       text: "3"
      },
      {
       value: "h4",
       text: "4"
      },
      {
       value: "h5",
       text: "5"
      },
      {
       value: "h6",
       text: "6"
      }
     ],
     name: "מספר שעות תרגול",
     rows: [
      {
       value: "hours",
       text: "מספר שעות"
      }
     ]
    },
    {
     type: "checkbox",
     choices: [
      {
       value: "incharge",
       text: "אני מתרגל/מתרגלת אחראי/ת"
      },
      {
       value: "firsttime",
       text: "זהו קורס מתקדם המועבר לראשונה"
      }
     ],
     name: "אפשרויות נוספות"
    },
    {
     type: "matrix",
     columns: [
      {
       value: "n1",
       text: "עד 99 רשומים"
      },
      {
       value: "n2",
       text: "100-249 רשומים"
      },
      {
       value: "n3",
       text: "250-400 רשומים"
      },
      {
       value: "n4",
       text: "מעל 400 רשומים"
      }
     ],
     name: "מספר סטודנטים רשומים (רלבנטי רק עבור מתרגל אחראי)",
     rows: [
      "מספר רשומים"
     ]
    }
   ]
  },
  {
   name: "הדרכה במעבדה",
   questions: [
    {
     type: "matrix",
     columns: [
      {
       value: "h1",
       text: "שעה אחת"
      },
      {
       value: "h2",
       text: "שעתיים"
      },
      {
       value: "h3",
       text: "3"
      },
      {
       value: "h4",
       text: "4"
      },
      {
       value: "h5",
       text: "5"
      },
      {
       value: "h6",
       text: "6"
      },
      {
       value: "h7",
       text: "7"
      },
      {
       value: "h8",
       text: "8"
      },
      {
       value: "h9",
       text: "9"
      },
      {
       value: "h10",
       text: "10"
      },
      {
       value: "h11",
       text: "11"
      },
      {
       value: "h12",
       text: "12"
      }
     ],
     name: "שעות הדרכת מעבדה שבועיות",
     rows: [
      "מספר שעות"
     ]
    }
   ]
  },
  {
   name: "בדיקת תרגילים",
   questions: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "one",
       text: "בדיקה מסוג I - בדיקה רגילה"
      },
      {
       value: "two",
       text: "בדיקה מסוג II - בדיקת עבודות ללא פתרון מוכן"
      }
     ],
     name: "אנא ציין/צייני סוג הבדיקה"
    },
    {
     type: "matrix",
     columns: [
      {
       value: "hw1",
       text: "1"
      },
      {
       value: "hw2",
       text: "2"
      },
      {
       value: "hw3",
       text: "3"
      },
      {
       value: "hw4",
       text: "4"
      },
      {
       value: "hw5",
       text: "5"
      },
      {
       value: "hw6",
       text: "6"
      },
      {
       value: "hw7",
       text: "7"
      },
      {
       value: "hw8",
       text: "8"
      },
      {
       value: "hw9",
       text: "9"
      },
      {
       value: "hw10",
       text: "10"
      },
      {
       value: "hw11",
       text: "11"
      },
      {
       value: "hw12",
       text: "12"
      },
      {
       value: "hw13",
       text: "13"
      }
     ],
     name: "מספר גליונות הגשה בסמסטר",
     rows: [
      "מספר גליונות"
     ]
    },
    {
     type: "text",
     name: "מספר סטודנטים בקורס"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "singles",
       text: "הגשה ביחידים"
      },
      {
       value: "pairs",
       text: "הגשה בזוגות"
      },
      {
       value: "triads",
       text: "הגשה בשלשות"
      }
     ],
     name: "אופן ההגשה"
    }
   ]
  },
  {
   name: "הנחית פרויקטים",
   questions: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "basic",
       text: "פרויקט בסיסי"
      },
      {
       value: "gmar",
       text: "פרויקט מתקדם או פרויקט גמר"
      }
     ],
     name: "סוג הפרויקט"
    },
    {
     type: "matrix",
     columns: [
      {
       value: "p1",
       text: "1"
      },
      {
       value: "p2",
       text: "2"
      },
      {
       value: "p3",
       text: "3"
      },
      {
       value: "p4",
       text: "4"
      },
      {
       value: "p5",
       text: "5"
      },
      {
       value: "p6",
       text: "6"
      },
      {
       value: "p7",
       text: "7"
      },
      {
       value: "p8",
       text: "8"
      },
      {
       value: "p9",
       text: "9"
      },
      {
       value: "p10",
       text: "10"
      }
     ],
     name: "מספר הסטודנטים",
     rows: [
      {
       value: "num",
       text: "מספר הסטודנטים"
      }
     ]
    }
   ]
  }
 ]
});
//{pages:[{name:"מידע לגבי תרגול פרונטלי",questions:[{type:"dropdown",choices:[{value:"basic",text:"קורס בסיסי"},{value:"advanced",text:"קורס מתקדם"},{value:"other",text:"קורס אחר"}],name:"סוג הקורס"},{type:"matrix",columns:[{value:"h1",text:"1"},{value:"h2",text:"2"},{value:"h3",text:"3"},{value:"h4",text:"4"},{value:"h5",text:"5"},{value:"h6",text:"6"}],name:"מספר שעות תרגול",rows:[{value:"hours",text:"מספר שעות"}]},{type:"checkbox",choices:[{value:"incharge",text:"אני מתרגל/מתרגלת אחראי/ת"},{value:"firsttime",text:"זהו קורס מתקדם המועבר לראשונה"}],name:"אפשרויות נוספות"},{type:"matrix",columns:[{value:"n1",text:"עד 99 רשומים"},{value:"n2",text:"100-249 רשומים"},{value:"n3",text:"250-400 רשומים"},{value:"n4",text:"מעל 400 רשומים"}],name:"מספר סטודנטים רשומים (רלבנטי רק עבור מתרגל אחראי)",rows:["מספר רשומים"]}]},{name:"הדרכה במעבדה",questions:[{type:"matrix",columns:[{value:"h1",text:"שעה אחת"},{value:"h2",text:"שעתיים"},{value:"h3",text:"3"},{value:"h4",text:"4"},{value:"h5",text:"5"},{value:"h6",text:"6"},{value:"h7",text:"7"},{value:"h8",text:"8"},{value:"h9",text:"9"},{value:"h10",text:"10"},{value:"h11",text:"11"},{value:"h12",text:"12"}],name:"שעות הדרכת מעבדה שבועיות",rows:["מספר שעות"]}]},{name:"בדיקת תרגילים",questions:[{type:"radiogroup",choices:[{value:"one",text:"בדיקה מסוג I - בדיקה רגילה"},{value:"two",text:"בדיקה מסוג II - בדיקת עבודות ללא פתרון מוכן"}],name:"אנא ציין/צייני סוג הבדיקה"},{type:"matrix",columns:[{value:"hw1",text:"1"},{value:"hw2",text:"2"},{value:"hw3",text:"3"},{value:"hw4",text:"4"},{value:"hw5",text:"5"},{value:"hw6",text:"6"},{value:"hw7",text:"7"},{value:"hw8",text:"8"},{value:"hw9",text:"9"},{value:"hw10",text:"10"},{value:"hw11",text:"11"},{value:"hw12",text:"12"},{value:"hw13",text:"13"}],name:"מספר גליונות הגשה בסמסטר",rows:["מספר גליונות"]},{type:"text",name:"מספר סטודנטים בקורס"},{type:"radiogroup",choices:[{value:"singles",text:"הגשה ביחידים"},{value:"pairs",text:"הגשה בזוגות"},{value:"triads",text:"הגשה בשלשות"}],name:"אופן ההגשה"}]},{name:"הנחית פרויקטים",questions:[{type:"radiogroup",choices:[{value:"basic",text:"פרויקט בסיסי"},{value:"gmar",text:"פרויקט מתקדם או פרויקט גמר"}],name:"סוג הפרויקט"},{type:"matrix",columns:[{value:"p1",text:"1"},{value:"p2",text:"2"},{value:"p3",text:"3"},{value:"p4",text:"4"},{value:"p5",text:"5"},{value:"p6",text:"6"},{value:"p7",text:"7"},{value:"p8",text:"8"},{value:"p9",text:"9"},{value:"p10",text:"10"}],name:"מספר הסטודנטים",rows:[{value:"num",text:"מספר הסטודנטים"}]}]}]});
survey.onComplete.add(function (s) {
alert("The results are:" + JSON.stringify(s.data));
 });
survey.render("mySurveyJSName");