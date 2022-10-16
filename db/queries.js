exports.queryList = {
  GET_STORE_LIST_QUERY : '  SELECT store_id, store_name, store_code, craeted_on, craeted_by FROM bms.store',
  SAVE_STORE_QUERY : 'INSERT INTO bms.store (store_name, store_code, craeted_on, craeted_by, address) VALUES($1, $2, $3, $4, $5)',
  
  GET_BOOK_LIST_QUERY : 'SELECT book_id, book_title, book_description, book_author, book_publisher, book_pages, store_code FROM bms.book',
   
  GET_BOOK_DETAILS_QUERY : `SELECT book_id, book_title, book_description, book_author, book_publisher, book_pages
                          , book.store_code, store.store_name , store.address  FROM bms.book INNER JOIN  bms.store ON  book.store_code = store.store_code 
                          WHERE BOOK_ID =$1`,
  
  SAVE_BOOK_QUERY : `INSERT INTO bms.book
        (book_title, book_description, book_author, book_publisher, book_pages, store_code, craeted_on, craeted_by)
          VALUES($1, $2, $3, $4, $5 , $6 , $7 , $8) `,

  UPDATE_BOOK_QUERY : `
    UPDATE bms.book SET book_title=$1, book_description=$2, book_author=$3,
    book_publisher=$4, book_pages=$5, store_code=$6, craeted_by=$7, craeted_on=$8
    WHERE book_id=$9
  `,
  DELETE_BOOK_QUERY : ` DELETE FROM BMS.BOOK WHERE BOOK_ID=$1 `,

  AUDIT_QUERY : `  INSERT INTO bms.app_audit(audit_action, audit_data, audit_status,audit_error, audit_by, audit_on  ) VALUES($1, $2, $3, $4, $5, $6)
  `,

  GET_USER_LIST_QUERY : ` SELECT USER_ID, USERNAME, EMAIL, USER_TYPE_CODE, FULL_NAME, ACTIVE FROM BMS.APP_USER    `,

  IS_USER_EXISTS_QUERY : ` SELECT COUNT(USER_ID) FROM BMS.APP_USER WHERE LOWER(USERNAME) =LOWER($1) OR LOWER(EMAIL)=LOWER($2) `,

  SAVE_USER_QUERY : ` INSERT INTO BMS.APP_USER (USERNAME, PASSWORD, EMAIL, USER_TYPE_CODE, FULL_NAME, CREATED_ON, CREATED_BY) VALUES($1, $2, $3, $4, $5, $6, $7)  returning *  `,

  LOGIN_QUERY : `  SELECT USER_ID, USERNAME, PASSWORD , EMAIL, USER_TYPE_CODE, FULL_NAME, ACTIVE FROM BMS.APP_USER WHERE LOWER(USERNAME) = LOWER($1) AND ACTIVE = 1 `,





}




