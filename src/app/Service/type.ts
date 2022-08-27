export interface Day{
    txn_date : String | null;
    new_case : number | null;
    total_case : number | null;
    new_case_excludeabroad : number | null;
    total_case_excludeabroad : number | null;
    new_death : number | null;
    total_death : number | null;
    new_recovered : number | null;
    total_recovered : number | null;
    update_date : String | null;
}
export interface Country {
    txn_date: String | null;
    new_case: number | null;
    total_case: number | null;
    new_case_excludeabroad: number | null;
    total_case_excludeabroad: number | null;
    new_death: number | null;
    total_death: number | null;
    update_date: String | null;
    province: String | null;
}