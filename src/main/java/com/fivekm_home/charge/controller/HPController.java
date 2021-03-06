package com.fivekm_home.charge.controller;

import com.fivekm_home.charge.domain.HP.HP_bookmark;
import com.fivekm_home.charge.domain.HP.HP_mapSearch;
import com.fivekm_home.charge.domain.HP.HP_search;
import com.fivekm_home.charge.service.HPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/happyParking")
public class HPController {
    @Autowired
    HPService hpService;

    @GetMapping("/hpRegister")
    public String hpRegister(){
        return "/HP/hpRegister";
    }

    @GetMapping("/hpSearch")
    public String happyParkingSearch(Model model){
        model.addAttribute("searchList", hpService.hpSearchDataList());
        return "/HP/hpSearch";
    }

    @GetMapping("/hpHistory")
    public String hpHistory(){
        return "/myPage/hpHistory";
    }

    // 주차장 예약 페이지
    @GetMapping("/hpBook/{hp_name}/{email}")
    public String hpBookPage(@PathVariable String hp_name,
            @PathVariable String email, Model model, HttpSession httpSession){

        // 로그인 되어있는지 검사부터 할께용
        if(httpSession.getAttribute("user") != null){
            System.out.println("주차장 이름 : " + hp_name + "    사용자 이메일 : " + email);
            System.out.println("checkHPBookBtn : " + hpService.checkHPBookBtn(email, hp_name));
            model.addAttribute("checkHPBookBtn", hpService.checkHPBookBtn(email, hp_name));
            model.addAttribute("parking", hpService.hpBookPage(hp_name));

            // 북마크 검사
            HP_bookmark hp_chkBookmark = new HP_bookmark();
            hp_chkBookmark.setEmail(email);
            hp_chkBookmark.setHp_name(hp_name);
            System.out.println("checkBookmark return : " + hpService.checkBookmark(hp_chkBookmark));
            model.addAttribute("checkBookmark", hpService.checkBookmark(hp_chkBookmark));
            return "/HP/hpBook";
        } else {
            System.out.println("HPController : 로그인되어 있지 않아 로그인 페이지로 요청했습니다.");
            return "/index/login";
        }
    }
}
