package com.fivekm_home.charge.domain.USER;

import lombok.Data;

import java.util.Date;

@Data
public class History {
    private String scs_name;
    private String hp_name;
    private String road_addr;
    private Date start_date;
    private Date end_date;
    private int price;
    private Date scs_pay_date;
    private Date hp_pay_date;
    private String email;
    private int used_time;
    private String find_start_date;
    private String find_end_date;
}
