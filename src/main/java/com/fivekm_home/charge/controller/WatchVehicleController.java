package com.fivekm_home.charge.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/*")
public class WatchVehicleController {

    @GetMapping("/watchVehicle")
    public String watchVehicle(Model model){
        return "/watchVehicle/WV";
    }

}
