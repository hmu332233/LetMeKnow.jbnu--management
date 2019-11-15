const MediMenus = require('../models/mediMenus');
const JinsuMenus = require('../models/jinsuMenus');
const StudentHallMenus = require('../models/studentHallMenus');
const JungdamMenus = require('../models/jungdamMenus');
const HuMenus = require('../models/huMenus');

exports.getMediMenus = async () => {
  const menu = await MediMenus.getLatestMenu();
	if(menu == null){
		return menu;
	}
	else{
		for(var i=0; i<5; i++){
			if(menu.lunch[i].menus == ""){
				menu.lunch[i].menus = "등록된 식단이 없습니다.";
			}
		}
		for(var i=0; i<5; i++){
			if(menu.dinner[i].menus == ""){
				menu.dinner[i].menus = "등록된 식단이 없습니다.";
			}
		}
	}
    
  return menu;
};

exports.getJinsuMenus = async () => {
  const menu = await JinsuMenus.getLatestMenu();
	if(menu == null){
		return menu;
	}
	else{
		for(var i=0; i<5; i++){
			if(menu.lunch[i].menus == ""){
				menu.lunch[i].menus = "등록된 식단이 없습니다.";
			}
		}
		for(var i=0; i<5; i++){
			if(menu.dinner[i].menus == ""){
				menu.dinner[i].menus = "등록된 식단이 없습니다.";
			}
		}
	}
  return menu;
};

exports.getStudentHallMenus = async () => {
  const menu = await StudentHallMenus.getLatestMenu();
	if(menu == null){
		return menu;
	}
	else{
		for(var i=0; i<5; i++){
			if(menu.lunch[i].menus == ""){
				menu.lunch[i].menus = "등록된 식단이 없습니다.";
			}
		}
		for(var i=0; i<5; i++){
			if(menu.dinner[i].menus == ""){
				menu.dinner[i].menus = "등록된 식단이 없습니다.";
			}
		}
	}
  return menu;
};

exports.getJungdamMenus = async () => {
  const menu = await JungdamMenus.getLatestMenu();
	if(menu == null){
		return menu;
	}
	else{
		for(var i=0; i<5; i++){
			if(menu.lunch[i].menus == ""){
				menu.lunch[i].menus = "등록된 식단이 없습니다.";
			}
		}
		
	}
  return menu;
};

exports.getHuMenus = async () => {
  const menu = await HuMenus.getLatestMenu();
	if(menu == null){
		return menu;
	}
	else{
		for(var i=0; i<5; i++){
			if(menu.breakfast[i].menus == ""){
				menu.breakfast[i].menus = "등록된 식단이 없습니다.";
			}
		}
		for(var i=0; i<5; i++){
			if(menu.lunch[i].menus == ""){
				menu.lunch[i].menus = "등록된 식단이 없습니다.";
			}
		}
		for(var i=0; i<5; i++){
			if(menu.dinner[i].menus == ""){
				menu.dinner[i].menus = "등록된 식단이 없습니다.";
			}
		}
	}
  return menu;
};
