package com.fivekm_home.charge.domain.USER;

import lombok.Data;

@Data
public class UserHistoryCriteria {
    private String email;
    private int page; // 선택한 페이지
    private int perPageNum; // 선택한 페이지에 보여줄 갯수
    private int rowStart;
    private int rowEnd;
    private String find_start_date;
    private String find_end_date;

    public UserHistoryCriteria() {
        this.page = 1;
        this.perPageNum = 3;
    }

    public void setPage(int page) {
        if (page <= 0) {
            this.page = 1;
            return;
        }
        this.page = page;
    }

    public void setPerPageNum(int perPageNum) {
        if (perPageNum <= 0 || perPageNum > 100) {
            this.perPageNum = 3;
            return;
        }
        this.perPageNum = perPageNum;
    }

    public int getPage() {
        return page;
    }

    public int getPageStart() {
        return (this.page - 1) * perPageNum;
    }

    public int getPerPageNum() {
        return this.perPageNum;
    }

    public int getRowStart() {
        rowStart = ((page - 1) * perPageNum) + 1;
        return rowStart;
    }

    public int getRowEnd() {
        rowEnd = rowStart + perPageNum - 1;
        return rowEnd;
    }
}
