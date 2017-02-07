// constants

var TIRGUL_COEF_BASICCOURSE = 200;
var TIRGUL_COEF_ADVCOURSE = 250;
var TIRGUL_COEF_OTHERCOURSE = 225;
var TIRGUL_ADV_FIRSTTIME = 50;
var TIRGUL_INCHARGE_1 = 50;
var TIRGUL_INCHARGE_2 = 200;
var TIRGUL_INCHARGE_3 = 300;
var TIRGUL_INCHARGE_4 = 400;
//var TIRGUL_INCHARGE_THRES_1 = 100;
//var TIRGUL_INCHARGE_THRES_2 = 250;
//var TIRGUL_INCHARGE_THRES_3 = 400;

var LAB_HOUR_UNIT = 100;
function labPreperation(hours){
    var res = LAB_HOUR_UNIT / 3.0 * hours;
    if (res>100)
        res = 100;
    return res;
}

var SUPERV_BASIC = 50;
var SUPERV_MORE = 25;
var SUPERV_FINAL = 125;
var SUPERV_THRES = 10; // threshold for unit change between basic and more

var EXERCISE_CHECK_I = 100;
var EXERCISE_CHECK_II = 150;
var EXERCISE_COEF = 40;

var FULLTIME_COEF = 2200;
var RANK_BSC = 4472;
var RANK_MSC = 5496;
var RANK_PHD1 = 9212;
var RANK_PHD2 = 9972;
var RANK_PHD3 = 10578;
// forms responses
var strChooseRank = "בחר/בחרי את דרגתך האקדמית";
var strChooseTaskName = "בחר/בחרי סוג מטלה";
var strChooseNextTaskName = "בחר/בחרי את המטלה הבאה";

var strCourseExplanation = 'הסבר: קורס בסיסי הינו קורס חובה במסלול.';
strCourseExplanation += '<br>';
strCourseExplanation += 'קורס מתקדם הינו קורס משותף או קורס מוסמכים.';
strCourseExplanation += '<br>';
strCourseExplanation += 'קורס אחר הינו קורס חובה שהינו גם בחירה במסלול אחר.';
strCourseExplanation += '<br>';

var tirgulCourseType = "סוג הקורס";
var tirgulHours = "מספר שעות תרגול";
var tirgulOtherOptions = "אפשרויות נוספות";
var tirgulParticipantsNo = "מספר סטודנטים רשומים (רלבנטי רק עבור מתרגל אחראי)";

var labHoursNo = "שעות הדרכת מעבדה שבועיות";

var exerciseGradingType = "אנא ציין/צייני סוג הבדיקה"; // one, two
var exerciseNoHW = "מספר גליונות הגשה בסמסטר";
var exerciseParticipantsNo = "מספר סטודנטים בקורס";
var exerciseSubmissionType = "אופן ההגשה";

var projectType = "סוג הפרויקט";
var projectParticipantsNo = "מספר הסטודנטים (לא רלבנטי בפרויקט גמר)";

// here are the json survey actual structures

function surveyTirgulContent() {
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
         value: "others",
       text: "קורס אחר"
      }
     ],
     name: tirgulCourseType
    },
    { type: "html",
        html: strCourseExplanation
    },
    {
     type: "matrix",
     columns: [
      {
       value: "1",
       text: "1"
      },
      {
       value: "2",
       text: "2"
      },
      {
       value: "3",
       text: "3"
      },
      {
       value: "4",
       text: "4"
      },
      {
       value: "5",
       text: "5"
      },
      {
       value: "6",
       text: "6"
      }
     ],
     name: tirgulHours,
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
     name: tirgulOtherOptions
    },
    {
     type: "matrix",
     columns: [
      {
       value: "1",
       text: "עד 99 רשומים"
      },
      {
       value: "2",
       text: "100-249 רשומים"
      },
      {
       value: "3",
       text: "250-400 רשומים"
      },
      {
       value: "4",
       text: "מעל 400 רשומים"
      }
     ],
     name: tirgulParticipantsNo,
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
    return survey;
}

function surveyLabContent() {
    var survey = new Survey.Survey(
        {
 pages: [
  {
   name: "הדרכה במעבדה",
   questions: [
    {
     type: "matrix",
     columns: [
      {
       value: "1",
       text: "שעה אחת"
      },
      {
       value: "2",
       text: "שעתיים"
      },
      {
       value: "3",
       text: "3"
      },
      {
       value: "4",
       text: "4"
      },
      {
       value: "5",
       text: "5"
      },
      {
       value: "6",
       text: "6"
      },
      {
       value: "7",
       text: "7"
      },
      {
       value: "8",
       text: "8"
      },
      {
       value: "9",
       text: "9"
      },
      {
       value: "10",
       text: "10"
      },
      {
       value: "11",
       text: "11"
      },
      {
       value: "12",
       text: "12"
      }
     ],
     name: labHoursNo,
     rows: [
      "מספר שעות"
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
    return survey;
}

function surveyExerciseContent() {
    var survey = new Survey.Survey(
        {
 pages: [
 {
   name: "בדיקת תרגילים",
   questions: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "I",
       text: "בדיקה מסוג I - בדיקה רגילה"
      },
      {
       value: "II",
       text: "בדיקה מסוג II - בדיקת עבודות ללא פתרון מוכן"
      }
     ],
     name: exerciseGradingType
    },
    {
     type: "matrix",
     columns: [
      {
       value: "1",
       text: "1"
      },
      {
       value: "2",
       text: "2"
      },
      {
       value: "3",
       text: "3"
      },
      {
       value: "4",
       text: "4"
      },
      {
       value: "5",
       text: "5"
      },
      {
       value: "6",
       text: "6"
      },
      {
       value: "7",
       text: "7"
      },
      {
       value: "8",
       text: "8"
      },
      {
       value: "9",
       text: "9"
      },
      {
       value: "10",
       text: "10"
      },
      {
       value: "11",
       text: "11"
      },
      {
       value: "12",
       text: "12"
      },
      {
       value: "13",
       text: "13"
      }
     ],
     name: exerciseNoHW,
     rows: [
      "מספר גליונות"
     ]
    },
    {
     type: "text",
     name: exerciseParticipantsNo
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
       value: "trios",
       text: "הגשה בשלשות"
      }
     ],
     name: exerciseSubmissionType
    },
    {
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
    return survey;
}

function surveySupervisionContent() {
    var survey = new Survey.Survey(
        {
 pages: [
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
     name: projectType
    },{
     type: "text",
     name: projectParticipantsNo
    }
            , {
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
    return survey;
}

/////
function surveyChoices() {
        Survey.Survey.cssType = "bootstrap";
    var survey = new Survey.Survey(
        {
 pages: [
  {
   name: "סוג מטלה",
   questions: [
    {
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
      }
     ],
     name: strChooseTaskName
    }
   ]
  }
 ]
});
    survey.completeText = 'Next';
    
    survey.onComplete.add(function (s) {
        selectedTask = s.data[strChooseTaskName];
        surveyShowCurrent(selectedTask, [] );
    });
    survey.render("mySurveyJSName");
}

function surveyRank() {
    var survey = new Survey.Survey(
        {
 pages: [
  {
   name: "בחר/בחרי את האפשרות המתאימה:",
   questions: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "bsc",
       text: "סטודנט/סטודנטית לתואר ראשון"
      },
      {
       value: "msc",
       text: "סטודנט/סטודנטית לתואר שני"
      },
      {
       value: "phd1",
       text: "דוקטורנט/ית לפני בחינת מועמדות"
      },
      {
       value: "phd2",
       text: "דוקטורנט/ית לאחר בחינת מועמדות"
      },
      {
       value: "phd3",
       text: "מדריך (דוקטורנט/ית לאחר 3 שנות לימודי דוקטורט או לאחר שנתיים מבחינת המועמדות)"
      }
      
     ],
     name: strChooseRank
    }
   ]
  }
 ]
});
    return survey;
}



function surveyShowCurrent(type, arrDataSoFar) {
    Survey.Survey.cssType = "bootstrap";

    if (type==='tirgul')
        survey = surveyTirgulContent();
    else if (type==='lab')
        survey = surveyLabContent();
    else if (type==='exercise')
        survey = surveyExerciseContent();
    else if (type==='supervision')
        survey = surveySupervisionContent();
    
    survey.completeText = 'Next';
    
    survey.onComplete.add(function (s) {
       nextTask = s.data[strChooseNextTaskName];
       arrDataSoFar.push([type, s.data]);
       surveyShowCurrent(type, arrDataSoFar);
       if (nextTask==='finish')
           askRank(arrDataSoFar);
       else
           surveyShowCurrent(nextTask, arrDataSoFar);

    });
    survey.render("mySurveyJSName");
}

function askRank(arrDataSoFar) {
    Survey.Survey.cssType = "bootstrap";
    survey = surveyRank();
    survey.completeText = 'Next';
    
    survey.onComplete.add(function (s) {
        //var selRank = s.data[strChooseRank];
        arrDataSoFar.push(['rank', s.data]);
        calculateResult(arrDataSoFar);
    });
    survey.render("mySurveyJSName");
    
}

function getRankCoef(dat) {
    if (dat[strChooseRank]==='bsc')
        var coef = RANK_BSC;
    else if (dat[strChooseRank]==='msc')
        var coef = RANK_MSC;
    else if (dat[strChooseRank]==='phd1')
        var coef = RANK_PHD1;
    else if (dat[strChooseRank]==='phd2')
        var coef = RANK_PHD2;
    else if (dat[strChooseRank]==='phd3')
        var coef = RANK_PHD3;
    
    return  coef * 1.0 / FULLTIME_COEF;
}

function calculateResult(data) {
    var tot = 0;
    var report = {};
    report['tirgul'] = 0;
    report['lab'] = 0;
    report['supervision'] = 0;
    report['exercise'] = 0;
    var ils_per_unit = 0;
    for (var s in data){
        var type = data[s][0];
        var dat = data[s][1];
        if (type==='tirgul')
            tot += getTirgulResult(dat, report);
        else if (type==='lab')
            tot += getLabResult(dat, report);
        else if (type==='supervision')
            tot += getSupervisionResult(dat, report);
        else if (type==='exercise')
            tot += getExerciseResult(dat, report);
        else if (type==='rank') {
            ils_per_unit = getRankCoef(dat);
        }       
    }
    document.getElementById('mySurveyJSName').innerHTML = '';
    var title = document.createElement('h2');
    title.innerHTML = 'תוצאה';
    document.getElementById('mySurveyJSName').appendChild(title);
    var pp = document.createElement('p');
    pp.innerHTML = '<img width="150px" src="img/Empty_Pockets.jpg"><p>';
    pp.innerHTML += 'יש לך ' + Math.round(tot) + ' יחידות תעסוקה (משוער), ';
    pp.innerHTML += 'שהן כ-' + Math.round(ils_per_unit * tot) + ' ש"ח ';
    pp.innerHTML += '(ללא חישוב ותק).';
    pp.innerHTML += '<br>';
    
    document.getElementById('mySurveyJSName').appendChild(pp);
    var p_report = document.createElement('p');
    p_report.innerHTML = 'פירוט: <br>';
    for (var s in report) {
        if (s==='tirgul')
            p_report.innerHTML += report[s] + ' יחידות על תרגול. <br>';
        else if (s==='lab')
            p_report.innerHTML += report[s] + ' יחידות על הדרכת מעבדה. <br>';
        else if (s==='exercise')
            p_report.innerHTML += report[s] + ' יחידות על בדיקת תרגילים. <br>';
        else if (s==='supervision')
            p_report.innerHTML += report[s] + ' יחידות על הנחית פרויקטים. <br>';
        
    }
    document.getElementById('mySurveyJSName').appendChild(p_report);
    
    p_summary = document.createElement('p');
    p_summary.innerHTML = 'זהו חישוב משוער לפי טבלת פלמור. לדיווח על שגיאות נא פנו לכתובת ';
    p_summary.innerHTML += 'ido@tx.';
    p_summary.innerHTML += '<br><br>';
    p_summary.innerHTML += 'שימו לב! חישוב יחידות התעסוקה לגבי בדיקת תרגילים אינו מוגדר היטב. ';
    p_summary.innerHTML += 'לעתים נוח להשתמש בכלל האצבע הבא: ';
    p_summary.innerHTML += 'שעת עבודה שבועית צריכה להיות מתוגמלת ב-100 יחידות תעסוקה, במשך 15 שבועות.';
    p_summary.innerHTML += '<br>';
    
    document.getElementById('mySurveyJSName').appendChild(p_summary);
    //  alert('congrats, you have' + tot.toString() + 'units.');
}

function getExerciseResult(dat, report) {
    if (dat[exerciseGradingType]==='I')
        var coef = EXERCISE_CHECK_I;
    else if (dat[exerciseGradingType]==='II')
        var coef = EXERCISE_CHECK_II;
    coef = coef * 1.0 / EXERCISE_COEF;

    var numStudents = parseInt(dat[exerciseParticipantsNo]);
    var numHW = parseInt(dat[exerciseNoHW]["מספר גליונות"]);
    
    if (dat[exerciseSubmissionType]==='singles')
        var subType = 1;
    else if (dat[exerciseSubmissionType]==='pairs')
        var subType = 2;
    else if (dat[exerciseSubmissionType]==='trios')
        var subType = 3;
    
    //var totSheetsToCheck = numStudents * numHW / subType; // real calculation
    var totSheetsToCheck = numStudents / subType; // practical calculation
    var res = totSheetsToCheck * coef;
    
    report['exercise'] += res;
    
    return res;
}

function getSupervisionResult(dat, report) {
    var res = 0;
    if (dat[projectType]==='basic') {
        var num = parseInt(dat[projectParticipantsNo]);
        if (num<=SUPERV_THRES)
            res = SUPERV_BASIC * num;
        else
            res = SUPERV_BASIC * SUPERV_THRES + SUPERV_MORE * (num-10);
    }
    else if (dat[projectType]==='gmar') {
        res = SUPERV_FINAL;
    }
    
    report['supervision'] += res;
    
    return res;
}

function getLabResult(dat, report) {
    var num = parseInt(dat[labHoursNo]["מספר שעות"]);
    var res = LAB_HOUR_UNIT * num + labPreperation(num);
    
    report['lab'] += res;
    
    return res;
}

function getTirgulResult(dat, report) {
    
    if (dat[tirgulCourseType]==='basic')
        var coef = TIRGUL_COEF_BASICCOURSE;
    else if (dat[tirgulCourseType]==='advanced')
        var coef = TIRGUL_COEF_ADVCOURSE;
    else if (dat[tirgulCourseType]==='others')
        var coef = TIRGUL_COEF_OTHERCOURSE;
    var hours = parseInt(dat[tirgulHours]['hours']);
    var res = hours * coef;
    
    // other options
    if (tirgulOtherOptions in dat) {
        var options = dat[tirgulOtherOptions];
        var inCharge = options.indexOf('incharge')>=0;
        var firstTime = options.indexOf('firsttime')>=0;
    } else {
        var inCharge = false;
        var firstTime = false;
    }
    
    
    if (firstTime && (dat[tirgulCourseType]==='advanced'))
        res += TIRGUL_ADV_FIRSTTIME;
    
    if (inCharge) {
        var noRegistered = dat[tirgulParticipantsNo]["מספר רשומים"];
        if (noRegistered==='1')
            res += TIRGUL_INCHARGE_1;
        else if (noRegistered==='2')
            res += TIRGUL_INCHARGE_2;
        else if (noRegistered==='3')
            res += TIRGUL_INCHARGE_3;
        else if (noRegistered==='4')
            res += TIRGUL_INCHARGE_4;
    }
    report['tirgul'] += res;
    return res;
}
