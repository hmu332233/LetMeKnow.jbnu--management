const MediMenus = require('../models/mediMenus');
const JinsuMenus = require('../models/jinsuMenus');
const StudentHallMenus = require('../models/studentHallMenus');
const JungdamMenus = require('../models/jungdamMenus');
const HuMenus = require('../models/huMenus');

exports.getMediMenus = async () => {
  const menu = await MediMenus.getLatestMenu();	
	
	if(menu === null){
	  return menu;
	}
	else{
      var obj_lunch_len = Object.keys(menu.lunch).length;
	  var obj_dinner_len = Object.keys(menu.dinner).length;

      for(var i=0; i<obj_lunch_len; i++){
        if(menu.lunch[i].menus === ''){
          menu.lunch[i].menus = '등록된 식단이 없습니다.';
        }
      }
	  for(var i=0; i<obj_dinner_len; i++){
        if(menu.dinner[i].menus === ''){
          menu.dinner[i].menus = '등록된 식단이 없습니다.';
	    }
	  }
	}    
  return menu;
};

exports.getJinsuMenus = async () => {
  const menu = await JinsuMenus.getLatestMenu();	
	
	if(menu === null){
	  return menu;
	}
	else{
      var obj_lunch_len = Object.keys(menu.lunch).length;
	  var obj_dinner_len = Object.keys(menu.dinner).length;	

      for(var i=0; i<obj_lunch_len; i++){
        if(menu.lunch[i].menus === ''){
          menu.lunch[i].menus = '등록된 식단이 없습니다.';
        }
      }
	  for(var i=0; i<obj_dinner_len; i++){
        if(menu.dinner[i].menus === ''){
          menu.dinner[i].menus = '등록된 식단이 없습니다.';
	    }
	  }
	}    
  return menu;
};

exports.getStudentHallMenus = async () => {
  const menu = await StudentHallMenus.getLatestMenu();	
	
	if(menu === null){
	  return menu;
	}
	else{
      var obj_lunch_len = Object.keys(menu.lunch).length;
	  var obj_dinner_len = Object.keys(menu.dinner).length;

      for(var i=0; i<obj_lunch_len; i++){
        if(menu.lunch[i].menus === ''){
          menu.lunch[i].menus = '등록된 식단이 없습니다.';
        }
      }
	  for(var i=0; i<obj_dinner_len; i++){
        if(menu.dinner[i].menus === ''){
          menu.dinner[i].menus = '등록된 식단이 없습니다.';
	    }
	  }
	}    
  return menu;
};

exports.getJungdamMenus = async () => {
  const menu = await JungdamMenus.getLatestMenu();
	
	if(menu === null){
	  return menu;
	}
	else{
      var obj_lunch_len = Object.keys(menu.lunch).length;

      for(var i=0; i<obj_lunch_len; i++){
        if(menu.lunch[i].menus === ''){
          menu.lunch[i].menus = '등록된 식단이 없습니다.';
        }
      }
	}    
  return menu;
};

exports.getHuMenus = async () => {
  const menu = await HuMenus.getLatestMenu();	
	
	if(menu === null){
	  return menu;
	}
	else{
      var obj_breakfast_len = Object.keys(menu.breakfast).length;
      var obj_lunch_len = Object.keys(menu.lunch).length;
	  var obj_dinner_len = Object.keys(menu.dinner).length;

	  for(var i=0; i<obj_breakfast_len; i++){
        if(menu.breakfast[i].menus === ''){
          menu.breakfast[i].menus = '등록된 식단이 없습니다.';
        }
      }	
      for(var i=0; i<obj_lunch_len; i++){
        if(menu.lunch[i].menus === ''){
          menu.lunch[i].menus = '등록된 식단이 없습니다.';
        }
      }
	  for(var i=0; i<obj_dinner_len; i++){
        if(menu.dinner[i].menus === ''){
          menu.dinner[i].menus = '등록된 식단이 없습니다.';
	    }
	  }
	}    
  return menu;
};
