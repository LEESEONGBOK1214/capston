package com.fivekm_home.charge.mapper;

import com.fivekm_home.charge.domain.OTHER.MembersDate;
import com.fivekm_home.charge.domain.OTHER.PaycountHP;
import com.fivekm_home.charge.domain.OTHER.PaycountSCS;

import java.util.ArrayList;

public interface OtherMapper {
    ArrayList<MembersDate> membersDate();
    ArrayList<PaycountSCS> rankingSCS();
    ArrayList<PaycountHP> rankingHP();

}
