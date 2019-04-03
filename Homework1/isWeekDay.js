{
    const todayDate = new Date();
    const day = todayDate.getDay();
  
    function isWeekend1() {
      return day == 6 || day == 0 ? 'weekend' : 'weekday';
    }
  
    function isWeekend2() {
      const daysMap = {
        0: 'weekend',
        1: 'weekday',
        2: 'weekday',
        3: 'weekday',
        4: 'weekday',
        5: 'weekday',
        6: 'weekend'
      };
      return daysMap[day];
    }
  
    console.log(`Is it weekend yet????: ${isWeekend1()}`);
    console.log(`Is it weekend yet????: ${isWeekend2()}`);
  }
  