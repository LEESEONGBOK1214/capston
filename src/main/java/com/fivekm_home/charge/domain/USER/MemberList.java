package com.fivekm_home.charge.domain.USER;

import com.fivekm_home.charge.domain.USER.user.Role;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class MemberList {
    private String email;
    private String name;
    private String phone;
    private String picture;
    private Role role;
    private Date created_date;
}
