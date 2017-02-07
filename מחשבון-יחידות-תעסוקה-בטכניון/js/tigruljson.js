function surveyTirgulContent() {
    return JSON.toString( 
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
    }, {
     type: "radiogroup",
     choices: [
      {
       value: "tirgul",
       text: "תרגול"
      },
      {
       value: "lab",
       text: "הדרכת מעבדה"
      },
      {
       value: "exercise",
       text: "בדיקת תרגילים"
      },
      {
       value: "supervision",
       text: "הדרכת פרויקט"
      },
      {
       value: "finish",
       text: "סיום"
      }
     ],
     name: strChooseNextTaskName
  }
   ]
  }
 ]
}   
    );

}